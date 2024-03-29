<script setup lang="ts">
import { format } from 'date-fns'

import {
  type CalendarCustomAttribute,
  type CalendarEvent,
  categoryTheme,
} from '~/utils/bundles/calendar'

const props = defineProps<{
  event: CalendarCustomAttribute<CalendarEvent>
}>()

const emits = defineEmits<{
  positiondrag: [event: MouseEvent | TouchEvent]
}>()

</script>

<template>
  <div class="relative flex h-full gap-px p-1">
    <div
      role="button"
      class="dnd-drag-handler hover:bg-muted-100 dark:hover:bg-muted-900 m-px flex size-6 shrink-0 cursor-grab items-center justify-center rounded-full text-sm transition-colors duration-75"
    >
      <Icon
        name="ph:dots-six-vertical"
        class="text-muted-500 dark:text-muted-200 size-4"
        @pointerdown="(e: MouseEvent | TouchEvent) => emits('positiondrag', e)"
      />
    </div>
    <div class="w-full pe-1 [&>:not(:first-of-type):before]:mx-1">
      <div class="items-top flex w-full justify-between">
        <div>
          <div
            class="text-muted-800 dark:text-muted-200 line-clamp-2"
            :title="event.customData.title"
          >
            {{ event.customData.title || 'New event' }}
          </div>
          <div class="text-muted-400">
            {{ format(event.customData.startDate, 'HH:mm') }} to
            {{ format(event.customData.endDate, 'HH:mm') }}
          </div>
        </div>

        <div v-if="event.customData.participants">
          <BaseAvatarGroup
            :limit="1"
            size="xxs"
            :avatars="
              event.customData.participants.map((participant) => ({
                src: participant.photo,
                'data-nui-tooltip': participant.name,
                'data-nui-tooltip-position': 'start',
              }))
            "
          />
        </div>
      </div>
      <div
        class="border-muted-200 dark:border-muted-700 mt-1 flex items-center justify-between border-t pt-2"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-if="event.customData.features?.record"
            class="text-muted-400"
            data-nui-tooltip="Recorded"
          >
            <Icon name="ph:monitor-play-duotone" class="size-4" />
          </span>
          <span
            v-if="event.customData.features?.drive"
            class="text-muted-400"
            data-nui-tooltip="Document joined"
          >
            <Icon name="ph:note-duotone" class="size-4" />
          </span>
          <span
            v-if="event.customData.features?.external"
            class="text-muted-400"
            data-nui-tooltip="External Users"
          >
            <Icon name="ph:lock-open-duotone" class="size-4" />
          </span>
          <span
            v-if="event.customData.features?.conversation"
            class="text-muted-400"
            data-nui-tooltip="Has comments"
          >
            <Icon name="ph:chats-circle-duotone" class="size-4" />
          </span>
        </div>
        <div>
          <div
            class="size-2 rounded-full"
            :class="[categoryTheme[event.customData.category].color]"
            :data-nui-tooltip="categoryTheme[event.customData.category].name"
            data-nui-tooltip-position="start"
          />
        </div>
      </div>
    </div>
  </div>
</template>
