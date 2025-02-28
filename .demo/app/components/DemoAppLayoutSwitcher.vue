<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */
import { mutedPresets, primaryPresets, switchColorShades } from '~/utils/bundles/colors-switcher'

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

function closeModal() {
  isSwitcherOpen.value = false
}
function switchLayout(layout: string) {
  activeLayoutName.value = layout
  closeModal()
}
function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.name)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.name)
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

        <BaseButton class="icon-md" @click="closeModal">
          <Icon name="lucide:x" class="size-4" />
        </BaseButton>
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
            class="bg-muted-100 dark:bg-muted-700/40 nui-slimscroll grid max-h-[380px] grid-cols-1 gap-4 overflow-y-auto rounded-xl p-4 sm:grid-cols-2"
          >
            <BaseCard
              v-for="layout in layouts"
              :key="layout.name"
              role="button"
              rounded="lg"
              class="p-2"
              :class="activeLayoutName === layout.name && 'border-primary-500!'"
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
                  <BaseTooltip
                    v-for="color in mutedPresets"
                    :key="color.name"
                    :content="color.label"
                    :bindings="{ portal: { disabled: true } }"
                  >
                    <button
                      type="button"
                      class="block size-6 rounded-full"
                      :class="[
                        color.class,
                        currentMuted === color.name
                          ? 'ring-primary-500 ring-1'
                          : 'ring-0',
                      ]"
                      @click="() => switchMuted(color)"
                    />
                  </BaseTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TairoModal>
</template>
