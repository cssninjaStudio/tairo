<script setup lang="ts">
import { mutedPresets, primaryPresets, switchColorShades } from '~/utils/bundles/colors-switcher'

const isSwitcherOpen = useState('switcher-open', () => false)
const currentPrimary = ref('violet')
const currentMuted = ref('slate')

// Close the modal when the primary or muted color changes
watch([currentPrimary, currentMuted], closeModal)

function closeModal() {
  isSwitcherOpen.value = false
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
    size="sm"
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
          class="col-span-12 flex flex-col gap-4 sm:col-span-"
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
