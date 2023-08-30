<script setup lang="ts">
import { differenceInMinutes, isToday } from 'date-fns'

import { type CalendarEvent, categoryTheme } from '~/utils/apps/calendar'

const props = defineProps<{
  event: Omit<CalendarEvent, 'startDate' | 'endDate'>
}>()
</script>

<template>
  <div
    class="relative flex gap-[1px] h-full dark:bg-muted-800 border-muted-200 dark:border-muted-700 group rounded-lg border bg-white p-4 mb-4 transition duration-150 ease-out"
  >
    <!-- <div class="absolute inset-0 w-1 rounded-ss-lg rounded-es-lg" :class="[categoryTheme[event.category].color]"></div> -->
    <div
      role="button"
      class="dnd-drag-handler m-[1px] cursor-grab text-sm hover:bg-muted-100 dark:hover:bg-muted-900 rounded-full h-6 w-6 shrink-0 flex items-center justify-center transition-colors duration-75"
    >
      <Icon
        name="ph:dots-six-vertical"
        class="text-muted-500 dark:text-muted-200 h-4 w-4"
      />
    </div>
    <div class="[&>:not(:first-of-type):before]:mx-1 pe-1 w-full">
      <div class="flex items-top justify-between w-full">
        <div>
          <div
            class="text-muted-800 dark:text-muted-200 font-sans text-sm line-clamp-2"
            :title="event.title"
          >
            {{ event.title }}
          </div>
          <div class="text-muted-400 text-xs flex gap-1 items-center">
            <!-- <div class="w-2 h-2 rounded-sm" :class="[categoryTheme[event.category].color]"></div>
            <span>{{ categoryTheme[event.category].name }}</span> -->
            <!-- <span class="text-muted-200">|</span> -->
            <Icon name="ph:clock" class="text-muted-400 h-4 w-4" />
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
          >
          </BaseAvatarGroup>
        </div>
      </div>
      <div
        class="pt-2 mt-1 border-t border-muted-200 dark:border-muted-700 flex justify-between items-center"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-if="event.features?.record"
            class="text-muted-400"
            data-nui-tooltip="Recorded"
          >
            <Icon name="ph:monitor-play-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.features?.drive"
            class="text-muted-400"
            data-nui-tooltip="Document joined"
          >
            <Icon name="ph:note-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.features?.external"
            class="text-muted-400"
            data-nui-tooltip="External Users"
          >
            <Icon name="ph:lock-open-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.features?.conversation"
            class="text-muted-400"
            data-nui-tooltip="Has comments"
          >
            <Icon name="ph:chats-circle-duotone" class="w-4 h-4" />
          </span>
        </div>
        <div>
          <div
            class="w-2 h-2 rounded-full"
            :class="[categoryTheme[event.category].color]"
            :data-nui-tooltip="categoryTheme[event.category].name"
            data-nui-tooltip-position="start"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
