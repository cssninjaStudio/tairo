<script setup lang="ts">
import { kebabCase } from 'scule'
import type { ComponentMeta } from 'vue-component-meta'

const excludedProps = ['modelValue', 'modelModifiers']

const props = defineProps<{
  name: string
}>()
// @ts-ignore
const componentMeta = (await useComponentMeta(props?.name as any)) as any
const defaultModel = ref()

const componentsModel = computed(() =>
  componentMeta?.value?.meta?.props?.filter(
    (prop: any) => prop.name == 'modelValue',
  ),
)
const componentsProps = computed(() =>
  componentMeta?.value?.meta?.props?.filter(
    (prop: any) => excludedProps.indexOf(prop.name) === -1,
  ),
)
const componentsEvents = computed(() =>
  componentMeta.value?.meta?.events?.filter(
    (prop: any) => prop.name !== 'update:modelValue',
  ),
)
const componentsSlots = computed(() => componentMeta.value?.meta?.slots)
const componentsExposed = computed(() =>
  componentMeta.value?.meta?.exposed
    .filter((item: any) => {
      return (
        componentsProps.value?.findIndex(
          (prop: any) => prop.name === item.name,
        ) === -1
      )
    })
    .filter((item: any) => excludedProps.indexOf(item.name) === -1),
)

// '<' character, we can't use '<' because it's a special character parsed with vite
const LTE = '\u003C'
// '>' character, we can't use '>' because it's a special character parsed with vite
const GTE = '\u003E'

function getModelSnippet(prop: ComponentMeta['props'][0]) {
  const code: string[] = ['```vue']

  code.push(`${LTE}script setup lang="ts"${GTE}`)
  if (prop.type.length > 45) {
    code.push(
      [
        `// this type is generated to show you all possible values`,
        `type ${capitalize(prop.name)}Data = ${prop.type
          .replace(/{ /g, '{\n ')
          // .replace(/}/g, '\n}')
          .replace(/; ([a-z])/g, ';\n $1')
          .replace(
            /; /g,
            ';\n',
          )}\n\n// you can use a const or a ref/computed \n// or directly set value in template\nconst ${
          prop.name
        } = ref${LTE}${capitalize(prop.name)}Data${GTE}(${prop.default})`,
      ].join('\n'),
    )
  } else {
    code.push(
      [
        `// you can use a const or a ref/computed`,
        `// or directly set value in template`,
        `// with one of those valid tyescripta types`,
        `const value = ref${LTE}${prop.type}${GTE}(${prop.default})`,
      ].join('\n'),
    )
  }

  code.push(`${LTE}/script${GTE}`)
  code.push(``)
  code.push(`${LTE}template${GTE}`)

  const oneline = [
    `  ${LTE}${props.name} `,
    `v-model="value" `,
    `/${GTE}`,
  ].join('')

  if (oneline.length > 55) {
    code.push(
      [
        ``,
        `${LTE}template${GTE}`,
        `  ${LTE}${props.name}`,
        `    :${kebabCase(prop.name)}="${prop.name}"`,
        `  /${GTE}`,
        `${LTE}/template${GTE}`,
        '```',
      ].join('\n'),
    )
  } else {
    code.push(oneline)
  }

  code.push(`${LTE}/template${GTE}`)

  // code.push(
  //   [
  //     ``,
  //     `${LTE}template${GTE}`,
  //     `  ${LTE}${props.name}`,
  //     `    :${kebabCase(prop.name)}="${prop.name}"`,
  //     `  /${GTE}`,
  //     `${LTE}/template${GTE}`,
  //     '```',
  //   ].join('\n'),
  // )

  return code.join('\n')
}

function getPropertySnippet(prop: ComponentMeta['props'][0]) {
  const code: string[] = ['```vue']

  code.push(`${LTE}script setup lang="ts"${GTE}`)
  if (prop.type.length > 45) {
    code.push(
      [
        `// this type is generated to show you all possible values`,
        `type ${capitalize(prop.name)}Data = ${prop.type
          .replace(/{ /g, '{\n ')
          // .replace(/}/g, '\n}')
          .replace(/; ([a-z])/g, ';\n $1')
          .replace(
            /; /g,
            ';\n',
          )}\n\n// you can use a const or a ref/computed \n// or directly set value in template\nconst ${
          prop.name
        } = ref${LTE}${capitalize(prop.name)}Data${GTE}(${prop.default})`,
      ].join('\n'),
    )
  } else {
    code.push(
      [
        `// you can use a const or a ref/computed`,
        `// or directly set value in template`,
        `// with one of those valid tyescripta types`,
        `const ${prop.name} = ref${LTE}${prop.type}${GTE}(${prop.default})`,
      ].join('\n'),
    )
  }

  code.push(`${LTE}/script${GTE}`)
  code.push(``)
  code.push(`${LTE}template${GTE}`)

  const oneline = [
    `  ${LTE}${props.name} `,
    `:${kebabCase(prop.name)}="${prop.name}" `,
    `/${GTE}`,
  ].join('')

  if (oneline.length > 55) {
    code.push(
      [
        ``,
        `${LTE}template${GTE}`,
        `  ${LTE}${props.name}`,
        `    :${kebabCase(prop.name)}="${prop.name}"`,
        `  /${GTE}`,
        `${LTE}/template${GTE}`,
        '```',
      ].join('\n'),
    )
  } else {
    code.push(oneline)
  }

  code.push(`${LTE}/template${GTE}`)

  // code.push(
  //   [
  //     ``,
  //     `${LTE}template${GTE}`,
  //     `  ${LTE}${props.name}`,
  //     `    :${kebabCase(prop.name)}="${prop.name}"`,
  //     `  /${GTE}`,
  //     `${LTE}/template${GTE}`,
  //     '```',
  //   ].join('\n'),
  // )

  return code.join('\n')
}

function getSlotSnippet(slot: ComponentMeta['slots'][0]) {
  const code: string[] = []
  code.push('```vue')
  code.push(`${LTE}template${GTE}`)

  if (slot.type !== '{}') {
    code.push(`  ${LTE}${props.name}${GTE}`)
    code.push(`    ${LTE}template #${slot.name}="value"${GTE}`)
    code.push(
      `      ${LTE}!-- The slot prop \`value\` type is ${slot.type} --${GTE}`,
    )
    code.push(`      ${LTE}!-- Use destruct to keep what you need --${GTE}`)
    code.push(`      ${LTE}pre${GTE}\{\{ value \}\}${LTE}/pre${GTE}`)
    code.push(`    ${LTE}/template${GTE}`)
  } else {
    code.push(`  ${LTE}${props.name}${GTE}`)

    if (slot.name === 'default') {
      code.push(`    ${LTE}!-- Your content --${GTE}`)
    } else {
      code.push(`    ${LTE}template #${slot.name}${GTE}`)
      code.push(`      ${LTE}!-- Your content --${GTE}`)
      code.push(`    ${LTE}/template${GTE}`)
    }
  }

  code.push(`  ${LTE}/${props.name}${GTE}`)
  code.push(`${LTE}/template${GTE}`)
  code.push('```')

  return code.join('\n')
}

function getEventsSnippet(event: ComponentMeta['events'][0]) {
  const code: string[] = []

  const handlerName = capitalize(event.name).replace(/:([a-z])/g, (v) =>
    v.replace(':', '').toUpperCase(),
  )
  const handlerProps = event.type.startsWith('[')
    ? event.type.slice(1, -1)
    : event.type

  code.push('```vue')
  code.push(`${LTE}script setup lang="ts"${GTE}`)

  code.push(`function on${handlerName} (${handlerProps}) {`)
  code.push(`  // ...`)
  code.push(`}`)

  code.push(`${LTE}/script${GTE}`)

  code.push(``)

  code.push(`${LTE}template${GTE}`)

  const oneline = [
    `  ${LTE}${props.name} `,
    `@${event.name}="on${handlerName}" `,
    `/${GTE}`,
  ].join('')
  if (oneline.length > 55) {
    code.push(`  ${LTE}${props.name}`)
    code.push(`    @${event.name}="on${handlerName}"`)
    code.push(`  /${GTE}`)
  } else {
    code.push(oneline)
  }

  code.push(`${LTE}/template${GTE}`)

  code.push('```')

  return code.join('\n')
}

function getExposedSnippet(prop: ComponentMeta['exposed'][0]) {
  const code: string[] = ['```vue']

  code.push(`${LTE}script setup lang="ts"${GTE}`)

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

  code.push(`${LTE}/script${GTE}`)
  code.push(``)
  code.push(`${LTE}template${GTE}`)

  const oneline = [`  ${LTE}${props.name} `, `ref="comp" `, `/${GTE}`].join('')

  if (oneline.length > 55) {
    code.push(
      [
        ``,
        `${LTE}template${GTE}`,
        `  ${LTE}${props.name}`,
        `    :${kebabCase(prop.name)}="${prop.name}"`,
        `  /${GTE}`,
        `${LTE}/template${GTE}`,
        '```',
      ].join('\n'),
    )
  } else {
    code.push(oneline)
  }

  code.push(`${LTE}/template${GTE}`)

  return code.join('\n')
}

/**
 * Wrap https://... links in markdown with <a href="...">...</a>
 */
function wrapExternalLinks(string: string) {
  return string.replace(
    /https?:\/\/[^\s)]+/g,
    (url) =>
      `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`,
  )
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}
</script>

<template>
  <div>
    <DocSection
      v-if="componentMeta?.pascalName"
      :title="`<${componentMeta?.pascalName}>`"
    >
      <div
        class="rounded-md border border-muted-200 bg-white divansition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
      >
        <!-- Model display -->
        <div v-if="componentsModel.length > 0" class="mx-auto w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-model`"
              >
                Model
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="divide-y space-y-12 divide-muted-100 text-sm dark:divide-muted-700"
                >
                  <div
                    class="grid grid-cols-1 lg:grid-cols-12 gap-6"
                    v-for="prop in componentsModel"
                    :key="prop.name"
                  >
                    <div class="col-span-1 lg:col-span-4">
                      <BaseTag
                        v-if="prop.required"
                        color="danger"
                        condensed
                        flavor="pastel"
                        class="ml-6 mb-2 font-mono float-right"
                      >
                        Required
                      </BaseTag>
                      <div class="flex">
                        <div
                          class="font-medium text-muted-800 dark:text-muted-100"
                        >
                          <span
                            class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                          >
                            <code>v-model</code>
                          </span>
                        </div>
                      </div>

                      <div
                        class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                      >
                        {{ prop.description }}
                      </div>
                      <div
                        v-if="prop.tags.length > 0"
                        class="mt-3 break-words space-y-2"
                      >
                        <div
                          v-for="tag in prop.tags"
                          :key="tag.name"
                          class="text-xs text-muted-400"
                        >
                          <p class="font-semibold">@{{ tag.name }}</p>
                          <p
                            v-if="tag.text"
                            class="block"
                            v-html="wrapExternalLinks(tag.text)"
                          ></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-1 lg:col-span-8">
                      <AddonMarkdownRemark
                        :lines="false"
                        class="max-w-none"
                        :source="getModelSnippet(prop)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Props display -->
        <div v-if="componentsProps.length > 0" class="mx-auto w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-properties`"
              >
                Properties
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="overflow-x-auto">
              <div class="w-full font-alt">
                <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                  v-for="prop in componentsProps"
                  :key="prop.name"
                >
                  <div class="col-span-1 lg:col-span-4">
                    <BaseTag
                      v-if="prop.required"
                      color="danger"
                      condensed
                      flavor="pastel"
                      class="ml-6 mb-2 font-mono float-right"
                    >
                      Required
                    </BaseTag>
                    <div class="flex">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        <span
                          class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                        >
                          <code>{{ prop.name }}</code>
                        </span>
                      </div>
                    </div>

                    <div
                      class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                    >
                      {{ prop.description }}
                    </div>
                    <div
                      v-if="prop.tags.length > 0"
                      class="mt-3 break-words opacity-70"
                    >
                      <div
                        v-for="tag in prop.tags"
                        :key="tag.name"
                        class="text-xs text-muted-400"
                      >
                        <p class="font-semibold">@{{ tag.name }}</p>
                        <p
                          v-if="tag.text"
                          class="block"
                          v-html="wrapExternalLinks(tag.text)"
                        ></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <AddonMarkdownRemark
                      :lines="false"
                      class="max-w-none"
                      :source="getPropertySnippet(prop)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Events display -->
        <div v-if="componentsEvents.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-events`"
              >
                Events
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                  v-for="event in componentsEvents"
                  :key="event.type"
                >
                  <div class="col-span-1 lg:col-span-4">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                      >
                        <code>@{{ event.name }}</code>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <AddonMarkdownRemark
                      :lines="false"
                      class="max-w-none"
                      :source="getEventsSnippet(event)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slots display -->
        <div v-if="componentsSlots.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-slots`"
              >
                Slots
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                  v-for="slot in componentsSlots"
                  :key="slot.name"
                >
                  <div class="col-span-1 lg:col-span-4">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                      >
                        <code>#{{ slot.name }}</code>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <AddonMarkdownRemark
                      :lines="false"
                      class="max-w-none"
                      :source="getSlotSnippet(slot)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="componentsExposed.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-exposed`"
              >
                Exposed
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                  v-for="exposed in componentsExposed"
                  :key="exposed.name"
                >
                  <div class="col-span-1 lg:col-span-4">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                      >
                        <code>{{ exposed.name }}</code>
                      </div>
                    </div>
                    <div
                      class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                    >
                      {{ exposed.description }}
                    </div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <AddonMarkdownRemark
                      :lines="false"
                      class="max-w-none"
                      :source="getExposedSnippet(exposed)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocSection>
  </div>
</template>
