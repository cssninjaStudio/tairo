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

    return {
      markdown,
    }
  },
})
</script>

<template>
  <div>
    <AddonMarkdownRemark
      :source="markdown"
      fullwidth
      class="doc-markdown"
      :theme="{
        light: 'cssninja-light-theme',
        dark: 'cssninja-dark-theme',
      }"
    />
  </div>
</template>
