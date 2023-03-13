<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'rounded' | 'curved' | 'full'
  }>(),
  {
    shape: 'rounded',
  },
)

const items = [
  {
    icon: 'ph:phone-duotone',
    image: undefined,
    title: "Call Danny at Colby's",
    description: 'Today - 11:30am',
  },
  {
    icon: undefined,
    image: '/img/avatars/3.svg',
    title: 'Meeting with Mike',
    description: 'Today - 01:00pm',
  },
  {
    icon: 'ph:chat-circle-duotone',
    image: undefined,
    title: "Answer Annie's messages",
    description: 'Today - 01:45pm',
  },
  {
    icon: undefined,
    image: '/img/avatars/16.svg',
    title: 'Meeting with Hermann',
    description: 'Today - 03:00pm',
  },
  {
    icon: 'ph:envelope-duotone',
    image: undefined,
    title: 'Send marketing campaign',
    description: 'Today - 03:30pm',
  },
  {
    icon: 'ph:selection-all-duotone',
    image: undefined,
    title: 'Project review',
    description: 'Today - 04:30pm',
  },
  {
    icon: 'ph:note-duotone',
    image: undefined,
    title: 'Write proposal for Andy',
    description: 'Today - 06:30pm',
  },
]
</script>

<template>
  <div>
    <!-- Item -->
    <div
      v-for="item in items"
      :key="item.title"
      class="relative flex pb-8 after:absolute after:top-10 after:left-4 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
    >
      <div
        class="relative flex h-9 w-9 items-center justify-center border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:top-4 after:-right-8 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
        :class="[
          props.shape === 'rounded' ? 'rounded-md' : '',
          props.shape === 'curved' ? 'rounded-xl' : '',
          props.shape === 'full' ? 'rounded-full' : '',
        ]"
      >
        <Icon v-if="item.icon" :name="item.icon" class="" />
        <img
          v-if="item.image"
          :src="item.image"
          class="max-w-full object-cover shadow-sm dark:border-transparent"
          :class="[
            props.shape === 'rounded' ? 'rounded-md' : '',
            props.shape === 'curved' ? 'rounded-xl' : '',
            props.shape === 'full' ? 'rounded-full' : '',
          ]"
          :alt="item.title"
        />
      </div>
      <div class="ml-10">
        <h6
          class="font-heading text-sm font-medium text-muted-800 dark:text-white"
        >
          {{ item.title }}
        </h6>
        <p class="font-sans text-xs text-muted-400">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
