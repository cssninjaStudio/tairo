<script setup lang="ts">
type TProps = {
  type?: 'tags' | 'categories' | 'articles' | 'authors' | 'main'
}

const props = withDefaults(defineProps<TProps>(), {
  type: 'main',
})
const { blog } = useAppConfig()

console.log(props.type)

const { components } = blog?.sidebars?.[props.type] || { components: {} }
</script>

<template>
  <div>
    <div>
      <div
        class="sticky top-[100px] col-span-1 ml-2 flex h-screen flex-col items-start justify-start space-y-4 overflow-auto"
      >
        <component
          v-for="(c, componentName) in components"
          :is="componentName"
          v-bind="c.props"
          :key="componentName"
        />
      </div>
    </div>
  </div>
</template>
