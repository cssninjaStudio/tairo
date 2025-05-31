<script lang="ts" setup>
const password = ref('')

const fr = () => import('@zxcvbn-ts/language-fr')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Mot de passe">
      <LazyAddonInputPassword
        v-model="password"
        :locale="fr"
      />
    </BaseField>
  </div>
</template>
