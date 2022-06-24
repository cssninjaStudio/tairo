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
  <BaseModal :open="isModalLgOpen" size="lg" @close="isModalLgOpen = false">
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-gray-900 dark:text-white"
        >
          Large dialog
        </h3>
        <BaseButtonClose @click="isModalLgOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/13.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt="Avatar image"
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-gray-800 dark:text-white"
        >
          New Invite
        </h3>
        <p class="font-sub text-sm leading-5 text-gray-500 dark:text-gray-400">
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
  </BaseModal>

  <!-- Modal component -->
  <BaseModal :open="isModalXlOpen" size="xl" @close="isModalXlOpen = false">
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-gray-900 dark:text-white"
        >
          Xl dialog
        </h3>
        <BaseButtonClose @click="isModalXlOpen = false" />
      </div>
    </template>
    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/17.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt="Avatar image"
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-gray-800 dark:text-white"
        >
          New Invite
        </h3>
        <p class="font-sub text-sm leading-5 text-gray-500 dark:text-gray-400">
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
  </BaseModal>
</template>
