<script setup lang="ts">
import { type CalendarEvent, categoryTheme } from '~/utils/bundles/calendar'

const props = defineProps<{
  event: Omit<CalendarEvent, 'startDate' | 'endDate'>
}>()
</script>

<template>
  <div
    class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group relative mb-4 flex h-full gap-px rounded-lg border bg-white p-4 transition duration-150 ease-out"
  >
    <!-- <div class="absolute inset-0 w-1 rounded-ss-lg rounded-es-lg" :class="[categoryTheme[event.category].color]"></div> -->
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
            class="text-muted-800 dark:text-muted-200 line-clamp-2 font-sans text-sm"
            :title="event.title"
          >
            {{ event.title }}
          </div>
          <div class="text-muted-400 flex items-center gap-1 text-xs">
            <!-- <div class="w-2 h-2 rounded-sm" :class="[categoryTheme[event.category].color]"></div>
            <span>{{ categoryTheme[event.category].name }}</span> -->
            <!-- <span class="text-muted-200">|</span> -->
            <Icon name="ph:clock" class="text-muted-400 size-4" />
            <span>{{ event.duration }} min</span>
          </div>
        </div>

        <div v-if="event.participants">
          <BaseAvatarGroup
            :limit="2"
            size="xxs"
            :avatars="
              event.participants.map((participant) => ({
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
            v-if="event.features?.record"
            class="text-muted-400"
            data-nui-tooltip="Recorded"
          >
            <Icon name="ph:monitor-play-duotone" class="size-4" />
          </span>
          <span
            v-if="event.features?.drive"
            class="text-muted-400"
            data-nui-tooltip="Document joined"
          >
            <Icon name="ph:note-duotone" class="size-4" />
          </span>
          <span
            v-if="event.features?.external"
            class="text-muted-400"
            data-nui-tooltip="External Users"
          >
            <Icon name="ph:lock-open-duotone" class="size-4" />
          </span>
          <span
            v-if="event.features?.conversation"
            class="text-muted-400"
            data-nui-tooltip="Has comments"
          >
            <Icon name="ph:chats-circle-duotone" class="size-4" />
          </span>
        </div>
        <div>
          <div
            class="size-2 rounded-full"
            :class="[categoryTheme[event.category].color]"
            :data-nui-tooltip="categoryTheme[event.category].name"
            data-nui-tooltip-position="start"
          />
        </div>
      </div>
    </div>
  </div>
</template>
