<script setup lang="ts">
definePageMeta({
  title: 'Wallet',
  preview: {
    title: 'Preferences - Wallet',
    description: 'For account management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-preferences-wallet.png',
    srcDark: '/img/screens/layouts-preferences-wallet-dark.png',
    order: 86,
    new: true,
  },
})

const selectedBlockchain = ref(0)
const selectedWallet = ref(0)

const blockchains = [
  {
    name: 'Ethereum',
    icon: 'streamline:ethereum-solid',
    description: 'One of the most trusted financial blockchains.',
  },
  {
    name: 'Polygon',
    icon: 'token-branded:polygon-pos',
    description: 'Polygon is a protocol and an elite framework.',
  },
  {
    name: 'Cardano',
    icon: 'logos:cardano-icon',
    description: 'Cardano is a proof-of-stake blockchain platform.',
  },
  {
    name: 'Binance',
    icon: 'token-branded:binance-smart-chain',
    description: 'Use the new and powerful Binance smartchain.',
  },
]

const wallets = [
  {
    name: 'Metamask',
    icon: 'token-branded:metamask',
  },
  {
    name: 'Coinbase Wallet',
    icon: 'token-branded:coinbase',
  },
  {
    name: 'Wallet Connect',
    icon: 'token-branded:wallet-connect',
  },
]
</script>

<template>
  <div>
    <BaseCard rounded="lg" class="relative mt-8 w-full max-w-5xl overflow-hidden">
      <div class="grid grid-cols-1 gap-16 p-6 sm:p-8 md:grid-cols-2">
        <div>
          <BaseHeading
            as="h4"
            size="md"
            weight="medium"
            class="text-muted-900 text-base font-bold dark:text-white"
          >
            Choose Blockchain
          </BaseHeading>
          <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <BaseCard
              v-for="(blockchain, index) in blockchains"
              :key="index"
              rounded="lg"
              :shadow="selectedBlockchain === index ? 'flat' : 'hover'"
              class="relative cursor-pointer overflow-hidden"
              :class="selectedBlockchain === index ? 'border-primary-500!' : ''"
              role="button"
              tabindex="0"
              @click="selectedBlockchain = index"
            >
              <div v-if="selectedBlockchain === index" class="absolute end-0 top-0 p-2">
                <div class="bg-primary-500 flex size-5 items-center justify-center rounded-full">
                  <Icon name="lucide:check" class="size-3 text-white" />
                </div>
              </div>

              <div class="group/chain p-4">
                <div class="relative">
                  <div class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 mb-3 flex size-12 items-center justify-center rounded-xl border bg-white">
                    <div class="bg-muted-100 dark:bg-muted-800 flex size-10 items-center justify-center rounded-lg">
                      <Icon :name="blockchain.icon" class="text-muted-500 dark:text-muted-400 group-hover/chain:text-primary-500 dark:group-hover/chain:text-primary-500 size-5 transition-colors duration-500" />
                    </div>
                  </div>
                  <div class="space-y-1">
                    <BaseParagraph
                      size="sm"
                      weight="semibold"
                      class="text-muted-900 dark:text-muted-100"
                    >
                      {{ blockchain.name }}
                    </BaseParagraph>
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      {{ blockchain.description }}
                    </BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>

        <div>
          <BaseHeading
            as="h4"
            size="md"
            weight="medium"
            class="text-muted-900 text-base font-bold dark:text-white"
          >
            Choose Wallet
          </BaseHeading>

          <div class="mt-5 grid grid-cols-1 gap-4">
            <BaseCard
              v-for="(wallet, i) in wallets"
              :key="wallet.name"
              class="cursor-pointer overflow-hidden"
              role="button"
              rounded="lg"
              tabindex="0"
              :shadow="selectedWallet === i ? 'flat' : 'hover'"
              :class="selectedWallet === i ? 'border-primary-500!' : ''"
              @click="selectedWallet = i"
            >
              <div class="p-4">
                <div class="flex items-center gap-4">
                  <Icon :name="wallet.icon" class="size-6 shrink-0" />
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-900 dark:text-muted-100 flex-1"
                  >
                    {{ wallet.name }}
                  </BaseParagraph>
                  <div v-if="selectedWallet === i" class="ms-auto">
                    <div class="bg-primary-500 flex size-5 items-center justify-center rounded-full">
                      <Icon name="lucide:check" class="size-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
