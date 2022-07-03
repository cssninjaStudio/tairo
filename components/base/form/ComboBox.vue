<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

export type ComboBoxShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface ComboBoxEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface ComboBoxItem {
  id: number
  name: string
  text?: string | undefined
  media?: string | undefined
  icon?: string | undefined
}

export interface ComboBoxProps {
  modelValue?: any
  items: ComboBoxItem[]
  shape?: ComboBoxShapes
  label: string
  hideLabel?: boolean
  loading?: boolean
  disabled?: boolean
}

const emits = defineEmits<ComboBoxEmits>()
const props = withDefaults(defineProps<ComboBoxProps>(), {
  modelValue: '',
  items: () => [],
  shape: 'rounded',
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
</script>

<template>
  <div class="relative w-full">
    <Listbox v-slot="{ open }" v-model="value">
      <ListboxLabel
        v-if="!props.hideLabel"
        class="font-text text-sm text-slate-400"
      >
        {{ props.label }}
      </ListboxLabel>
      <div class="relative">
        <ListboxButton
          :disabled="props.disabled"
          class="relative flex items-center peer pl-4 pr-12 h-10 text-sm leading-5 font-text w-full bg-white text-slate-600 border border-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-300/50 dark:focus:shadow-slate-800/50 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:bg-slate-900/75 dark:text-slate-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-slate-300 dark:focus:outline-slate-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
          :class="[
            props.shape === 'rounded' && 'rounded',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
            props.loading && 'pointer-events-none',
          ]"
        >
          <BaseAvatar
            v-if="value.media && !value.icon"
            :src="value.media"
            size="xs"
            class="mr-2 -ml-2 !w-6 !h-6"
          />
          <BaseIconBox
            v-else-if="value.icon && !value.media"
            size="xs"
            shape="rounded"
            class="mr-2 -ml-2 !w-6 !h-6"
          >
            <BaseIcon :name="value.icon" class="w-4 h-4" />
          </BaseIconBox>
          <span
            class="block text-left truncate"
            :class="props.loading && 'text-transparent'"
          >
            {{ value.name }}
          </span>
          <span
            class="w-10 pointer-events-none absolute inset-y-0 right-0 border-l border-slate-300 dark:border-slate-700 flex items-center justify-center"
          >
            <BaseIcon
              name="lucide:chevron-down"
              class="h-5 w-5 text-slate-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            />
          </span>
          <div
            v-if="props.loading"
            class="absolute top-0 left-0 flex items-center h-10 w-full px-4"
          >
            <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
          </div>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-2 text-base shadow-lg focus:ring-1 focus:ring-primary-500/50 focus:outline-none sm:text-sm slimscroll z-10"
            :class="[
              props.shape === 'rounded' && 'rounded-md',
              props.shape === 'curved' && 'rounded-xl',
              props.shape === 'full' && 'rounded-2xl',
            ]"
          >
            <ListboxOption
              v-for="item in items"
              v-slot="{ active, selected }"
              :key="item.name"
              :value="item"
              as="template"
            >
              <li
                class="relative flex items-center cursor-pointer select-none py-2 px-3"
                :class="[
                  active
                    ? 'bg-primary-100 text-primary-900 dark:bg-slate-800'
                    : '',
                  props.shape === 'rounded' && 'rounded',
                  props.shape === 'curved' && 'rounded-md',
                  props.shape === 'full' && 'rounded-lg',
                ]"
              >
                <BaseAvatar
                  v-if="item.media && !item.icon"
                  :src="item.media"
                  size="xs"
                  class="mr-3"
                />
                <BaseIconBox
                  v-else-if="item.icon && !item.media"
                  size="sm"
                  shape="rounded"
                  class="mr-1 -ml-2 text-slate-500 dark:text-slate-400"
                >
                  <BaseIcon
                    :name="item.icon"
                    class="w-5 h-5"
                    :class="[active && 'text-primary-500']"
                  />
                </BaseIconBox>
                <div>
                  <BaseHeading
                    as="h4"
                    :weight="selected ? 'semibold' : 'normal'"
                    size="sm"
                    class="block truncate text-slate-800 dark:text-white"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseText v-if="item.text" size="xs" class="text-slate-400">
                    {{ item.text }}
                  </BaseText>
                </div>
                <span
                  v-if="selected"
                  class="flex items-center ml-auto text-primary-600"
                >
                  <BaseIcon name="lucide:check" class="h-4 w-4" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
