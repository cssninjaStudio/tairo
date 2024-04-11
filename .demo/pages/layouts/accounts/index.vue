<script setup lang="ts">
definePageMeta({
  title: 'Accounts',
  preview: {
    title: 'Accounts',
    description: 'For account management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-accounts.png',
    srcDark: '/img/screens/layouts-accounts-dark.png',
    order: 75,
    new: true,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(45)
const { open } = usePanels()

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/accounts', {
  query,
})

const currentAccount = ref()

function openAccountPanel(id: number, accounts: any) {
  currentAccount.value = accounts.find((account: any) => account.id === id)
  open('account', { account: currentAccount })
}
</script>

<template>
  <div class="w-full">
    <!--Balance-->
    <div class="py-6">
      <p class="font-heading text-muted-400 mb-1 text-xs">
        Global balance
      </p>
      <h3
        class="font-heading text-muted-800 dark:text-muted-100 mb-1 text-3xl font-medium"
      >
        $15,389.22
      </h3>
    </div>
    <!--Placeholder-->
    <DemoPlaceholderMinimal
      v-if="data?.data?.length === 0"
      title="No payments to show"
      description="Yo have no payment requests completed. Please come back later."
    />
    <!--Accounts list-->
    <ul v-else class="max-w-2xl">
      <!--Header-->
      <li>
        <div
          class="border-muted-200 dark:border-muted-800 flex w-full max-w-2xl gap-x-4 border-b px-3 py-2"
        >
          <div class="w-3/5">
            <span class="font-heading text-muted-400 mb-1 text-xs">Account</span>
          </div>
          <div class="w-1/5">
            <span class="font-heading text-muted-400 mb-1 text-xs">Balance</span>
          </div>
          <div class="hidden md:w-1/5">
            <span class="font-heading text-muted-400 mb-1 text-xs">
              Transfer rules
            </span>
          </div>
        </div>
      </li>
      <!--Account item-->
      <li
        v-for="account in data?.data"
        :key="account.id"
        role="button"
        tabindex="0"
        class="hover:bg-muted-200 dark:hover:bg-muted-800 cursor-pointer px-3 transition-colors duration-300"
        @click="openAccountPanel(account.id, data?.data)"
      >
        <div
          class="border-muted-200 dark:border-muted-800 flex w-full max-w-2xl items-center gap-x-4 border-b py-4"
        >
          <div class="w-3/5">
            <div class="flex w-full items-center gap-3">
              <TairoLogo class="text-muted-400 size-8" />
              <BaseText size="sm" class="text-muted-800 dark:text-muted-200">
                {{ account.type }} {{ account.number }}
              </BaseText>
            </div>
          </div>
          <div class="w-2/5 md:w-1/5">
            <BaseText class="text-muted-800 dark:text-muted-200">
              ${{ account.balance.toFixed(2) }}
            </BaseText>
          </div>
          <div class="hidden md:block md:w-1/5">
            <BaseButton
              to="/layouts/accounts/rules"
              rounded="md"
              size="sm"
              @click.stop
            >
              <Icon name="lucide:edit-3" class="size-4" />
              <span class="font-heading text-sm">New rule</span>
            </BaseButton>
          </div>
        </div>
      </li>
      <!--Add account-->
      <li
        class="hover:bg-muted-200 dark:hover:bg-muted-800 cursor-pointer px-3 transition-colors duration-300"
      >
        <div
          class="border-muted-200 dark:border-muted-800 group flex w-full items-center gap-x-4 border-b py-4"
        >
          <div class="w-3/5">
            <div class="flex w-full items-center gap-3">
              <div
                class="text-muted-500 bg-muted-100 dark:bg-muted-800 group-hover:bg-primary-500 flex size-8 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white"
              >
                <Icon name="lucide:plus" class="size-4" />
              </div>
              <BaseText
                size="sm"
                class="text-muted-400 dark:text-muted-500 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              >
                Add an account
              </BaseText>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
