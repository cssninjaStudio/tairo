<template>
  <form class="max-w-md" @submit.prevent="onSubmit">
    <AddonInputPhone
      ref="inputRef"
      v-model="phone"
      placeholder="Type to try validation"
      :error="error"
      @validation="onValidate"
    />
  </form>
</template>

<script lang="ts" setup>
import { AddonInputPhone } from '#components'

const phone = ref('012345')
const error = ref('')

const inputRef = ref<InstanceType<typeof AddonInputPhone>>()

function onSubmit() {
  if (!inputRef.value?.validation?.valid) {
    error.value = 'Please enter a valid phone number'
    return
  }

  alert(`Selected: ${inputRef.value?.currentCountry?.label}`)
}

function onValidate(state: { valid: boolean, touched: boolean, error: string }) {
  if (!state.error) {
    error.value = ''
    return
  }
  switch (state.error) {
    case 'INVALID_COUNTRY':
      error.value = 'Please select a country'
      break
    case 'NO_POSSIBLE_COUNTRIES':
      error.value = 'No possible countries for this phone number'
      break
    case 'PHONE_NUMBER_NOT_POSSIBLE':
      error.value = 'This phone number is not valid for the selected country'
      break
    case 'NOT_A_NUMBER':
    case 'TOO_SHORT':
    case 'TOO_LONG':
    default:
      error.value = 'Please enter a valid phone number'
      break
  }
}
</script>
