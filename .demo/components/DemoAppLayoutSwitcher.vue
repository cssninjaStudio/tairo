<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */

import colors from 'tailwindcss/colors'

const { layouts, activeLayoutName } = useLayoutSwitcher()
const isSwitcherOpen = useState('switcher-open', () => false)

function closeModal() {
  isSwitcherOpen.value = false
}
const switchLayout = (layout: string) => {
  activeLayoutName.value = layout
  closeModal()
}

const mauve = {
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
}

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
    shades: mauve,
    class: 'bg-mauve-500',
  },
]
</script>

<template>
  <TairoModal :open="isSwitcherOpen" size="2xl" @close="isSwitcherOpen = false">
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
      class="px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll"
    >
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-7 flex flex-col gap-4">
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
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl"
          >
            <BaseCard
              v-for="layout in layouts"
              :key="layout.name"
              role="button"
              shape="curved"
              class="p-2"
              :class="activeLayoutName === layout.name && '!border-primary-500'"
              @click="switchLayout(layout.name)"
            >
              <div
                class="bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"
              >
                <img
                  :src="`/img/illustrations/switcher/layout-${layout.name}-default.svg`"
                  class="block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200"
                  :class="
                    activeLayoutName === layout.name
                      ? 'opacity-100'
                      : 'opacity-60'
                  "
                  :alt="`${layout.name} layout`"
                />
                <img
                  :src="`/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`"
                  class="hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200"
                  :class="
                    activeLayoutName === layout.name
                      ? 'opacity-100'
                      : 'opacity-60'
                  "
                  :alt="`${layout.name} layout`"
                />
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
                  class="w-5 h-5 text-success-500 transition-opacity duration-200"
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
        <div class="col-span-12 sm:col-span-5 flex flex-col gap-4">
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <div v-for="color in primaryPresets" :key="color.name">
                <button
                  type="button"
                  class="group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200"
                  @click="() => switchColorShades('primary', color.shades)"
                >
                  <span
                    class="block h-6 w-6 rounded-lg shrink-0"
                    :class="color.class"
                  ></span>
                  <BaseText size="sm">{{ color.label }}</BaseText>
                </button>
              </div>
            </div>
            <hr class="border-muted-200 dark:border-muted-700" />
            <div>
              <button
                type="button"
                class="group w-full flex items-center gap-3 p-2 rounded-lg"
              >
                <span
                  class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"
                ></span>
                <BaseText size="sm">Background shade</BaseText>
              </button>
              <div class="flex items-center px-2 pt-2">
                <BaseText size="xs" class="text-muted-400"
                  >Pick a shade</BaseText
                >
                <div class="ml-auto flex items-center justify-end gap-2">
                  <button
                    type="button"
                    class="block h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-900"
                    data-nui-tooltip="Gray"
                    @click="() => switchColorShades('muted', colors.gray)"
                  ></button>
                  <button
                    type="button"
                    class="block h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-900"
                    data-nui-tooltip="Slate"
                    @click="() => switchColorShades('muted', colors.slate)"
                  ></button>
                  <button
                    type="button"
                    class="block h-6 w-6 rounded-full bg-stone-200 dark:bg-stone-900"
                    data-nui-tooltip="Stone"
                    @click="() => switchColorShades('muted', colors.stone)"
                  ></button>
                  <button
                    type="button"
                    class="block h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-900"
                    data-nui-tooltip="Zinc"
                    @click="() => switchColorShades('muted', colors.zinc)"
                  ></button
                  ><button
                    type="button"
                    class="block h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-900"
                    data-nui-tooltip="Neutral"
                    @click="() => switchColorShades('muted', colors.neutral)"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TairoModal>
</template>
