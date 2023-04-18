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
  <div class="relative group/prose-code">
    <div
      v-if="filename || isSupported"
      class="absolute group-hover/prose-code:opacity-80 end-2 inline-flex items-center gap-1 top-2 text-xs opacity-40 transition-opacity duration-200"
    >
      <span v-if="filename">{{ filename }}</span>
      <button
        v-if="isSupported"
        type="button"
        :data-tooltip="copied ? 'Copied!' : 'Copy'"
        class="hover:text-white"
        @click="() => copy()"
      >
        <Icon name="lucide:copy" class="inline-block w-3 h-3 ml-1" />
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
