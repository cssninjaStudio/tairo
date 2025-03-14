<template>
  <div
    class="bg-muted-200 dark:bg-muted-950/50 rounded-xl p-4 sm:p-6"
  >
    <div class="mb-6 flex items-center justify-between">
      <div>
        <BaseHeading
          as="h3"
          weight="medium"
          size="xl"
          class="text-muted-900 dark:text-muted-100"
        >
          New Features
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Some nice features we've just released
        </BaseParagraph>
      </div>
      <div>
        <slot name="actions" />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="relative">
        <BaseCard
          rounded="md"
          class="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32"
          >
            <img
              src="/img/illustrations/ui/recurring.svg"
              class="w-full"
              alt=""
            >
          </div>
          <div class="flex flex-col">
            <BaseHeading
              as="h3"
              weight="medium"
              size="md"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Recurring payments
            </BaseHeading>
            <BaseParagraph
              size="xs"
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
      <div class="relative">
        <BaseCard
          rounded="md"
          class="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
        >
          <div
            class="bg-muted-200 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32"
          >
            <img
              src="/img/illustrations/ui/cashback.svg"
              class="w-full"
              alt=""
            >
          </div>
          <div class="flex flex-col">
            <BaseHeading
              as="h3"
              weight="medium"
              size="md"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Credit balance
            </BaseHeading>
            <BaseParagraph
              size="xs"
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
  </div>
</template>
