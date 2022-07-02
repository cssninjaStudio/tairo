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

export interface AutocompleteEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface AutocompleteItem {
  id: number
  name: string
  text?: string | undefined
  media?: string | undefined
  icon?: string | undefined
}

export interface AutocompleteProps {
  modelValue?: any
  items: AutocompleteItem[]
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
      class="font-text text-sm text-slate-400"
    >
      {{ props.label }}
    </ComboboxLabel>

    <div v-if="props.multiple" class="block">
      <ul v-if="filteredItems.length > 0" class="flex flex-wrap gap-1 my-2">
        <li v-for="item in value" :key="item.id">
          <div
            class="flex items-center font-text text-xs font-medium py-2 pr-2 pl-3 text-slate-400 bg-slate-100 dark:bg-slate-700"
            :class="[
              props.shape === 'rounded' && 'rounded-lg',
              props.shape === 'curved' && 'rounded-xl',
              props.shape === 'full' && 'rounded-full',
            ]"
          >
            {{ item.name }}
            <button type="button" @click="removeItem(item.name)">
              <i class="i-lucide-x block w-3 h-3 ml-1"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="group relative">
      <ComboboxInput
        class="peer h-10 text-sm leading-5 font-text w-full bg-white text-slate-600 border border-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-300/50 dark:focus:shadow-slate-800/50 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:bg-slate-900/75 dark:text-slate-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-slate-300 dark:focus:outline-slate-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
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
        v-if="props.icon && !value.icon"
        class="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-slate-400 group-focus-within:text-primary-500 transition-colors duration-300"
      >
        <i class="w-4 h-4" :class="props.icon"></i>
      </div>
      <div
        v-else-if="props.icon && value.icon"
        class="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-slate-400 group-focus-within:text-primary-500 transition-colors duration-300"
      >
        <i class="w-4 h-4" :class="value.icon"></i>
      </div>
      <button
        v-if="props.clearable && value"
        type="button"
        class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300 z-10"
        @click="clear"
      >
        <i class="i-lucide-x w-4 h-4"></i>
      </button>
      <div
        v-if="props.loading"
        class="absolute top-0 left-0 flex items-center h-10 w-full px-4"
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
        class="absolute mt-1 max-h-[265px] w-full overflow-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1 text-base shadow-lg outline-none sm:text-sm slimscroll"
        :class="[
          props.shape === 'rounded' && 'rounded-lg',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-2xl',
        ]"
      >
        <!-- Placeholder -->
        <div
          v-if="filteredItems.length === 0 && query !== ''"
          class="relative cursor-default select-none py-2 px-4 text-slate-700"
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
            class="flex items-center p-2 cursor-pointer transition-colors duration-300"
            :class="[
              active ? 'bg-slate-100 dark:bg-slate-700' : '',
              props.shape === 'rounded' && 'rounded-md',
              props.shape === 'curved' && 'rounded-lg',
              props.shape === 'full' && 'rounded-xl',
            ]"
          >
            <BaseAvatar
              v-if="item.media && !item.icon"
              :picture="item.media"
              size="sm"
              class="mr-3"
            />
            <BaseIconBox
              v-else-if="item.icon && !item.media"
              size="sm"
              shape="rounded"
              class="mr-1"
            >
              <i
                class="w-4 h-4"
                :class="[
                  item.icon,
                  selected ? 'text-primary-500' : 'text-slate-500',
                ]"
              ></i>
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                :weight="selected ? 'semibold' : 'normal'"
                size="sm"
                class="text-slate-800 dark:text-white"
              >
                {{ item.name }}
              </BaseHeading>
              <BaseText v-if="item.text" size="xs" class="text-slate-400">
                {{ item.text }}
              </BaseText>
            </div>
            <div
              v-show="selected"
              class="flex items-center justify-center ml-auto"
              :class="[item.media && 'w-8 h-8', item.icon && 'w-8 h-8']"
            >
              <i class="i-lucide-check block w-4 h-4 text-success-500"></i>
            </div>
          </div>
        </ComboboxOption>
      </ComboboxOptions>
    </TransitionRoot>
  </Combobox>
</template>
