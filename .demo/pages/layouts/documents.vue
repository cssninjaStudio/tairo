<script setup lang="ts">
definePageMeta({
  title: 'Documents',
  preview: {
    title: 'Documents',
    description: 'For document management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-documents.png',
    srcDark: '/img/screens/layouts-documents-dark.png',
    order: 37,
    new: true,
  },
})
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="border-muted-200 dark:border-muted-800 border-b py-6">
      <BaseHeading
        as="h2"
        size="xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        Documents
      </BaseHeading>
      <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
        View and download your documents
      </BaseParagraph>
    </div>

    <!--Body-->
    <div class="divide-muted-200 dark:divide-muted-800 space-y-10 py-6">
      <!--Statements-->
      <div class="grid gap-8 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-4">
          <BaseHeading
            as="h3"
            size="lg"
            weight="medium"
            class="text-muted-800 mb-1 dark:text-white"
          >
            Statements
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400 max-w-xs">
            View transactions and total spending on this account. Use exports to
            download a CSV.
          </BaseParagraph>
        </div>
        <!--Column-->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
          >
            Statement files
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Q1 Statement
                </BaseText>
                <Icon name="lucide:download" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Q2 Statement
                </BaseText>
                <Icon name="lucide:download" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Q3 Statement
                </BaseText>
                <Icon name="lucide:download" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!--Documents-->
      <div class="grid gap-8 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-4">
          <BaseHeading
            as="h3"
            size="lg"
            weight="medium"
            class="text-muted-800 mb-1 dark:text-white"
          >
            Other documents
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400 max-w-xs">
            Some useful documents that you might need anytime, for sharing or
            verifications.
          </BaseParagraph>
        </div>
        <!--Column-->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
          >
            Other documents
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Wire details
                </BaseText>
                <Icon name="lucide:download" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Bank contract
                </BaseText>
                <Icon name="lucide:download" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
