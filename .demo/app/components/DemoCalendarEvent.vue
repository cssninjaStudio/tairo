<script setup lang="ts">
import type { CalendarCustomAttribute, CalendarEvent } from '~/utils/bundles/calendar'

import { categoryTheme } from '~/utils/bundles/calendar'
import { format } from '~/utils/bundles/date-fns'

const props = defineProps<{
  event: CalendarCustomAttribute<CalendarEvent>
}>()

const emits = defineEmits<{
  positiondrag: [event: MouseEvent | TouchEvent]
}>()
</script>

<template>
  <div class="relative flex h-full gap-px p-1 bg-white dark:bg-muted-950">
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
            class="text-muted-900 dark:text-muted-200 line-clamp-2"
            :title="props.event.customData.title"
          >
            {{ props.event.customData.title || 'New event' }}
          </div>
          <div class="text-muted-400">
            {{ format(props.event.customData.startDate, 'HH:mm') }} to
            {{ format(props.event.customData.endDate, 'HH:mm') }}
          </div>
        </div>

        <div v-if="props.event.customData.participants">
          <BaseAvatarGroup
            :limit="1"
            size="xxs"
            :avatars="
              props.event.customData.participants.map((participant) => ({
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
          <BaseTooltip v-if="props.event.customData.features?.record" content="Recorded" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:playback-speed-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.customData.features?.drive" content="Document attached" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:document-text-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.customData.features?.external" content="External Users" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:folder-security-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
          <BaseTooltip v-if="props.event.customData.features?.conversation" content="Has comments" :bindings="{ portal: { disabled: true } }">
            <Icon name="solar:chat-round-line-linear" class="size-4 text-muted-400" />
          </BaseTooltip>
        </div>
        <div>
          <BaseTooltip :content="categoryTheme[props.event.customData.category].name" :bindings="{ portal: { disabled: true } }">
            <div
              class="size-1.5 rounded-full"
              :class="[categoryTheme[props.event.customData.category].color]"
            />
          </BaseTooltip>
        </div>
      </div>
    </div>
  </div>
</template>
