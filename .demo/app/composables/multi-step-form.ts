import type { InjectionKey, MaybeRefOrGetter, UnwrapRef } from 'vue'
import { klona } from 'klona'

type WithId<T> = T & { id: number }

export interface StepForm<
  DATA extends Record<string, any> = Record<string, any>,
  META extends Record<string, any> = Record<string, any>,
> {
  meta: META
  to: string

  validate?: (ctx: MultiStepFormContext<DATA, META>) => Promise<boolean | void> | boolean | void
}

export interface MultiStepFormConfig<
  DATA extends Record<string, any> = Record<string, any>,
  META extends Record<string, any> = Record<string, any>,
> {
  initialState: MaybeRefOrGetter<DATA>
  steps: StepForm<DATA, META>[]

  onBeforeSubmit?: (data: DATA, ctx: MultiStepFormContext<DATA, META>) => Promise<void> | void
  onSubmit?: (data: DATA, ctx: MultiStepFormContext<DATA, META>) => Promise<void> | void
  onError?: (
    error: any,
    ctx: MultiStepFormContext<DATA, META>,
  ) => Promise<void> | void
}

export interface MultiStepFormContext<
  DATA extends Record<string, any> = Record<string, any>,
  META extends Record<string, any> = Record<string, any>,
> {
  steps: ComputedRef<WithId<StepForm<DATA, META>>[]>
  totalSteps: ComputedRef<number>
  currentStepId: ComputedRef<number>
  currentStep: ComputedRef<WithId<StepForm<DATA, META>> | undefined>
  progress: ComputedRef<number>
  isLastStep: ComputedRef<boolean>
  data: Ref<UnwrapRef<DATA>>
  errors: Readonly<Ref<{
    message: string
    fields: Record<string, string | undefined>
  }>>
  loading: Readonly<Ref<boolean>>
  complete: Readonly<Ref<boolean>>

  getStep: (id?: number) => WithId<StepForm<DATA, META>> | undefined
  getNextStep: (id?: number) => WithId<StepForm<DATA, META>> | undefined
  getPrevStep: (id?: number) => WithId<StepForm<DATA, META>> | undefined
  goToStep: (step?: WithId<StepForm<DATA, META>>) => Promise<void>
  reset: (initialState?: MaybeRefOrGetter<DATA>) => void
  setErrorMessage: (message?: string) => void
  setFieldError: (field: string, message?: string) => void
  resetFieldError: (field?: string | string[]) => void

  validateStep: (step?: WithId<StepForm<DATA, META>>) => Promise<boolean>
  handleSubmit: () => Promise<void>
  checkPreviousSteps: () => Promise<void>
}

const injectionKey = Symbol('multi-step-form-context') as InjectionKey<MultiStepFormContext>

/**
 * This function is used to create a multi-step form context.
 * It allows you to create a multi-step form with rules and steps and
 * track the current step, the progress, the data, etc.
 *
 * @see .demo/pages/wizard.vue
 * @see .demo/pages/layouts/invite.vue
 * @see .demo/pages/layouts/receive.vue
 * @see .demo/pages/layouts/send.vue
 */
export function provideMultiStepForm<
  DATA extends Record<string, any> = Record<string, any>,
  META extends Record<string, any> = Record<string, any>,
>(rules: MultiStepFormConfig<DATA, META>): MultiStepFormContext<DATA, META> {
  const data = ref<DATA>(klona(toValue(rules.initialState)))
  const errors = ref<{
    message: string
    fields: Record<string, string | undefined>
  }>({
    message: '',
    fields: {},
  })
  const router = useRouter()

  const loading = ref(false)
  const complete = ref(false)

  const steps = computed(() => rules.steps.map((step, id) => ({ ...step, id })))
  const totalSteps = computed(() => steps.value.length)
  const currentStepId = computed(() => steps.value.find(
    step => step.to === router.currentRoute.value.path,
  )?.id ?? 0)
  const progress = computed(
    () => ((currentStepId.value + 1) / totalSteps.value) * 100,
  )
  const currentStep = computed(() => steps.value[currentStepId.value])
  const isLastStep = computed(() => currentStepId.value === totalSteps.value - 1)

  const context: MultiStepFormContext<DATA, META> = {
    steps,
    totalSteps,
    currentStepId,
    currentStep,
    isLastStep,
    data: data as Ref<UnwrapRef<DATA>>,
    progress,
    errors: readonly(errors),
    loading: readonly(loading),
    complete: readonly(complete),
    getStep,
    getNextStep,
    getPrevStep,
    goToStep,
    reset,
    setErrorMessage,
    setFieldError,
    resetFieldError,
    validateStep,
    handleSubmit,
    checkPreviousSteps,
  }

  function getNextStep(id = currentStepId.value) {
    return getStep(id + 1)
  }
  function getPrevStep(id = currentStepId.value) {
    return getStep(id - 1)
  }
  function getStep(id = currentStepId.value) {
    return steps.value[id]
  }
  async function goToStep(step?: StepForm<DATA, META>) {
    if (step) {
      await router.push(step.to)
    }
  }

  function setFieldError(field: string, error?: string) {
    errors.value.fields[field] = error
  }
  function resetFieldError(field?: string | string[]) {
    if (Array.isArray(field)) {
      field.forEach((key) => {
        errors.value.fields[key] = undefined
      })
    }
    else if (field) {
      errors.value.fields[field] = undefined
    }
    else {
      errors.value.fields = {}
    }
  }
  function setErrorMessage(error: string = '') {
    errors.value.message = error
  }

  async function validateStep(step = currentStep.value) {
    if (step?.validate) {
      try {
        const success = await step.validate(context)
        const hasErrors = Object.values(errors.value.fields).filter(Boolean).length > 0 || errors.value.message

        if (success === false || hasErrors) {
          return false
        }
      }
      catch (error) {
        if (rules.onError) {
          await rules.onError(error, context)
        }
        return false
      }
    }

    return true
  }

  function reset(initialState = rules.initialState) {
    data.value = klona(toValue(initialState)) as UnwrapRef<DATA>
    loading.value = false
    complete.value = false
    errors.value = {
      message: '',
      fields: {},
    }
  }

  async function checkPreviousSteps() {
    let current = 0

    while (current < currentStepId.value) {
      const step = getStep(current)
      if (!step)
        break

      if (!await validateStep(step)) {
        await goToStep(step)
        return
      }

      current++
    }
  }

  async function handleSubmit() {
    if (loading.value)
      return

    loading.value = true
    resetFieldError()

    if (!await validateStep()) {
      loading.value = false
      return
    }

    // submit the form otherwise
    try {
      if (rules.onBeforeSubmit) {
        await rules.onBeforeSubmit(data.value as DATA, context)
      }

      const nextStep = getNextStep()

      // go to the next step if there is one
      if (nextStep) {
        await goToStep(nextStep)
        return
      }

      if (rules.onSubmit) {
        await rules.onSubmit(data.value as DATA, context)
      }
      complete.value = true
    }
    catch (error) {
      if (rules.onError) {
        await rules.onError(error, context)
      }
    }
    finally {
      loading.value = false
    }
  }

  provide(injectionKey, context as any)

  return context
}

export function useMultiStepForm<
  DATA extends Record<string, any> = Record<string, any>,
  META extends Record<string, any> = Record<string, any>,
>() {
  const context = inject(
    injectionKey as InjectionKey<
      MultiStepFormContext<DATA, META>
    >,
    null,
  )
  if (!context) {
    throw new Error(
      'MultiStepForm: no context found, did you forget to call provideMultiStepForm?',
    )
  }

  return context
}
