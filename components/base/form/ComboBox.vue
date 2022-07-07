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
        class="font-sans text-sm text-muted-400"
      >
        {{ props.label }}
      </ListboxLabel>
      <div class="relative">
        <ListboxButton
          :disabled="props.disabled"
          class="peer ninja-focus relative flex h-10 w-full items-center border border-muted-300 bg-white pl-4 pr-12 font-sans text-sm leading-5 text-muted-600 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-lg focus:shadow-muted-300/50 disabled:cursor-not-allowed disabled:opacity-75 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50"
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
            class="mr-2 -ml-2 !h-6 !w-6"
          />
          <BaseIconBox
            v-else-if="value.icon && !value.media"
            size="xs"
            shape="rounded"
            class="mr-2 -ml-2 !h-6 !w-6"
          >
            <BaseIcon :name="value.icon" class="h-4 w-4" />
          </BaseIconBox>
          <span
            class="block truncate text-left"
            :class="props.loading && 'text-transparent'"
          >
            {{ value.name }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-center border-l border-muted-300 dark:border-muted-700"
          >
            <BaseIcon
              name="lucide:chevron-down"
              class="h-5 w-5 text-muted-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            />
          </span>
          <div
            v-if="props.loading"
            class="absolute top-0 left-0 flex h-10 w-full items-center px-4"
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
            class="slimscroll absolute z-10 mt-1 max-h-60 w-full overflow-auto border border-muted-200 bg-white p-2 text-base shadow-lg focus:outline-none focus:ring-1 focus:ring-primary-500/50 dark:border-muted-600 dark:bg-muted-700 sm:text-sm"
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
                class="relative flex cursor-pointer select-none items-center py-2 px-3"
                :class="[
                  active
                    ? 'bg-primary-100 text-primary-900 dark:bg-muted-800'
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
                  class="mr-1 -ml-2 text-muted-500 dark:text-muted-400"
                >
                  <BaseIcon
                    :name="item.icon"
                    class="h-5 w-5"
                    :class="[active && 'text-primary-500']"
                  />
                </BaseIconBox>
                <div>
                  <BaseHeading
                    as="h4"
                    :weight="selected ? 'semibold' : 'normal'"
                    size="sm"
                    class="block truncate text-muted-800 dark:text-white"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseText v-if="item.text" size="xs" class="text-muted-400">
                    {{ item.text }}
                  </BaseText>
                </div>
                <span
                  v-if="selected"
                  class="ml-auto flex items-center text-primary-600"
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
