<script setup lang="ts">
import type { CalendarEvent } from '~/utils/bundles/calendar'
import { categoryTheme } from '~/utils/bundles/calendar'

const props = defineProps<{
  event: Omit<CalendarEvent, 'startDate' | 'endDate'>
}>()
</script>

<template>
  <div
    class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group relative mb-4 flex h-full gap-px rounded-lg border bg-white p-4 transition duration-150 ease-out"
  >
    <div
      role="button"
      class="dnd-drag-handler hover:bg-muted-100 dark:hover:bg-muted-900 m-px flex size-6 shrink-0 cursor-grab items-center justify-center rounded-full text-sm transition-colors duration-75"
    >
      <Icon
        name="ph:dots-six-vertical"
        class="text-muted-500 dark:text-muted-200 size-4"
      />
    </div>
    <div class="w-full pe-1 [&>:not(:first-of-type):before]:mx-1">
      <div class="items-top flex w-full justify-between">
        <div>
          <div
            class="text-muted-800 dark:text-muted-200 line-clamp-2 font-sans font-medium text-sm mb-1"
            :title="props.event.title"
          >
            {{ props.event.title }}
          </div>
          <div class="text-muted-400 flex items-center gap-1 text-xs">
            <Icon name="ph:clock" class="text-muted-400 size-4" />
            <span>{{ props.event.duration }} min</span>
          </div>
        </div>

        <div v-if="props.event.participants">
          <BaseAvatarGroup
            :limit="2"
            size="xxs"
            :avatars="
              props.event.participants.map((participant) => ({
                'src': participant.photo,
                'data-nui-tooltip': participant.name,
                'data-nui-tooltip-position': 'start',
              }))
            "
          />
        </div>
      </div>
      <div
        class="border-muted-200 dark:border-muted-800 mt-1 flex items-center justify-between border-t pt-2"
      >
        <div class="flex flex-wrap gap-2">
          <BaseTooltip v-if="props.event.features?.record" content="Recorded" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:playback-speed-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.features?.drive" content="Document attached" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:document-text-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.features?.external" content="External Users" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:folder-security-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.features?.conversation" content="Has comments" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:chat-round-line-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
        </div>
        <div>
          <BaseTooltip :content="categoryTheme[props.event.category].name">
            <div
              class="size-2 rounded-full"
              :class="[categoryTheme[props.event.category].color]"
            />
          </BaseTooltip>
        </div>
      </div>
    </div>
  </div>
</template>
