<template>
  <div class="flex flex-wrap items-end justify-end gap-6">
    <TairoPopover orientation="end">
      <div class="flex items-center">
        <BaseAvatar src="/img/avatars/2.svg" />

        <span class="text-muted-800 ms-3 font-sans text-sm font-medium dark:text-white">
          Maya Rosselini
        </span>
      </div>

      <template #content>
        <TairoPopoverContentDual
          :stats="[
            {
              title: 'Angular',
              subtitle: '16 projects',
              image: 'https://vuero.cssninja.io/images/icons/stacks/angular.svg',
            },
            {
              title: 'Projects',
              subtitle: '56 projects',
              icon: 'ph:briefcase-duotone',
            },
          ]"
          image="/img/avatars/2.svg"
          title="Maya Rosselini"
          subtitle="Software Engineer"
          footer-title="$55/hour"
          footer-text="Based on the latest 5 jobs"
          link-label="Hire Now"
          link="/"
        />
      </template>
    </TairoPopover>
  </div>
</template>
