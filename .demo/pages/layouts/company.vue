<script setup lang="ts">
definePageMeta({
  title: 'Company',
  preview: {
    title: 'Company',
    description: 'For company details',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-company.png',
    srcDark: '/img/screens/layouts-company-dark.png',
    order: 32,
    new: true,
  },
})
</script>

<template>
  <div class="w-full">
    <!--Header-->
    <div class="border-muted-200 dark:border-muted-800 border-b py-6">
      <div class="flex items-center gap-3">
        <div
          class="nui-mask nui-mask-blob bg-muted-200 dark:bg-muted-800 flex size-16 shrink-0 items-center justify-center"
        >
          <Icon name="ph:buildings-duotone" class="size-7" />
        </div>
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Acme LLC.
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            View Acme company details
          </BaseParagraph>
        </div>
      </div>
    </div>
    <!--Content-->
    <div class="space-y-10">
      <!--Section-->
      <div class="grid gap-8 pt-6 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-5">
          <div class="w-full max-w-xs">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              General info
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              Some information we need to know about your company, and to
              process legal matters.
            </BaseParagraph>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-7">
          <BaseHeading
            as="h3"
            size="xs"
            weight="medium"
            class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
          >
            Company info
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Legal name
                  </BaseHeading>
                  <BaseText size="sm">
                    Acme LLC.
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Doing business as (DBA)
                  </BaseHeading>
                  <BaseText size="sm">
                    Acme LLC.
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Common name
                  </BaseHeading>
                  <BaseText size="sm">
                    Acme Systems
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--Section-->
      <div class="grid gap-8 pt-6 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-5">
          <div class="w-full max-w-xs">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Contact info
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              Some information we need to be able to contact you and send you
              documents or updates.
            </BaseParagraph>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-7">
          <BaseHeading
            as="h3"
            size="xs"
            weight="medium"
            class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
          >
            Contact channels
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Email address
                  </BaseHeading>
                  <BaseText size="sm">
                    hello@acme.io
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Phone number
                  </BaseHeading>
                  <BaseText size="sm">
                    +1 (612) 429-3263
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/company-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Twitter handle
                  </BaseHeading>
                  <BaseText size="sm">
                    @acmellc
                  </BaseText>
                </div>
                <Icon name="lucide:edit-3" class="ms-auto size-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Edit
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--Section-->
      <div class="grid gap-8 pt-6 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-5">
          <div class="w-full max-w-xs">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Mailing address
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              We'll send physical cards as well as gifts and special offers to
              this address
            </BaseParagraph>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-7">
          <div
            class="border-muted-200 dark:border-muted-800 border-b px-4 pb-4"
          >
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Acme LLC
            </BaseHeading>
            <div class="space-y-1">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                28, Railroad Highway
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Parkston road, Block 2, Suite G23
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Los Angeles, CA 92841
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                United States
              </BaseParagraph>
            </div>
            <div class="mt-2">
              <DemoLinkArrow to="/layouts/company-edit" label="Edit address" />
            </div>
          </div>
        </div>
      </div>
      <!--Section-->
      <div class="grid gap-8 pt-6 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-5">
          <div class="w-full max-w-xs">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Legal address
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
              This is the billing address for your cards and will appear on your
              documents
            </BaseParagraph>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-7">
          <div
            class="border-muted-200 dark:border-muted-800 border-b px-4 pb-4"
          >
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Acme LLC
            </BaseHeading>
            <div class="space-y-1">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                28, Railroad Highway
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Parkston road, Block 2, Suite G23
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Los Angeles, CA 92841
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                United States
              </BaseParagraph>
            </div>
            <div class="mt-2">
              <DemoLinkArrow to="/layouts/company-edit" label="Edit address" />
            </div>
          </div>
        </div>
      </div>
      <!--Section-->
      <div class="grid gap-8 pt-6 md:grid-cols-12">
        <!--Column-->
        <div class="md:col-span-5">
          <div class="w-full max-w-xs">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 mb-1"
            >
              Company Card
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              This is your company main credit card. You can use it to pay for
              any type of expenses
            </BaseParagraph>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-7">
          <div
            class="border-muted-200 dark:border-muted-800 border-b px-4 pb-4"
          >
            <DemoCreditCardReal
              status="active"
              name="Acme LLC"
              number="•••• •••• •••• 7297"
              brand="visa"
              class="!mx-0"
            />
            <div class="mt-4">
              <DemoLinkArrow to="#" label="Manage company card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
