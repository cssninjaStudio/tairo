<script setup lang="ts">
const currencies = [
  {
    id: 0,
    name: 'LTC',
    fullName: 'Litecoin',
    icon: 'cryptocurrency:ltc',
  },
  {
    id: 1,
    name: 'ETH',
    fullName: 'Ethereum',
    icon: 'cryptocurrency:eth',
  },
  {
    id: 2,
    name: 'BELA',
    fullName: 'Belacoin',
    icon: 'cryptocurrency:bela',
  },
  {
    id: 4,
    name: 'XBY',
    fullName: 'Xtrabytes',
    icon: 'cryptocurrency:xby',
  },
]
</script>

<template>
  <div class="space-y-5 mb-2">
    <div
      v-for="currency in currencies"
      :key="currency.id"
      class="flex items-center gap-3"
    >
      <div
        class="h-10 w-10 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700"
      >
        <Icon :name="currency.icon" class="w-7 h-7 text-muted-400" />
      </div>
      <div>
        <BaseHeading
          as="h4"
          size="xs"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ currency.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">{{ currency.fullName }} token</span>
        </BaseParagraph>
      </div>
      <div class="flex items-center ml-auto">
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="lucide:arrow-right" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
