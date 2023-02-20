<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    labels: string[]
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
    <div class="flex items-center justify-between mb-8">
      <slot>
        <BaseHeading
          v-if="props.title"
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ props.title }}</span>
        </BaseHeading>
      </slot>
      <div>
        <div
          class="relative h-9 w-40 flex bg-muted-100 dark:bg-muted-700"
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
    </div>
    <div>
      <div v-if="activeTab === 'tab-1'">
        <slot name="tab-1"></slot>
      </div>
      <div v-else-if="activeTab === 'tab-2'">
        <slot name="tab-2"></slot>
      </div>
    </div>
  </div>
</template>
