<script setup lang="ts">
import type { PropertyMeta } from 'vue-component-meta'

const props = defineProps<{
  repeatable?: boolean
  schema: {
    kind: 'object'
    type: string
    schema?: Record<string, PropertyMeta>
  }
}>()

const isInterface = computed(() => {
  return !(props.schema.type.startsWith('{') || props.schema.type.includes('&'))
})
</script>

<template>
  <div class="text-left">
    <span v-if="isInterface" class="text-[color:var(--prism-keyword)]"
      >interface</span
    >
    <span v-if="isInterface" class="mx-1 font-semibold text-primary-500">
      {{ props.schema.type }}
    </span>
    <span class="mr-1 text-[color:var(--prism-punctuation)]">{</span>
    <template v-if="Object.keys(props.schema?.schema ?? {}).length">
      <div
        v-for="schema in props.schema?.schema"
        :key="schema.name"
        class="ml-4"
      >
        <div
          v-if="schema.description"
          class="italic text-[color:var(--prism-comment)]"
        >
          <p>/**</p>
          <p v-if="schema.description">&nbsp;*&nbsp;{{ schema.description }}</p>
          <!-- <p v-for="tag in schema.tags" :key="tag.name">
            &nbsp;*&nbsp;@{{ tag.name
            }}<span v-if="tag.text" class="whitespace-pre pl-1">{{
              tag.text
            }}</span>
          </p> -->
          <p>&nbsp;*/</p>
        </div>
        <p>
          <span class="text-[color:var(--prism-property)]">{{
            schema.name
          }}</span
          >:
          <span class="text-[color:var(--prism-keyword)]">{{
            schema.type
          }}</span>
        </p>
      </div>
    </template>
    <span class="text-[color:var(--prism-punctuation)]">
      <span>}</span>
      <span v-if="props.repeatable">[]</span>
    </span>
  </div>
</template>