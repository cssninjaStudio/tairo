<script setup lang="ts">
import { DatePicker } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'New Event',
})

const dates = ref({
  start: new Date(),
  end: new Date(),
})

const masks = ref({
  input: 'YYYY-MM-DD',
})

const value = ref<string[]>([])

const people = ref([
  'John Brown',
  'Anita Smith',
  'Belen Rodriguez',
  'Sammy Lee',
  'Hermann Schmidt',
  'Chloe Varley',
])
</script>

<template>
  <div class="relative py-3 sm:mx-auto sm:max-w-xl">
    <BaseCard shape="curved" class="relative px-4 py-10 sm:p-10 md:mx-0">
      <div class="mx-auto max-w-md">
        <div class="flex items-center gap-4">
          <div
            class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
          >
            <Icon name="ph:calendar-blank-duotone" class="h-5 w-5" />
          </div>
          <div class="block text-xl font-semibold text-gray-700">
            <BaseHeading as="h3" size="lg" weight="medium">
              Create an Event
            </BaseHeading>
            <BaseText size="sm" class="text-muted-400"
              >Create a new upcoming event.</BaseText
            >
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="grid grid-cols-12 gap-4 py-8">
            <div class="col-span-12">
              <BaseInput
                label="Event title"
                shape="curved"
                icon="ph:ticket-duotone"
                placeholder="Ex: Next team building party"
                :classes="{
                  input: '!h-11 !pl-11',
                  icon: '!h-11 !w-11',
                }"
              />
            </div>
            <div class="col-span-12">
              <BaseInput
                label="Short description"
                shape="curved"
                icon="ph:circles-four-duotone"
                placeholder="Ex: We will meet to have fun together"
                :classes="{
                  input: '!h-11 !pl-11',
                  icon: '!h-11 !w-11',
                }"
              />
            </div>
            <div class="col-span-12">
              <DatePicker
                v-model.range="dates"
                :masks="masks"
                :min-date="new Date()"
                mode="dateTime"
                hide-time-header
                trim-weeks
              >
                <template #default="{ inputValue, inputEvents }">
                  <div class="flex w-full flex-col gap-4 sm:flex-row">
                    <div class="relative grow">
                      <BaseInput
                        shape="curved"
                        label="Start date"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        :classes="{
                          input: '!h-11 !pl-11',
                          icon: '!h-11 !w-11',
                        }"
                      />
                    </div>
                    <div class="relative grow">
                      <BaseInput
                        shape="curved"
                        label="End date"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        :classes="{
                          input: '!h-11 !pl-11',
                          icon: '!h-11 !w-11',
                        }"
                      />
                    </div>
                  </div>
                </template>
              </DatePicker>
            </div>
            <div class="col-span-12">
              <BaseTextarea
                label="Long description"
                shape="curved"
                placeholder="Ex: Some additional details about the event..."
                rows="5"
              />
            </div>
            <div class="col-span-12">
              <BaseAutocomplete
                v-model="value"
                :items="people"
                shape="curved"
                icon="ph:users-duotone"
                placeholder="Add participants..."
                label="Participants"
                multiple
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <BaseInput
                type="color"
                list="eventColors"
                label="Event color"
                shape="curved"
                icon="ph:drop-half-duotone"
                placeholder="Pick an event color..."
                :classes="{
                  input: '!h-11 !pl-11',
                  icon: '!h-11 !w-11',
                }"
              />
              <datalist id="eventColors">
                <option value="#84cc16"></option>
                <option value="#22c55e"></option>
                <option value="#0ea5e9"></option>
                <option value="#6366f1"></option>
                <option value="#8b5cf6"></option>
                <option value="#d946ef"></option>
                <option value="#f43f5e"></option>
                <option value="#facc15"></option>
                <option value="#fb923c"></option>
                <option value="#9ca3af"></option>
              </datalist>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <BaseInput
                list="eventCategories"
                label="Event category"
                shape="curved"
                icon="ph:ticket-duotone"
                placeholder="Pick a category..."
                :classes="{
                  input: '!h-11 !pl-11',
                  icon: '!h-11 !w-11',
                }"
              />
              <datalist id="eventCategories">
                <option value="Chrome"></option>
                <option value="Firefox"></option>
                <option value="Opera"></option>
                <option value="Safari"></option>
                <option value="Microsoft Edge"></option>
              </datalist>
            </div>
          </div>
          <div class="flex items-center gap-4 pt-4">
            <BaseButton shape="curved" class="!h-12 w-full">Cancel</BaseButton>
            <BaseButton shape="curved" color="primary" class="!h-12 w-full"
              >Create</BaseButton
            >
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
