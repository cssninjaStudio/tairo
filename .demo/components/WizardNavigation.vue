<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'
const { steps, currentStep, progress, preview, goToStep } = useMultiStepForm<
  Project,
  ProjectStepData
>()

const currentStepName = computed(() => {
  const stepData = steps.value.find((step) => step.id === currentStep.value)
  return stepData?.data?.name
})

const target = ref(null)
const open = ref(false)

const openDropdown = () => {
  open.value = true
}
onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div class="absolute top-0 left-0 h-16 w-full bg-white dark:bg-muted-800">
    <div class="relative h-16 w-full flex items-center justify-between px-4">
      <div class="flex items-center">
        <NuxtLink
          to="/dashboards"
          class="w-14 flex items-center justify-center pr-6 border-r border-muted-200 dark:border-muted-700"
        >
          <IconLogo class="text-primary-600 h-10 shrink-0" />
        </NuxtLink>
        <div class="hidden sm:flex items-center gap-2 pl-6 font-sans">
          <p class="text-muted-500 dark:text-muted-400">
            Step {{ currentStep + 1 }}:
          </p>
          <h2 class="font-semibold text-muted-800 dark:text-white">
            {{ currentStepName }}
          </h2>
        </div>
        <div ref="target" class="hidden sm:block relative">
          <button
            type="button"
            class="h-10 w-10 flex items-center justify-center"
            @click="openDropdown"
          >
            <Icon
              name="lucide:chevron-down"
              class="w-4 h-4 text-muted-400 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </button>
          <div
            class="absolute z-20 top-8 left-0 w-52 p-2 rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 transition-all duration-300"
            :class="
              open
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 pointer-events-none translate-y-1'
            "
          >
            <div class="space-y-1">
              <button
                v-for="step in steps"
                type="button"
                class="w-full flex items-center gap-2 font-sans py-2 px-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700 disabled:opacity-70 disabled:cursor-not-allowed"
                @click="
                  () => {
                    open = false
                    goToStep(step)
                  }
                "
              >
                <p class="text-xs text-muted-500 dark:text-muted-400">
                  Step {{ step.id + 1 }}:
                </p>
                <h4 class="text-xs font-medium text-muted-800 dark:text-white">
                  {{ step.data.name }}
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-4">
        <BaseThemeToggle />
        <NavigationSidebarAccountMenu horizontal />
      </div>
      <div class="absolute inset-x-0 bottom-0 z-10 w-full">
        <BaseProgress :value="progress" size="xs" shape="full" />
      </div>
    </div>
  </div>
</template>
