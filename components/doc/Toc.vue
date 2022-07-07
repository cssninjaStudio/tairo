<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'

export interface DocTocbarLink {
  label: string
  anchor: string
}

export interface DocTocbarItem {
  label: string
  anchor: string
  subItems: DocTocbarLink[]
}

export interface DocTocbarProps {
  anchors: DocTocbarItem[]
  hidden?: boolean
}

const props = withDefaults(defineProps<DocTocbarProps>(), {
  hidden: false,
})

const route = useRoute()
const activeAnchor = ref(0)
const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div
    class="flex flex-col justify-between overflow-y-auto sticky max-h-screen pt-10 pb-6 pl-20 top-12"
  >
    <div class="mb-8">
      <BaseHeading
        size="xs"
        weight="semibold"
        lead="tight"
        class="uppercase mb-6 text-muted-800 dark:text-white"
      >
        <span>On this page</span>
      </BaseHeading>

      <nav class="font-sans text-sm">
        <ul class>
          <li v-for="(item, index) in props.anchors" :key="index">
            <NuxtLink
              :to="{ name: route.name!, hash: `#${item.anchor}` }"
              class="block py-2 border-r-2"
              :class="
                activeAnchor === index
                  ? ' border-primary-500 text-primary-500'
                  : 'border-muted-200  dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400'
              "
              @click.prevent="
                () => {
                  activeAnchor = index
                  scrollTo(`#${item.anchor}`, 800, { offset: -100 })
                }
              "
            >
              {{ item.label }}
            </NuxtLink>
            <ul v-if="item.subItems.length > 0" class="pl-4">
              <li v-for="(subitem, i) in item.subItems" :key="i">
                <NuxtLink
                  :to="{
                    name: route.name!,
                    hash: `#${item.anchor}`,
                  }"
                  class="block text-sm py-2 border-r-2 border-muted-200 dark:border-muted-800 text-muted-400 hover:text-muted-300"
                  @click.prevent="
                    () => {
                      activeAnchor = index
                      scrollTo(`#${item.anchor}`, 800, { offset: -100 })
                    }
                  "
                >
                  {{ subitem.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
