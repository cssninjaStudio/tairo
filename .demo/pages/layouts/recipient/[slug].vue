<script setup lang="ts">
definePageMeta({
  title: 'Recipient',
  preview: [
    {
      title: 'Company recipient',
      description: 'For company details',
      categories: ['layouts', 'lists', 'details'],
      src: '/img/screens/layouts-recipient-airbnb.png',
      srcDark: '/img/screens/layouts-recipient-airbnb-dark.png',
      order: 37,
      params: {
        slug: 'airbnb',
      },
      new: true,
    },
    {
      title: 'Contact recipient',
      description: 'For user details',
      categories: ['layouts', 'lists', 'details'],
      src: '/img/screens/layouts-recipient-jackie-strauss.png',
      srcDark: '/img/screens/layouts-recipient-jackie-strauss-dark.png',
      order: 37,
      params: {
        slug: 'jackie-strauss',
      },
      new: true,
    },
  ],
})

const notifications = ref(true)
const route = useRoute()
const slug = computed(() => route.params.slug)

const query = computed(() => {
  return {
    slug: slug.value,
  }
})

const { data, pending, error, refresh } = await useFetch(
  '/api/payments/recipients',
  {
    query,
  },
)

if (!data.value?.recipient) {
  await navigateTo('/layouts/payments/recipients')
}

const totalSent = computed(() => {
  return data.value?.recipient?.transactions.reduce(
    (acc: number, item: any) => {
      if (item.type === 'out') {
        return acc + item.amount
      }
      return acc
    },
    0,
  )
})

const totalReceived = computed(() => {
  return data.value?.recipient?.transactions.reduce(
    (acc: number, item: any) => {
      if (item.type === 'in') {
        return acc + item.amount
      }
      return acc
    },
    0,
  )
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'muted'
    case 'in progress':
      return 'primary'
    case 'processing':
      return 'info'
    case 'cancelled':
      return 'warning'
    default:
      break
  }
}
</script>

<template>
  <div v-if="data?.recipient" class="pb-20">
    <!--Header-->
    <div class="flex items-center justify-end py-6">
      <!--Buttons-->
      <div class="hidden items-center gap-2 md:flex">
        <BaseButton
          to="/layouts/payments/recipients"
          rounded="full"
          color="default"
          size="sm"
        >
          <Icon name="lucide:arrow-left" class="size-4" />
          <span>Go Back</span>
        </BaseButton>
        <BaseButton
          to="/layouts/contacts/create"
          rounded="full"
          color="default"
          size="sm"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>New Contact</span>
        </BaseButton>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!--Info-->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <!--Recipient-->
          <BaseCard
            rounded="md"
            shadow="hover"
            class="p-6"
          >
            <div
              class="border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8"
            >
              <BaseAvatar
                :src="data.recipient.picture"
                :alt="data.recipient.name"
                size="lg"
                rounded="none"
                mask="blob"
                class="bg-muted-100 dark:bg-muted-900"
              />
              <div>
                <BaseHeading
                  weight="medium"
                  size="lg"
                  lead="none"
                  class="line-clamp-1"
                >
                  {{ data.recipient.name }}
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                  {{ data.recipient.category }}
                </BaseParagraph>
              </div>
            </div>
            <div class="mb-6">
              <BaseHeading
                weight="medium"
                size="md"
                lead="none"
                class="mb-2"
              >
                Address
              </BaseHeading>
              <BaseParagraph
                v-for="item in data.recipient.address"
                :key="item"
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                {{ item }}
              </BaseParagraph>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                {{ data.recipient.country }}
              </BaseParagraph>
            </div>
            <div>
              <BaseButton
                variant="pastel"
                rounded="md"
                color="primary"
                class="w-full"
              >
                Edit Contact
              </BaseButton>
            </div>
          </BaseCard>
          <!--Details-->
          <BaseCard
            rounded="md"
            shadow="hover"
            class="p-6"
          >
            <div class="mb-6">
              <div>
                <BaseHeading
                  weight="medium"
                  size="lg"
                  lead="none"
                  class="line-clamp-1"
                >
                  Additional info
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                  More details about this contact
                </BaseParagraph>
              </div>
            </div>

            <div class="mb-6 space-y-4">
              <!--Status-->
              <div class="flex items-center justify-between">
                <div class="text-muted-400 flex items-center gap-1">
                  <Icon name="ph:circle-dashed-duotone" class="size-5" />
                  <BaseParagraph size="sm">
                    Status
                  </BaseParagraph>
                </div>
                <BaseTag
                  rounded="full"
                  variant="pastel"
                  :color="
                    data.recipient.status === 'active' ? 'success' : 'muted'
                  "
                  size="sm"
                >
                  {{ data.recipient.status }}
                </BaseTag>
              </div>
              <!--Email-->
              <div class="flex items-center justify-between">
                <div class="text-muted-400 flex items-center gap-1">
                  <Icon name="ph:envelope-duotone" class="size-5" />
                  <BaseParagraph size="sm">
                    Email
                  </BaseParagraph>
                </div>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100 line-clamp-1"
                >
                  {{ data.recipient.email }}
                </BaseParagraph>
              </div>
              <!--Phone number-->
              <div class="flex items-center justify-between">
                <div class="text-muted-400 flex items-center gap-1">
                  <Icon name="ph:phone-duotone" class="size-5" />
                  <BaseParagraph size="sm">
                    Phone number
                  </BaseParagraph>
                </div>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100 line-clamp-1"
                >
                  {{ data.recipient.phoneNumber }}
                </BaseParagraph>
              </div>
              <!--Tax ID-->
              <div class="flex items-center justify-between">
                <div class="text-muted-400 flex items-center gap-1">
                  <Icon name="ph:bank-duotone" class="size-5" />
                  <BaseParagraph size="sm">
                    Tax ID
                  </BaseParagraph>
                </div>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100 line-clamp-1"
                >
                  {{ data.recipient.taxId }}
                </BaseParagraph>
              </div>
              <!--Language-->
              <div class="flex items-center justify-between">
                <div class="text-muted-400 flex items-center gap-1">
                  <Icon name="ph:chats-circle-duotone" class="size-5" />
                  <BaseParagraph size="sm">
                    Language
                  </BaseParagraph>
                </div>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100 line-clamp-1 capitalize"
                >
                  {{ data.recipient.language }}
                </BaseParagraph>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-800 flex items-center justify-between border-t pt-4"
            >
              <BaseText
                size="sm"
                class="text-muted-400"
              >
                Notifications
              </BaseText>
              <div>
                <BaseSwitchBall v-model="notifications" color="primary" />
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!--Content-->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <!--Grid-->
        <div class="grid grid-cols-12 gap-6">
          <!--tile-->
          <div class="col-span-12 sm:col-span-4">
            <BaseCard
              rounded="md"
              shadow="hover"
              class="flex h-full flex-col items-center justify-center p-6"
            >
              <div class="text-center">
                <Icon
                  v-if="data.recipient.paymentMethod.name === 'paypal'"
                  name="logos:paypal"
                  class="mb-4 text-4xl"
                />
                <Icon
                  v-else-if="data.recipient.paymentMethod.name === 'stripe'"
                  name="bi:stripe"
                  class="mb-4 text-4xl text-indigo-600"
                />
                <div>
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    lead="none"
                    class="line-clamp-1 capitalize"
                  >
                    {{ data.recipient.paymentMethod.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                    Payment method
                  </BaseParagraph>
                </div>
              </div>
            </BaseCard>
          </div>
          <!--tile-->
          <div class="col-span-12 sm:col-span-4">
            <BaseCard
              rounded="md"
              shadow="hover"
              class="flex h-full flex-col items-center justify-center p-6"
            >
              <div class="text-center">
                <div>
                  <BaseHeading
                    weight="semibold"
                    size="2xl"
                    lead="none"
                    class="mb-3"
                  >
                    ${{ totalSent?.toFixed(2) }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                    Lifetime sent
                  </BaseParagraph>
                </div>
              </div>
            </BaseCard>
          </div>
          <!--tile-->
          <div class="col-span-12 sm:col-span-4">
            <BaseCard
              rounded="md"
              shadow="hover"
              class="flex h-full flex-col items-center justify-center p-6"
            >
              <div class="text-center">
                <div>
                  <BaseHeading
                    weight="semibold"
                    size="2xl"
                    lead="none"
                    class="mb-3"
                  >
                    ${{ totalReceived?.toFixed(2) }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                    Lifetime received
                  </BaseParagraph>
                </div>
              </div>
            </BaseCard>
          </div>
          <!--Transactions-->
          <div class="col-span-12">
            <BaseCard
              rounded="md"
              shadow="hover"
              class="p-8"
            >
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-400 uppercase"
                >
                  History
                </BaseHeading>
                <div>
                  <BaseButton
                    to="/layouts/send"
                    rounded="md"
                    size="sm"
                  >
                    Send Money
                  </BaseButton>
                </div>
              </div>

              <div class="mt-7 overflow-x-auto">
                <div v-if="data.recipient.transactions.length === 0">
                  <BasePlaceholderPage
                    title="Nothing to show"
                    subtitle="Looks like there are no transactions to show for this recipient. Come back one you have sent or received money from this recipient."
                  />
                </div>
                <table v-else class="w-full whitespace-nowrap">
                  <thead>
                    <th class="w-1/5" />
                    <th class="w-2/5" />
                    <th />
                    <th />
                    <th />
                    <th />
                  </thead>
                  <tbody>
                    <!--Row-->
                    <tr
                      v-for="item in data?.recipient?.transactions"
                      :key="item.id"
                      tabindex="0"
                    >
                      <td class="py-2">
                        <BaseText
                          size="sm"
                          weight="medium"
                          lead="none"
                          class="text-muted-400"
                        >
                          {{ item.date }}
                        </BaseText>
                      </td>
                      <td class="py-2">
                        <BaseText
                          size="sm"
                          weight="medium"
                          lead="none"
                          class="text-muted-600 dark:text-muted-300"
                        >
                          {{
                            item.type === 'in' ? 'Money received' : 'Money sent'
                          }}
                        </BaseText>
                      </td>
                      <td class="px-4 py-2">
                        <BaseText
                          size="sm"
                          weight="semibold"
                          lead="none"
                          class="text-muted-800 dark:text-muted-100"
                        >
                          ${{ item.amount.toFixed(2) }}
                        </BaseText>
                      </td>
                      <td class="px-4 py-2">
                        <BaseTag
                          variant="pastel"
                          rounded="full"
                          :color="statusColor(item.status)"
                          size="sm"
                        >
                          {{ item.status }}
                        </BaseTag>
                      </td>
                      <td class="px-4 py-2">
                        <div class="text-muted-400 flex items-center gap-2">
                          <Icon
                            v-if="item.method === 'credit card'"
                            name="ph:credit-card-duotone"
                            class="size-5"
                          />
                          <Icon
                            v-else-if="item.method === 'cheque'"
                            name="ph:pen-nib-duotone"
                            class="size-5"
                          />
                          <Icon
                            v-else-if="item.method === 'transfer'"
                            name="ph:arrows-left-right-duotone"
                            class="size-5"
                          />
                          <BaseText
                            size="sm"
                            weight="medium"
                            lead="none"
                            class="text-muted-400"
                          >
                            {{ item.method }}
                          </BaseText>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
