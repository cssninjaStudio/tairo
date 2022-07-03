<script setup lang="ts">
import { ref } from 'vue'

const isModalStartOpen = ref(false)
const isModalEndOpen = ref(false)
const isModalCenterOpen = ref(false)
const isModalBetweenOpen = ref(false)
const isModalBodyOpen = ref(false)
</script>

<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end flex-wrap gap-4">
      <BaseButton @click="isModalStartOpen = true">Start Align</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalEndOpen = true">End Align</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalCenterOpen = true">Center Align</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalBetweenOpen = true">Between Align</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalBodyOpen = true">No Footer</BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <BaseModal
    :open="isModalStartOpen"
    size="md"
    footer-align="start"
    @close="isModalStartOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalStartOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt=""
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-800 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-sub text-sm leading-5 text-slate-500 dark:text-slate-400"
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
          <BaseButton @click="isModalStartOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalStartOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal
    :open="isModalEndOpen"
    size="md"
    footer-align="end"
    @close="isModalEndOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalEndOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt=""
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-800 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-sub text-sm leading-5 text-slate-500 dark:text-slate-400"
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
          <BaseButton @click="isModalEndOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalEndOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal
    :open="isModalCenterOpen"
    size="md"
    footer-align="center"
    @close="isModalCenterOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalCenterOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt=""
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-800 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-sub text-sm leading-5 text-slate-500 dark:text-slate-400"
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
          <BaseButton @click="isModalCenterOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalCenterOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal
    :open="isModalBetweenOpen"
    size="md"
    footer-align="between"
    @close="isModalBetweenOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalBetweenOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt=""
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-800 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-sub text-sm leading-5 text-slate-500 dark:text-slate-400"
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
          <BaseButton @click="isModalBetweenOpen = false">Decline</BaseButton>
        </div>
      </div>
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalBetweenOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal :open="isModalBodyOpen" size="md" @close="isModalBodyOpen = false">
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalBodyOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-8">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt=""
          />
        </div>
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-800 dark:text-white"
        >
          New Invite
        </h3>
        <p
          class="font-sub text-sm leading-5 text-slate-500 dark:text-slate-400 mb-6"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.
        </p>
      </div>
    </div>
  </BaseModal>
</template>
