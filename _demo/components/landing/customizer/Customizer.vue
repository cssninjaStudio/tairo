<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const avatarType = ref('shape')
const avatarShape = ref<'full' | 'straight' | 'rounded' | 'curved'>('full')
const avatarMask = ref('hex')
const avatarIndicator = ref(false)
const headingSize = ref<
  | 'xl'
  | 'md'
  | 'xs'
  | 'sm'
  | 'lg'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
>('xl')
const headingWeight = ref<
  'semibold' | 'normal' | 'light' | 'medium' | 'bold' | 'extrabold'
>('semibold')
const buttonShape = ref<'full' | 'straight' | 'rounded' | 'curved'>('curved')
const cardShape = ref<'straight' | 'rounded' | 'curved'>('curved')
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Customize</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Shuriken UI
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>
      <div class="flex w-full items-center justify-between gap-6">
        <!-- Left -->
        <div class="relative w-1/2">
          <div class="absolute inset-x-0 z-0 -mt-2 py-24">
            <div
              class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-3xl"
            >
              <div
                class="from-primary-200 h-40 bg-gradient-to-br to-purple-400 blur-3xl dark:from-blue-700"
              ></div>
              <div
                class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
              ></div>
            </div>
          </div>
          <div
            class="gridlines relative z-10 flex min-h-[480px] w-full items-center justify-center"
          >
            <BaseCard
              :shape="cardShape"
              class="!border-primary-600 relative mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag :shape="buttonShape">Member</BaseTag>
                <BaseButtonClose :shape="buttonShape" color="muted" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/24.svg"
                :badge-src="
                  avatarType === 'mask' ? '' : '/img/stacks/html5.svg'
                "
                :dot="avatarIndicator && avatarType !== 'mask' && 'pink'"
                class="mx-auto !flex !transition-all !duration-200"
                :shape="avatarType === 'mask' ? 'straight' : avatarShape"
                :class="
                  avatarType === 'mask' ? `nui-mask nui-mask-${avatarMask}` : ''
                "
              />
              <div class="mt-3 text-center">
                <BaseHeading
                  as="h3"
                  :size="headingSize"
                  :weight="headingWeight"
                >
                  Belen Lopez</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Fullstack Developer</BaseText
                >
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/js.svg"
                  :shape="avatarType === 'mask' ? 'straight' : avatarShape"
                  :class="
                    avatarType === 'mask'
                      ? `nui-mask nui-mask-${avatarMask}`
                      : ''
                  "
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/python.svg"
                  :shape="avatarType === 'mask' ? 'straight' : avatarShape"
                  :class="
                    avatarType === 'mask'
                      ? `nui-mask nui-mask-${avatarMask}`
                      : ''
                  "
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/reactjs.svg"
                  :shape="avatarType === 'mask' ? 'straight' : avatarShape"
                  :class="
                    avatarType === 'mask'
                      ? `nui-mask nui-mask-${avatarMask}`
                      : ''
                  "
                />
              </div>
              <div>
                <BaseButton class="!h-12 w-full" :shape="buttonShape">
                  <Icon name="lucide:bell" class="h-4 w-4" />
                  <span>Follow Belen</span>
                </BaseButton>
                <NuxtLink
                  to="#"
                  class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
                >
                  View profile
                </NuxtLink>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Right -->
        <div class="relative w-1/2">
          <!-- Form -->
          <BaseCard shape="curved" elevated class="mx-auto max-w-md p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="xl"
                weight="light"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                UI Customization
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-100"
              >
                Built-in props allow you to customize component options, shapes
                and sizes to fit your branding.
              </BaseParagraph>
            </div>
            <div class="slimscroll max-h-[400px] overflow-y-auto pr-4">
              <!-- Avatar -->
              <Disclosure v-slot="{ open }" default-open>
                <DisclosureButton
                  class="text-muted-800 dark:text-muted-100 flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium"
                  :class="open ? 'bg-muted-100 dark:bg-muted-700' : ''"
                >
                  <span>Customize avatars</span>
                  <Icon
                    name="lucide:chevron-down"
                    class="text-muted-400 h-4 w-4 transition-transform duration-200"
                    :class="open ? 'rotate-180' : ''"
                  />
                </DisclosureButton>
                <DisclosurePanel class="text-muted-500 px-4 pb-2 pt-4 text-sm">
                  <div class="mb-6 space-y-8">
                    <!-- Type -->
                    <div>
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Avatar type</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="avatarType"
                          name="avatar_type"
                          label="Shape"
                          value="shape"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarType"
                          name="avatar_type"
                          label="Mask"
                          value="mask"
                          color="primary"
                        />
                      </div>
                    </div>
                    <!-- Shape -->
                    <div v-if="avatarType === 'shape'">
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Avatar shapes</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="avatarShape"
                          name="avatar_shape"
                          label="Straight"
                          value="straight"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarShape"
                          name="avatar_shape"
                          label="Rounded"
                          value="rounded"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarShape"
                          name="avatar_shape"
                          value="curved"
                          label="Curved"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarShape"
                          name="avatar_shape"
                          value="full"
                          label="Full"
                          color="primary"
                        />
                      </div>
                    </div>
                    <!-- Mask -->
                    <div v-if="avatarType === 'mask'">
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Avatar masks</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="avatarMask"
                          name="avatar_mask"
                          label="Hex"
                          value="hex"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarMask"
                          name="avatar_mask"
                          label="Hexed"
                          value="hexed"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarMask"
                          name="avatar_mask"
                          value="blob"
                          label="Blob"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="avatarMask"
                          name="avatar_mask"
                          value="deca"
                          label="Deca"
                          color="primary"
                        />
                      </div>
                    </div>
                    <!-- Indicator -->
                    <div v-if="avatarType !== 'mask'">
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Avatar status</BaseText
                      >
                      <BaseCheckbox
                        v-model="avatarIndicator"
                        label="Show status on main avatar"
                        color="muted"
                        :classes="{
                          wrapper: 'text-pink-500',
                        }"
                      />
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <!-- Text -->
              <Disclosure v-slot="{ open }" default-open>
                <DisclosureButton
                  class="text-muted-800 dark:text-muted-100 flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium"
                  :class="open ? 'bg-muted-100 dark:bg-muted-700' : ''"
                >
                  <span>Customize text</span>
                  <Icon
                    name="lucide:chevron-down"
                    class="text-muted-400 h-4 w-4 transition-transform duration-200"
                    :class="open ? 'rotate-180' : ''"
                  />
                </DisclosureButton>
                <DisclosurePanel class="text-muted-500 px-4 pb-2 pt-4 text-sm">
                  <div class="mb-6 space-y-8">
                    <!-- Size -->
                    <div>
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Heading size</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="headingSize"
                          name="heading_size"
                          label="lg"
                          value="lg"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="headingSize"
                          name="heading_size"
                          label="xl"
                          value="xl"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="headingSize"
                          name="heading_size"
                          label="2xl"
                          value="2xl"
                          color="primary"
                        />
                      </div>
                    </div>
                    <!-- Weight -->
                    <div>
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Heading weight</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-3 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="headingWeight"
                          name="heading_weight"
                          label="normal"
                          value="normal"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="headingWeight"
                          name="heading_weight"
                          label="semibold"
                          value="semibold"
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <!-- Buttons -->
              <Disclosure v-slot="{ open }" default-open>
                <DisclosureButton
                  class="text-muted-800 dark:text-muted-100 flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium"
                  :class="open ? 'bg-muted-100 dark:bg-muted-700' : ''"
                >
                  <span>Customize buttons / tag</span>
                  <Icon
                    name="lucide:chevron-down"
                    class="text-muted-400 h-4 w-4 transition-transform duration-200"
                    :class="open ? 'rotate-180' : ''"
                  />
                </DisclosureButton>
                <DisclosurePanel class="text-muted-500 px-4 pb-2 pt-4 text-sm">
                  <div class="mb-6 space-y-8">
                    <!-- Shape -->
                    <div>
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Shapes</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="buttonShape"
                          name="button_shape"
                          label="Straight"
                          value="straight"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="buttonShape"
                          name="button_shape"
                          label="Rounded"
                          value="rounded"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="buttonShape"
                          name="button_shape"
                          value="curved"
                          label="Curved"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="buttonShape"
                          name="button_shape"
                          value="full"
                          label="Full"
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <!-- Card -->
              <Disclosure v-slot="{ open }" default-open>
                <DisclosureButton
                  class="text-muted-800 dark:text-muted-100 flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium"
                  :class="open ? 'bg-muted-100 dark:bg-muted-700' : ''"
                >
                  <span>Customize card</span>
                  <Icon
                    name="lucide:chevron-down"
                    class="text-muted-400 h-4 w-4 transition-transform duration-200"
                    :class="open ? 'rotate-180' : ''"
                  />
                </DisclosureButton>
                <DisclosurePanel class="text-muted-500 px-4 pb-2 pt-4 text-sm">
                  <div class="mb-6 space-y-8">
                    <!-- Shape -->
                    <div>
                      <BaseText size="xs" class="text-muted-400 mb-3 uppercase"
                        >Shapes</BaseText
                      >
                      <div
                        class="grid grid-cols-2 gap-8 md:max-w-lg md:grid-cols-4"
                      >
                        <BaseRadio
                          v-model="cardShape"
                          name="card_shape"
                          label="Straight"
                          value="straight"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="cardShape"
                          name="card_shape"
                          label="Rounded"
                          value="rounded"
                          color="primary"
                        />

                        <BaseRadio
                          v-model="cardShape"
                          name="card_shape"
                          value="curved"
                          label="Curved"
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}
</style>
