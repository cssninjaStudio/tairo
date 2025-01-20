<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    labels: string[]
  }>(),
  {
    rounded: 'sm',
    title: undefined,
  },
)

const activeTab = ref('tab-1')
</script>

<template>
  <div>
    <div class="mb-8 flex items-center justify-between">
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
          class="bg-muted-100 dark:bg-muted-700 relative flex h-9 w-40"
          :class="[
            props.rounded === 'sm' ? 'rounded-md' : '',
            props.rounded === 'md' ? 'rounded-lg' : '',
            props.rounded === 'lg' ? 'rounded-xl' : '',
            props.rounded === 'full' ? 'rounded-full' : '',
          ]"
        >
          <button
            type="button"
            class="focus-visible:nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"
            :class="[
              activeTab === 'tab-1' ? 'text-white' : 'text-muted-400',
              props.rounded === 'sm' ? 'rounded-md' : '',
              props.rounded === 'md' ? 'rounded-lg' : '',
              props.rounded === 'lg' ? 'rounded-xl' : '',
              props.rounded === 'full' ? 'rounded-full' : '',
            ]"
            @click="activeTab = 'tab-1'"
          >
            {{ props.labels[0] }}
          </button>
          <button
            type="button"
            class="focus-visible:nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"
            :class="[
              activeTab === 'tab-2' ? 'text-white' : 'text-muted-400',
              props.rounded === 'sm' ? 'rounded-md' : '',
              props.rounded === 'md' ? 'rounded-lg' : '',
              props.rounded === 'lg' ? 'rounded-xl' : '',
              props.rounded === 'full' ? 'rounded-full' : '',
            ]"
            @click="activeTab = 'tab-2'"
          >
            {{ props.labels[1] }}
          </button>
          <div
            class="bg-primary-500 absolute start-0 top-0 h-full w-1/2 transition-all duration-300 ease-in-out"
            :class="[
              activeTab === 'tab-1' ? 'ms-0' : 'ms-[50%]',
              props.rounded === 'sm' ? 'rounded-md' : '',
              props.rounded === 'md' ? 'rounded-lg' : '',
              props.rounded === 'lg' ? 'rounded-xl' : '',
              props.rounded === 'full' ? 'rounded-full' : '',
            ]"
          />
        </div>
      </div>
    </div>
    <div>
      <div v-if="activeTab === 'tab-1'">
        <slot name="tab-1" />
      </div>
      <div v-else-if="activeTab === 'tab-2'">
        <slot name="tab-2" />
      </div>
    </div>
  </div>
</template>
