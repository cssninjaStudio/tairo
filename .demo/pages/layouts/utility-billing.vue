<script setup lang="ts">
definePageMeta({
  title: 'SaaS Billing',
})
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Custom section -->
    <div
      class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"
    >
      <div class="grid grid-cols-2 gap-2 xl:gap-6">
        <BaseCard shape="rounded" class="group p-6 text-center">
          <TairoLogo
            class="h-9 w-9 mx-auto text-muted-400/50 group-hover:text-primary-500"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Starter
          </BaseHeading>
          <BaseText size="xs" lead="tight" class="text-muted-400"
            >A basic plan made for quickstarts</BaseText
          >
        </BaseCard>
        <BaseCard shape="rounded" class="p-6 text-center">
          <TairoLogo
            class="h-9 w-9 mx-auto text-muted-400/50 group-hover:text-primary-500"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Freelancer
          </BaseHeading>
          <BaseText size="xs" lead="tight" class="text-muted-400"
            >A basic plan made for quickstarts</BaseText
          >
        </BaseCard>
        <BaseCard shape="rounded" class="p-6 text-center">
          <TairoLogo
            class="h-9 w-9 mx-auto text-muted-400/50 group-hover:text-primary-500"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Business
          </BaseHeading>
          <BaseText size="xs" lead="tight" class="text-muted-400"
            >A basic plan made for quickstarts</BaseText
          >
        </BaseCard>
        <BaseCard shape="rounded" class="p-6 text-center">
          <TairoLogo
            class="h-9 w-9 mx-auto text-muted-400/50 group-hover:text-primary-500"
          />
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Enterprise
          </BaseHeading>
          <BaseText size="xs" lead="tight" class="text-muted-400"
            >A basic plan made for quickstarts</BaseText
          >
        </BaseCard>
      </div>
      <div>
        <BaseCard shape="rounded" class="p-8">
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            :anchor="{ prefix: '' }"
            class="text-muted-800 dark:text-white mb-5"
          >
            <TairoTocAnchor>
              <strong>Hello</strong>
              Overview
            </TairoTocAnchor>
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-400 mb-4"
          >
            Tairo is a powerful Nuxt 3 / Tailwind CSS Admin and Webapp UI Kit,
            built with Vue 3 and TypeScript.
          </BaseParagraph>
          <BaseText size="sm" class="text-muted-400 dark:text-muted-400">
            Tairo provides everything you need to build a modern web app or
            admin application. All basic components are built with Tailwind CSS
            and powered by Nuxt 3.
          </BaseText>

          <NuxtLink
            to="https://docs.cssninja.io/tairo"
            class="text-primary-500 group mt-7 inline-flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
          >
            <span class="mr-1">Read the documentation</span>
            <Icon
              name="lucide:arrow-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
            />
          </NuxtLink>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
