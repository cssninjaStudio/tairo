<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: string
    minLength?: number
    goodLength?: number
  }>(),
  {
    value: '',
    minLength: 8,
    goodLength: 20,
  },
)

const hasUpperChar = computed(() => /[A-Z]/.test(props.value) ?? false)
const hasLowerChar = computed(() => /[a-z]/.test(props.value) ?? false)
const hasSpecialChar = computed(
  () => /[!"#$%&\'()*+,-.\/:;<=>?@[\\\]\^_`{\|}~]/.test(props.value) ?? false,
)
const hasNumberChar = computed(() => /[0-9]/.test(props.value) ?? false)
const hasMinLength = computed(
  () => props.value.length >= props.minLength ?? false,
)
const hasGoodLength = computed(
  () => props.value.length >= props.goodLength ?? false,
)
const strength = computed(() => {
  if (!hasMinLength.value) {
    return 0
  }

  return (
    Number(hasUpperChar.value) +
    Number(hasLowerChar.value) +
    Number(hasSpecialChar.value) +
    Number(hasNumberChar.value) +
    Number(hasMinLength.value) +
    Number(hasGoodLength.value)
  )
})

const checks = computed(() => [
  {
    label: `Contains minimum ${props.minLength} characters`,
    valid: hasMinLength.value,
  },
  {
    label: `Contains at least ${props.goodLength} characters`,
    valid: hasGoodLength.value,
  },
  {
    label: 'Contains lowercase characters',
    valid: hasLowerChar.value,
  },
  {
    label: 'Contains uppercase characters',
    valid: hasUpperChar.value,
  },
  {
    label: 'Contains numbers',
    valid: hasNumberChar.value,
  },
  {
    label: 'Contains special characters',
    valid: hasSpecialChar.value,
  },
])
</script>

<template>
  <div class="group/password-strength relative cursor-pointer">
    <div
      class="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute left-0 top-4 z-20 rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-hover/password-strength:pointer-events-auto group-hover/password-strength:opacity-100"
    >
      <ul class="flex flex-col gap-4">
        <li
          v-for="check in checks"
          :key="check.label"
          class="flex items-center justify-between gap-6"
        >
          <span
            class="grow text-xs dark:text-slate-400"
            :class="[
              !check.valid && 'dark:text-slate-350 font-semibold',
              check.valid && 'dark:text-slate-200',
            ]"
          >
            {{ check.label }}
          </span>
          <span class="w-7">
            <Icon
              v-if="check.valid"
              name="ion:checkmark-circle-outline"
              class="text-success-400 dark:text-success-500 h-4 w-4"
            />
            <Icon
              v-else
              name="ion:close-circle-outline"
              class="text-danger-400 dark:text-danger-500 h-4 w-4"
            />
          </span>
        </li>
      </ul>
    </div>
    <div class="-mx-1 flex">
      <template v-for="check of checks" :key="check.label">
        <div class="w-1/5 px-1">
          <div
            class="h-2 rounded-xl transition-colors"
            :class="check.valid ? 'bg-success-500' : 'bg-danger-500'"
            :data-tooltip="check.label.replace('Contains', '')"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>
