<script lang="ts" setup>
import type { CountryCode, PhoneNumber } from 'libphonenumber-js/max'
import type { CountriesInfo } from '~/utils/bundles/countries'

defineOptions({
  inheritAttrs: false,
})

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
  size?: 'sm' | 'md' | 'lg' | 'xl'
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

const vmodel = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: '',
})
const vcountry = useVModel(props, 'country', emits, {
  passive: true,
  defaultValue: undefined,
})

const iconCheck = useNuiConfig('icon', 'check')
const iconAlert = useNuiConfig('icon', 'alert')

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
      country?.label?.toLowerCase().includes(filter.value.toLowerCase())
      || country?.labelLocal?.toLowerCase().includes(filter.value.toLowerCase())
      || country?.code?.toLowerCase().includes(filter.value.toLowerCase())
      || country?.callingCode?.toLowerCase().includes(filter.value.toLowerCase())
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
function handleInput(value: string, touched = true) {
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
  if (props.disabled)
    return

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

const radiuses = {
  none: '',
  sm: 'rounded-sm *:first:rounded-s-sm *:last:rounded-e-sm *:last:border-e-1',
  md: 'rounded-md *:first:rounded-s-md *:last:rounded-e-md',
  lg: 'rounded-lg *:first:rounded-s-lg *:last:rounded-e-lg',
  full: 'rounded-full *:first:rounded-s-full *:last:rounded-e-full',
} as const

const sizes = {
  sm: 'h-8!',
  md: 'h-10!',
  lg: 'h-12!',
  xl: 'h-14!',
} as const

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
</script>

<template>
  <div
    class="relative flex w-full focus-within:nui-focus *:border *:not-last:border-e-0 *:rounded-e-none *:border-input-default-border *:bg-input-default-bg *:text-input-default-text has-aria-invalid:*:border-destructive-base! has-aria-invalid:ring-destructive-base"
    :class="[
      sizes[props.size],
      radiuses[props.rounded],
    ]"
  >
    <BaseDropdown
      ref="dropdownRef"
      :rounded="props.rounded"
      :disabled="props.disabled"
      class="border-e-0! focus-visible:ring-0"
      :class="[
        sizes[props.size],
      ]"
      :bindings="{
        portal: {
          disabled: true,
        },
      }"
    >
      <template #label>
        <slot name="country-label" v-bind="{ modelValue: vmodel, country: vcountry, validation, filter, currentCountry }">
          <Icon
            v-if="currentCountry?.icon"
            :name="currentCountry.icon"
            class="-mt-0.5"
            :class="iconSize"
          />
          <Icon
            v-else
            :name="props.icon"
            class="-mt-0.5 shrink-0"
            :class="[iconSize]"
          />
        </slot>
      </template>

      <div
        class="flex focus-within:nui-focus *:border *:not-last:border-e-0 *:rounded-e-none *:border-input-default-border *:bg-input-default-bg *:text-input-default-text"
        :class="[
          radiuses[props.rounded === 'full' ? 'lg' : props.rounded],
        ]"
      >
        <div class="bg-input-default-bg text-input-default-text border border-input-default-border flex items-center ps-2 border-e-0">
          <Icon name="ph:magnifying-glass" class="size-4" />
        </div>
        <BaseInput
          ref="filterRef"
          v-model="filter"
          v-focus
          rounded="none"
          size="sm"
          class="rounded-s-none! border-s-0! focus-visible:ring-0"
        />
      </div>

      <div
        v-bind="containerProps"
        :style="{ height: `${dropdownHeight}px` }"
        class="nui-slimscroll mt-2!"
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
                      />
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

    <BaseInput
      ref="inputRef"
      :model-value="internal"
      type="tel"
      autocomplete="tel"
      :size="props.size"
      :aria-invalid="props.error ? 'true' : undefined"
      :disabled="props.disabled"
      rounded="none"
      class="focus-visible:ring-0 aria-invalid:border-s-input-default-border!"
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
        class="bg-input-default-bg text-input-default-text border border-input-default-border flex items-center pe-2 border-s-0!"
      >
        <Icon
          v-if="validation.valid"
          :name="iconCheck"
          class="text-success-500 shrink-0"
          :class="iconSize"
        />
        <Icon
          v-else
          :name="iconAlert"
          class="text-destructive-500 -mt-0.5"
          :class="iconSize"
        />
      </div>
    </slot>
  </div>
</template>
