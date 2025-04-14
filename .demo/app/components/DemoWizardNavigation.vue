<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

const {
  steps,
  currentStep,
  progress,
  goToStep,
} = useMultiStepForm<
  Project,
  ProjectStepData
>()

const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}
onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div class="dark:bg-muted-950 absolute start-0 top-0 h-16 w-full bg-white">
    <div class="relative flex h-16 w-full items-center justify-between px-4">
      <div class="flex items-center">
        <NuxtLink
          to="/dashboards"
          class="border-muted-200 dark:border-muted-800 flex w-14 items-center justify-center border-r pe-6"
        >
          <TairoLogo class="text-primary-600 h-8 shrink-0" />
        </NuxtLink>
        <div v-if="currentStep" class="hidden items-center gap-2 ps-6 font-sans sm:flex">
          <p class="text-muted-500 dark:text-muted-400">
            Step {{ currentStep.id + 1 }}:
          </p>
          <h2 class="text-muted-800 font-semibold dark:text-white">
            {{ currentStep.meta.name }}
          </h2>
        </div>
        <div ref="target" class="relative hidden sm:block">
          <button
            type="button"
            class="flex size-10 items-center justify-center"
            @click="openDropdown"
          >
            <Icon
              name="lucide:chevron-down"
              class="text-muted-400 size-4 transition-transform duration-300"
              :class="open ? 'rotate-180' : ''"
            />
          </button>
          <div
            class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-8 z-20 w-52 rounded-xl border bg-white p-2 shadow-xl transition-all duration-300"
            :class="
              open
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 pointer-events-none translate-y-1'
            "
          >
            <div class="space-y-1">
              <button
                v-for="step in steps"
                :key="step.id"
                type="button"
                class="cursor-pointer hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-2 rounded-lg px-3 py-2 font-sans disabled:cursor-not-allowed disabled:opacity-70"
                @click="
                  () => {
                    open = false
                    goToStep(step)
                  }
                "
              >
                <p class="text-muted-500 dark:text-muted-400 text-xs">
                  Step {{ step.id + 1 }}:
                </p>
                <h4 class="text-muted-800 text-xs font-medium dark:text-white">
                  {{ step.meta.name }}
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-4">
        <BaseThemeToggle />
        <DemoAccountMenu horizontal />
      </div>
      <div class="absolute inset-x-0 bottom-0 z-10 w-full">
        <BaseProgress
          :model-value="progress"
          size="xs"
          rounded="full"
          variant="primary"
        />
      </div>
    </div>
  </div>
</template>
