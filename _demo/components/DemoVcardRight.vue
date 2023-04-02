<script setup lang="ts">
const props = defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <div class="flex h-full flex-col">
    <div
      class="mb-4 flex items-center"
      :class="props.centered && 'flex-col-reverse'"
    >
      <div class="flex-1">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          lead="relaxed"
          class="text-muted-800 dark:text-white"
          :class="props.centered && 'text-center'"
        >
          <span>Maya R.</span>
        </BaseHeading>
        <BaseParagraph v-if="!props.centered" lead="none">
          <span class="text-primary-500 text-xs">Tairo HQ</span>
        </BaseParagraph>
        <BaseParagraph lead="none" :class="props.centered && 'text-center'">
          <span class="text-muted-400 text-xs">UI/UX designer</span>
        </BaseParagraph>
      </div>
      <div class="flex-1 shrink-0">
        <div class="mx-auto" :class="props.centered ? 'w-16' : 'w-12'">
          <BaseAvatar
            src="/img/avatars/2.svg"
            :size="props.centered ? 'lg' : 'md'"
          />
        </div>
      </div>
    </div>
    <div class="mb-4 space-y-2 font-sans">
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:map-pin-duotone" class="text-primary-500 h-4 w-4" />
        <span class="text-muted-400 text-xs">Los Angeles, CA</span>
      </div>
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:phone-duotone" class="text-primary-500 h-4 w-4" />
        <span class="text-muted-400 text-xs">+1 444-751-5156</span>
      </div>
    </div>
    <div
      class="border-muted-200 dark:border-muted-700 mt-auto flex items-end justify-between border-t pt-3"
    >
      <a
        href="mailto:maya@tairo.io"
        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      >
        maya@tairo.io
      </a>
      <Icon name="ph:envelope-duotone" class="text-muted-400 h-4 w-4" />
    </div>
  </div>
</template>
