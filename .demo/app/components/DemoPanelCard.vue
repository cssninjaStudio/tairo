<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    card?: any
  }>(),
  {
    card: undefined,
  },
)

const emits = defineEmits<{
  close: []
}>()

onKeyStroke('Escape', () => emits('close'))

const detailsExpanded = ref(false)
const daySpentProgress = computed(() => {
  return (props.card?.daySpent / props.card?.limits.spend) * 100
})
</script>

<template>
  <FocusScope
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-l bg-white"
    trapped
    loop
  >
    <div
      class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="text-muted-500 dark:text-muted-100 uppercase"
      >
        Card Details
      </BaseHeading>

      <!-- Close button -->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"
        @click="() => emits('close')"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </div>

    <div
      class="nui-slimscroll relative h-[calc(100dvh_-_80px)] w-full overflow-y-auto p-6"
    >
      <div class="mb-3">
        <!-- Info -->
        <div class="flex items-center justify-between">
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-muted-100"
            >
              {{ card.name }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              {{ card.cardInfo.name }}
            </BaseParagraph>
          </div>
          <div class="text-end">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-muted-100"
            >
              ${{ card.daySpent.toFixed(2) }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              Spent today
            </BaseParagraph>
          </div>
        </div>
        <!-- Progress -->
        <BaseProgress
          :model-value="daySpentProgress"
          size="xs"
          variant="primary"
          class="my-2"
        />

        <!-- Card details -->
        <div class="pt-2">
          <button
            type="button"
            class="focus-visible:nui-focus mb-3 flex w-full items-center"
            @click="detailsExpanded = !detailsExpanded"
          >
            <span
              class="text-muted-500 dark:text-muted-400 flex w-full items-center justify-between"
            >
              <span class="flex items-center gap-1">
                <Icon
                  name="lucide:chevron-down"
                  class="size-3 transition-transform duration-300"
                  :class="detailsExpanded ? 'rotate-180' : ''"
                />
                <BaseText v-if="!detailsExpanded" size="xs">
                  Show details
                </BaseText>
                <BaseText v-if="detailsExpanded" size="xs">
                  Hide details
                </BaseText>
              </span>

              <BaseText v-if="!detailsExpanded" size="xs">
                ${{ card.funds.available.toFixed(2) }} available · ${{
                  card.limits.spend.toFixed(2)
                }}
                limit
              </BaseText>
            </span>
          </button>
          <!-- Collapse -->
          <div
            v-if="detailsExpanded"
            class="bg-muted-100 dark:bg-muted-900 rounded-xl p-6"
          >
            <!-- Head -->
            <div
              class="border-muted-200 dark:border-muted-700 mb-3 flex items-center justify-between border-b pb-3"
            >
              <BaseHeading
                as="h5"
                size="xs"
                weight="medium"
                class="text-muted-600 dark:text-muted-300"
              >
                Total daily limit
              </BaseHeading>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                ${{ (card.limits.spend + card.limits.withdraw).toFixed(2) }}
              </BaseText>
            </div>
            <!-- Content -->
            <div class="space-y-4">
              <!-- Item -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="bg-muted-800 size-2 rounded-full" />
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Posted
                  </BaseParagraph>
                  <BaseTooltip content="Settled transactions">
                    <Icon
                      name="lucide:help-circle"
                      class="text-muted-400 size-3"
                    />
                  </BaseTooltip>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.posted.toFixed(2) }}
                </BaseText>
              </div>
              <!-- Item -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="bg-muted-500 size-2 rounded-full" />
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Pending
                  </BaseParagraph>
                  <BaseTooltip content="Unsettled transactions or temporary holds">
                    <Icon
                      name="lucide:help-circle"
                      class="text-muted-400 size-3"
                    />
                  </BaseTooltip>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.pending.toFixed(2) }}
                </BaseText>
              </div>
              <!-- Item -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="bg-muted-300 size-2 rounded-full" />
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Unavailable
                  </BaseParagraph>
                  <BaseTooltip content="Unavailable funds due to spend on other cards. Reach out for assistance.">
                    <Icon
                      name="lucide:help-circle"
                      class="text-muted-400 size-3"
                    />
                  </BaseTooltip>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.unavailable.toFixed(2) }}
                </BaseText>
              </div>
              <!-- Item -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="size-2 rounded-full bg-white" />
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Available to spend
                  </BaseParagraph>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.available.toFixed(2) }}
                </BaseText>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full space-y-5">
          <!-- Card mockup -->
          <DemoCreditCardReal
            :status="card.cardInfo.status"
            :name="card.cardInfo.name"
            :number="card.cardInfo.number"
            :brand="card.cardInfo.brand"
          />
          <!-- Card info / actions -->
          <div class="space-y-4 px-2">
            <BaseParagraph size="xs" class="text-muted-400 text-center">
              This card was issued on {{ card.creationDate }}
            </BaseParagraph>
            <div class="flex items-center justify-between gap-2">
              <BaseButton rounded="md" size="sm">
                Disable
              </BaseButton>
              <BaseButton
                variant="muted"
                rounded="md"
                size="sm"
              >
                Replace
              </BaseButton>
              <BaseButton
                variant="muted"
                rounded="md"
                size="sm"
              >
                Cancel
              </BaseButton>
            </div>
          </div>
          <!-- Billing address -->
          <div class="border-muted-200 dark:border-muted-700 border-t">
            <div class="pt-6">
              <BaseParagraph size="xs" class="text-muted-400 mb-2">
                Billing address
              </BaseParagraph>
              <BaseParagraph
                v-for="item in card.address"
                :key="item"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-300"
              >
                {{ item }}
              </BaseParagraph>
            </div>
          </div>
          <!-- Summary -->
          <div class="border-muted-200 dark:border-muted-700 border-t">
            <div class="space-y-4 py-6">
              <!-- item -->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Daily spend limit
                </BaseParagraph>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  ${{ card.limits.spend.toFixed(2) }}
                </BaseParagraph>
              </div>
              <!-- item -->
              <div class="flex items-center justify-between">
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-600 dark:text-muted-300"
                  >
                    Daily withdrawal limit
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-muted-400 mb-1">
                    Cash withdrawn today
                  </BaseParagraph>
                </div>
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-600 dark:text-muted-300 mb-1"
                  >
                    ${{ card.limits.withdraw.toFixed(2) }}
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-muted-400 mb-1">
                    ${{ card.dayWithdraw.toFixed(2) }}
                  </BaseParagraph>
                </div>
              </div>
              <!-- item -->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Account
                </BaseParagraph>

                <BaseTooltip content="View Account">
                  <NuxtLink
                    to="#"
                    class="text-muted-600 focus-visible:nui-focus dark:text-muted-300 font-sans text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Checking {{ card.account }}
                  </NuxtLink>
                </BaseTooltip>
              </div>
              <!-- item -->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Card type
                </BaseParagraph>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300 capitalize"
                >
                  {{ card.cardInfo.type }}
                </BaseParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FocusScope>
</template>
