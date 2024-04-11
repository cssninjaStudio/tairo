<script lang="ts" setup>
import type { PhoneNumber, CountryCode } from 'libphonenumber-js/max'
import type { CountriesInfo } from '~/utils/bundles/countries'

const props = withDefaults(defineProps<{
  /**
   * The value of the input.
   */
  modelValue?: string
  /**
   * Default country code, in ISO 3166-1 alpha-2 format.
   */
  country?: string
  /**
   * When set to `national`, the country indicator is omitted.
   */
  format?: 'national' | 'international'
  /**
   * The max height of the dropdown.
   */
  height?: number
  /**
   * The height of each dropdown item.
   */
  itemHeight?: number
  /**
   * Default icon used when no country is selected/detected.
   */
  icon?: string
  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The radius of the input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean
  disabled?: boolean
}>(), {
  modelValue: '',
  rounded: 'sm',
  height: 200,
  itemHeight: 47,
  format: 'international',
  icon: 'ph:phone',
  error: false,
  size: 'md',
  country: undefined,
})

const emits = defineEmits<{
  'update:modelValue': [value?: string]
  'update:country': [value?: string]
  'validation': [state: { valid: boolean, touched: boolean, error: string }]
}>()

defineOptions({
  inheritAttrs: false,
})

const appConfig = useAppConfig()

const vmodel = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: '',
})
const vcountry = useVModel(props, 'country', emits, {
  passive: true,
  defaultValue: undefined,
})

const countriesMap = shallowRef<CountriesInfo>({})
const countries = computed(() => Object.values(countriesMap.value))
const possibleCountries = shallowRef<CountryCode[]>([])

const filter = ref('')

const countriesFiltered = computed(() => {
  const source = possibleCountries.value.length > 0
    ? possibleCountries.value.map(code => countriesMap.value[code])
    : countries.value

  if (!filter.value) {
    return source
  }

  return source.filter((country) => {
    return (
      country.label.toLowerCase().includes(filter.value.toLowerCase())
      || country.labelLocal.toLowerCase().includes(filter.value.toLowerCase())
      || country.code.toLowerCase().includes(filter.value.toLowerCase())
      || country.callingCode
        .toLowerCase()
        .includes(filter.value.toLowerCase())
    )
  })
})

const currentCountry = computed(() => {
  if (!vcountry.value || !countriesMap.value) {
    return null
  }
  return countriesMap.value[vcountry.value.toUpperCase()]
})

let parsed: PhoneNumber | undefined

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let parser: typeof import('libphonenumber-js/max')['parsePhoneNumber'] | undefined

const internal = ref('')
const dropdownRef = ref<any>()
const filterRef = ref<any>()
const inputRef = ref<any>()

const validation = reactive({
  valid: false,
  touched: false,
  error: '',
})

defineExpose({
  modelValue: vmodel,
  country: vcountry,
  validation,
  currentCountry,
  possibleCountries,
  filter,
  filterRef,
  dropdownRef,
  inputRef,
})

const dropdownHeight = computed(() => {
  const maxHeight = props.height
  const items = countriesFiltered.value.length
  const height = Math.max(1, items) * props.itemHeight
  return Math.min(height, maxHeight)
})

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  countriesFiltered,
  {
    itemHeight: props.itemHeight,
  },
)

let parsePending = false
const handleInput = (value: string, touched = true) => {
  internal.value = value ?? ''
  validation.touched = touched
  possibleCountries.value = []

  try {
    formatInput(value)
  }
  catch (error) {
    validation.valid = false
    validation.error = (error instanceof Error) ? error.message : ''
    emits('validation', validation)
  }
  finally {
    vmodel.value = internal.value
  }
}

function selectCountry(country?: CountryCode | string) {
  if (props.disabled) return

  vcountry.value = country
  handleInput(internal.value, validation.touched)

  setTimeout(() => {
    inputRef.value?.el?.focus()
  }, 100)
}
function formatInput(value: string) {
  if (!parser) {
    // delay parsing until libphonenumber-js is loaded
    parsePending = true
    return
  }
  parsed = parser(value, {
    defaultCountry: (vcountry.value?.toUpperCase() || currentCountry.value?.code) as CountryCode,
  })
  if (!parsed) {
    throw new Error('INVALID_FORMAT')
  }

  const isPossible = parsed.isPossible()
  possibleCountries.value = parsed.getPossibleCountries()
  if (possibleCountries.value.length === 0) {
    throw new Error('NO_POSSIBLE_COUNTRIES')
  }

  if (!vcountry.value || (vcountry.value && !possibleCountries.value.includes(vcountry.value as CountryCode))) {
    vcountry.value = possibleCountries.value[0]
  }

  if (!isPossible) {
    throw new Error('PHONE_NUMBER_NOT_POSSIBLE')
  }

  if (!validation.valid) {
    validation.valid = true
    validation.error = ''
    emits('validation', validation)
  }

  if (props.format === 'international') {
    internal.value = parsed.formatInternational()
    return
  }
  internal.value = parsed.formatNational()
}

// scroll to top when filter changes, to ensure results are visible
watch(filter, () => {
  scrollTo(0)
})

// update internal value when model changes externally
watch(
  () => props.modelValue,
  (value) => {
    if (value === internal.value) {
      return
    }
    handleInput(value, validation.touched)
  },
  {
    immediate: true,
  },
)

// delay filter input focus when dropdown is opened
let focusTimeout: ReturnType<typeof setTimeout>
watch(filterRef, () => {
  if (filterRef.value) {
    clearTimeout(focusTimeout)
    focusTimeout = setTimeout(() => {
      filterRef.value?.el?.focus()
    }, 100)
  }
})
onUnmounted(() => {
  clearTimeout(focusTimeout)
})

// lazy load heavy dependencies
onNuxtReady(() => {
  import('~/utils/bundles/countries').then(({ getPhoneCountries }) => {
    countriesMap.value = getPhoneCountries()
  })
  import('libphonenumber-js/max').then(({ parsePhoneNumber }) => {
    parser = parsePhoneNumber
    if (parsePending) {
      // if there was a pending parse, run it now
      parsePending = false
      handleInput(internal.value, validation.touched)
    }
  })
})

// styles
const addonHeight = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-8'
    case 'lg':
      return 'h-12'
    case 'md':
    default:
      return 'h-10'
  }
})
const addonTop = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'top-[1.58rem]'
    case 'lg':
      return 'top-[1.7rem]'
    case 'md':
    default:
      return 'top-[1.5rem]'
  }
})
const iconSize = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'w-6'
    case 'sm':
    case 'md':
    default:
      return 'w-4'
  }
})
const inputStart = computed(() => {
  switch (props.size) {
    case 'lg':
      return '!ps-[5rem]'
    case 'sm':
    case 'md':
    default:
      return '!ps-[4.5rem]'
  }
})
const dropdownBorder = computed(() => {
  switch (props.rounded) {
    case 'sm':
      return '[&_.nui-text-button]:rounded-s'
    case 'md':
      return '[&_.nui-text-button]:rounded-s-md'
    case 'lg':
      return '[&_.nui-text-button]:rounded-s-xl'
    case 'full':
      return '[&_.nui-text-button]:rounded-s-full'
    case 'none':
      return ''
  }
})
</script>

<template>
  <div class="relative flex w-full">
    <div
      class="absolute start-0 flex items-center"
      :class="[
        addonHeight,
        $attrs.label && !('label-float' in $attrs) ? addonTop : 'top-0',
      ]"
    >
      <BaseDropdown
        ref="dropdownRef"
        variant="text"
        :rounded="props.rounded"
        size="lg"
        class="[&_.nui-text-button]:border-muted-200 text-muted-400 dark:[&_.nui-text-button]:border-muted-800 flex h-full [&_.nui-text-button]:relative [&_.nui-text-button]:z-10 [&_.nui-text-button]:size-full [&_.nui-text-button]:border-e [&_.nui-text-button]:pe-2 [&_.nui-text-button]:ps-4"
        :class="dropdownBorder"
      >
        <template #label>
          <slot name="country-label" v-bind="{ modelValue: vmodel, country: vcountry, validation, filter, currentCountry }">
            <Icon
              v-if="currentCountry?.icon"
              :name="currentCountry.icon"
              class="-mt-0.5"
              :class="iconSize"
            >
              {{ currentCountry.code }}
            </Icon>
            <Icon
              v-else
              :name="props.icon"
              class="-mt-0.5"
              :class="[iconSize, props.error ? 'text-danger-500' : '']"
            />
          </slot>
        </template>

        <BaseInput
          ref="filterRef"
          v-model="filter"
          :rounded="rounded === 'full' ? 'lg' : rounded"
          size="sm"
          icon="ph:magnifying-glass"
        />

        <div
          v-bind="containerProps"
          :style="{ height: `${dropdownHeight}px` }"
          class="nui-slimscroll !mt-2"
        >
          <div v-bind="wrapperProps">
            <div
              v-if="list.length === 0"
              :style="{ height: `${itemHeight}px` }"
            >
              <slot name="country-placeholder" v-bind="{ modelValue: vmodel, country: vcountry, validation, filter, currentCountry, selectCountry }">
                <BaseDropdownItem
                  title="No results"
                  text="Try searching by country name or code"
                  :rounded="props.rounded === 'full' ? 'lg' : props.rounded"
                />
              </slot>
            </div>
            <template v-else>
              <div
                v-for="{ data } in list"
                :key="data?.code"
                :style="{ height: `${itemHeight}px` }"
              >
                <slot name="country-item" v-bind="{ item: data, modelValue: vmodel, country: vcountry, validation, filter, currentCountry, selectCountry }">
                  <BaseDropdownItem
                    :title="data?.label"
                    :text="`+${data?.callingCode}`"
                    :tabindex="0"
                    :rounded="props.rounded === 'full' ? 'lg' : props.rounded"
                    @click="selectCountry(data?.code)"
                    @keyboard.enter.prevent="selectCountry(data?.code)"
                  >
                    <template #start>
                      <span class="me-1 size-6 shrink-0 text-center">
                        <Icon
                          v-if="data?.icon"
                          :name="data.icon"
                          class="size-6"
                        >
                          {{ data.code }}
                        </Icon>
                      </span>
                    </template>
                    <template #end>
                      <Icon
                        v-if="vcountry === data?.code"
                        name="ph:check"
                        class="text-success-500 size-4 shrink-0"
                      />
                    </template>
                  </BaseDropdownItem>
                </slot>
              </div>
            </template>
          </div>
        </div>
      </BaseDropdown>
    </div>

    <BaseInput
      ref="inputRef"
      :model-value="internal"
      type="tel"
      autocomplete="tel"
      :size="props.size"
      :error="props.error"
      :disabled="props.disabled"
      :rounded="props.rounded"
      :classes="{ wrapper: 'relative grow [&_.nui-input-placeload]:ms-16', input: `${inputStart} !pe-8`, icon: '!w-16' }"
      v-bind="$attrs"
      @update:model-value="
        (value) => {
          handleInput(String(value))
        }
      "
    />
    <slot
      name="action"
      v-bind="{ modelValue: vmodel, country: vcountry, validation, filter, currentCountry, selectCountry }"
    >
      <div
        v-if="validation.touched && vmodel"
        class="border-muted-200 dark:border-muted-800 absolute end-0 z-[1] flex items-center pe-3"
        :class="[
          addonHeight,
          $attrs.label && !('label-float' in $attrs) ? addonTop : 'top-0',
        ]"
      >
        <Icon
          v-if="validation.valid"
          name="ph:check"
          class="text-success-500 shrink-0"
          :class="iconSize"
        />
        <Icon
          v-else
          :name="`ph:x`"
          class="text-danger-500 -mt-0.5"
          :class="iconSize"
        />
      </div>
    </slot>
  </div>
</template>
