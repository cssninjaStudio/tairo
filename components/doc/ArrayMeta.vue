<script setup lang="ts">
import type { PropertyMetaSchema } from 'vue-component-meta'

const props = defineProps<{
  schema: {
    kind: 'array'
    type: string
    schema?: PropertyMetaSchema[]
  }
}>()

const isString = (schema: PropertyMetaSchema) => {
  return typeof schema === 'string' && schema.startsWith('"')
}
</script>

<template>
  <div class="flex gap-2 text-left">
    <div
      v-for="(schema, idx) in props.schema.schema"
      :key="typeof schema === 'string' ? schema : schema.type"
      :class="[
        idx > 1 &&
          `before:content-['|'] before:mr-2 before:text-[color:var(--prism-punctuation)]`,
      ]"
    >
      <span v-if="isString(schema)" class="text-[color:var(--prism-string)]">{{
        schema
      }}</span>
      <span
        v-else-if="typeof schema === 'string' && schema !== 'undefined'"
        class="text-[color:var(--prism-builtin)]"
      >
        {{ schema }}
      </span>
      <DocObjectMeta
        v-else-if="typeof schema !== 'string' && schema?.kind === 'object'"
        :schema="schema"
      />
      <span
        v-else-if="typeof schema !== 'string'"
        class="text-[color:var(--prism-keyword)]"
      >
        {{ schema.type }}
      </span>
    </div>
  </div>
</template>