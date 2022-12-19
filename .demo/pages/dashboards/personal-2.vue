<script setup lang="ts">
definePageMeta({
  title: 'Personal 2',
  layout:'sidebar',
})
</script>

<template>
  <div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!--Grid column-->
      <div class="col-span-12">
        <!-- Header -->
        <BaseCard class="p-5">
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex flex-col items-center md:items-start ltablet:flex-row ltablet:items-center lg:flex-row lg:items-center gap-4 text-center md:text-left">
              <BaseAvatar src="/img/avatars/2.svg" size="xl" badge-src="/img/icons/flags/united-states-of-america.svg" />
              <div class="text-center md:text-left">
                <BaseHeading
                  as="h2"
                  size="xl"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Welcome back, Maya</span>
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-muted-400">
                    It's nice to see you again
                  </span>
                </BaseParagraph>
              </div>
            </div>
            
            <div class="flex flex-col ltablet:flex-row ltablet:items-center lg:flex-row lg:items-center gap-6 ml-auto text-center md:text-left">
              <div class="flex-1">
                <BaseHeading
                as="h3"
                size="3xl"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>31 <small class="text-base font-medium">Tasks</small></span>
              </BaseHeading>
              <BaseParagraph>
                <span class="text-sm text-muted-400">
                  Are currently pending
                </span>
              </BaseParagraph>
              </div>
              <BaseCard class="relative flex-1 flex items-center justify-center p-5 bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl shadow-primary-500/20">
                <div class="relative flex flex-col gap-3 z-20">
                  <BaseParagraph size="sm">
                    <span class="text-white/80">
                      Start using our team and project management tools
                    </span>
                  </BaseParagraph>
                  <NuxtLink class="font-sans text-white text-sm hover:underline underline-offset-4" to="/">Learn More</NuxtLink>
                </div>
                <div class="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center z-10">
                  <Icon name="ph:crown-duotone" class="w-10 h-10 text-primary-900/50"></Icon>
                </div>
            </BaseCard>
            </div>
          </div>
        </BaseCard>
      </div>
      <!--Grid column-->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <!-- Inner grid -->
        <div class="flex flex-col gap-6">
          <!-- Project list widget -->
          <WidgetProjectListCompact />
          <!-- Chart -->
          <ExampleApexchartAreaTaskCompletion />
          <!-- Chart -->
          <ExampleApexchartBarTeamEfficiency />
        </div>
      </div>
      <!--Grid column-->
      <div class="col-span-12  ltablet:col-span-4 lg:col-span-4">
        <!-- Inner grid -->
        <div class="grid ptablet:grid-cols-2 lg:flex lg:flex-col gap-6">
          <!-- Widget -->
          <WidgetTeamListCompact />
          <!-- Widget -->
          <WidgetTodoListCompact />
          <!-- Widget -->
          <WidgetPlaceholderCompact />
        </div>
      </div>
    </div>
  </div>
</template>