<script setup lang="ts">
definePageMeta({
  title: 'Components Hub',
})
</script>

<template>
  <div class="w-full max-w-[840px] mx-auto pb-20">
    <div class="text-center">
      <BaseAvatar
        class="bg-yellow-100 dark:bg-yellow-100/50 text-yellow-500"
        src="/img/avatars/18.svg"
        text="J"
        size="2xl"
        badge="/img/logos/stacks/tailwind-purple.svg"
      />
      <BaseHeading
        as="h2"
        size="2xl"
        weight="normal"
        lead="tight"
        class="text-slate-800 dark:text-white"
      >
        <span>Tairo Components</span>
      </BaseHeading>
      <BaseParagraph>
        <span class="text-slate-500">
          This is the Tairo components library with detailed code examples.
        </span>
      </BaseParagraph>
    </div>

    <div class="py-4 w-full max-w-3xl mx-auto">
      <div class="grid md:grid-cols-2 gap-5">
        <!-- Hub Card -->
        <BaseCard class="group">
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Content</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Tairo content styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/lists.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/lists-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/content"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Tags</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Tairo tag styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/tags.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/tags-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/tag"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Tabs</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero tab styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/tabs.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/tabs-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/tabs"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Cards</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero card styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/cards.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/cards-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/card"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Avatars</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero avatar styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/avatar.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/avatar-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/avatar"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Accordions</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero accordions styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/accordion.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/accordion-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/accordion"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Breadcrumbs</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero breadcrumb styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/breadcrumb.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/breadcrumb-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-4 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/breadcrumb"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Icon Box</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero icon boxes styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/icon-box.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/icon-box-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-5 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/icon-box"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Flex Table</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero flex table styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/table.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/table-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-5 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/flex-table"
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
              <BaseHeading size="xl" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white">Snacks</span>
              </BaseHeading>
              <BaseParagraph lead="tight" size="sm">
                <span class="text-slate-400">
                  Get familiar with the Vuero snack styles. Code examples
                  included.
                </span>
              </BaseParagraph>
            </div>
            <img
              class="max-w-[100px] dark:hidden opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/snacks.svg"
              alt="Component image"
            />
            <img
              class="max-w-[100px] hidden dark:block opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              src="/img/illustrations/components/snacks-dark.svg"
              alt="Component image"
            />
          </div>
          <div
            class="py-5 px-6 border-t-2 border-dashed border-gray-300 dark:border-slate-700"
          >
            <NuxtLink
              to="/components/snack"
              class="font-text text-primary-500 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Get Started
            </NuxtLink>
          </div>
        </BaseCard>
      </div>

      <div class="text-center pt-12 pb-6">
        <NuxtLink
          to="https://docs.cssninja.io/tairo"
          class="font-text text-primary-500 border-b-2 border-dotted border-primary-500"
        >
          Online Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
