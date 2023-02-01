import type { InjectionKey } from 'vue'
import type { Project } from '@/types/index'

export const createWizardContext = () => {
  const steps = ref([
    {
      id: 1,
      name: 'Project type',
      title: 'Select project type',
      subtitle: 'Select the type of project you want to create',
    },
    {
      id: 2,
      name: 'Project info',
      title: 'What is this project about?',
      subtitle: 'Manage better by adding all relevant project information',
    },
    {
      id: 3,
      name: 'Project details',
      title: 'Add more details',
      subtitle: 'Add useful details to your project. You can edit this later',
    },
    {
      id: 4,
      name: 'Project files',
      title: 'Add files to this project',
      subtitle:
        'Or you can skip this step. You can always add more files later',
    },
    {
      id: 5,
      name: 'Team members',
      title: 'Who will be working on this project?',
      subtitle: 'Start by adding members to your team',
    },
    {
      id: 6,
      name: 'Project tools',
      title: 'What tools will you be using?',
      subtitle: "Choose a set of tools that you'll be using in this project",
    },
    {
      id: 7,
      name: 'Finish',
      title: 'Make sure it looks good',
      subtitle:
        'You can go back to previous steps if you need to edit anything',
    },
  ])
  const totalSteps = ref(7)
  const currentStep = ref(1)
  const progress = computed(() => (currentStep.value / totalSteps.value) * 100)
  const project = reactive<Project>({
    type: undefined,
    name: '',
    description: '',
    startDate: undefined,
    endDate: undefined,
    customer: {
      name: undefined,
      logo: undefined,
      location: undefined,
    },
    team: [],
    tools: [],
    budget: '< 5K',
  })
  const loading = ref(false)
  const preview = ref(false)
  const complete = ref(false)
  const nextStep = () => {
    if (currentStep.value < totalSteps.value) currentStep.value++
  }
  const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--
  }
  const goToStep = (step: number) => {
    const router = useRouter()
    if (step === 1) {
      router.push('/wizard')
    } else {
      router.push(`/wizard/step-${step}`)
    }
  }
  const completeWizard = () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      complete.value = true
    }, 1200)
  }

  const wizardContext = {
    steps,
    totalSteps,
    currentStep,
    progress,
    project,
    loading,
    preview,
    complete,
    nextStep,
    prevStep,
    goToStep,
    completeWizard,
  }
  provide(wizardContextInjectionKey, wizardContext)

  return wizardContext
}

type WizardContext = ReturnType<typeof createWizardContext>
const wizardContextInjectionKey = Symbol(
  'wizard-context',
) as InjectionKey<WizardContext>

export const useWizardContext = () => {
  const wizardContext = inject(wizardContextInjectionKey)
  if (!wizardContext) throw new Error('WizardContext not found')

  return wizardContext
}
