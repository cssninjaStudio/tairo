<script setup lang="ts">
import type { PropertyMetaSchema } from 'vue-component-meta'

const props = defineProps<{
  schema: {
    kind: 'enum'
    type: string
    schema?: PropertyMetaSchema[]
  }
}>()

const isString = (schema: PropertyMetaSchema) => {
  return typeof schema === 'string' && schema.startsWith('"')
}
const isNotUndefined = (schema: PropertyMetaSchema) => {
  return schema !== 'undefined'
}

const enumSchema = props.schema.schema!.filter(isNotUndefined)
</script>

<template>
  <div class="flex flex-wrap gap-2 text-left">
    <div
      v-for="(schema, idx) in enumSchema"
      :key="typeof schema === 'string' ? schema : schema.type"
      :class="[
        enumSchema.length > 1 &&
          idx >= 0 &&
          idx < enumSchema.length - 1 &&
          `after:content-['|'] after:ml-2 after:text-[color:var(--prism-punctuation)]`,
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
      <DocArrayMeta
        v-else-if="typeof schema !== 'string' && schema?.kind === 'array'"
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