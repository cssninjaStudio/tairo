import type { MaybeRefOrGetter } from '@vueuse/shared'
import { kebabCase, upperFirst } from 'scule'
import type { ComponentMeta } from 'vue-component-meta'
// @ts-ignore - might be not defined if documentation is disabled
import type { NuxtComponentMetaNames } from '#nuxt-component-meta/types'
import { toRef } from '@vueuse/core'

const excludedProps = ['modelValue', 'modelModifiers']

export async function useDocumentationMeta(
  _name: MaybeRefOrGetter<NuxtComponentMetaNames>,
) {
  const name = toRef(_name)

  const meta = await useComponentMeta(name.value)

  const model = computed(() =>
    meta?.value?.meta?.props?.find((prop: any) => prop.name === 'modelValue'),
  )
  const props = computed(() =>
    meta?.value?.meta?.props?.filter(
      (prop: any) => !excludedProps.includes(prop.name),
    ),
  )
  const events = computed(() =>
    meta?.value?.meta?.events?.filter(
      (prop: any) => prop.name !== 'update:modelValue',
    ),
  )
  const slots = computed(() => meta?.value?.meta?.slots)
  const exposed = computed(() =>
    meta?.value?.meta?.exposed.filter((item: any) => {
      const isProps =
        props.value?.findIndex((prop: any) => prop.name === item.name) >= 0
      const isEvent =
        meta?.value?.meta?.events?.findIndex(
          (event: any) =>
            `on${event.name}`.toLowerCase() === item.name?.toLowerCase(),
        ) >= 0
      const isExcluded = item.name?.startsWith('$')
      const isModel = item.name === 'modelValue'

      return !(isProps || isEvent || isExcluded || isModel)
    }),
  )

  const noOptions = computed(() => {
    return (
      !(
        props.value?.length ||
        events.value?.length ||
        slots.value?.length ||
        exposed.value?.length
      ) && model.value === undefined
    )
  })

  function renderNoOptions() {
    const code: string[] = ['```vue']

    code.push(`<template>`)

    const oneline = [`  <${name.value} `, `/>`].join('')

    code.push(oneline)
    code.push(`</template>`)

    return code.join('\n')
  }

  function renderModel(prop: ComponentMeta['props'][0]) {
    const code: string[] = ['```vue']

    code.push(`<script setup lang="ts">`)
    if (prop.type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${prop.type
            .replace(/{ /g, '{\n ')
            .replace(/; ([a-z])/g, ';\n $1')
            .replace(/; /g, ';\n')}\n\nconst ${prop.name} = ref<${upperFirst(
            prop.name,
          )}Data>(${prop.default || ''})`,
        ].join('\n'),
      )
    } else {
      code.push(
        [`const value = ref<${prop.type}>(${prop.default || ''})`].join('\n'),
      )
    }

    code.push(`</script>`)
    code.push(``)
    code.push(`<template>`)

    const oneline = [`  <${name.value} `, `v-model="value" `, `/>`].join('')

    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          '```',
        ].join('\n'),
      )
    } else {
      code.push(oneline)
    }

    code.push(`</template>`)

    return code.join('\n')
  }

  function renderProperty(prop: ComponentMeta['props'][0]) {
    const code: string[] = ['```vue']

    const defaultValue =
      !prop.default || prop.default === 'undefined' ? '' : prop.default

    code.push(`<script setup lang="ts">`)
    if (prop.type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${prop.type
            .replace(/{ /g, '{\n ')
            .replace(/; ([a-z])/g, ';\n $1')
            .replace(/; /g, ';\n')}\n\nconst ${prop.name} = ref<${upperFirst(
            prop.name,
          )}Data>(${defaultValue})`,
        ].join('\n'),
      )
    } else {
      code.push(
        [`const ${prop.name} = ref<${prop.type}>(${defaultValue})`].join('\n'),
      )
    }

    code.push(`</script>`)
    code.push(``)
    code.push(`<template>`)

    const oneline = [
      `  <${name.value} `,
      `:${kebabCase(prop.name)}="${prop.name}" `,
      `/>`,
    ].join('')

    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          '```',
        ].join('\n'),
      )
    } else {
      code.push(oneline)
    }

    code.push(`</template>`)

    return code.join('\n')
  }

  function renderSlot(slot: ComponentMeta['slots'][0]) {
    const code: string[] = []
    code.push('```vue')
    code.push(`<template>`)

    if (slot.type !== '{}') {
      code.push(`  <${name.value}>`)
      code.push(`    <template #${slot.name}="value">`)
      code.push(`      <!-- Use destruct to keep what you need -->`)
      code.push(`      <pre>{{ value }}</pre>`)
      code.push(`    </template>`)
    } else {
      code.push(`  <${name.value}>`)

      if (slot.name === 'default') {
        code.push(`    <!-- Your content -->`)
      } else {
        code.push(`    <template #${slot.name}>`)
        code.push(`      <!-- Your content -->`)
        code.push(`    </template>`)
      }
    }

    code.push(`  </${name.value}>`)
    code.push(`</template>`)
    code.push('```')

    return code.join('\n')
  }

  function renderEvents(event: ComponentMeta['events'][0]) {
    const code: string[] = []

    const handlerName = upperFirst(event.name).replace(/:([a-z])/g, (v) =>
      v.replace(':', '').toUpperCase(),
    )
    const handlerProps = event.type.startsWith('[')
      ? event.type.slice(1, -1)
      : event.type

    code.push('```vue')
    code.push(`<script setup lang="ts">`)

    code.push(`function on${handlerName} (${handlerProps}) {`)
    code.push(`  // ...`)
    code.push(`}`)

    code.push(`</script>`)

    code.push(``)

    code.push(`<template>`)

    const oneline = [
      `  <${name.value} `,
      `@${event.name}="on${handlerName}" `,
      `/>`,
    ].join('')
    if (oneline.length > 55) {
      code.push(`  <${name.value}`)
      code.push(`    @${event.name}="on${handlerName}"`)
      code.push(`  />`)
    } else {
      code.push(oneline)
    }

    code.push(`</template>`)

    code.push('```')

    return code.join('\n')
  }

  function renderExposed(prop: ComponentMeta['exposed'][0]) {
    const code: string[] = ['```vue']

    code.push(`<script setup lang="ts">`)

    code.push(
      [
        `// this hold a ref to the component instance`,
        `const comp = ref()`,
        '',
        'watchEffect(() => {',
        `  // you can access all exposed properties with comp.value`,
        `  // like this: comp.value.${prop.name}`,
        `  console.log(comp.value.${prop.name})`,
        '})',
      ].join('\n'),
    )

    code.push(`</script>`)
    code.push(``)
    code.push(`<template>`)

    const oneline = [`  <${name.value} `, `ref="comp" `, `/>`].join('')

    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          '```',
        ].join('\n'),
      )
    } else {
      code.push(oneline)
    }

    code.push(`</template>`)

    return code.join('\n')
  }

  return reactive({
    meta,
    model,
    props,
    events,
    slots,
    exposed,
    noOptions,

    renderModel,
    renderProperty,
    renderSlot,
    renderEvents,
    renderExposed,
    renderNoOptions,
  })
}
