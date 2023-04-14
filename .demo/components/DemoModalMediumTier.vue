<script setup lang="ts">
import { ref } from 'vue'

const isModalLgOpen = ref(false)
const isModalXlOpen = ref(false)
</script>

<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton @click="isModalLgOpen = true">Large dialog</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalXlOpen = true">Xl dialog</BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <TairoModal :open="isModalLgOpen" size="lg" @close="isModalLgOpen = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
        >
          Large dialog
        </h3>
        <BaseButtonClose @click="isModalLgOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex h-24 w-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/13.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          />
        </div>
        <h3
          class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalLgOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalLgOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal :open="isModalXlOpen" size="xl" @close="isModalXlOpen = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
        >
          Xl dialog
        </h3>
        <BaseButtonClose @click="isModalXlOpen = false" />
      </div>
    </template>
    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex h-24 w-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/17.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          />
        </div>
        <h3
          class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
    </div>
    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModalXlOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalXlOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>
