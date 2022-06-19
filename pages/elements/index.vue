<script setup lang="ts">
definePageMeta({
  title: 'Elements Hub',
})
</script>

<template>
  <div class="w-full max-w-[840px] mx-auto pb-20">
    <div class="text-center">
      <BaseAvatar
        class="bg-yellow-100 dark:bg-yellow-100/50 text-yellow-500"
        picture="/img/avatars/3.svg"
        initials="J"
        size="2xl"
        badge="/img/logos/stacks/tailwind-purple.svg"
      />
      <BaseHeading
        tag="h2"
        size="2xl"
        weight="normal"
        lead="tight"
        class="text-slate-800 dark:text-white"
      >
        <span>Tairo Elements</span>
      </BaseHeading>
      <BaseParagraph>
        <span class="text-slate-500">
          This is the Tairo elements library with detailed code examples.
        </span>
      </BaseParagraph>
    </div>

    <div class="py-4 w-full max-w-3xl mx-auto">
      <div class="grid md:grid-cols-2 gap-5">
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Buttons</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Tairo button styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/buttons.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/buttons-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Icons</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Tairo icon libraries. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/icons.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/icons-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Dropdowns</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero dropdown styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/dropdown.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/dropdown-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Modals</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero modal styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/modal.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/modal-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Progress</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero progress bar styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/progress.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/progress-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Forms</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero form elements. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/forms.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/forms-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Checkboxes</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero checkboxes styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/checkboxes.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/checkboxes-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading
                tag="h3"
                size="xl"
                weight="normal"
                lead="tight"
                class="mb-2"
              >
                <span class="text-slate-800 dark:text-white">Switches</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero switch styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/switches.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/switches-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-5 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
      </div>

      <div class="text-center pt-12 pb-6">
        <NuxtLink
          to="/"
          class="font-text text-primary-500 border-b-2 border-dotted border-primary-500"
        >
          Online Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
