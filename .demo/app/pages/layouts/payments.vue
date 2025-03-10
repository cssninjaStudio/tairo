<script setup lang="ts">
const route = useRoute()

const isOutgoing = computed(() => {
  return route.path.match('^/layouts/payments$')
})

const isIncoming = computed(() => {
  return route.path.startsWith('/layouts/payments/incoming')
})

const isRecipients = computed(() => {
  return route.path.startsWith('/layouts/payments/recipients')
})
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div class="flex items-center justify-end pb-6">
      <!-- Buttons -->
      <div class="hidden items-center gap-2 md:flex">
        <BaseButton
          to="/layouts/send"
          rounded="md"
          size="sm"
        >
          <Icon name="solar:wad-of-money-linear" class="size-4" />
          <span>New Payment</span>
        </BaseButton>
        <BaseButton
          to="/layouts/receive"
          rounded="md"
          size="sm"
        >
          <Icon name="solar:letter-linear" class="size-4" />
          <span>Request Payment</span>
        </BaseButton>
      </div>
    </div>

    <!-- Tabs wrapper -->
    <div>
      <!-- Tabs -->
      <div class="flex items-center justify-between overflow-hidden">
        <div
          class="border-muted-200 dark:border-muted-800 xs:overflow-x-auto flex grow gap-x-6 border-b font-sans text-sm"
        >
          <NuxtLink
            to="/layouts/payments"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isOutgoing
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Outgoing
          </NuxtLink>
          <NuxtLink
            to="/layouts/payments/incoming"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isIncoming
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Incoming
          </NuxtLink>
          <NuxtLink
            to="/layouts/payments/recipients"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isRecipients
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Recipients
          </NuxtLink>
        </div>
      </div>

      <!-- Tab content -->
      <div class="w-full py-6">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
