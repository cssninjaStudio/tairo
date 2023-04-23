<template>
  <div>
    <form action="" method="POST" @submit.prevent="">
      <BaseInputFileHeadless
        accept="image/*"
        v-model="inputFile"
        v-slot="{ open, remove, preview, files }"
      >
        <div class="relative h-20 w-20">
          <img
            v-if="files?.length && files.item(0)"
            :src="preview(files.item(0)!).value"
            alt="Upload preview"
            class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
          />

          <img
            v-else
            :src="currentAvatar"
            alt="Upload preview"
            class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"
          />

          <div v-if="files?.length && files.item(0)" class="absolute bottom-0 end-0 z-20">
            <BaseButtonIcon
              condensed
              shape="full"
              @click="remove(files.item(0)!)"
              data-tooltip="Remove image"
              class="scale-90"
            >
              <Icon name="lucide:x" class="h-4 w-4" />
            </BaseButtonIcon>
          </div>

          <div v-else class="absolute bottom-0 end-0 z-20">
            <div class="relative" data-tooltip="Upload image">
              <BaseButtonIcon condensed shape="full" @click="open">
                <Icon name="lucide:plus" class="h-4 w-4" />
              </BaseButtonIcon>
            </div>
          </div>
        </div>
      </BaseInputFileHeadless>
    </form>
  </div>
</template>

<script setup lang="ts">
// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => '/img/avatars/10.svg')
const inputFile = ref<FileList | null>(null)
</script>
