<script lang="ts" setup>
import type { ZxcvbnResult } from '@zxcvbn-ts/core'
import { AddonInputPassword } from '#components'

const password = ref('qwerty')
const error = ref('')

const inputRef = ref<InstanceType<typeof AddonInputPassword>>()

function onSubmit() {
  const score = inputRef.value?.validation?.score ?? 0
  if (score < 5) {
    // eslint-disable-next-line no-alert
    alert(`Please enter a stronger password, current score: ${score}/5`)
    return
  }

  // eslint-disable-next-line no-alert
  alert(`Selected: ${inputRef.value?.validation?.password} with score ${score}`)
}

function onValidate(state: { validation: ZxcvbnResult | null, touched: boolean }) {
  error.value = state.validation?.feedback.warning ?? ''
  if (state.validation && state.validation.score < 5) {
    error.value = 'Please enter a stronger password'
  }
}
</script>

<template>
  <form
    class="max-w-md"
    autocomplete="off"
    @submit.prevent="onSubmit"
  >
    <BaseField
      label="Password"
      :state="error ? 'error' : 'idle'"
      :error="error"
      v-slot="{ inputAttrs }"
    >
      <AddonInputPassword
        ref="inputRef"
        v-model="password"
        placeholder="Type to try validation"
        v-bind="inputAttrs"
        @validation="onValidate"
      />
    </BaseField>
  </form>
</template>
