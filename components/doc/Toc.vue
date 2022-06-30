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

const activeAnchor = ref(0)
const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div
    class="flex flex-col justify-between overflow-y-auto sticky max-h-screen pt-10 pb-6 pl-20 top-12"
  >
    <div class="mb-8">
      <BaseHeading
        tag="h3"
        size="xs"
        weight="semibold"
        lead="tight"
        class="uppercase mb-6 text-slate-800 dark:text-white"
      >
        <span>On this page</span>
      </BaseHeading>

      <nav class="font-text text-sm">
        <ul class>
          <li v-for="(item, index) in props.anchors" :key="index">
            <a
              href="javascript:void(0);"
              class="block py-2 border-r-2"
              :class="
                activeAnchor === index
                  ? ' border-primary-500 text-primary-500'
                  : 'border-slate-200  dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-400'
              "
              @click.prevent="
                scrollTo(`#${item.anchor}`, 800, { offset: -100 }),
                  (activeAnchor = index)
              "
            >
              {{ item.label }}
            </a>
            <ul v-if="item.subItems.length > 0" class="pl-4">
              <li v-for="(subitem, i) in item.subItems" :key="i">
                <a
                  href="javascript:void(0);"
                  class="block text-sm py-2 border-r-2 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-300"
                  @click.prevent="
                    scrollTo(`#${item.anchor}`, 800, { offset: -100 }),
                      (activeAnchor = index)
                  "
                >
                  {{ subitem.label }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
