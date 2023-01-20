<script setup lang="ts">
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
const no_of_days = ref([])
const blankdays = ref([])

const initDate = () => {
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

const formatDateForDisplay = (date: any) => {
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

const isSelectedDate = (date: any) => {
  const d = new Date(year.value, month.value, date)
  return datepickerValue.value === formatDateForDisplay(d) ? true : false
}

const isToday = (date: any) => {
  const today = new Date()
  const d = new Date(year.value, month.value, date)
  return today.toDateString() === d.toDateString() ? true : false
}

const getDateValue = (date: any) => {
  let selectedDate = new Date(year.value, month.value, date)
  datepickerValue.value = formatDateForDisplay(selectedDate)
  isSelectedDate(date)
  // showDatepicker.value = false;
}

const getNoOfDays = () => {
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
  blankdays.value = blankdaysArray
  no_of_days.value = daysArray
}

const incrementDays = () => {
  if (month.value == 0) {
    year.value--
    month.value = 12
  } else {
    month.value--
  }
  getNoOfDays()
}

const decrementDays = () => {
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

const props = defineProps<{
  expanded?: boolean
}>()
</script>

<template>
  <div
    class="relative w-full mx-auto font-sans pb-5"
    :class="props.expanded ? 'max-w-[310px]' : 'max-w-[240px]'"
  >
    <input type="hidden" name="date" :value="datepickerValue" />
    <input
      type="text"
      @click="showDatepicker = !showDatepicker"
      v-model="datepickerValue"
      class="hidden w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none text-muted-600 font-medium focus:ring focus:ring-blue-600 focus:ring-opacity-50"
      placeholder="Select date"
      readonly
    />

    <div class="w-full">
      <div class="flex justify-between items-center mb-6">
        <div
          class="text-base font-medium space-x-2 text-muted-800 dark:text-muted-100"
        >
          <span>{{ MONTH_NAMES[month] }}</span>
          <span>{{ year }}</span>
        </div>
        <div>
          <button
            type="button"
            class="focus:outline-none focus:shadow-outline transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-muted-100 p-1 rounded-full"
            @click="incrementDays"
          >
            <svg
              class="h-5 w-5 text-muted-400 inline-flex"
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
            class="focus:outline-none focus:shadow-outline transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-muted-100 p-1 rounded-full"
            @click="decrementDays"
          >
            <svg
              class="h-5 w-5 text-muted-400 inline-flex"
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

      <div class="flex flex-wrap mb-3 -mx-1">
        <template v-for="(day, index) in DAYS" :key="index">
          <div style="width: 14.26%" class="px-0.5">
            <div
              class="text-muted-400 dark:text-muted-300 font-medium text-center text-xs"
            >
              {{ day }}
            </div>
          </div>
        </template>
      </div>

      <div class="flex flex-wrap -mx-1">
        <template v-for="blankday in blankdays">
          <div
            style="width: 14.28%"
            class="text-center border p-1 border-transparent text-sm"
          ></div>
        </template>
        <template v-for="(date, dateIndex) in no_of_days" :key="dateIndex">
          <div style="width: 14.28%" class="flex items-center justify-center">
            <div
              @click="getDateValue(date)"
              class="h-8 w-8 flex items-center justify-center mx-auto cursor-pointer text-center text-sm leading-none rounded-full transition ease-in-out duration-100"
              :class="[
                isToday(date) === true
                  ? 'bg-primary-100 dark:bg-primary-500/20 text-primary-500'
                  : '',
                isToday(date) === false && isSelectedDate(date) === false
                  ? 'text-muted-500 dark:text-muted-400 hover:text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-500/20'
                  : '',
                isSelectedDate(date) === true
                  ? 'bg-primary-500 text-white hover:bg-opacity-75'
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
