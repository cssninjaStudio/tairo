<script setup lang="ts">
const props = defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <div class="h-full flex flex-col">
    <div
      class="flex items-center mb-4"
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
          <span class="text-xs text-primary-500">Tairo HQ</span>
        </BaseParagraph>
        <BaseParagraph lead="none" :class="props.centered && 'text-center'">
          <span class="text-xs text-muted-400">UI/UX designer</span>
        </BaseParagraph>
      </div>
      <div class="flex-1 flex-shrink-0">
        <div class="mx-auto" :class="props.centered ? 'w-16' : 'w-12'">
          <BaseAvatar
            src="/img/avatars/2.svg"
            :size="props.centered ? 'lg' : 'md'"
          />
        </div>
      </div>
    </div>
    <div class="font-sans space-y-2 mb-4">
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:map-pin-duotone" class="w-4 h-4 text-primary-500" />
        <span class="text-xs text-muted-400">Los Angeles, CA</span>
      </div>
      <div
        class="flex items-end gap-2"
        :class="props.centered && 'justify-center'"
      >
        <Icon name="ph:phone-duotone" class="w-4 h-4 text-primary-500" />
        <span class="text-xs text-muted-400">+1 444-751-5156</span>
      </div>
    </div>
    <div
      class="flex items-end justify-between pt-3 mt-auto border-t border-muted-200 dark:border-muted-700"
    >
      <a
        href="mailto:maya@tairo.io"
        class="font-sans text-sm underline-offset-4 hover:underline text-primary-500"
      >
        maya@tairo.io
      </a>
      <Icon name="ph:envelope-duotone" class="w-4 h-4 text-muted-400" />
    </div>
  </div>
</template>
