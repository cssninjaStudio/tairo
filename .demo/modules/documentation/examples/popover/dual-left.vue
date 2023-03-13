<template>
  <TairoPopover orientation="start">
    <div class="flex items-center">
      <BaseAvatar src="/img/avatars/3.svg" />
      <span
        class="ml-3 font-heading text-sm font-semibold text-muted-800 dark:text-white"
      >
        Mike Miller
      </span>
    </div>

    <template #content>
      <TairoPopoverContentDual
        :stats="[
          {
            title: 'Javascript',
            subtitle: '65 projects',
            image:
              'https://vuero.cssninja.io/images/icons/stacks/js.svg',
          },
          {
            title: 'Projects',
            subtitle: '154 projects',
            icon: 'ph:briefcase-duotone',
          },
        ]"
        image="/img/avatars/3.svg"
        title="Mike Miller"
        subtitle="Software Engineer"
        footer-title="$75/hour"
        footer-text="Based on the latest 5 jobs"
        link-label="Hire Now"
        link="/"
      />
    </template>
  </TairoPopover>
</template>
