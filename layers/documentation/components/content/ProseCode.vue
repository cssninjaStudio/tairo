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

    const inCodeGroup = inject('code-group-context', false)
    const { copy, copied, isSupported } = useClipboard({
      source: () => props.code,
    })

    return {
      markdown,
      inCodeGroup,
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
      v-if="!inCodeGroup && (filename || isSupported)"
      class="absolute end-4 top-2 flex items-center gap-1 text-xs opacity-40 transition-opacity duration-200 group-hover/prose-code:opacity-60 dark:group-hover/prose-code:opacity-80"
      :class="[filename && isSupported ? 'start-4 justify-between' : '']"
    >
      <span v-if="filename">{{ filename }}</span>
      <button
        v-if="isSupported"
        type="button"
        :data-nui-tooltip="copied ? 'Copied!' : 'Copy'"
        class="hover:text-muted-950 dark:hover:text-white"
        @click="() => copy()"
      >
        <Icon name="lucide:copy" class="ml-1 inline-block size-3" />
      </button>
    </div>
    <AddonMarkdownRemark
      :source="markdown"
      fullwidth
      class="doc-markdown"
      :class="[
        inCodeGroup
          ? ''
          : filename && isSupported ? '[&_.shiki]:pt-8' : '[&_.shiki]:!pe-10',
      ]"
      :lines="false"
    />
  </div>
</template>
