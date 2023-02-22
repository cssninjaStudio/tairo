<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    labels: string[]
    reverse?: boolean
  }>(),
  {
    shape: 'rounded',
    title: undefined,
  },
)

const activeTab = ref('tab-1')
</script>

<template>
  <div>
    <div
      class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6"
      :class="props.reverse && 'sm:flex-row-reverse'"
    >
      <slot name="left"></slot>
      <slot name="right">
        <div class="w-full sm:w-auto">
          <div
            class="relative h-9 w-full sm:w-40 flex bg-white dark:bg-muted-800"
            :class="[
              props.shape === 'rounded' ? 'rounded-md' : '',
              props.shape === 'curved' ? 'rounded-xl' : '',
              props.shape === 'full' ? 'rounded-full' : '',
            ]"
          >
            <button
              type="button"
              class="relative z-10 flex-1 flex items-center justify-center font-sans text-sm cursor-pointer ninja-focus transition-colors duration-300"
              :class="[
                activeTab === 'tab-1' ? 'text-white' : 'text-muted-400',
                props.shape === 'rounded' ? 'rounded-md' : '',
                props.shape === 'curved' ? 'rounded-xl' : '',
                props.shape === 'full' ? 'rounded-full' : '',
              ]"
              @click="activeTab = 'tab-1'"
            >
              {{ props.labels[0] }}
            </button>
            <button
              type="button"
              class="relative z-10 flex-1 flex items-center justify-center font-sans text-sm cursor-pointer ninja-focus transition-colors duration-300"
              :class="[
                activeTab === 'tab-2' ? 'text-white' : 'text-muted-400',
                props.shape === 'rounded' ? 'rounded-md' : '',
                props.shape === 'curved' ? 'rounded-xl' : '',
                props.shape === 'full' ? 'rounded-full' : '',
              ]"
              @click="activeTab = 'tab-2'"
            >
              {{ props.labels[1] }}
            </button>
            <div
              class="absolute top-0 left-0 w-1/2 h-full bg-primary-500 transition-all duration-300 ease-in-out"
              :class="[
                activeTab === 'tab-1' ? 'ml-0' : 'ml-[50%]',
                props.shape === 'rounded' ? 'rounded-md' : '',
                props.shape === 'curved' ? 'rounded-xl' : '',
                props.shape === 'full' ? 'rounded-full' : '',
              ]"
            ></div>
          </div>
        </div>
      </slot>
    </div>
    <div>
      <div v-if="activeTab === 'tab-1'">
        <slot name="tab-1"></slot>
      </div>
      <div v-else-if="activeTab === 'tab-2'">
        <slot name="tab-2"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
