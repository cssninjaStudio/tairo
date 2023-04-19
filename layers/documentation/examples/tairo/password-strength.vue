<template>
  <div class="max-w-md">
    <div class="relative mb-2">
      <label class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
        >Password strength</label
      >

      <BaseInput
        v-model="password"
        :type="showPasswordField ? 'password' : 'text'"
        shape="curved"
        placeholder="Password"
      >
        <template #action>
          <button
            class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"
            @click.prevent="showPasswordField = !showPasswordField"
          >
            <div
              class="relative flex h-full w-full items-center justify-center"
              :data-tooltip="`${showPasswordField ? 'Show' : 'Hide'} password`"
            >
              <Icon
                :name="showPasswordField ? 'mdi:eye-outline' : 'mdi:eye-off-outline'"
                class="h-5 w-5"
              />
            </div>
          </button>
        </template>
      </BaseInput>
    </div>

    <TairoPasswordStrength :value="password" :min-length="8" />
  </div>
</template>

<script setup lang="ts">
const password = ref('c-a_a"r"fafzf')
const showPasswordField = ref(false)
</script>
