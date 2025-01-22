<script setup lang="ts">
const toast = reactive({
  title: 'Success',
  message: `Message has been sent!`,
  color: 'success' as 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'muted',
  icon: 'lucide:check',
  closable: true,
})
const position = ref<keyof typeof themes>('bottom-center')

const themes = {
  'top-start': {
    maxToasts: 1,
    containerId: 'top-start',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-start', // start
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform -translate-x-full opacity-0',
    },
  },
  'top-center': {
    maxToasts: 1,
    containerId: 'top-center',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-center', // center
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-y-full opacity-0',
      enterToClass: 'transform translate-y-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-y-0 opacity-100',
      leaveToClass: 'transform -translate-y-full opacity-0',
    },
  },
  'top-end': {
    maxToasts: 1,
    containerId: 'top-end',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-end', // end
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0',
    },
  },
  'bottom-start': {
    maxToasts: 1,
    containerId: 'bottom-start',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-start', // start
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform -translate-x-full opacity-0',
    },
  },
  'bottom-center': {
    maxToasts: 1,
    containerId: 'bottom-center',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-center', // center
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-y-full opacity-0',
      enterToClass: 'transform translate-y-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-y-0 opacity-100',
      leaveToClass: 'transform translate-y-full opacity-0',
    },
  },
  'bottom-end': {
    maxToasts: 1,
    containerId: 'bottom-end',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-end', // end
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0',
    },
  },
}

let toaster: any

function showToast() {
  toaster?.clearAll()

  toaster = createNinjaToaster({
    theme: themes[position.value],
  })
  toaster.showComponent('TairoToaster', {
    props: {
      title: toast.title,
      message: toast.message,
      color: toast.color,
      icon: toast.icon,
      closable: toast.closable,
    },
  })
}
</script>

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
            <BaseSelectItem value="primary">
              Primary
            </BaseSelectItem>

            <BaseSelectItem value="success">
              Success
            </BaseSelectItem>

            <BaseSelectItem value="info">
              Info
            </BaseSelectItem>

            <BaseSelectItem value="warning">
              Warning
            </BaseSelectItem>

            <BaseSelectItem value="danger">
              Danger
            </BaseSelectItem>

            <BaseSelectItem value="muted">
              Muted
            </BaseSelectItem>
          </BaseSelect>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="toast.icon" label="Icon">
            <BaseSelectItem value="lucide:check">
              Check icon
            </BaseSelectItem>

            <BaseSelectItem value="lucide:x">
              Close icon
            </BaseSelectItem>

            <BaseSelectItem value="lucide:alert-triangle">
              Warning icon
            </BaseSelectItem>

            <BaseSelectItem value="lucide:alert-octagon">
              Danger icon
            </BaseSelectItem>

            <BaseSelectItem value="lucide:info">
              Info icon
            </BaseSelectItem>
          </BaseSelect>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="position" label="Position">
            <BaseSelectItem value="top-start">
              top-start
            </BaseSelectItem>

            <BaseSelectItem value="top-center">
              top-center
            </BaseSelectItem>

            <BaseSelectItem value="top-end">
              top-end
            </BaseSelectItem>

            <BaseSelectItem value="bottom-start">
              bottom-start
            </BaseSelectItem>

            <BaseSelectItem value="bottom-center">
              bottom-center
            </BaseSelectItem>

            <BaseSelectItem value="bottom-end">
              bottom-end
            </BaseSelectItem>
          </BaseSelect>
        </div>

        <div class="col-span-12">
          <BaseCheckbox
            v-model="toast.closable"
            label="Closeable toast?"
            color="primary"
          />
        </div>

        <div class="col-span-12">
          <BaseButton
            class="w-full"
            color="primary"
            @click="showToast"
          >
            Show Toaster
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
