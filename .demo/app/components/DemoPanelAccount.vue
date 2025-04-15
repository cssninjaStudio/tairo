<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    account?: any
  }>(),
  {
    account: undefined,
  },
)

const emits = defineEmits<{
  close: []
}>()

onKeyStroke('Escape', () => emits('close'))
</script>

<template>
  <FocusScope class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-l bg-white" trapped loop>
    <div
      class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="text-muted-500 dark:text-muted-100 uppercase"
      >
        Account Details
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
      class="nui-slimscroll relative h-[calc(100dvh_-_5rem)] w-full overflow-y-auto overflow-x-hidden p-6"
    >
      <!-- Info -->
      <div class="flex items-center justify-between">
        <div>
          <BaseHeading
            as="h4"
            size="lg"
            weight="medium"
            class="text-muted-900 dark:text-muted-100 capitalize"
          >
            {{ props.account.type }} {{ props.account.number }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
            {{ account.owner.name }}
          </BaseParagraph>
        </div>
        <!-- Balance -->
        <div class="py-6 pe-4 text-end">
          <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 mb-1">
            Account balance
          </BaseParagraph>
          <BaseParagraph
            size="2xl"
            weight="medium"
            class="text-muted-900 dark:text-muted-100 mb-1"
          >
            {{ formatPrice(account.balance) }}
          </BaseParagraph>
        </div>
      </div>
      <!-- Content -->
      <div class="space-y-4 py-6 pe-4">
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-500 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Routing number
            </BaseParagraph>
            <BaseTooltip content="The wire routing number">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.routingNumber }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-500 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Account number
            </BaseParagraph>
            <BaseTooltip content="Your full account number">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.accountNumber }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-300 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              IBAN
            </BaseParagraph>
            <BaseTooltip content="The international identifier">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.iban }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-200 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Bank code
            </BaseParagraph>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.bankCode }}
          </BaseText>
        </div>
      </div>

      <div class="-mt-6 p-4">
        <DemoChartAreaBalance />
      </div>
    </div>
  </FocusScope>
</template>
