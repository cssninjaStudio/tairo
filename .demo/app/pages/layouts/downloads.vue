<script setup lang="ts">
definePageMeta({
  title: 'Download',
  preview: {
    title: 'Downloads',
    description: 'For data export and download',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-downloads.png',
    srcDark: '/img/screens/layouts-downloads-dark.png',
    order: 37,
    new: true,
  },
})

const format = ref('quickbooks')
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div class="border-muted-200 dark:border-muted-800 border-b pb-6">
      <div
        class="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start"
      >
        <BaseIconBox
          variant="none"
          size="md"
          rounded="none"
          mask="blob"
          class="bg-primary-500/10 text-primary-500 dark:bg-primary-600/20 dark:text-primary-400"
        >
          <Icon name="solar:chart-square-bold-duotone" class="size-6" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Export your data
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Download your data in CSV format.
          </BaseParagraph>
        </div>
        <div class="sm:ms-auto">
          <BaseSelect v-model="format" rounded="full">
            <BaseSelectItem value="quickbooks">
              Quickbooks CSV
            </BaseSelectItem>
            <BaseSelectItem value="xero">
              Xero CSV
            </BaseSelectItem>
            <BaseSelectItem value="freshbooks">
              Freshbooks CSV
            </BaseSelectItem>
          </BaseSelect>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="divide-muted-200 dark:divide-muted-800 space-y-10 py-6">
      <!-- Transaction -->
      <div class="grid gap-8 md:grid-cols-12">
        <!-- Column -->
        <div class="md:col-span-4">
          <div class="flex gap-3">
            <BaseAvatar
              size="sm"
              :src="`/img/logos/companies/${format}-full.svg`"
            />
            <div>
              <BaseHeading
                as="h3"
                size="xl"
                weight="medium"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Transaction data
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-xs"
              >
                Download transactions in CSV format for this account. Make sure
                to select the appropriate CSV format.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
          >
            Statement period
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Jul 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Jun 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  May 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Apr 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Mar 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Feb 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!-- Item -->
            <div class="group">
              <NuxtLink
                to="#"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200/60 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
              >
                <BaseText size="sm">
                  Jan 2023
                </BaseText>
                <Icon name="solar:download-linear" class="size-4" />
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
