<script setup lang="ts">
definePageMeta({
  title: 'API Tokens',
  preview: {
    title: 'API Tokens',
    description: 'For settings management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-settings-tokens.png',
    srcDark: '/img/screens/layouts-settings-tokens-dark.png',
    order: 37,
    new: true,
  },
})
</script>

<template>
  <div>
    <DemoPlaceholderMinimal
      title="You currently have no API tokens"
      description="If you need to connect to your backend, you can create an API token to be able to connect to our services from an external app."
    >
      <div class="mt-3 flex justify-center">
        <BaseButton
          rounded="md"
          color="primary"
          class="w-40"
        >
          Create Token
        </BaseButton>
      </div>
    </DemoPlaceholderMinimal>
  </div>
</template>
