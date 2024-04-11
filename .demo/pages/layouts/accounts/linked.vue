<script setup lang="ts">
definePageMeta({
  title: 'Linked Accounts',
  preview: {
    title: 'Linked Accounts',
    description: 'For account management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-accounts-linked.png',
    srcDark: '/img/screens/layouts-accounts-linked-dark.png',
    order: 76,
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

const { data, pending, error, refresh } = await useFetch(
  '/api/accounts/linked',
  {
    query,
  },
)
</script>

<template>
  <div>
    <!--Placeholder-->
    <DemoPlaceholderMinimal
      v-if="data?.data?.length === 0"
      title="You currently have no linked accounts"
      description="Link external bank accounts to transfer funds. You can manage your linked accounts from here once you've added one."
    >
      <div class="mt-3 flex justify-center">
        <BaseButton
          rounded="md"
          color="primary"
          class="w-40"
        >
          Link an Account
        </BaseButton>
      </div>
    </DemoPlaceholderMinimal>

    <div v-else>
      <!-- Load data here -->
    </div>
  </div>
</template>
