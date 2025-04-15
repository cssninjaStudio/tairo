<script lang="ts" setup>
import type { AddonInputPassword } from '#components'

const passwordRef = ref<InstanceType<typeof AddonInputPassword>>()
const hasError = computed(() => !!passwordRef.value?.validation?.feedback?.warning || !!passwordRef.value?.validation?.feedback?.suggestions?.length)
const loading = computed(() => passwordRef.value?.loading)

const username = ref('superuser')
const email = ref('contact@acme.com')
const password = ref('contact@acme.com')
const useUserInputs = ref(true)

const userInputs = computed(() => useUserInputs.value ? [username.value, email.value] : [])
</script>

<template>
  <div class="grid grid-cols-2 gap-4 md:max-w-lg">
    <BaseField label="Username">
      <TairoInput
        v-model="username"
        icon="lucide:user"
      />
    </BaseField>

    <BaseField label="Email">
      <TairoInput
        v-model="email"
        icon="lucide:mail"
      />
    </BaseField>

    <BaseField
      v-slot="{ inputAttrs }"
      label="Password"
      :state="loading ? 'loading' : hasError ? 'error' : 'idle'"
      :error="passwordRef?.validation?.feedback?.warning ?? ''"
      class="col-span-2"
    >
      <LazyAddonInputPassword
        ref="passwordRef"
        v-model="password"
        icon="lucide:lock"
        :user-inputs="userInputs"
        show
        touched
        v-bind="inputAttrs"
      />
    </BaseField>

    <div class="mt-2">
      <BaseSwitchThin
        v-model="useUserInputs"
        label="Check other inputs"
      />
    </div>
  </div>
</template>
