<script setup lang="ts">
import type { CalendarCustomAttribute, CalendarEvent, CalendarSettings, VCalendarAttribute } from '~/utils/bundles/calendar'
import { hydrateOnVisible } from 'vue'
import {
  categoryTheme,
  datesToHeight,
  dateToTop,
  topToDate,
  useCalendarEvents,
  useCreateEvent,
  useDateRange,
  useDragEvent,
  useDragEventPending,
  useNowMarker,
  useViewPan,
} from '~/utils/bundles/calendar'
import {
  addMinutes,
  endOfDay,
  format,
  isPast,
  isToday,
} from '~/utils/bundles/date-fns'

import 'v-calendar/dist/style.css'
import '~/assets/vcalendar-weekly.css'
import '~/assets/vcalendar.css'

definePageMeta({
  title: 'Calendar',
  // layout: 'empty',
  preview: {
    title: 'Calendar app',
    description: 'For email and messaging apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboard-calendar.png',
    srcDark: '/img/screens/dashboard-calendar-dark.png',
    order: 25,
  },
})

const users = [
  {
    id: 16,
    photo: '/img/avatars/16.svg',
    name: 'Hermann Mayer',
  },
  {
    id: 10,
    photo: '/img/avatars/10.svg',
    name: 'Kendra Wilson',
  },
  {
    id: 5,
    photo: '/img/avatars/5.svg',
    name: 'Clarissa Miller',
  },
  {
    id: 8,
    photo: '/img/avatars/8.svg',
    name: 'Eddy Bricks',
  },
  {
    id: 3,
    photo: '/img/avatars/3.svg',
    name: 'Clark Smith',
  },
  {
    id: 19,
    name: 'Clarissa Perez',
    photo: '/img/avatars/19.svg',
  },
  {
    id: 22,
    name: 'Benedict Kessler',
    photo: '/img/avatars/22.svg',
  },
  {
    id: 2,
    name: 'Maya Rosselini',
    photo: '/img/avatars/2.svg',
  },
]

const Container = defineAsyncComponent({
  loader: () => import('vue3-smooth-dnd').then(mod => mod.Container),
  hydrate: hydrateOnVisible(),
})
const Draggable = defineAsyncComponent({
  loader: () => import('vue3-smooth-dnd').then(mod => mod.Draggable),
  hydrate: hydrateOnVisible(),
})
const Calendar = defineAsyncComponent({
  loader: () => import('v-calendar').then(mod => mod.Calendar),
  hydrate: hydrateOnVisible(),
})

const scrollCalendarRef = useTemplateRef<HTMLElement>('scrollCalendarRef')
const showSettings = ref(false)
const settings = reactive<CalendarSettings>({
  hideWeekends: false,
  hourOpen: 8,
  hourClose: 18,
  hourPrecision: 15,
  hourHeight: 160,
  dayOffsetY: 0,
  weekStartsOn: 0,
})

const { fromDate, toDate, weekdays, onPageChange } = useDateRange(settings)
const { calendarEvents, pendingEvents } = useCalendarEvents({
  fromDate,
  toDate,
})

function getChildPayload(index: number) {
  return pendingEvents.value?.[index - 1]
}
const {
  isHeightDragging,
  isPositionDragging,
  onHeightDragStart,
  onPositionDragStart,
} = useDragEvent(
  settings,
  calendarEvents,
  // on drag end
  async (event) => {
    // update event
  },
)

const { now, showNow } = useNowMarker(scrollCalendarRef, settings)
const { isViewPaning, isViewMoved } = useViewPan(scrollCalendarRef, () => {
  return !(isHeightDragging.value || isPositionDragging.value)
})
const { onCalendarClick, clearNew, hasNew } = useCreateEvent(
  settings,
  calendarEvents,
  // new event template
  date => ({
    startDate: date,
    endDate: addMinutes(date, 30),
    duration: 30,
    category: 'none',
    title: '',
    participants: [],
  }),
  // can create new event
  () => {
    return !(
      isHeightDragging.value
      || isPositionDragging.value
      || isViewPaning.value
    )
  },
  // on create
  async (event) => {
    calendarEvents.value.push(event)
    onSelectEvent(event.customData)
  },
)

const selectedEventId = ref<string>()
const selectedEvent = computed(() => {
  return (
    calendarEvents.value.find(
      event => event?.customData?.id === selectedEventId.value,
    )?.customData
    || pendingEvents.value.find(event => event.id === selectedEventId.value)
  )
})
function onSelectEvent(event: CalendarEvent) {
  if (event.id !== 'new' && hasNew.value) {
    clearNew()
  }

  selectedEventId.value = event.id
}
const { isPendingEventDragging, onPendingEventDragStart } = useDragEventPending(
  settings,
  calendarEvents,
  // on drag end
  (event) => {
    onSelectEvent(event.customData)
    calendarEvents.value.push(event)

    const idx = pendingEvents.value.findIndex(
      item => item.id === event.customData.id,
    )
    if (idx === -1) {
      return
    }
    pendingEvents.value.splice(idx, 1)
  },
)

const isDragging = computed(
  () =>
    isPendingEventDragging.value
    || isPositionDragging.value
    || isHeightDragging.value,
)

function scrollCalendarToTop(top = 0, behavior: ScrollBehavior = 'smooth') {
  if (!scrollCalendarRef.value) {
    return
  }

  scrollCalendarRef.value.scrollTo({
    top,
    behavior,
  })
}

function updateHeight(height = 160) {
  if (!scrollCalendarRef.value) {
    return
  }

  const top = scrollCalendarRef.value.scrollTop
  const initialDate = topToDate(settings, top)

  settings.hourHeight = height

  if (!initialDate) {
    return
  }

  nextTick(() => {
    scrollCalendarToTop(dateToTop(settings, initialDate), 'instant')
  })
}
const selectedEventFeatures = computed({
  get() {
    return selectedEvent.value?.features
      ? Object.keys(selectedEvent.value?.features)
      : []
  },
  set(values: string[]) {
    if (!selectedEvent.value) {
      return
    }

    selectedEvent.value.features = values.reduce(
      (acc, value) => {
        acc[value] = true
        return acc
      },
      {} as Record<string, boolean>,
    )
  },
})
</script>

<template>
  <div
    class="flex w-full select-none h-[calc(100dvh_-_85px)]!"
  >
    <div
      class="border-muted-200 dark:border-muted-800 flex w-full border-t -mt-6"
    >
      <!-- scrollable area -->
      <div
        ref="scrollCalendarRef"
        class="nui-slimscroll relative w-full flex flex-col grow space-y-14 overflow-y-auto lg:w-auto lg:overflow-x-hidden"
      >
        <!-- sticky header -->
        <div
          role="button"
          tabindex="-1"
          class="dark:bg-muted-900 flex bg-muted-50 mb-0!"
          @click="() => scrollCalendarToTop()"
        >
          <div
            class="border-muted-200 dark:border-muted-800 w-10 border-b"
          />
          <div
            class="border-muted-200 dark:border-muted-800 grid grow border-b"
            :class="[settings.hideWeekends ? 'grid-cols-5' : 'grid-cols-7']"
          >
            <span
              v-for="day of weekdays"
              :key="day.toISOString()"
              class="day-label text-muted-900 dark:text-muted-400 pointer-events-none flex h-[52px] items-center gap-2 p-3 text-sm"
              :class="[isPast(endOfDay(day)) ? 'opacity-50' : '']"
            >
              <span>{{ capitalize(format(day, 'EEEE d')) }}</span>
              <span v-if="isToday(day)" class="text-primary-500 mb-[2px]">
                <Icon name="lucide:check" class="size-4" />
              </span>
            </span>
          </div>
        </div>
        <div class="flex h-[calc(100dvh_-_85px)]! overflow-y-auto nui-slimscroll">
          <!-- hours grid -->
          <div class="w-10">
            <div class="h-16" />
            <div>
              <div
                class="border-muted-200 dark:border-muted-800 pointer-events-none grow border-t"
              >
                <div
                  v-for="i in settings.hourClose - settings.hourOpen"
                  :key="i"
                  class="border-muted-200 dark:border-muted-800 relative border-b"
                  :style="{
                    height: `${settings.hourHeight}px`,
                  }"
                >
                  <span
                    class="dark:bg-muted-900 text-muted-900 dark:text-muted-300 absolute -top-2 start-1 bg-muted-50 px-2 text-xs"
                  >
                    {{ i + (settings.hourOpen - 1) }}h
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- calendar -->
          <div class="grow">
            <Calendar
              class="custom-calendar"
              :class="{
                'hide-weekend': settings.hideWeekends,
              }"
              view="weekly"
              expanded
              trim-weeks
              disable-page-swipe
              title-position="left"
              :first-day-of-week="
                settings.weekStartsOn !== undefined
                  ? ((settings.weekStartsOn + 1) as any)
                  : 1
              "
              :attributes="(calendarEvents as VCalendarAttribute[])"
              @update:pages="onPageChange"
            >
              <template #header-start-button="{ movePrev }">
                <BaseButton
                  rounded="full"
                  size="icon-sm"
                  @click="movePrev"
                  @keydown.space.enter="movePrev"
                >
                  <Icon
                    name="lucide:chevron-left"
                    class="top-auto! h-4! w-4!"
                  />
                </BaseButton>
              </template>
              <template #header-right-button="{ moveNext }">
                <BaseButton
                  rounded="full"
                  size="icon-sm"
                  @click="moveNext"
                  @keydown.space.enter="moveNext"
                >
                  <Icon
                    name="lucide:chevron-right"
                    class="top-auto! h-4! w-4!"
                  />
                </BaseButton>
              </template>
              <template
                #day-content="{
                  day,
                  attributes,
                }: {
                  day: any
                  attributes: CalendarCustomAttribute<CalendarEvent>[]
                }"
              >
                <div
                  role="button"
                  tabindex="0"
                  class="group relative z-10 flex h-full flex-col p-0"
                  :data-day="day.date"
                  :class="{
                    'pointer-events-none': isViewMoved,
                  }"
                  @dblclick="(event) => onCalendarClick(event, day.date)"
                >
                  <!-- current time marker -->
                  <div
                    v-if="day.isToday && showNow"
                    class="pointer-events-none absolute inset-x-0 z-50 h-px bg-red-500 before:block before:size-2 before:-translate-x-full before:translate-y-[-3px] before:rounded-full before:bg-red-600 before:content-['']"
                    :style="{
                      top: `${dateToTop(settings, now, day.date)}px`,
                    }"
                  />

                  <!-- hours grid -->
                  <div
                    class="border-muted-200 dark:border-muted-800 pointer-events-none grow border-t"
                  >
                    <div
                      v-for="i in settings.hourClose - settings?.hourOpen"
                      :key="i"
                      class="border-muted-200 dark:border-muted-800 relative border-b border-dashed"
                      :style="{
                        height: `${settings.hourHeight}px`,
                      }"
                    >
                      <div
                        v-for="j in 4"
                        :key="j"
                        class="border-muted-400 dark:border-muted-700 relative z-50 w-2 border-b"
                        :style="{
                          height: `${settings.hourHeight / 4}px`,
                        }"
                      >
                        <div
                          v-for="k in 2"
                          :key="k"
                          class="border-muted-300 dark:border-muted-800 relative z-50 w-1 border-b"
                          :style="{
                            height: `${settings.hourHeight / 12}px`,
                          }"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- day events -->
                  <template v-for="event in attributes" :key="event.key">
                    <div
                      class="pointer-events-none absolute end-4 start-4 z-50 rounded-md"
                      :style="{
                        top: `${dateToTop(
                          settings,
                          event.customData.startDate,
                          day.date,
                        )}px`,
                        height: `${
                          datesToHeight(
                            settings,
                            event.customData.startDate,
                            event.customData.endDate,
                            day.date,
                          ) + 4
                        }px`,
                      }"
                    />

                    <div
                      role="button"
                      tabindex="0"
                      class="bg-muted-50 dark:bg-muted-800 border-muted-200 dark:border-muted-700 absolute end-4 start-4 z-10 cursor-pointer overflow-hidden rounded-t-md border border-b-0 text-xs"
                      :class="{
                        'pointer-events-none': isDragging,
                      }"
                      :style="{
                        top: `${dateToTop(
                          settings,
                          event.customData.startDate,
                          day.date,
                        )}px`,
                        height: `${datesToHeight(
                          settings,
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date,
                        )}px`,
                      }"
                      @click.stop="() => onSelectEvent(event.customData)"
                    >
                      <DemoCalendarEvent
                        :event="event"
                        @positiondrag="(e) => onPositionDragStart(event, e)"
                      />
                    </div>
                    <div
                      class="border-muted-200 dark:border-muted-800 dark:bg-muted-700/50 dark:hover:bg-muted-700/80 absolute bottom-0 end-4 start-4 h-[4px] cursor-n-resize rounded-b-md border border-t-0 bg-slate-50 hover:bg-slate-200"
                      :style="{
                        top: `${
                          dateToTop(
                            settings,
                            event.customData.startDate,
                            day.date,
                          )
                          + datesToHeight(
                            settings,
                            event.customData.startDate,
                            event.customData.endDate,
                            day.date,
                          )
                        }px`,
                      }"
                      :class="{
                        'pointer-events-none': isDragging,
                      }"
                      @pointerdown="(e) => onHeightDragStart(event, e)"
                    />
                  </template>
                </div>
              </template>
            </Calendar>
          </div>
        </div>
      </div>

      <!-- Right panel -->
      <div
        class="bg-white dark:bg-muted-900 border-muted-200 dark:border-muted-800 hidden flex flex-col w-68 h-[calc(100dvh_-_60px)]! shrink-0 border-s sm:block overflow-hidden"
      >
        <!-- toolbar -->
        <div class="h-[52px] shrink-0 flex items-center justify-end px-4">
          <div>
            <BaseButton v-if="!showSettings" size="icon-sm" rounded="md" @click="showSettings = !showSettings">
              <Icon name="lucide:settings" class="text-muted-400 size-4" />
            </BaseButton>
            <BaseButton v-else size="icon-sm" rounded="md" @click="showSettings = !showSettings">
              <Icon name="lucide:x" class="text-muted-400 size-4" />
            </BaseButton>
          </div>
        </div>

        <!-- settings -->
        <div
          v-if="showSettings"
          class="dark:bg-muted-900 border-muted-300 dark:border-muted-800 border-y bg-white p-4 shrink-0"
        >
          <div class="grid grid-cols-2 gap-x-2 gap-y-4">
            <BaseField
              v-slot="{ inputAttrs, inputRef }"
              label="Open from"
            >
              <BaseInputNumber
                :ref="inputRef"
                v-bind="inputAttrs"
                v-model="settings.hourOpen"
                :min="0"
                :max="settings.hourClose - 1"
                size="sm"
              />
            </BaseField>
            <BaseField
              v-slot="{ inputAttrs, inputRef }"
              label="Close at"
            >
              <BaseInputNumber
                :ref="inputRef"
                v-bind="inputAttrs"
                v-model="settings.hourClose"
                :min="settings.hourOpen + 1"
                :max="24"
                size="sm"
              />
            </BaseField>
            <BaseField
              v-slot="{ inputAttrs, inputRef }"
              label="Precision"
              class="col-span-2"
            >
              <BaseInputNumber
                :ref="inputRef"
                v-bind="inputAttrs"
                v-model="settings.hourPrecision"
                :min="5"
                :step="5"
                :max="30"
                size="sm"
              />
            </BaseField>
          </div>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="Week starts on"
            class="mt-4"
          >
            <div class="grid grid-cols-3 items-end gap-x-2 gap-y-4">
              <BaseSelect
                :ref="inputRef"
                v-bind="inputAttrs"
                v-model="settings.weekStartsOn"
                size="sm"
                class="col-span-2"
              >
                <BaseSelectItem :value="0">
                  Sunday
                </BaseSelectItem>
                <BaseSelectItem :value="1">
                  Monday
                </BaseSelectItem>
                <BaseSelectItem :value="2">
                  Tuesday
                </BaseSelectItem>
                <BaseSelectItem :value="3">
                  Wednesday
                </BaseSelectItem>
                <BaseSelectItem :value="4">
                  Thursday
                </BaseSelectItem>
                <BaseSelectItem :value="5">
                  Friday
                </BaseSelectItem>
                <BaseSelectItem :value="6">
                  Saturday
                </BaseSelectItem>
              </BaseSelect>
              <div class="flex items-center *:first:border-e-0 *:first:rounded-e-none *:last:rounded-s-none">
                <BaseButton
                  rounded="lg"
                  size="icon-sm"
                  :variant="settings.hourHeight === 480 ? 'muted' : 'default'"
                  @click="() => updateHeight(480)"
                >
                  <Icon name="carbon:maximize" class="size-4" />
                </BaseButton>
                <BaseButton
                  rounded="lg"
                  size="icon-sm"
                  :variant="settings.hourHeight === 160 ? 'muted' : 'default'"
                  @click="() => updateHeight()"
                >
                  <Icon name="carbon:minimize" class="size-4" />
                </BaseButton>
              </div>
            </div>
          </BaseField>
          <div class="mt-4">
            <BaseSwitchThin
              v-model="settings.hideWeekends"
              label="Hide weekends"
            />
          </div>
        </div>

        <!-- content -->
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="translate-x-0 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transition-all duration-100 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          :leave-to-class="
            selectedEvent
              ? '-translate-x-20 opacity-0'
              : 'translate-x-20 opacity-0'
          "
        >
          <div
            v-if="selectedEvent"
            class="overflow-y-auto nui-slimscroll relative grow p-4"
            :class="{
              'overflow-y-auto overflow-x-hidden': !showSettings,
              'overflow-hidden': showSettings,
            }"
          >
            <div
              v-if="showSettings"
              role="button"
              tabindex="0"
              class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"
              @click="showSettings = false"
            />
            <div class="flex items-center justify-between mb-4">
              <BaseHeading
                size="xs"
                weight="medium"
                lead="snug"
                class="text-muted-600 dark:text-muted-400 uppercase uppercase"
              >
                <span>Event Info</span>
              </BaseHeading>
              <BaseButton
                size="icon-sm"
                class="dark:bg-muted-800 bg-white scale-90"
                @click="selectedEventId = undefined"
              >
                <Icon name="lucide:x" class="size-4" />
              </BaseButton>
            </div>

            <div class="flex flex-col gap-2">
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                label="Title"
              >
                <BaseInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  v-model.trim="selectedEvent.title"
                  v-focus
                />
              </BaseField>

              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                label="Category"
              >
                <BaseSelect
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  v-model="selectedEvent.category"
                  :items="Object.entries(categoryTheme).map(([key, item]) => ({
                    value: key,
                    textValue: item.name,
                  }))"
                />
              </BaseField>

              <BaseField
                label="Assignee"
              >
                <template #hint>
                  <BaseAvatarGroup
                    size="xxs"
                    :avatars="selectedEvent.participants.map((item) => ({
                      src: item.photo,
                      alt: item.name,
                    }))"
                  />
                </template>
                <template #default="{ inputAttrs, inputRef }">
                  <BaseAutocomplete
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    v-model="selectedEvent.participants"
                    multiple
                    icon="ph:users-three"
                    placeholder="Search..."
                    clearable
                  >
                    <BaseAutocompleteItem
                      v-for="item in users"
                      :key="item.id"
                      :value="item"
                      :text-value="item.name"
                    >
                      <span class="flex gap-2">
                        <BaseAvatar
                          :src="item.photo"
                          :alt="item.name"
                          size="xxs"
                        />
                        <span class="text-sm font-medium">
                          {{ item.name }}
                        </span>
                      </span>
                    </BaseAutocompleteItem>
                  </BaseAutocomplete>
                </template>
              </BaseField>

              <BaseCheckboxGroup v-model="selectedEventFeatures" as="div" class="flex justify-end gap-3 pt-4">
                <BaseTooltip disable-closing-trigger content="Record">
                  <TairoCheckboxCardIcon value="record" icon="solar:playback-speed-linear" />
                </BaseTooltip>
                <BaseTooltip disable-closing-trigger content="Document included">
                  <TairoCheckboxCardIcon value="drive" icon="solar:document-text-linear" />
                </BaseTooltip>
                <BaseTooltip disable-closing-trigger content="External Users">
                  <TairoCheckboxCardIcon value="external" icon="solar:folder-security-linear" />
                </BaseTooltip>
                <BaseTooltip disable-closing-trigger content="Comment allowed">
                  <TairoCheckboxCardIcon value="conversation" icon="solar:chat-round-line-linear" />
                </BaseTooltip>
              </BaseCheckboxGroup>
            </div>
          </div>
          <div
            v-else
            class="nui-slimscroll overflow-y-auto relative grow p-4"
            :class="{
              'overflow-y-auto overflow-x-hidden': !showSettings,
              'overflow-hidden': showSettings,
            }"
          >
            <div
              v-if="showSettings"
              tabindex="0"
              role="button"
              class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"
              @click="showSettings = false"
            />

            <!-- Draggable pending events cards -->
            <Container
              class="flex flex-col"
              tag="div"
              orientation="vertical"
              group-name="unscheduled"
              drag-class="transform cursor-grabbing drop-shadow-sm rotate-2 transform-gpu"
              drag-handle-selector=".dnd-drag-handler"
              :should-accept-drop="() => false"
              :get-child-payload="(idx: number) => getChildPayload(idx)"
              :drop-placeholder="{
                className:
                  'border-muted-200 border-dashed dark:border-muted-800 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white p-4 hover:bg-white',
              }"
              @drag-start="
                (ctx: any) => {
                  clearNew()
                  onPendingEventDragStart(ctx)
                }
              "
            >
              <template v-if="pendingEvents?.length">
                <BaseHeading
                  size="xs"
                  weight="medium"
                  lead="snug"
                  class="text-muted-600 dark:text-muted-400 mb-4 uppercase"
                >
                  Pending events
                </BaseHeading>
                <Draggable
                  v-for="pendingEvent in pendingEvents"
                  :key="pendingEvent.id"
                >
                  <DemoCalendarEventPending
                    :event="pendingEvent"
                    role="button"
                    @click="() => onSelectEvent(pendingEvent as any)"
                  />
                </Draggable>
              </template>
              <div v-else>
                <!-- empty state -->
                <div class="p-4">
                  <img
                    class="mx-auto block max-w-[200px] dark:hidden"
                    src="/img/illustrations/placeholders/flat/placeholder-projects.svg"
                    alt=""
                  >
                  <img
                    class="mx-auto hidden max-w-[200px] dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-projects-dark.svg"
                    alt=""
                  >
                  <div class="mt-4 text-center">
                    <BaseHeading
                      as="h4"
                      size="lg"
                      weight="medium"
                      class="mb-1 text-muted-900 dark:text-white"
                    >
                      <span>No pending events</span>
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      lead="tight"
                      class="text-muted-600 dark:text-muted-400 mx-auto max-w-[200px] font-sans!"
                    >
                      <span>You've planned all your events for this week.</span>
                    </BaseParagraph>
                    <NuxtLink
                      href="#"
                      class="text-primary-500 focus-visible:nui-focus dark:text-sunny pointer-events-auto mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                    >
                      <Icon name="lucide:plus" class="size-3" />
                      <span>New event</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
