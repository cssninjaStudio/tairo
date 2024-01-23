<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex flex-wrap items-end gap-4">
      <BaseButton class="gap-2" @click="isModalStartOpen = true">
        <Icon name="lucide:align-start-vertical" class="w-4" />
        Start Align
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModalEndOpen = true">
        <Icon name="lucide:align-end-vertical" class="w-4" />
        End Align
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModalCenterOpen = true">
        <Icon name="lucide:align-center-vertical" class="w-4" />
        Center Align
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModalBetweenOpen = true">
        <Icon name="lucide:align-horizontal-space-between" class="w-4" />
        Between Align
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModalBodyOpen = true">
        <Icon name="lucide:x" class="w-4" />
        No Footer
      </BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <TairoModal
    :open="isModalStartOpen"
    size="md"
    footer-align="start"
    @close="isModalStartOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          Medium dialog
        </h3>

        <BaseButtonClose @click="isModalStartOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          New Invite
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalStartOpen = false">
            Decline
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModalStartOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModalEndOpen"
    size="md"
    footer-align="end"
    @close="isModalEndOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          Medium dialog
        </h3>

        <BaseButtonClose @click="isModalEndOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          New Invite
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalEndOpen = false">
            Decline
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModalEndOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModalCenterOpen"
    size="md"
    footer-align="center"
    @close="isModalCenterOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          Medium dialog
        </h3>

        <BaseButtonClose @click="isModalCenterOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          New Invite
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalCenterOpen = false">
            Decline
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModalCenterOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModalBetweenOpen"
    size="md"
    footer-align="between"
    @close="isModalBetweenOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          Medium dialog
        </h3>

        <BaseButtonClose @click="isModalBetweenOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          New Invite
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalBetweenOpen = false">
            Decline
          </BaseButton>
        </div>
      </div>

      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton
            color="primary"
            variant="solid"
            @click="isModalBetweenOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModalBodyOpen"
    size="md"
    @close="isModalBodyOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          Medium dialog
        </h3>

        <BaseButtonClose @click="isModalBodyOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-8 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          New Invite
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 mb-6 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>
    </div>
  </TairoModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalStartOpen = ref(false)
const isModalEndOpen = ref(false)
const isModalCenterOpen = ref(false)
const isModalBetweenOpen = ref(false)
const isModalBodyOpen = ref(false)
</script>
