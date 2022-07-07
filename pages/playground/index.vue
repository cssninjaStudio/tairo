<script setup lang="ts">
import { useBaseComponentMeta } from '~/documentation'

const { meta, getCode } = useBaseComponentMeta()

const input = ref('')
const filtered = computed(() => {
  if (!input.value) {
    return meta
  }

  return Object.values(meta).filter((component) => {
    const name = component.name.toLowerCase()
    const inputValue = input.value.toLowerCase()
    return name.includes(inputValue)
  })
})

definePageMeta({
  title: 'Playground Hub',
  layout: 'sidebar',
})
</script>

<template>
  <div class="mx-auto w-full max-w-[840px] pb-20">
    <div class="text-center">
      <BaseAvatar
        class="bg-yellow-100 text-yellow-500 dark:bg-yellow-100/50"
        src="/img/avatars/18.svg"
        text="J"
        size="2xl"
        badge="/img/logos/stacks/tailwind-purple.svg"
      />
      <BaseHeading
        as="h2"
        size="2xl"
        weight="normal"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>Tairo Playground</span>
      </BaseHeading>
      <BaseParagraph>
        <span class="text-muted-500">This is the Tairo Playground.</span>
      </BaseParagraph>
    </div>

    <div class="mx-auto w-full max-w-3xl py-4">
      <BaseFormInput v-model="input" />
    </div>
    <div class="mx-auto w-full max-w-3xl py-4">
      <div class="grid gap-5 md:grid-cols-2">
        <BaseCard
          v-for="compo in filtered"
          :key="compo.name"
          class="group overflow-x-auto"
        >
          <div class="mb-2 flex justify-between p-6">
            <div class="grow pr-4">
              <BaseHeading size="md" weight="normal" lead="tight" class="mb-2">
                <span class="font-mono text-muted-800 dark:text-white">
                  <pre>{{ getCode(compo) }}</pre>
                </span>
              </BaseHeading>
            </div>
          </div>
        </BaseCard>
      </div>

      <div class="pt-12 pb-6 text-center">
        <NuxtLink
          to="https://docs.cssninja.io/tairo"
          class="border-b-2 border-dotted border-primary-500 font-sans text-primary-500"
        >
          Online Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
