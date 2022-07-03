<script setup lang="ts">
import { useBaseComponentMeta } from '~/documentation'

const meta = useBaseComponentMeta()

const toHyphen = (pascalCase: string) => {
  return pascalCase.replace(/([A-Z])/g, '-$1').toLowerCase()
}
const formatPropName = (propName: string) => {
  return propName === 'modelValue' ? 'v-model' : `${toHyphen(propName)}`
}
const formatPropValue = (defaultValue: any) => {
  if (typeof defaultValue === 'undefined') {
    return ''
  }
  return typeof defaultValue === 'string' ? `${defaultValue}` : defaultValue
}
const formatVBindShorthand = (propName: string, prop: any) => {
  if (prop.type === Boolean) {
    return ''
  }

  return propName !== 'modelValue' && typeof prop.default !== 'string'
    ? ':'
    : ''
}

const formatProp = (propName: string, prop: any) => {
  let value = ''
  // const value = formatPropValue(prop.default)

  if (prop.type === Array) {
    value = `="[]"`
  } else if (prop.type !== Boolean) {
    value = `="${formatPropValue(prop.default)}"`
  }

  // console.log(prop.type)

  return `${formatVBindShorthand(propName, prop)}${formatPropName(
    propName
  )}${value}`
}

const getCompoCode = (component) => {
  let code = `<${component.name}`
  const props = component?.props ?? {}
  const emits = (component?.emits ?? []).filter(
    (event) => event !== 'update:modelValue'
  )

  const requiredProps = Object.keys(props).filter(
    (prop) => props[prop].required
  )
  const optionalProps = Object.keys(props).filter(
    (prop) => !props[prop].required
  )

  for (const prop of requiredProps) {
    code += `\n  ${formatProp(prop, props[prop])}`
  }

  if (requiredProps.length > 0) {
    code += '\n'
  }

  for (const prop of optionalProps) {
    code += `\n  ${formatProp(prop, props[prop])}`
  }

  if (optionalProps.length > 0) {
    code += '\n'
  }

  for (const event of emits) {
    code += `\n  @${toHyphen(event)}="(value) => {}"`
  }

  if (emits.length > 0) {
    code += '\n'
  }

  code += '/>'

  return code
}

const input = ref('')
const filtered = computed(() => {
  if (!input.value) {
    return meta
  }

  return Object.values(meta).filter((component) => {
    const name = component.name.toLowerCase()
    const inputValue = input.value.toLowerCase()
    return name.includes(inputValue)
  })
})

definePageMeta({
  title: 'Playground Hub',
  layout: 'sidebar',
})
</script>

<template>
  <div class="w-full max-w-[840px] mx-auto pb-20">
    <div class="text-center">
      <BaseAvatar
        class="bg-yellow-100 dark:bg-yellow-100/50 text-yellow-500"
        src="/img/avatars/18.svg"
        text="J"
        size="2xl"
        badge="/img/logos/stacks/tailwind-purple.svg"
      />
      <BaseHeading
        as="h2"
        size="2xl"
        weight="normal"
        lead="tight"
        class="text-slate-800 dark:text-white"
      >
        <span>Tairo Playground</span>
      </BaseHeading>
      <BaseParagraph>
        <span class="text-slate-500">This is the Tairo Playground.</span>
      </BaseParagraph>
    </div>

    <div class="py-4 w-full max-w-3xl mx-auto">
      <BaseFormInput v-model="input" />
    </div>
    <div class="py-4 w-full max-w-3xl mx-auto">
      <div class="grid md:grid-cols-2 gap-5">
        <BaseCard
          v-for="compo in filtered"
          :key="compo.name"
          class="group overflow-x-auto"
        >
          <div class="flex justify-between p-6 mb-2">
            <div class="grow pr-4">
              <BaseHeading size="md" weight="normal" lead="tight" class="mb-2">
                <span class="text-slate-800 dark:text-white font-mono">
                  <pre>{{ getCompoCode(compo) }}</pre>
                </span>
              </BaseHeading>
            </div>
          </div>
        </BaseCard>
      </div>

      <div class="text-center pt-12 pb-6">
        <NuxtLink
          to="https://docs.cssninja.io/tairo"
          class="font-text text-primary-500 border-b-2 border-dotted border-primary-500"
        >
          Online Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
