<script setup lang="ts">
const selectedStyle = ref('classic')
const toggled = ref(false)

watch(selectedStyle, (value) => {
  if (value) {
    toggled.value = true
    const timeout = setTimeout(() => {
      toggled.value = false
      clearTimeout(timeout)
    }, 1750)
  }
})
</script>

<template>
  <div class="dark:bg-muted-900 overflow-hidden bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >UI Library</BaseText
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
          Shuriken UI provides a complete set of Nuxt components and utilities
          such as buttons, form elements, badges, tabs and typography clusters.
          Each component exposes several props that you can use to customize its
          look and feel.
        </BaseParagraph>
      </div>
      <div
        class="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row"
        aria-hidden="true"
      >
        <!-- Left -->
        <div class="relative w-full sm:w-1/2">
          <div class="absolute inset-x-0 z-0 -mt-2 py-24">
            <div
              class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-3xl"
            >
              <div
                class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
              ></div>
              <div
                class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
              ></div>
            </div>
          </div>
          <div
            class="gridlines relative z-10 flex min-h-[480px] w-full items-center justify-center"
          >
            <div
              v-if="toggled"
              class="absolute left-0 top-1/4 z-10 h-full w-full overflow-hidden motion-reduce:hidden"
            >
              <div class="shuriken-1 absolute block">
                <img
                  class="animate-spin-fast h-10 w-10"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
              <div class="shuriken-2 absolute block">
                <img
                  class="animate-spin-fast h-12 w-12"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
              <div class="shuriken-3 absolute block">
                <img
                  class="animate-spin-fast h-11 w-11"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
            </div>
            <BaseCard
              v-if="selectedStyle === 'smart'"
              shape="curved"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="curved" color="primary" shadow="flat"
                  >Member</BaseTag
                >
                <BaseButtonClose shape="full" color="muted" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/24.svg"
                badge-src="/img/stacks/html5.svg"
                class="mx-auto !flex !transition-all !duration-200"
                shape="full"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Belen Lopez</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Fullstack Developer</BaseText
                >
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar size="xs" src="/img/stacks/js.svg" shape="full" />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/python.svg"
                  shape="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/reactjs.svg"
                  shape="full"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-12 w-full"
                  shape="curved"
                  color="primary"
                  flavor="pastel"
                >
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
            <BaseCard
              v-if="selectedStyle === 'creative'"
              shape="curved"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] overflow-hidden p-6"
            >
              <div
                class="bg-primary-500 dark:bg-primary-500/20 absolute -right-16 -top-32 h-72 w-72 rounded-full transition-transform delay-150 duration-500"
                :class="selectedStyle === 'creative' ? 'scale-100' : 'scale-0'"
              ></div>
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  shape="full"
                  color="primary"
                  shadow="flat"
                  class="relative z-10"
                  >Member</BaseTag
                >
                <div
                  class="dark:bg-muted-800 flex h-7 w-7 items-center justify-center rounded-full bg-white"
                >
                  <BaseAvatar
                    size="xxs"
                    src="/img/icons/flags/united-states-of-america.svg"
                    shape="full"
                  />
                </div>
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/10.svg"
                class="nui-mask nui-mask-hexed mx-auto !flex !transition-all !duration-200"
                shape="straight"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Kendra Wilson</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Sales Manager</BaseText
                >
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/nitro.svg"
                  shape="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/okano.svg"
                  shape="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/slicer.svg"
                  shape="full"
                />
              </div>
              <div class="flex gap-2">
                <BaseButton class="!h-11 w-full" shape="full">
                  <Icon name="lucide:bookmark" class="h-4 w-4" />
                  <span>Save</span>
                </BaseButton>

                <BaseButton class="!h-11 w-full" shape="full" color="primary">
                  <Icon name="lucide:bell" class="h-4 w-4" />
                  <span>Follow</span>
                </BaseButton>
              </div>
              <NuxtLink
                to="#"
                class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
              >
                View projects
              </NuxtLink>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'corporate'"
              shape="rounded"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="rounded" color="primary" shadow="flat"
                  >Member</BaseTag
                >
                <BaseButtonClose shape="curved" color="primary" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/25.svg"
                badge-src="/img/stacks/illustrator.svg"
                class="mx-auto !flex !transition-all !duration-200"
                shape="curved"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Jenna Davis</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >UI/UX Designer</BaseText
                >
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                vitae nisl vitae nisl.</BaseParagraph
              >
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar size="xs" src="/img/stacks/xd.svg" shape="full" />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/photoshop.svg"
                  shape="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/html5.svg"
                  shape="full"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  shape="rounded"
                  color="primary"
                >
                  <Icon name="lucide:check" class="h-4 w-4" />
                  <span>Hire Now</span>
                </BaseButton>
              </div>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'classic'"
              shape="straight"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="straight" color="primary" shadow="flat"
                  >Member</BaseTag
                >
                <BaseButtonClose shape="straight" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/8.svg"
                class="mx-auto !flex !transition-all !duration-200"
                shape="straight"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  John Baxter</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Technical Lead</BaseText
                >
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                vitae nisl vitae nisl.</BaseParagraph
              >
              <div class="my-6 flex items-center justify-center gap-4">
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex h-6 w-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:facebook-f" class="h-4 w-4" />
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex h-6 w-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:twitter" class="h-4 w-4" />
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex h-6 w-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:linkedin-in" class="h-4 w-4" />
                </NuxtLink>
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  shape="straight"
                  color="primary"
                  flavor="outline"
                >
                  <span>Send Invitation</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Right -->
        <div class="relative w-full sm:w-1/2">
          <!-- buttons -->
          <div class="mx-auto">
            <div
              class="relative mx-auto mt-48 flex w-full max-w-xs flex-wrap sm:mt-0"
            >
              <img
                class="absolute -top-48 right-8 w-64"
                src="/img/illustrations/text-hand.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'classic'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'classic'"
              >
                <Icon
                  name="system-uicons:document-words"
                  class="mb-2 h-10 w-10"
                />
                <span class="font-sans text-sm">Classic</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'corporate'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'corporate'"
              >
                <Icon name="system-uicons:diamond" class="mb-2 h-10 w-10" />
                <span class="font-sans text-sm">Corporate</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'smart'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'smart'"
              >
                <Icon name="system-uicons:maximise" class="mb-2 h-10 w-10" />
                <span class="font-sans text-sm">Smart</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'creative'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'creative'"
              >
                <Icon
                  name="system-uicons:lightbulb-on"
                  class="mb-2 h-10 w-10"
                />
                <span class="font-sans text-sm">Creative</span>
              </button>
            </div>
          </div>
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

.shuriken-1 {
  animation: shurikenFirst 0.75s 0s forwards;
}

.shuriken-2 {
  top: 190px;
  transform: translateX(-20px);
  animation: shurikenSecond 0.5s 0s forwards;
}
.shuriken-3 {
  top: 110px;
  transform: translateX(-20px) rotate(20deg);
  animation: shurikenThird 1.75s 0s forwards;
}
@keyframes shurikenFirst {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
}

@keyframes shurikenSecond {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(500px);
    opacity: 0;
  }
}

@keyframes shurikenThird {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
</style>
