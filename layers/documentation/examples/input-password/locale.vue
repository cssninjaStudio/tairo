<template>
  <div class="max-w-md">
    <AddonInputPassword
      v-model="password"
      label="Mot de passe"
      :locale="fr"
    />
  </div>
</template>

<script lang="ts" setup>
const password = ref('')

const fr = () => import('@zxcvbn-ts/language-fr')
</script>
