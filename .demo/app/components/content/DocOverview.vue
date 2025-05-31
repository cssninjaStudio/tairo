<template>
  <div
    class="dark:border-muted-800 mb-10 mt-6 grid gap-4 border-b border-muted-200 pb-10 md:grid-cols-2"
  >
    <NuxtLink to="/documentation/tairo-essentials" class="flex flex-col group/link">
      <BaseCard rounded="md" class="p-4 md:p-6 group-hover/link:border-primary-500!">
        <div class="w-full flex flex-col items-center">
          <BaseAvatar
            size="xl"
            src="/img/avatars/3.svg"
            badge-src="/img/stacks/js.svg"
            rounded="full"
            class="mx-auto"
          />
          <div class="text-center mt-4">
            <BaseHeading size="md" weight="medium" class="text-muted-900 dark:text-white mb-2">
              Iam a developer
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 mb-4">
              I am a developer, I don't know much about Tairo and I want to learn more about Nuxt and Tailwind CSS.
            </BaseParagraph>
            <BaseButton rounded="md" class="w-full group-hover/link:border-primary-500! group-hover/link:bg-primary-500! group-hover/link:text-white!">
              Learn More
            </BaseButton>
          </div>
        </div>
      </BaseCard>
    </NuxtLink>
    <NuxtLink to="/documentation/setup/new-project" class="flex flex-col group/link">
      <BaseCard rounded="md" class="p-4 md:p-6 group-hover/link:border-primary-500!">
        <div class="w-full flex flex-col items-center">
          <BaseAvatar
            size="xl"
            src="/img/avatars/16.svg"
            badge-src="/img/stacks/nuxt.svg"
            rounded="full"
            class="mx-auto"
          />
          <div class="text-center mt-4">
            <BaseHeading size="md" weight="medium" class="text-muted-900 dark:text-white mb-2">
              Iam a Nuxt developer
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 mb-4">
              I am pretty familiar with Nuxt and Tailwind CSS and I want to learn more about Tairo and its components.
            </BaseParagraph>
            <BaseButton rounded="md" class="w-full group-hover/link:border-primary-500! group-hover/link:bg-primary-500! group-hover/link:text-white!">
              Get Started
            </BaseButton>
          </div>
        </div>
      </BaseCard>
    </NuxtLink>
    <NuxtLink to="https://digisquad.io/?utm_source=demo&utm_medium=tairo" target="_blank" class="flex flex-col group/link col-span-2">
      <BaseCard rounded="md" class="p-4 md:p-6 group-hover/link:border-primary-500!">
        <BaseHeading size="md" weight="medium" class="text-muted-900 dark:text-white mb-2">
          Iam interested in this product
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 mb-4">
          Tairo is a product for designing custom applications; it is not a theme for a CMS like WordPress, Joomla, etc.
          If you simply want to improve the productivity of your development teams and find out if Tairo could help you design your project, please contact us.
        </BaseParagraph>
        <BaseButton rounded="md" class="group-hover/link:border-primary-500! group-hover/link:bg-primary-500! group-hover/link:text-white!">
          Get in Touch
        </BaseButton>
      </BaseCard>
    </NuxtLink>
  </div>
</template>
