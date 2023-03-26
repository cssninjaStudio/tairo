<script setup lang="ts">
definePageMeta({
  title: 'Project List',
})

const { data, pending, error, refresh } = await useFetch(
  '/api/company/projects',
)

const selectedProject = ref('')
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="!pending && data?.recent.length === 0">
      <div class="p-6 rounded-xl bg-muted-200 dark:bg-muted-800/60">
        <BaseHeading tag="h4" size="lg" weight="medium">
          No projects
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          Looks like you don't have any project to view.
        </BaseParagraph>
      </div>
    </div>
    <div v-else>
      <div class="flex justify-center max-w-xs mx-auto mb-6">
        <BaseAutocomplete
          v-model="selectedProject"
          :items="data?.data"
          :display-value="(item) => item.name"
          shape="curved"
          icon="lucide:search"
          placeholder="Search..."
          label="Search projects"
          label-float
          clearable
        >
          <template #empty="{ pending: pending, query }">
            <BasePlaceload v-if="pending" />
            <span
              v-else-if="!query"
              class="text-muted-700 dark:text-muted-400 cursor-default select-none"
            >
              Cherchez un client par nom, email, tel...
            </span>
          </template>
          <template #item="{ item, active, selected }">
            <NuxtLink
              :to="`/layouts/projects/details/${item.slug}`"
              class="block"
            >
              <BaseAutocompleteItem
                :value="{
                  name: item.name,
                  text: `${item.customer.name} | ${item.customer.text}`,
                  media: item.customer.logo,
                }"
                :active="active"
                :selected="selected"
              />
            </NuxtLink>
          </template>
        </BaseAutocomplete>
      </div>
      <div class="text-center mb-6">
        <BaseHeading tag="h4" size="xl" weight="medium">
          Your recent projects
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          Looks like you haven't viewed any projects yet.
        </BaseParagraph>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <TransitionGroup
          enter-active-class="transform-gpu"
          enter-from-class="opacity-0 -translate-x-full"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="absolute transform-gpu"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-full"
        >
          <NuxtLink
            v-for="(item, r) in data?.recent.slice(0, 4)"
            :key="r"
            class="block group"
            :to="`/layouts/projects/details/${item.slug}`"
          >
            <BaseCard
              shape="curved"
              elevated-hover
              class="p-5 group-hover:!border-primary-500"
            >
              <div class="flex gap-2 mb-6">
                <BaseAvatar
                  :src="item.customer.logo"
                  size="sm"
                  shape="straight"
                  mask="blob"
                  :data-tooltip="item.name"
                  class="bg-muted-100 dark:bg-muted-700"
                />
                <div>
                  <BaseHeading
                    tag="h5"
                    size="sm"
                    weight="medium"
                    class="line-clamp-1"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    {{ item.customer.name }} | {{ item.customer.text }}
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <BaseAvatar
                    v-for="stack in item.stacks"
                    :key="stack.name"
                    :src="stack.icon"
                    size="xxs"
                    shape="straight"
                    mask="blob"
                    :data-tooltip="stack.name"
                    class="bg-muted-100 dark:bg-muted-700"
                  />
                </div>
                <div class="flex items-center gap-4 text-muted-400">
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="ph:paperclip-duotone" class="w-4 h-4" />
                    <span class="font-sans">
                      {{ item.files.length }}
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="ph:users-duotone" class="w-4 h-4" />
                    <span class="font-sans">{{ item.team.length }}</span>
                  </div>
                </div>
              </div>
            </BaseCard>
          </NuxtLink>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
