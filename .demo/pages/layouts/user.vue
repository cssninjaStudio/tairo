<script setup lang="ts">
definePageMeta({
  title: 'User',
  preview: {
    title: 'User',
    description: 'For viewing user info',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-user.png',
    srcDark: '/img/screens/layouts-user-dark.png',
    order: 30,
    new: true,
  },
})
</script>

<template>
  <div class="w-full">
    <!--Header-->
    <div class="border-muted-200 dark:border-muted-800 border-b py-6">
      <div class="flex items-center gap-3">
        <BaseAvatar
          size="lg"
          src="/img/avatars/10.svg"
          rounded="none"
          mask="blob"
        />
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            Kendra Wilson
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            kendraw@gmail.com
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
              Some information we need to know about you, and to process legal
              matters.
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
            About you
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/profile-edit"
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
                    Kendra Wilson
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
                to="/layouts/profile-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Preferred name
                  </BaseHeading>
                  <BaseText size="sm">
                    Kendra Wilson
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
                to="/layouts/profile-edit"
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
                    kendraw@gmail.com
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
              Personal info
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
              Some information we need to know about you, and to process legal
              matters.
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
            Additional info
          </BaseHeading>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="/layouts/profile-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Date of birth
                  </BaseHeading>
                  <BaseText size="sm">
                    12/10/1988
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
                to="/layouts/profile-edit"
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
                href="/layouts/profile-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Gender
                  </BaseHeading>
                  <BaseText size="sm">
                    Female
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
                to="/layouts/profile-edit"
                class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
              >
                <div>
                  <BaseHeading
                    as="h3"
                    size="xs"
                    weight="medium"
                    class="text-muted-400"
                  >
                    Family status
                  </BaseHeading>
                  <BaseText size="sm">
                    Married
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
              <DemoLinkArrow to="/layouts/profile-edit" label="Edit address" />
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
            <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
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
              <DemoLinkArrow to="/layouts/profile-edit" label="Edit address" />
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
              Main Card
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
              name="Kendra Wilson"
              number="•••• •••• •••• 4728"
              brand="mastercard"
              class="!mx-0"
            />
            <div class="mt-4">
              <DemoLinkArrow to="/layouts/cards" label="Manage your cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
