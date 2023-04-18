<template>
  <div>
    <BaseButton @click="showSuccess">Show Toaster</BaseButton>
  </div>
</template>

<script setup lang="ts">
const toaster = useToaster()

const showSuccess = () => {
  toaster.show({
    title: 'Success',
    message: `Message has been sent!`,
    color: 'success',
    icon: 'ph:check',
    closable: true,
  })
}
</script>
