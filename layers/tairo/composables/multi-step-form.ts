import type { MaybeRefOrGetter } from '@vueuse/core'
import { toRef } from '@vueuse/core'
import copy from 'fast-copy'
import type { InjectionKey, UnwrapRef } from 'vue'

export interface StepForm<T extends Record<string, any> = Record<string, any>> {
  meta: T
  to: string

  onBeforeEnter?: () => void
  validate?: () => boolean
}

export interface MultiStepFormConfig<
  T extends Record<string, any> = Record<string, any>,
  D extends Record<string, any> = Record<string, any>,
> {
  initialState: MaybeRefOrGetter<T>
  steps: StepForm<D>[]

  onSubmit?: (data: T, ctx: MultiStepFormContext<T, D>) => Promise<void> | void

  onError?: (
    error: any,
    ctx: MultiStepFormContext<T, D>,
  ) => Promise<void> | void
}

/**
 * This function is used to create a multi-step form context.
 * It allows you to create a multi-step form with rules and steps and
 * track the current step, the progress, the data, etc.
 *
 * @see .demo/pages/wizard.vue
 */
export function createMultiStepForm<
  T extends Record<string, any>,
  D extends Record<string, any>,
>(rules: MultiStepFormConfig<T, D>) {
  const initialState = toRef(rules.initialState)

  const steps = computed(() => rules.steps.map((step, id) => ({ ...step, id })))
  const router = useRouter()
  const totalSteps = computed(() => steps.value.length)
  const currentStep = computed(() => {
    const step = steps.value.find(
      (step) => step.to === router.currentRoute.value.path,
    )?.id

    if (typeof step !== 'number') return 0

    return step > -1 ? step : 0
  })
  const progress = computed(
    () => ((currentStep.value + 1) / totalSteps.value) * 100,
  )
  const data = ref<T>(copy(initialState.value))
  const loading = ref(false)
  const preview = ref(false)
  const complete = ref(false)

  const multiStepContext = {
    steps,
    totalSteps,
    currentStep,
    progress,
    data,
    loading,
    preview,
    complete,
    getStep,
    getNextStep,
    getPrevStep,
    goToStep,
    reset,
    handleSubmit,
  }

  function getNextStep() {
    if (currentStep.value + 1 >= totalSteps.value) {
      return null
    }
    return getStep(currentStep.value + 1)
  }
  function getPrevStep() {
    if (currentStep.value - 1 < 0) {
      return null
    }
    return getStep(currentStep.value - 1)
  }
  function getStep(step: number) {
    return steps.value[step]
  }
  function goToStep(step?: (typeof steps.value)[number]) {
    if (step) {
      router.push(step.to)
    }
  }

  function reset() {
    data.value = copy(initialState.value) as UnwrapRef<T>
    preview.value = false
    complete.value = false
  }

  async function handleSubmit() {
    if (loading.value) return

    loading.value = true

    try {
      if (rules.onSubmit) {
        await rules.onSubmit(data.value as T, multiStepContext)
      }
      complete.value = true
    } catch (error) {
      if (rules.onError) {
        await rules.onError(error, multiStepContext)
      }
      //
    } finally {
      loading.value = false
    }
  }

  // @ts-ignore
  provide(multiStepFormContextInjectionKey, multiStepContext)

  return multiStepContext
}

class Wrapper<T extends Record<string, any>, D extends Record<string, any>> {
  // wrapped has no explicit return type so we can infer it
  wrapped(e: MultiStepFormConfig<T, D>) {
    return createMultiStepForm<T, D>(e)
  }
}

type MultiStepFormContext<
  T extends Record<string, any> = Record<string, any>,
  D extends Record<string, any> = Record<string, any>,
> = ReturnType<Wrapper<T, D>['wrapped']>

const multiStepFormContextInjectionKey = Symbol(
  'multi-step-form-context',
) as InjectionKey<MultiStepFormContext>

export function useMultiStepForm<
  T extends Record<string, any>,
  D extends Record<string, any>,
>() {
  const context = inject(
    multiStepFormContextInjectionKey as InjectionKey<
      MultiStepFormContext<T, D>
    >,
  )
  if (!context) {
    throw new Error(
      'MultiStepForm: no context found, did you forget to call createMultiStepForm?',
    )
  }

  return context
}
