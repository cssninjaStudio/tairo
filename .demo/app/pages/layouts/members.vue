<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const page = computed(() => Number.parseInt((route.query.page as string) ?? '1', 10))

const filter = ref('')
const perPage = ref(45)

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

const { data, pending, error, refresh } = await useFetch('/api/members', {
  query,
})

const currentMember = ref()
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div class="flex items-center justify-end pb-6">
      <!-- Buttons -->
      <div class="hidden items-center gap-2 md:flex">
        <BaseButton
          to="/layouts/invite"
          rounded="md"
          size="sm"
        >
          <Icon name="solar:user-rounded-linear" class="size-4" />
          <span>Invite a Member</span>
        </BaseButton>
        <BaseButton
          rounded="md"
          size="sm"
        >
          <Icon name="solar:pen-2-linear" class="size-4" />
          <span>Edit Member</span>
        </BaseButton>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- Navigation -->
      <div class="col-span-12 lg:col-span-5">
        <ul
          class="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-hidden"
        >
          <li
            v-for="member in data?.data"
            :key="member.id"
            role="button"
            tabindex="0"
            @click="currentMember = member"
          >
            <NuxtLink
              :to="`/layouts/members/${member.slug}`"
              class="hover:bg-muted-200/80 dark:hover:bg-muted-800/60 flex items-center gap-2 rounded-xl p-4"
              active-class="bg-muted-200/80 dark:bg-muted-800/60"
            >
              <BaseAvatar
                :src="member.picture"
                :alt="member.name"
                size="xs"
              />
              <div>
                <BaseHeading
                  weight="medium"
                  size="md"
                  lead="tight"
                  class="line-clamp-1"
                >
                  {{ member.name }}
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 line-clamp-1">
                  {{ member.email }}
                </BaseParagraph>
              </div>
              <div class="ms-auto hidden sm:block">
                <BaseTag rounded="lg">
                  {{ member.role.label }}
                </BaseTag>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Slug content -->
      <div class="col-span-12 lg:col-span-7">
        <NuxtPage v-if="currentMember !== undefined" />
        <BaseCard
          v-else
          rounded="md"
        >
          <div class="p-6">
            <div class="py-10 text-center">
              <BaseHeading
                weight="medium"
                size="xl"
                lead="none"
                class="mb-1"
              >
                Nothing to show
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mx-auto max-w-xs">
                No member selected. Select one your organization members to see
                more details.
              </BaseParagraph>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
