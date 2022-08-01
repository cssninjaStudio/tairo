<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'

export type AutocompleteShapes = 'straight' | 'rounded' | 'curved' | 'full'

export type OnShapeEvent = (event: 'shape', value?: AutocompleteShapes) => void

/**
 * emit update:modelValue on input change
 */
export type OnUpdateModelValueEvent = (
  event: 'update:modelValue',
  value?: any
) => void

export interface AutocompleteEmits
  extends OnShapeEvent,
    OnUpdateModelValueEvent {
  (event: 'shapeRequired', value: AutocompleteShapes): void
  (event: 'nested', value?: { shape: string; foo: number[] }): void
}

export interface AutocompleteItem {
  id: number
  name: string
  /**
   * The text
   *
   * @default 'rounded'
   * @since v1.0.0
   * @see https://v3.nuxtjs.org/
   * @example
   * ```vue
   * <template>
   *   <BaseAutocomplete shape="straight" />
   *   <BaseAutocomplete />
   *   <BaseAutocomplete shape="curved" />
   *   <BaseAutocomplete shape="full" />
   * </template>
   * ```
   */
  text?: string | undefined
  media?: string | undefined
  icon?: string | undefined
}

export interface AutocompleteProps {
  modelValue?: any
  items: AutocompleteItem[]
  /**
   * The shape of the autocomplete input.
   *
   * @default 'rounded'
   * @since v1.0.0
   * @see https://v3.nuxtjs.org/
   * @example
   * ```vue
   * <template>
   *   <BaseAutocomplete shape="straight" />
   *   <BaseAutocomplete />
   *   <BaseAutocomplete shape="curved" />
   *   <BaseAutocomplete shape="full" />
   * </template>
   * ```
   */
  shape?: AutocompleteShapes
  label: string
  hideLabel?: boolean
  icon?: string
  placeholder?: string
  loading?: boolean
  disabled?: boolean
  clearable?: boolean
  multiple?: boolean
}

const emits = defineEmits<AutocompleteEmits>()
const props = withDefaults(defineProps<AutocompleteProps>(), {
  modelValue: '',
  items: () => [],
  shape: 'rounded',
  icon: undefined,
  placeholder: '',
})

const value = ref(props.modelValue)
watch(value, () => {
  emits('update:modelValue', value.value)
})
watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue
  }
)

const items = ref(props.items)
const query = ref('')

const filteredItems = computed(() =>
  query.value === ''
    ? items.value
    : items.value.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase())
      })
)

const clear = () => {
  value.value = ''
}

const removeItem = function (name: string) {
  for (let i = value.value.length - 1; i >= 0; --i) {
    if (value.value[i].name === name) {
      value.value.splice(i, 1)
    }
  }
}
</script>

<template>
  <Combobox
    v-model="value"
    :multiple="props.multiple"
    class="relative w-full"
    as="div"
  >
    <ComboboxLabel
      v-if="!props.hideLabel"
      class="font-sans text-sm text-muted-400"
    >
      {{ props.label }}
    </ComboboxLabel>

    <div v-if="props.multiple" class="block">
      <ul v-if="filteredItems.length > 0" class="my-2 flex flex-wrap gap-1">
        <li v-for="item in value" :key="item.id">
          <div
            class="flex items-center bg-muted-100 py-2 pr-2 pl-3 font-sans text-xs font-medium text-muted-400 dark:bg-muted-700"
            :class="[
              props.shape === 'rounded' && 'rounded-lg',
              props.shape === 'curved' && 'rounded-xl',
              props.shape === 'full' && 'rounded-full',
            ]"
          >
            {{ item.name }}
            <button type="button" @click="removeItem(item.name)">
              <BaseIcon name="lucide:x" class="ml-1 block h-3 w-3" />
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="group relative">
      <ComboboxInput
        class="peer ninja-focus h-10 w-full border border-muted-300 bg-white font-sans text-sm leading-5 text-muted-600 outline-transparent transition-all duration-300 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-lg focus:shadow-muted-300/50 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-75 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50"
        :class="[
          props.icon ? 'pl-9 pr-4' : 'px-4',
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
          props.loading && '!text-transparent !placeholder:text-transparent',
        ]"
        :display-value="(item:any) => item.name"
        placeholder="Search..."
        :disabled="props.disabled"
        @change="query = $event.target.value"
      />
      <div
        v-if="props.icon || value?.icon"
        class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center text-muted-400 transition-colors duration-300 group-focus-within:text-primary-500"
      >
        <BaseIcon :name="value?.icon ?? props.icon" class="h-4 w-4" />
      </div>
      <button
        v-if="props.clearable && value"
        type="button"
        class="absolute top-0 right-0 z-10 flex h-10 w-10 items-center justify-center text-muted-400 transition-colors duration-300 hover:text-muted-700 dark:hover:text-muted-200"
        @click="clear"
      >
        <BaseIcon name="lucide:x" class="h-4 w-4" />
      </button>
      <div
        v-if="props.loading"
        class="absolute top-0 left-0 flex h-10 w-full items-center px-4"
      >
        <BasePlaceload
          class="h-3 w-full max-w-[75%] rounded"
          :class="props.icon && 'ml-6'"
        />
      </div>
    </div>

    <TransitionRoot
      leave="transition ease-in duration-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @after-leave="query = ''"
    >
      <ComboboxOptions
        as="div"
        class="slimscroll absolute mt-1 max-h-[265px] w-full overflow-auto border border-muted-200 bg-white py-1 text-base shadow-lg outline-none dark:border-muted-700 dark:bg-muted-800 sm:text-sm"
        :class="[
          props.shape === 'rounded' && 'rounded-lg',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-2xl',
        ]"
      >
        <!-- Placeholder -->
        <div
          v-if="filteredItems.length === 0 && query !== ''"
          class="relative cursor-default select-none py-2 px-4 text-muted-700"
        >
          Nothing found.
        </div>
        <ComboboxOption
          v-for="item in filteredItems"
          v-slot="{ active, selected }"
          :key="item.id"
          class="py-1 px-2"
          as="div"
          :value="item"
        >
          <div
            class="flex cursor-pointer items-center p-2 transition-colors duration-300"
            :class="[
              active ? 'bg-muted-100 dark:bg-muted-700' : '',
              props.shape === 'rounded' && 'rounded-md',
              props.shape === 'curved' && 'rounded-lg',
              props.shape === 'full' && 'rounded-xl',
            ]"
          >
            <BaseAvatar
              v-if="item.media && !item.icon"
              :src="item.media"
              size="sm"
              class="mr-3"
            />
            <BaseIconBox
              v-else-if="item.icon && !item.media"
              size="sm"
              shape="rounded"
              class="mr-1"
            >
              <BaseIcon
                :name="item.icon"
                class="h-4 w-4"
                :class="[selected ? 'text-primary-500' : 'text-muted-500']"
              />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                :weight="selected ? 'semibold' : 'normal'"
                size="sm"
                class="text-muted-800 dark:text-white"
              >
                {{ item.name }}
              </BaseHeading>
              <BaseText v-if="item.text" size="xs" class="text-muted-400">
                {{ item.text }}
              </BaseText>
            </div>
            <div
              v-show="selected"
              class="ml-auto flex items-center justify-center"
              :class="[item.media && 'w-8 h-8', item.icon && 'w-8 h-8']"
            >
              <BaseIcon
                name="lucide:check"
                class="block h-4 w-4 text-success-500"
              />
            </div>
          </div>
        </ComboboxOption>
      </ComboboxOptions>
    </TransitionRoot>
  </Combobox>
</template>
