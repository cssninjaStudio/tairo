<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 md:col-span-8">
      <BaseCard
        rounded="lg"
        class="relative flex flex-col gap-4 overflow-hidden sm:flex-row"
      >
        <div class="flex flex-col p-6">
          <BaseHeading
            as="h3"
            weight="medium"
            size="lg"
            class="text-muted-800 dark:text-muted-100 mb-2"
          >
            Explore investments
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-400 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
            adhuc; Igitur neque stultorum quisquam beatus.
          </BaseParagraph>
          <div class="mb-1 mt-auto">
            <DemoLinkArrow to="#" label="Learn more about it" />
          </div>
        </div>
        <div
          class="flex h-44 w-full shrink-0 items-center justify-center sm:w-1/2"
        >
          <img
            src="/img/illustrations/ui/invest.svg"
            class="xs:-bottom-48 xs:start-5 absolute h-full w-auto object-contain object-top sm:end-0 sm:top-0 sm:w-64 lg:w-72 lg:object-cover"
            alt="Investment illustration"
          >
        </div>
      </BaseCard>
    </div>
    <!-- Invest widget -->
    <div class="col-span-12 md:col-span-4">
      <BaseCard
        rounded="lg"
        class="relative flex h-full flex-col gap-4 sm:flex-row"
      >
        <div class="flex flex-col p-6">
          <BaseHeading
            as="h3"
            weight="medium"
            size="lg"
            class="text-muted-800 dark:text-muted-100 mb-2"
          >
            Need more info?
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-400 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
            adhuc; Igitur neque stultorum quisquam beatus.
          </BaseParagraph>
          <div class="mb-1 mt-auto">
            <DemoLinkArrow to="#" label="Learn more about it" />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
