<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */
import { switchColorShades } from '~/utils/bundles/colors-switcher'
import colors from 'tailwindcss/colors'

const { layouts, activeLayoutName } = useLayoutSwitcher()
const route = useRoute()
const isSwitcherOpen = useState('switcher-open', () => false)
const currentPrimary = ref('violet')
const currentMuted = ref('slate')

// Close the modal when the primary or muted color changes
watch([currentPrimary, currentMuted], closeModal)

// We can only change layout dynamically on the default layout
const canChangeLayout = computed(
  () => !route.meta.layout || route.meta.layout === 'default',
)

const primaryPresets = [
  {
    name: 'indigo',
    label: 'Indigo',
    shades: colors.indigo,
    class: 'bg-indigo-500',
  },
  {
    name: 'sky',
    label: 'Sky',
    shades: colors.sky,
    class: 'bg-sky-500',
  },
  {
    name: 'purple',
    label: 'Purple',
    shades: colors.purple,
    class: 'bg-purple-500',
  },
  {
    name: 'violet',
    label: 'Violet',
    shades: colors.violet,
    class: 'bg-violet-500',
  },
  {
    name: 'lime',
    label: 'Lime',
    shades: colors.lime,
    class: 'bg-lime-500',
  },
  {
    name: 'teal',
    label: 'Teal',
    shades: colors.teal,
    class: 'bg-teal-500',
  },
  {
    name: 'emerald',
    label: 'Emerald',
    shades: colors.emerald,
    class: 'bg-emerald-500',
  },
  {
    name: 'rose',
    label: 'Rose',
    shades: colors.rose,
    class: 'bg-rose-500',
  },
  {
    name: 'pink',
    label: 'Pink',
    shades: colors.pink,
    class: 'bg-pink-500',
  },
  {
    name: 'yellow',
    label: 'Yellow',
    shades: colors.yellow,
    class: 'bg-yellow-500',
  },
  {
    name: 'orange',
    label: 'Orange',
    shades: colors.orange,
    class: 'bg-orange-500',
  },
  {
    name: 'mauve',
    label: 'Custom',
    shades: {
      50: '#EEECF9',
      100: '#DCD8F3',
      200: '#B6AEE5',
      300: '#9488D8',
      400: '#6E5DCB',
      500: '#4E3CB9',
      600: '#3E2F92',
      700: '#302470',
      800: '#1F1849',
      900: '#100C27',
      950: '#080613',
    },
    class: 'bg-mauve-500',
  },
] as const

const mutedPresets = [
  {
    name: 'gray',
    label: 'Gray',
    shades: colors.gray,
    class: 'bg-gray-300 dark:bg-gray-900',
  },
  {
    name: 'slate',
    label: 'Slate',
    shades: colors.slate,
    class: 'bg-slate-300 dark:bg-slate-900',
  },
  {
    name: 'stone',
    label: 'Stone',
    shades: colors.stone,
    class: 'bg-stone-300 dark:bg-stone-900',
  },
  {
    name: 'zinc',
    label: 'Zinc',
    shades: colors.zinc,
    class: 'bg-zinc-300 dark:bg-zinc-900',
  },
  {
    name: 'neutral',
    label: 'Neutral',
    shades: colors.neutral,
    class: 'bg-neutral-300 dark:bg-neutral-900',
  },
] as const

function closeModal() {
  isSwitcherOpen.value = false
}
function switchLayout(layout: string) {
  activeLayoutName.value = layout
  closeModal()
}
function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.shades)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.shades)
}
</script>

<template>
  <TairoModal
    :open="isSwitcherOpen"
    :size="canChangeLayout ? '2xl' : 'sm'"
    @close="isSwitcherOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
        >
          Theme configuration
        </h3>

        <BaseButtonClose @click="closeModal" />
      </div>
    </template>

    <!-- Body -->
    <div
      class="nui-slimscroll max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          v-if="canChangeLayout"
          class="col-span-12 flex flex-col gap-4 sm:col-span-7"
        >
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-white"
            >
              Layout selection
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Select the layout you want to use for your application
            </BaseParagraph>
          </div>
          <div
            class="bg-muted-100 dark:bg-muted-700/40 grid grid-cols-1 gap-4 rounded-xl p-4 sm:grid-cols-2"
          >
            <BaseCard
              v-for="layout in layouts"
              :key="layout.name"
              role="button"
              rounded="lg"
              class="p-2"
              :class="activeLayoutName === layout.name && '!border-primary-500'"
              @click="switchLayout(layout.name)"
            >
              <div
                class="bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"
              >
                <img
                  :src="`/img/illustrations/switcher/layout-${layout.name}-default.svg`"
                  class="mx-auto block max-w-[110px] transition-opacity duration-200 dark:hidden"
                  :class="
                    activeLayoutName === layout.name
                      ? 'opacity-100'
                      : 'opacity-60'
                  "
                  :alt="`${layout.name} layout`"
                >
                <img
                  :src="`/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`"
                  class="mx-auto hidden max-w-[110px] transition-opacity duration-200 dark:block"
                  :class="
                    activeLayoutName === layout.name
                      ? 'opacity-100'
                      : 'opacity-60'
                  "
                  :alt="`${layout.name} layout`"
                >
              </div>
              <div class="flex items-center justify-between py-2">
                <BaseText
                  size="xs"
                  class="capitalize"
                  :class="
                    activeLayoutName === layout.name
                      ? 'text-muted-600 dark:text-muted-100'
                      : 'text-muted-400 dark:text-muted-500'
                  "
                >
                  {{ layout.name }} Layout
                </BaseText>
                <Icon
                  name="ph:check-circle-duotone"
                  class="text-success-500 size-5 transition-opacity duration-200"
                  :class="
                    activeLayoutName === layout.name
                      ? 'opacity-100'
                      : 'opacity-0'
                  "
                />
              </div>
            </BaseCard>
          </div>
        </div>
        <div
          class="col-span-12 flex flex-col gap-4"
          :class="[canChangeLayout ? 'sm:col-span-5' : '']"
        >
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-white"
            >
              Color selection
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Make changes to the color palette
            </BaseParagraph>
          </div>
          <div class="space-y-1">
            <div class="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
              <div v-for="color in primaryPresets" :key="color.name">
                <button
                  type="button"
                  class="hover:bg-muted-100 dark:hover:bg-muted-700/70 group flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200"
                  :class="[
                    currentPrimary === color.name
                      ? 'ring-primary-500 relative z-10 ring-1'
                      : 'ring-0',
                  ]"
                  @click="() => switchPrimary(color)"
                >
                  <span
                    class="block size-6 shrink-0 rounded-lg"
                    :class="color.class"
                  />
                  <BaseText size="sm">
                    {{ color.label }}
                  </BaseText>
                </button>
              </div>
            </div>
            <hr class="border-muted-200 dark:border-muted-700">
            <div>
              <button
                type="button"
                class="group flex w-full items-center gap-3 rounded-lg p-2"
              >
                <span
                  class="bg-muted-200 dark:bg-muted-900 block size-6 rounded-lg"
                />
                <BaseText size="sm">
                  Background shade
                </BaseText>
              </button>
              <div class="flex items-center px-2 pt-2">
                <BaseText
                  size="xs"
                  class="text-muted-400"
                >
                  Pick a shade
                </BaseText>
                <div class="ml-auto flex items-center justify-end gap-2">
                  <button
                    v-for="color in mutedPresets"
                    :key="color.name"
                    type="button"
                    class="block size-6 rounded-full"
                    :class="[
                      color.class,
                      currentMuted === color.name
                        ? 'ring-primary-500 ring-1'
                        : 'ring-0',
                    ]"
                    :data-nui-tooltip="color.label"
                    @click="() => switchMuted(color)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TairoModal>
</template>
