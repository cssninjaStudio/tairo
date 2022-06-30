<script setup lang="ts">
const isModalOpen = ref(false)

function closeModal() {
  isModalOpen.value = false
}
function openModal() {
  isModalOpen.value = true
}

const isModalMdOpen = ref(false)
</script>

<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton @click="openModal">Small dialog</BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton @click="isModalMdOpen = true">Medium dialog</BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <BaseModal :open="isModalOpen" size="sm" @close="closeModal">
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Small dialog
        </h3>
        <BaseButtonClose @click="closeModal" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt="Avatar image"
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
          <BaseButton @click="closeModal">Decline</BaseButton>
          <BaseButton color="primary" flavor="solid" @click="closeModal">
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal :open="isModalMdOpen" size="md" @close="isModalMdOpen = false">
    <template #header>
      <!-- Header -->
      <div class="w-full flex items-center justify-between p-4 md:p-6">
        <h3
          class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
        >
          Medium dialog
        </h3>
        <BaseButtonClose @click="isModalMdOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="text-center w-full max-w-xs mx-auto">
        <div class="flex relative w-24 h-24 mx-auto mb-4">
          <img
            src="https://media.cssninja.io/shuriken/avatars/7.svg"
            class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
            alt="Avatar image"
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
          <BaseButton @click="isModalMdOpen = false">Decline</BaseButton>
          <BaseButton
            color="primary"
            flavor="solid"
            @click="isModalMdOpen = false"
          >
            Accept
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseModal>
</template>
