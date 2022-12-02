<script setup lang="ts">
import type { PropertyMetaSchema } from 'vue-component-meta'

export interface DocProperties {
  schema: PropertyMetaSchema
}

const props = defineProps<DocProperties>()
</script>

<template>
  <DocObjectMeta
    v-if="typeof props.schema !== 'string' && props.schema?.kind === 'object'"
    :schema="props.schema"
  />
  <DocArrayMeta
    v-if="typeof props.schema !== 'string' && props.schema?.kind === 'array'"
    :schema="props.schema"
  />
  <DocEnumMeta
    v-if="typeof props.schema !== 'string' && props.schema?.kind === 'enum'"
    :schema="props.schema"
  />
  <div
    v-else-if="typeof props.schema === 'string'"
    class="text-left text-success-500"
  >
    {{ props.schema }}
  </div>
</template>