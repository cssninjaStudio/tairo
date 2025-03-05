import type { NuxtComponentMeta, NuxtComponentMetaNames } from '#nuxt-component-meta/types'
import type { MaybeRefOrGetter } from 'vue'

const excludedProps = ['modelValue', 'modelModifiers']

export async function useDocumentationMeta<T extends NuxtComponentMetaNames>(
  _name: MaybeRefOrGetter<T>,
) {
  const name = toRef(_name)

  const meta = await useComponentMeta(name) as unknown as ComputedRef<NuxtComponentMeta[T]>

  const model = computed(
    () => meta.value?.meta?.props?.find((prop: any) => prop.name === 'modelValue'),
  )
  const modelModifiers = computed(
    () => {
      const prop = meta.value?.meta?.props?.find((prop: any) => prop.name === 'modelModifiers')

      // input: 'Record<"number" | "trim" | "lazy", true> | undefined'
      // out: ['number', 'trim', 'lazy']
      const modifierRe = /"([^"]+)"/g

      return prop?.type.match(modifierRe)?.map((m: string) => m.replace(/"/g, '')) ?? []
    },
  )
  const props = computed(
    () => {
      const props = meta.value?.meta?.props?.filter(
        (prop: any) => !excludedProps.includes(prop.name) && !prop.tags.some((tag: any) => tag.name === 'default'),
      ) || []

      props.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name)
      })
      props.sort((a: any, b: any) => {
        return a.required === b.required ? 0 : a.required ? -1 : 1
      })

      return props
    },
  )
  const configurableProps = computed(
    () =>
      meta.value?.meta?.props?.filter(
        (prop: any) => !excludedProps.includes(prop.name) && prop.tags.some((tag: any) => tag.name === 'default'),
      ) || [],
  )
  const events = computed(
    () =>
      meta.value?.meta?.events?.filter(
        (prop: any) => prop.name !== 'update:modelValue',
      ) || [],
  )
  const slots = computed(() => meta.value?.meta?.slots)
  const exposed = computed(
    () =>
      meta.value?.meta?.exposed?.filter((item: any) => {
        const isProps
          = props.value?.findIndex((prop: any) => prop.name === item.name) >= 0
        const isEvent
          = meta.value?.meta?.events?.findIndex(
            (event: any) =>
              `on${event.name}`.toLowerCase() === item.name?.toLowerCase(),
          ) >= 0
        const isExcluded = item.name?.startsWith('$')
        const isModel = item.name === 'modelValue' || item.name === 'modelModifiers'

        return !(isProps || isEvent || isExcluded || isModel)
      }) || [],
  )

  const noOptions = computed(() => {
    return (
      !(
        props.value?.length
        || events.value?.length
        || slots.value?.length
        || exposed.value?.length
      ) && model.value === undefined
    )
  })

  return reactive({
    meta,
    model,
    modelModifiers,
    props,
    configurableProps,
    events,
    slots,
    exposed,
    noOptions,
  })
}
