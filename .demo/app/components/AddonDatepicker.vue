<script setup lang="ts">
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker.js'
import { hydrateOnVisible } from 'vue'
import 'v-calendar/dist/style.css'
import '~/assets/vcalendar.css'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null,
  },
  locale: {
    type: String,
    default: 'en',
  },
})

const emit = defineEmits(['update:model-value', 'close'])

const DatePicker = defineAsyncComponent({
  loader: () => import('v-calendar').then(m => m.DatePicker),
  hydrate: hydrateOnVisible(),
})

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  },
})

const attrs = {
  'transparent': true,
  'borderless': true,
  'color': 'primary',
  'is-dark': { selector: 'html', darkClass: 'dark' },
  'first-day-of-week': 2,
}

function onDayClick(_: any, event: MouseEvent): void {
  const target = event.target as HTMLElement
  target.blur()
}
</script>

<template>
  <DatePicker
    v-if="date && (date as DatePickerRangeObject)?.start && (date as DatePickerRangeObject)?.end"
    v-model.range="date"
    :columns="2"
    v-bind="{ ...attrs, ...$attrs }"
    :locale="props.locale"
    @dayclick="onDayClick"
  >
    <template v-if="'default' in $slots" #default="ctx">
      <slot v-bind="ctx" />
    </template>
    <template v-if="'time-header' in $slots" #time-header="ctx">
      <slot name="time-header" v-bind="ctx" />
    </template>
  </DatePicker>
  <DatePicker
    v-else
    v-model="date"
    v-bind="{ ...attrs, ...$attrs }"
    :locale="props.locale"
    class="w-full!"
    @dayclick="onDayClick"
  >
    <template v-if="'default' in $slots" #default="ctx">
      <slot v-bind="ctx" />
    </template>
    <template v-if="'time-header' in $slots" #time-header="ctx">
      <slot name="time-header" v-bind="ctx" />
    </template>
  </DatePicker>
</template>

<style>
:root {
  --vc-gray-50: var(--color-muted-50);
  --vc-gray-100: var(--color-muted-100);
  --vc-gray-200: var(--color-muted-200);
  --vc-gray-300: var(--color-muted-300);
  --vc-gray-400: var(--color-muted-400);
  --vc-gray-500: var(--color-muted-500);
  --vc-gray-600: var(--color-muted-600);
  --vc-gray-700: var(--color-muted-700);
  --vc-gray-800: var(--color-muted-800);
  --vc-gray-900: var(--color-muted-900);
}

.vc-primary {
  --vc-accent-50: var(--color-primary-50);
  --vc-accent-100: var(--color-primary-100);
  --vc-accent-200: var(--color-primary-200);
  --vc-accent-300: var(--color-primary-300);
  --vc-accent-400: var(--color-primary-400);
  --vc-accent-500: var(--color-primary-500);
  --vc-accent-600: var(--color-primary-600);
  --vc-accent-700: var(--color-primary-700);
  --vc-accent-800: var(--color-primary-800);
  --vc-accent-900: var(--color-primary-900);
}
</style>
