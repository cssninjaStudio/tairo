<script setup lang="ts">
import type { GeoJsonLocationProperties } from '~~/server/api/geojson/locations'

const props = defineProps<GeoJsonLocationProperties>()
const emits = defineEmits(['close'])
</script>

<template>
  <FocusScope class="flex flex-col gap-3" loop>
    <div class="relative">
      <div class="flex items-center gap-2">
        <BaseAvatar size="xs" :src="props.logo" />
        <div class="font-sans grow">
          <h4
            class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"
          >
            {{ props.name }}
          </h4>
          <p class="text-muted-400 text-xs">
            Open until {{ props.openingCount }}
          </p>
        </div>
        <BaseButton size="icon-sm" rounded="lg" variant="ghost" @click="() => emits('close')">
          <Icon name="lucide:x" class="size-4" />
        </BaseButton>
      </div>
    </div>
    <div class="text-muted-500 dark:text-muted-400 font-sans text-xs">
      <p>{{ props.description }}</p>
    </div>
    <div class="flex gap-2">
      <BaseTooltip v-if="props.phone">
        <template #content>
          Call <strong class="font-bold">{{ props.phone }}</strong>
        </template>

        <BaseButton size="icon-sm" rounded="lg" variant="muted">
          <Icon name="lucide:phone" class="size-4" />
        </BaseButton>
      </BaseTooltip>
      <BaseTooltip content="Save bookmark">
        <BaseButton size="icon-sm" rounded="lg" variant="muted">
          <Icon name="lucide:bookmark" class="size-4" />
        </BaseButton>
      </BaseTooltip>
      <BaseTooltip content="Book an appointment">
        <BaseButton size="icon-sm" rounded="lg" variant="muted">
          <Icon name="lucide:calendar-plus" class="size-4" />
        </BaseButton>
      </BaseTooltip>
      <BaseTooltip content="Visit website">
        <BaseButton size="icon-sm" rounded="lg" variant="muted" href="https://google.com" target="_blank">
          <Icon name="lucide:external-link" class="size-4" />
        </BaseButton>
      </BaseTooltip>
    </div>
  </FocusScope>
</template>
