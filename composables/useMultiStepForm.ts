import type { InjectionKey } from 'vue'

export interface StepForm<T extends Record<string, any> = Record<string, any>> {
  data: T
  path: string

  onBeforeEnter?: () => void
  validate?: () => boolean
}

export interface MultiStepFormConfig<
  T extends Record<string, any> = Record<string, any>,
  D extends Record<string, any> = Record<string, any>,
> {
  state: T
  steps: StepForm<D>[]
}

export function createMultiStepForm<
  T extends Record<string, any>,
  D extends Record<string, any>,
>(rules: MultiStepFormConfig<T, D>) {
  const steps = computed(() => rules.steps.map((step, id) => ({ ...step, id })))
  const router = useRouter()
  const totalSteps = computed(() => steps.value.length)
  const currentStep = computed(() => {
    const step = steps.value.find(
      (step) => step.path === router.currentRoute.value.path,
    )?.id

    if (typeof step !== 'number') return 0

    return step > -1 ? step : 0
  })
  const progress = computed(
    () => ((currentStep.value + 1) / totalSteps.value) * 100,
  )
  const project = reactive<T>(rules.state)
  const loading = ref(false)
  const preview = ref(false)
  const complete = ref(false)
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
      router.push(step.path)
    }
  }

  const completeWizard = () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      complete.value = true
    }, 1200)
  }

  const multiStepContext = {
    steps,
    totalSteps,
    currentStep,
    progress,
    project,
    loading,
    preview,
    complete,
    getStep,
    getNextStep,
    getPrevStep,
    goToStep,
    completeWizard,
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
