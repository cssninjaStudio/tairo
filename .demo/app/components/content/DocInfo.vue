<script setup lang="ts">
const props = defineProps<{
  icon?: string
  title?: string
  invert?: boolean
}>()
</script>

<template>
  <div class="py-6">
    <BaseCard
      rounded="md"
      class="p-4 md:p-6 bg-muted-50 dark:bg-muted-950"
    >
      <div class="flex gap-3">
        <div v-if="'icon' in $slots || props.icon">
          <slot name="icon">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="h-6 w-6 text-muted-500 dark:text-muted-600"
              :class="props.invert && 'dark:invert'"
            />
          </slot>
        </div>
        <div>
          <BaseHeading
            v-if="'title' in $slots || props.title"
            as="h5"
            size="md"
            weight="medium"
            class="mb-1"
          >
            <slot name="title" mdc-unwrap="p">
              {{ props.title }}
            </slot>
          </BaseHeading>
          <BaseParagraph
            v-if="'default' in $slots"
            size="sm"
            class="text-muted-600 dark:text-muted-400"
          >
            <slot mdc-unwrap="p" />
          </BaseParagraph>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
