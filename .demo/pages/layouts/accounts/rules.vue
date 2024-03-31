<script setup lang="ts">
definePageMeta({
  title: 'Transfer rules',
  preview: {
    title: 'Transfer rules',
    description: 'For account management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-accounts-rules.png',
    srcDark: '/img/screens/layouts-accounts-rules-dark.png',
    order: 77,
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
  '/api/accounts/rules',
  {
    query,
  },
)
</script>

<template>
  <div>
    <!--Placeholder-->
    <div v-if="data?.data?.length === 0" class="mb-8">
      <p class="font-heading text-muted-500 dark:text-muted-500 text-sm">
        You don't have any active rules
      </p>
    </div>

    <div v-else class="mb-8">
      <!-- Load rules here -->
    </div>

    <div
      class="bg-muted-200 dark:bg-muted-800 w-full max-w-3xl rounded-xl px-10 py-8"
    >
      <div class="space-y-4">
        <h4 class="font-heading text-muted-500 dark:text-muted-500 text-sm">
          Add a rule
        </h4>
        <!--Rule-->
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-5">
            <button
              type="button"
              class="dark:bg-muted-900 shadow-muted-300/10 dark:shadow-muted-800/10 group flex w-full cursor-pointer items-center gap-2 rounded-xl bg-white p-4 shadow-xl"
            >
              <Icon
                name="lucide:plus"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 size-4 transition-colors duration-300"
              />
              <Icon
                name="ph:diamonds-four-duotone"
                class="iconify text-muted-400 group-hover:text-primary-500 size-6 transition-colors duration-300"
              />
              <BaseText
                size="sm"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              >
                Target balance rule
              </BaseText>
            </button>
          </div>
          <div class="col-span-7">
            <div class="flex size-full flex-col justify-center">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-500"
              >
                Keep an account at a target balance by moving funds to or from
                savings each day.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <!--Rule-->
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-5">
            <button
              type="button"
              class="dark:bg-muted-900 shadow-muted-300/10 dark:shadow-muted-800/10 group flex w-full cursor-pointer items-center gap-2 rounded-xl bg-white p-4 shadow-xl"
            >
              <Icon
                name="lucide:plus"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 size-4 transition-colors duration-300"
              />
              <Icon
                name="ph:compass-duotone"
                class="iconify text-muted-400 group-hover:text-primary-500 size-6 transition-colors duration-300"
              />
              <BaseText
                size="sm"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              >
                Zero balance rule
              </BaseText>
            </button>
          </div>
          <div class="col-span-7">
            <div class="flex size-full flex-col justify-center">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-500"
              >
                Keep an account at $0 by moving incoming funds to savings after
                each transaction.
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
