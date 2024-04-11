<script setup lang="ts">
definePageMeta({
  title: 'Integrations',
  preview: {
    title: 'Integrations',
    description: 'For software integrations',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-integrations.png',
    srcDark: '/img/screens/layouts-integrations-dark.png',
    order: 37,
    new: true,
  },
})
</script>

<template>
  <div class="w-full pb-20">
    <div class="space-y-16">
      <!--Group-->
      <div>
        <!--Header-->
        <div class="border-muted-200 dark:border-muted-800 border-b py-6">
          <BaseHeading
            as="h2"
            size="lg"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Active (0)
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400 max-w-sm">
            Currently active integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div class="pt-6">
          <DemoPlaceholderMinimal
            title="No integrations"
            description="Yo have no active integrations. Start by adding one"
          />
        </div>
      </div>
      <!--Group-->
      <div>
        <!--Header-->
        <div class="border-muted-200 dark:border-muted-800 border-b py-6">
          <BaseHeading
            as="h2"
            size="lg"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Accounting
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400 max-w-sm">
            Available accounting integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div
          class="divide-muted-200 dark:divide-muted-800 space-y-8 divide-y pt-6"
        >
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar
              size="md"
              src="/img/logos/companies/quickbooks-full.svg"
            />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Quickbooks
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                QuickBooks is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Quickbooks</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar size="md" src="/img/logos/companies/xero-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Xero
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Xero is a user-friendly, simple accounting software that tracks
                your business income and expenses, and organises your financial
                information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Xero</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar
              size="md"
              src="/img/logos/companies/freshbooks-full.svg"
            />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Freshbooks
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Freshbooks is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Freshbooks</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <!--Group-->
      <div>
        <!--Header-->
        <div class="border-muted-200 dark:border-muted-800 border-b py-6">
          <BaseHeading
            as="h2"
            size="lg"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Other
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400 max-w-sm">
            Other available integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div
          class="divide-muted-200 dark:divide-muted-800 space-y-8 divide-y pt-6"
        >
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar size="md" src="/img/logos/companies/zapier-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Zapier
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Zapier is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Zapier</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar size="md" src="/img/logos/companies/google-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Google Suite
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Google is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Google</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar size="md" src="/img/logos/companies/stripe-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Stripe
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Stripe is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Stripe</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="ltablet:flex-row flex flex-col gap-3 pt-8 lg:flex-row">
            <BaseAvatar size="md" src="/img/logos/companies/paypal-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 mb-1 dark:text-white"
              >
                Paypal
              </BaseHeading>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-sm"
              >
                Paypal is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton
                rounded="md"
                color="default"
                size="sm"
              >
                <Icon name="lucide:link" class="size-4" />
                <span>Connect to Paypal</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
