<template>
  <div class="grid grid-cols-2 gap-4 md:max-w-lg">
    <BaseInput
      v-model="username"
      label="Username"
      icon="lucide:user"
    />

    <BaseInput
      v-model="email"
      label="Email"
      icon="lucide:mail"
    />

    <div class="col-span-2">
      <AddonInputPassword
        ref="passwordRef"
        v-model="password"
        :error="hasError"
        icon="lucide:lock"
        label="Password"
        :user-inputs="userInputs"
        show
        touched
      />
    </div>

    <div class="mt-2">
      <BaseSwitchThin
        v-model="useUserInputs"
        label="Check other inputs"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AddonInputPassword } from '#components'

const passwordRef = ref<InstanceType<typeof AddonInputPassword>>()
const hasError = computed(() => !!passwordRef.value?.validation?.feedback?.warning || !!passwordRef.value?.validation?.feedback?.suggestions?.length)

const username = ref('superuser')
const email = ref('contact@acme.com')
const password = ref('contact@acme.com')
const useUserInputs = ref(true)

const userInputs = computed(() => useUserInputs.value ? [username.value, email.value] : [])
</script>
