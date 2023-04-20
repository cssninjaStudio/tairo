<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup: (props) => {
    const markdown = computed(() => {
      return `\`\`\`${props.language}\n${props.code}\`\`\``
    })

    const { copy, copied, isSupported } = useClipboard({
      source: () => props.code,
    })

    return {
      markdown,
      copy,
      copied,
      isSupported,
    }
  },
})
</script>

<template>
  <div class="group/prose-code relative">
    <div
      v-if="filename || isSupported"
      class="absolute end-2 top-2 inline-flex items-center gap-1 text-xs opacity-40 transition-opacity duration-200 group-hover/prose-code:opacity-60 dark:group-hover/prose-code:opacity-80"
    >
      <span v-if="filename">{{ filename }}</span>
      <button
        v-if="isSupported"
        type="button"
        :data-tooltip="copied ? 'Copied!' : 'Copy'"
        class="hover:text-muted-950 dark:hover:text-white"
        @click="() => copy()"
      >
        <Icon name="lucide:copy" class="ml-1 inline-block h-3 w-3" />
      </button>
    </div>
    <AddonMarkdownRemark
      :source="markdown"
      fullwidth
      class="doc-markdown"
      :lines="false"
      :theme="{
        light: 'cssninja-light-theme',
        dark: 'cssninja-dark-theme',
      }"
    />
  </div>
</template>
