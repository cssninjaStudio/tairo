<script setup lang="ts">
definePageMeta({
  title: 'Messaging',
  layout: 'empty',
  preview: {
    title: 'Messaging app',
    description: 'For chat and messaging apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-messaging.png',
    srcDark: '/img/screens/dashboards-messaging-dark.png',
    order: 26,
  },
})

const { open } = usePanels()

const conversations = ref([
  {
    id: 1,
    user: {
      name: 'Clark Smith',
      photo: '/img/avatars/3.svg',
      role: 'UI/UX Designer',
      bio: 'Clark is a UI/UX Designer based in New York. He has 10+ years of experience in the field.',
      age: 32,
      location: 'New York',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Maya, I was wondering if you still had that design that you sent me a few days ago. I was thinking about using it for a project I’m working on.',
        time: '10:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hey Clark, sure thing. I’ll send it to you right now. I can also send you the Figma file if you need it.',
        time: '10:09 am',
        attachments: [
          {
            type: 'link',
            image: '/img/ux/13.png',
            url: 'https://figma.com',
            text: 'Figma design file by Maya',
          },
        ],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for that. This looks completely amazing. I’ll let you know if I need anything else.',
        time: '1:39 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Almost forgot, what was that accounting company you mentioned the other day? I kinda fell in love with their design.',
        time: '1:48 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Oh yeah, that was Titan Accounting. They’re a great company. I’ve been working with them for a while now.',
        time: '2:06 pm',
        attachments: [
          {
            type: 'link',
            image: '/img/ux/11.png',
            url: 'https://waveapps.com',
            text: 'Smart Accounting made easy for everyone',
          },
        ],
      },
      {
        type: 'received',
        text: "Yeah, that's them. they really have a gorgeous branding. I'll check them out. Thanks for the tip!",
        time: '2:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Always happy to help! Let me know if you need anything else.',
        time: '2:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Hermann Mayer',
      photo: '/img/avatars/16.svg',
      role: 'Project Manager',
      bio: 'Hermann is a Project Manager based in Berlin. He has 10+ years of experience in the field.',
      age: 28,
      location: 'Berlin',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Maya, did you receive that report that John wrote? I just approved it but I wanted to show it to you, just in case you have some insights to share.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Yeah, I've got a copy on my inbox but I still didn't get a chance to read it and to take some notes.",
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Did you habe time to read it? The boss is asking for it and Iam not sure if I should send it.',
        time: '3:39 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry if Iam annoying you btw. 🫡',
        time: '3:48 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Nah, don't be like that! You're not annoying me at all. I'm just a bit busy right now. I'll send you my notes but yeah, I don't see anything preventing you from showing it to the boss.",
        time: '4:06 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Amazing! Thank you so much Maya! I really appreciate it. 🙏',
        time: '4:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "You're very welcome Hermann! Let me know if you need anything else.",
        time: '4:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 3,
    user: {
      name: 'Clarissa Miller',
      photo: '/img/avatars/5.svg',
      role: 'Product Manager',
      bio: 'Clarissa is a Product Manager based in Seattle. She has 10+ years of experience in the field.',
      age: 31,
      location: 'Seattle',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Maya, the boss is putting me under pressure again. He wants me to send him the report that you wrote a few days ago. I was wondering if you still had that design that you sent me a few days ago. I was thinking about using it for a project I’m working on.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Clarissa! sure thing. I'll send it to you right now. weren't we supposed to have lunch together? I'm free today if you want to grab a bite.",
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry about yesterday, I was completely underwater. I’m free today as well. Let’s grab a bite at 2pm. I’ll send you the address.',
        time: '1:09 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I want to try that little sushi place that I told you about. I’m starving!',
        time: '1:09 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Oh yeah! Let's do suchi! I'm starving too. I'll see you at 2pm.'",
        time: '1:12 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thank you so much and sorry again about yesterday. 🙏',
        time: '1:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Don't worry about it 😉 ",
        time: '4:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 4,
    user: {
      name: 'Joshua Stevens',
      photo: '/img/avatars/11.svg',
      role: 'Frontend Developer',
      bio: 'Joshua is a Frontend Developer based in London. He has 10+ years of experience in the field',
      age: 43,
      location: 'London',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey Maya, the client is giving me a hard time again. He wants me to present the proposal that you worked on last week. Do you still have that presentation? I was thinking about using it for this new project.',
        time: '9:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Hey, no problem. I still have it. I'll send it to you right now. How about we grab lunch today? I'm free around noon.",
        time: '9:09 am',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Sorry about yesterday, I was swamped with work. I’m free today as well. Let’s grab lunch at 12pm. Meet you at the food court?',
        time: '11:09 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sounds good. See you at 12pm at the food court.',
        time: '11:12 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for understanding. And thank you for sending me the proposal. 🙏',
        time: '11:16 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "No problem. Let's chat more at lunch. 😉 ",
        time: '12:01 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 5,
    user: {
      name: 'Kendra Wilson',
      photo: '/img/avatars/10.svg',
      role: 'Backend Developer',
      bio: 'Kendra is a Backend Developer based in Toronto. She has 10+ years of experience in the field',
      age: 26,
      location: 'Toronto',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: "Hey, I wanted to get your feedback on the new UI design for the login page. I've made some updates based on the user testing data we collected last week.",
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Sure thing, I'll take a look at it now. Can you send me the updated version?",
        time: '4:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'received',
        text: "I've sent the updated version to you. I also included some notes on the changes I made.",
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Thanks, I'll take a look now.",
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I think the updates look great. I especially like the new color scheme. But I think we should also add some hover effects to the buttons to make it more interactive.',
        time: '9:15 am',
        attachments: [],
      },
      {
        type: 'received',
        text: "Thanks for the feedback, I'll add the hover effects to the buttons. Do you have time to meet later to discuss any other changes?",
        time: '9:20 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Sure, let's schedule a meeting for 1pm today.",
        time: '9:22 am',
        attachments: [],
      },
    ],
  },
  {
    id: 6,
    user: {
      name: 'Carolin Kottmann',
      photo: '/img/avatars/9.svg',
      role: 'Product Manager',
      bio: 'Carolin is a Product manager based in Paris. She has 10+ years of experience in the field',
      age: 25,
      location: 'Paris',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey, have you had a chance to review the market research report for the new product launch?',
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Yes, I've gone through it. The data looks promising. We should schedule a meeting to discuss next steps.",
        time: '4:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'sent',
        text: "I've scheduled a meeting for tomorrow at 10am to discuss the launch strategy for the new product. Can you send me the latest version of the product roadmap before the meeting?",
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: "Sure, I'll send it to you now.",
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: "I've sent you the updated product roadmap. I've also included some notes on the changes I made based on the market research.",
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Thanks, I'll review it before tomorrow's meeting.",
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Just a reminder, the meeting is tomorrow at 10am in the conference room.',
        time: '4:22 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 7,
    user: {
      name: 'Jonathan Keppler',
      photo: '/img/avatars/8.svg',
      role: 'System Administrator',
      bio: 'Jonathan is a System Administrator based in Miami. He has 10+ years of experience in the field.',
      age: 41,
      location: 'Miami',
    },
    messages: [
      {
        type: 'separator',
        text: '',
        time: 'Yesterday',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Hey, have you noticed any strange behavior with the server lately?',
        time: '2:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Yes, I've been getting reports of slow response times. I've started investigating but haven't found the root cause yet.",
        time: '2:09 pm',
        attachments: [],
      },
      {
        type: 'separator',
        text: '',
        time: 'Today',
        attachments: [],
      },
      {
        type: 'sent',
        text: "I've discovered that the server's disk space is almost full. I'm going to schedule a maintenance window tonight to add more storage.",
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: "Okay, I'll make sure to inform the team and schedule any necessary downtime.",
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: "I've sent an email to the team and scheduled a two-hour maintenance window starting at 11pm tonight. Will that work for you?",
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "Yes, that works for me. I'll make sure to have everything set up before the maintenance window.",
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: "I've added the storage and the server is running smoothly again. I'll keep an eye on it and let you know if there are any further issues.",
        time: '2:22 pm',
        attachments: [],
      },
    ],
  },
])

const chatEl = ref<HTMLElement>()
const expanded = ref(false)
const loading = ref(false)
const search = ref('')
const message = ref('')
const messageLoading = ref(false)
const activeConversation = ref(1)

const selectedConversation = computed(() => {
  return conversations.value.find(
    (conversation) => conversation.id === activeConversation.value,
  )
})

onMounted(() => {
  setTimeout(() => {
    if (chatEl.value) {
      chatEl.value.scrollTo({
        top: chatEl.value.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, 300)
})

function selectConversation(id: number) {
  if (messageLoading.value) return

  loading.value = true
  message.value = ''

  setTimeout(() => {
    activeConversation.value = id
    loading.value = false
    setTimeout(() => {
      expanded.value = false

      if (chatEl.value) {
        chatEl.value.scrollTo({
          top: chatEl.value.scrollHeight,
          behavior: 'smooth',
        })
      }
    }, 300)
  }, 1000)
}

async function submitMessage() {
  if (!message.value) return
  if (messageLoading.value) return

  messageLoading.value = true

  const newMessage = {
    type: 'sent',
    text: message.value,
    time: 'Just now',
    attachments: [],
  }

  const index = conversations.value.findIndex(
    (conversation) => conversation.id === activeConversation.value,
  )

  await new Promise((resolve) => setTimeout(resolve, 200))

  conversations.value[index].messages.push(newMessage)
  message.value = ''
  messageLoading.value = false

  await nextTick()

  if (chatEl.value) {
    chatEl.value.scrollTo({
      top: chatEl.value.scrollHeight,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="relative">
    <div class="bg-muted-100 dark:bg-muted-900 flex min-h-screen">
      <!-- Sidebar -->
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 hidden h-screen w-20 border-r bg-white sm:block"
      >
        <div class="flex h-full flex-col justify-between">
          <div class="flex flex-col">
            <div
              class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"
            >
              <NuxtLink to="#" class="flex items-center justify-center">
                <TairoLogo class="text-primary-600 h-10" />
              </NuxtLink>
            </div>
            <div
              class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"
            >
              <a
                href="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Back"
                @click.prevent="$router.back()"
              >
                <Icon name="lucide:arrow-left" class="h-5 w-5" />
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex h-16 w-full items-center justify-center">
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Search"
                @click="open('search')"
              >
                <Icon name="ph:magnifying-glass-duotone" class="h-5 w-5" />
              </button>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <NuxtLink
                to="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Settings"
              >
                <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
              </NuxtLink>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <DemoAccountMenu />
            </div>
          </div>
        </div>
      </div>
      <!-- Conversations -->
      <div
        class="ltablet:border-r border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-[9] h-screen w-16 bg-white sm:w-20 lg:border-r"
      >
        <div class="flex h-full flex-col">
          <button
            class="flex h-16 w-16 shrink-0 items-center justify-center sm:w-20"
          >
            <span
              class="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full text-white"
            >
              <Icon name="lucide:plus" class="h-4 w-4" />
            </span>
          </button>
          <!-- List -->
          <a
            v-for="conversation in conversations"
            :key="conversation.id"
            href="#"
            class="flex h-16 w-16 shrink-0 items-center justify-center border-s-2 sm:w-20"
            :class="
              activeConversation === conversation.id
                ? 'border-primary-500'
                : 'border-transparent'
            "
            @click.prevent="selectConversation(conversation.id)"
          >
            <BaseAvatar :src="conversation.user.photo" size="sm" />
          </a>
        </div>
      </div>
      <!-- Current conversation -->
      <div
        class="relative w-full transition-all duration-300"
        :class="
          expanded
            ? 'ltablet:max-w-[calc(100%_-_160px)] lg:max-w-[calc(100%_-_160px)]'
            : 'ltablet:max-w-[calc(100%_-_470px)] lg:max-w-[calc(100%_-_550px)]'
        "
      >
        <div class="flex w-full flex-col">
          <!-- Header -->
          <div
            class="flex h-16 w-full items-center justify-between px-4 sm:px-8"
          >
            <div class="flex items-center gap-2">
              <BaseInput
                v-model="search"
                shape="curved"
                icon="lucide:search"
                placeholder="Search"
              />
            </div>

            <TairoSidebarTools
              class="relative -end-4 z-20 flex h-16 w-full scale-90 items-center justify-end gap-2 sm:end-0 sm:scale-100"
            />
          </div>
          <!-- Body -->
          <div
            ref="chatEl"
            class="relative h-[calc(100vh_-_128px)] w-full p-4 sm:p-8"
            :class="loading ? 'overflow-hidden' : 'overflow-y-auto slimscroll'"
          >
            <!-- Loader-->
            <div
              class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 h-full w-full p-8 transition-opacity duration-300"
              :class="loading ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
              <div class="mt-12 space-y-12">
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-[14rem] rounded" />
                    <BasePlaceload class="h-3 w-full max-w-[8rem] rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-[16rem] rounded" />
                    <BasePlaceload class="h-3 w-full max-w-[12rem] rounded" />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-[16rem] rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-[12rem] rounded"
                    />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-[14rem] rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-[8rem] rounded"
                    />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-[14rem] rounded" />
                    <BasePlaceload class="h-3 w-full max-w-[8rem] rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="h-8 w-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-[16rem] rounded" />
                    <BasePlaceload class="h-3 w-full max-w-[12rem] rounded" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Messages loop -->
            <div v-if="!loading" class="space-y-12">
              <div
                v-for="(item, index) in selectedConversation?.messages"
                :key="index"
                class="relative flex w-full gap-4"
                :class="[
                  item.type === 'received' ? 'flex-row' : 'flex-row-reverse',
                  item.type === 'separator' ? 'justify-center' : '',
                ]"
              >
                <template v-if="item.type !== 'separator'">
                  <div class="shrink-0">
                    <BaseAvatar
                      v-if="item.type === 'received'"
                      :src="selectedConversation?.user.photo"
                      size="xs"
                    />
                    <BaseAvatar
                      v-else-if="item.type === 'sent'"
                      src="/img/avatars/2.svg"
                      size="xs"
                    />
                  </div>
                  <div class="flex max-w-md flex-col">
                    <div
                      class="bg-muted-200 dark:bg-muted-800 rounded-xl p-4"
                      :class="[
                        item.type === 'received' ? 'rounded-ss-none' : '',
                        item.type === 'sent' ? 'rounded-se-none' : '',
                      ]"
                    >
                      <p class="font-sans text-sm">{{ item.text }}</p>
                    </div>
                    <div
                      class="text-muted-400 mt-1 font-sans text-xs"
                      :class="item.type === 'received' ? 'text-right' : ''"
                    >
                      {{ item.time }}
                    </div>
                    <div
                      v-if="item.attachments.length > 0"
                      class="mt-2 space-y-2"
                    >
                      <template
                        v-for="(attachment, idx) in item.attachments"
                        :key="idx"
                      >
                        <div
                          v-if="attachment.type === 'image'"
                          class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.image"
                            :alt="attachment.text"
                            class="rounded-xl"
                          />
                        </div>
                        <NuxtLink
                          :to="attachment.url"
                          v-else-if="attachment.type === 'link'"
                          class="dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.image"
                            :alt="attachment.text"
                            class="rounded-xl"
                          />
                          <div class="px-1 py-2">
                            <p
                              class="text-muted-800 dark:text-muted-100 font-sans"
                            >
                              {{ attachment.url?.replace(/(^\w+:|^)\/\//, '') }}
                            </p>
                            <p class="text-muted-400 font-sans text-xs">
                              {{ attachment.text }}
                            </p>
                          </div>
                        </NuxtLink>
                      </template>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div
                      class="border-muted-300/50 dark:border-muted-800 w-full border-t"
                    ></div>
                  </div>
                  <div class="relative flex justify-center">
                    <span
                      class="bg-muted-100 dark:bg-muted-900 text-muted-400 px-3 font-sans text-xs uppercase"
                    >
                      {{ item.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Compose -->
          <form
            method="POST"
            action=""
            @submit.prevent="submitMessage"
            class="bg-muted-100 dark:bg-muted-900 flex h-16 w-full items-center px-4 sm:px-8"
          >
            <div class="relative w-full">
              <BaseInput
                v-model.trim="message"
                :disabled="messageLoading"
                shape="full"
                :classes="{
                  input: 'h-12 ps-6 pe-24',
                }"
                placeholder="Write a message..."
              />
              <div class="absolute end-2 top-0 flex h-12 items-center gap-1">
                <button
                  type="button"
                  class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"
                >
                  <Icon name="lucide:smile" class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"
                >
                  <Icon name="lucide:paperclip" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- Current user -->
      <div
        class="ltablet:w-[310px] dark:bg-muted-800 fixed end-0 top-0 z-20 h-full w-[390px] bg-white transition-transform duration-300"
        :class="expanded ? 'translate-x-full' : 'translate-x-0'"
      >
        <div class="flex h-16 w-full items-center justify-between px-8">
          <BaseHeading
            tag="h3"
            size="lg"
            class="text-muted-800 dark:text-white"
          >
            <span>User details</span>
          </BaseHeading>
          <BaseButtonIcon small @click="expanded = true">
            <Icon
              name="lucide:arrow-right"
              class="pointer-events-none h-4 w-4"
            />
          </BaseButtonIcon>
        </div>
        <div class="relative flex w-full flex-col px-8">
          <!-- Loader -->
          <div v-if="loading" class="mt-8">
            <div class="mb-3 flex items-center justify-center">
              <BasePlaceload
                class="h-24 w-24 shrink-0 rounded-full"
                :width="96"
                :height="96"
              />
            </div>
            <div class="flex flex-col items-center">
              <BasePlaceload class="mb-2 h-3 w-full max-w-[10rem] rounded" />
              <BasePlaceload class="mb-2 h-3 w-full max-w-[6rem] rounded" />
              <div class="my-4 flex w-full flex-col items-center">
                <BasePlaceload class="mb-2 h-2 w-full max-w-[15rem] rounded" />
                <BasePlaceload class="mb-2 h-2 w-full max-w-[13rem] rounded" />
              </div>
              <div class="mb-6 flex w-full items-center justify-center">
                <div class="px-4">
                  <BasePlaceload class="h-3 w-[3.5rem] rounded" />
                </div>
                <div class="px-4">
                  <BasePlaceload class="h-3 w-[3.5rem] rounded" />
                </div>
              </div>
              <div class="w-full">
                <BasePlaceload class="h-10 w-full rounded-xl" />
                <BasePlaceload class="mx-auto mt-3 h-3 w-[7.5rem] rounded" />
              </div>
            </div>
          </div>
          <!-- User details -->
          <div v-else class="mt-8">
            <div class="flex items-center justify-center">
              <BaseAvatar :src="selectedConversation?.user.photo" size="2xl" />
            </div>
            <div class="text-center">
              <BaseHeading tag="h3" size="lg" class="mt-4">
                <span>{{ selectedConversation?.user.name }}</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                <span>{{ selectedConversation?.user.role }}</span>
              </BaseParagraph>
              <div class="my-4">
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>{{ selectedConversation?.user.bio }}</span>
                </BaseParagraph>
              </div>
              <div
                class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"
              >
                <div class="flex items-center justify-center gap-2 px-4">
                  <Icon
                    name="ph:timer-duotone"
                    class="text-muted-400 h-4 w-4"
                  />
                  <span class="text-muted-400 font-sans text-xs">
                    Age: {{ selectedConversation?.user.age }}
                  </span>
                </div>
                <div class="flex items-center justify-center gap-2 px-4">
                  <Icon
                    name="ph:map-pin-duotone"
                    class="text-muted-400 h-4 w-4"
                  />
                  <span class="text-muted-400 font-sans text-xs">
                    {{ selectedConversation?.user.location }}
                  </span>
                </div>
              </div>
              <div class="mt-6">
                <BaseButton shape="curved" class="w-full">
                  <span>
                    View {{ selectedConversation?.user.name }}'s profile
                  </span>
                </BaseButton>
                <button
                  type="button"
                  class="text-primary-500 mt-3 font-sans text-sm underline-offset-4 hover:underline"
                >
                  Send a friend request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TairoPanels />
  </div>
</template>
