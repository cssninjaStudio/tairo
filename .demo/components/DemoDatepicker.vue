<script setup lang="ts">
const props = defineProps<{
  expanded?: boolean
}>()

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const MONTH_SHORT_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const showDatepicker = ref(false)
const datepickerValue = ref('')
const selectedDate = ref('2022-12-29')
const dateFormat = ref('DD-MM-YYYY')
const month = ref()
const year = ref()
const numberOfDays = ref<number[]>([])
const blankDays = ref<number[]>([])

function initDate() {
  let today
  if (selectedDate.value) {
    today = new Date(Date.parse(selectedDate.value))
  } else {
    today = new Date()
  }
  month.value = today.getMonth()
  year.value = today.getFullYear()
  datepickerValue.value = formatDateForDisplay(today)
}

function formatDateForDisplay(date: any) {
  let formattedDay = DAYS[date.getDay()]
  let formattedDate = ('0' + date.getDate()).slice(-2) // appends 0 (zero) in single digit date
  let formattedMonth = MONTH_NAMES[date.getMonth()]
  let formattedMonthShortName = MONTH_SHORT_NAMES[date.getMonth()]
  let formattedMonthInNumber = ('0' + (parseInt(date.getMonth()) + 1)).slice(-2)
  let formattedYear = date.getFullYear()
  if (dateFormat.value === 'DD-MM-YYYY') {
    return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}` // 02-04-2022
  }
  if (dateFormat.value === 'YYYY-MM-DD') {
    return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}` // 2022-04-02
  }
  if (dateFormat.value === 'D d M, Y') {
    return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}` // Tue 02 Mar 2022
  }
  return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`
}

function isSelectedDate(date: any) {
  const d = new Date(year.value, month.value, date)
  return datepickerValue.value === formatDateForDisplay(d) ? true : false
}

function isToday(date: any) {
  const today = new Date()
  const d = new Date(year.value, month.value, date)
  return today.toDateString() === d.toDateString() ? true : false
}

function getDateValue(date: any) {
  let selectedDate = new Date(year.value, month.value, date)
  datepickerValue.value = formatDateForDisplay(selectedDate)
  isSelectedDate(date)
}

function getNoOfDays() {
  let daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
  // find where to start calendar day of week
  let dayOfWeek = new Date(year.value, month.value).getDay()
  let blankdaysArray = []
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i)
  }
  let daysArray = []
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i)
  }
  blankDays.value = blankdaysArray
  numberOfDays.value = daysArray
}

function incrementDays() {
  if (month.value == 0) {
    year.value--
    month.value = 12
  } else {
    month.value--
  }
  getNoOfDays()
}

function decrementDays() {
  if (month.value == 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
  getNoOfDays()
}

onMounted(() => {
  initDate()
  getNoOfDays()
})
</script>

<template>
  <div
    class="relative mx-auto w-full pb-5 font-sans"
    :class="props.expanded ? 'max-w-[310px]' : 'max-w-[240px]'"
  >
    <input type="hidden" name="date" :value="datepickerValue" />
    <input
      type="text"
      @click="showDatepicker = !showDatepicker"
      v-model="datepickerValue"
      class="text-muted-600 hidden w-full rounded-lg py-3 pe-10 ps-4 font-medium leading-none shadow-sm focus:outline-none focus:ring focus:ring-blue-600/50"
      placeholder="Select date"
      readonly
    />

    <div class="w-full">
      <div class="mb-6 flex items-center justify-between">
        <div
          class="text-muted-800 dark:text-muted-100 space-x-2 text-base font-medium"
        >
          <span>{{ MONTH_NAMES[month] }}</span>
          <span>{{ year }}</span>
        </div>
        <div>
          <button
            type="button"
            class="focus:shadow-outline hover:bg-muted-100 inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out focus:outline-none"
            @click="incrementDays"
          >
            <svg
              class="text-muted-400 inline-flex h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            class="focus:shadow-outline hover:bg-muted-100 inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out focus:outline-none"
            @click="decrementDays"
          >
            <svg
              class="text-muted-400 inline-flex h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="-mx-1 mb-3 flex flex-wrap">
        <template v-for="(day, index) in DAYS" :key="index">
          <div style="width: 14.26%" class="px-0.5">
            <div
              class="text-muted-400 dark:text-muted-300 text-center text-xs font-medium"
            >
              {{ day }}
            </div>
          </div>
        </template>
      </div>

      <div class="-mx-1 flex flex-wrap">
        <template v-for="blankday in blankDays" :key="blankday">
          <div
            style="width: 14.28%"
            class="border border-transparent p-1 text-center text-sm"
          ></div>
        </template>
        <template v-for="(date, dateIndex) in numberOfDays" :key="dateIndex">
          <div style="width: 14.28%" class="flex items-center justify-center">
            <div
              @click="getDateValue(date)"
              class="mx-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-center text-sm leading-none transition duration-100 ease-in-out"
              :class="[
                isToday(date) === true
                  ? 'bg-primary-100 dark:bg-primary-500/20 text-primary-500'
                  : '',
                isToday(date) === false && isSelectedDate(date) === false
                  ? 'text-muted-500 dark:text-muted-400 hover:text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-500/20'
                  : '',
                isSelectedDate(date) === true
                  ? 'bg-primary-500 hover:bg-primary-500/75 text-white'
                  : '',
              ]"
            >
              {{ date }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
