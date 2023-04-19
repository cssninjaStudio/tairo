<template>
  <div>
    <div class="max-w-md">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 sm:col-span-6">
          <BaseInput v-model="toast.title" label="Title" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseInput v-model="toast.message" label="Message" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="toast.color" label="Color">
            <option value="primary">Primary</option>

            <option value="success">Success</option>

            <option value="info">Info</option>

            <option value="warning">Warning</option>

            <option value="danger">Danger</option>

            <option value="muted">Muted</option>
          </BaseSelect>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="toast.icon" label="Icon">
            <option value="lucide:check">Check icon</option>

            <option value="lucide:x">Close icon</option>

            <option value="lucide:alert-triangle">Warning icon</option>

            <option value="lucide:alert-octagon">Danger icon</option>

            <option value="lucide:info">Info icon</option>
          </BaseSelect>
        </div>

        <div class="col-span-12">
          <BaseCheckbox v-model="toast.closable" label="Closeable toast?" color="primary" />
        </div>

        <div class="col-span-12">
          <BaseButton class="w-full" color="primary" @click="showToast">Show Toaster</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = reactive({
  title: 'Success',
  message: `Message has been sent!`,
  color: 'success' as 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'muted',
  icon: 'lucide:check',
  closable: true,
})

const toaster = useToaster()

const showToast = () => {
  toaster.show({
    title: toast.title,
    message: toast.message,
    color: toast.color,
    icon: toast.icon,
    closable: true,
  })
}
</script>
