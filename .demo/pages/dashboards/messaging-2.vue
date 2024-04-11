<script setup lang="ts">
definePageMeta({
  title: 'Messaging',
  layout: 'empty',
  preview: {
    title: 'Messaging app',
    description: 'For conversations and chats',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-messaging-2.png',
    srcDark: '/img/screens/dashboards-messaging-2-dark.png',
    order: 26,
    new: true,
  },
})

const conversations = ref([
  {
    id: 1,
    user: {
      name: 'Kaleb Wilson',
      photo: '/img/avatars/3.svg',
      role: 'Personal contact',
      bio: 'Kaleb is a family member registered under the same account.',
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
        text: 'Hey Mom, I was wondering if you still had that picture that you sent me a few days ago. I was thinking about using it for a project I’m working on.',
        time: '10:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hey Kaleb, sure thing. I’ll send it to you right now. I can also send you the link to the website if you need it.',
        time: '10:09 am',
        attachments: [
          {
            type: 'link',
            image: '/img/ux/1.png',
            url: 'https://ortto.com',
            text: 'Ortto marketing software',
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
        text: 'Oh yeah, that was Qonto banking. They’re a great company. I’ve been working with them for a while now.',
        time: '2:06 pm',
        attachments: [
          {
            type: 'link',
            image: '/img/ux/2.jpg',
            url: 'https://qonto.com',
            text: 'Banking software',
          },
        ],
      },
      {
        type: 'received',
        text: 'Yeah, that\'s them. they really have a gorgeous branding. I\'ll check them out. Thanks for the tip!',
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
      role: 'Bank Advisor',
      bio: 'Hermann is one of our bank advisors. Ask him anything.',
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
        text: 'Hey Mrs Wilson, did you receive that account report that we issued? I just approved it but I wanted to show it to you, just in case you have some insights to share.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yeah, I\'ve got a copy on my inbox but I still didn\'t get a chance to read it and to take some notes.',
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
        text: 'Did you have time to read it? My manager is asking for my final review, so I need some feedback.',
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
        text: 'Nah, don\'t be like that! You\'re not annoying me at all. I\'m just a bit busy right now. I\'ll send you my notes but yeah, I don\'t see anything preventing you from showing it to your manager.',
        time: '4:06 pm',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Amazing! Thank you so much Mrs Wilson! I really appreciate it. 🙏',
        time: '4:16 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'You\'re very welcome Hermann! Let me know if you need anything else.',
        time: '4:26 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 3,
    user: {
      name: 'Edward Flynn',
      photo: '/img/avatars/14.svg',
      role: 'Marketing Associate',
      bio: 'Edward is one of our marketing associates. Ask him anything about our offers.',
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
        text: 'Hello Mrs Wilson, my management is putting me under pressure again. They want to know if you\'ve made a final decision about your subscription to our new financial program.',
        time: '11:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hi Mr Flynn! sure thing. I\'ll reviewing it now. weren\'t we supposed to have lunch Yesterday? I\'m free today if you want to grab a bite.',
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
        text: 'Oh yeah! Let\'s do suchi! I\'m starving too. I\'ll see you at 2pm.\'',
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
        text: 'Don\'t worry about it 😉. Let\'s wrap up this deal so we can move on. ',
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
      role: 'Bank Advisor',
      bio: 'Joshua is one of our bank advisors. Ask him anything about your account.',
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
        text: 'Hello Mrs Wilson, the client is giving me a hard time again. He wants me to present the proposal that you worked on last week. Do you still have that presentation? I was thinking about using it for this new project.',
        time: '9:04 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Hi Joshua, no problem. I still have it. I\'ll send it to you right now. How about we grab lunch today? I\'m free around noon.',
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
        text: 'No problem. Let\'s chat more at lunch. 😉 ',
        time: '12:01 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 5,
    user: {
      name: 'Jennifer Wilson',
      photo: '/img/avatars/12.svg',
      role: 'Personal Contact',
      bio: 'Jennifer is a family member registered under the same account.',
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
        text: 'Hey Kendra, I wanted to get some advice on my spendings. I\'ve seen some updates on my account that didn\'t make me very happy.',
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sure thing, I\'ll take a look at it now. Can you send me the updated log?',
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
        text: 'I\'ve forwarded the updated log to you. I also included some notes and invoices that I had along.',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Thanks, I\'ll take a look now.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I think you\'re spending too much on clothing and restaurants. You should definitely cut back on those.',
        time: '9:15 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Thanks for the feedback, yeah I know I\'ve been spending a lot on those. I\'ll try to cut back a little.',
        time: '9:20 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Sure, I know you can manage.',
        time: '9:22 am',
        attachments: [],
      },
    ],
  },
  {
    id: 6,
    user: {
      name: 'Amber Wilson',
      photo: '/img/avatars/24.svg',
      role: 'Personal Contact',
      bio: 'Amber is a family member registered under the same account.',
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
        text: 'Hey Mom, Iam quite in trouble right now, I need your help.',
        time: '4:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'What\'s going on? Do you have issues with your bank account?',
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
        text: 'It\'s not like we didn\'t send you any money recently. What\'s going on?',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Yeah, I think I have been overspending, but just a little bit.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'I\'ve wen to see my account balance, and I was a bit in shock.',
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Jesus, your father is going to be mad again.',
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I\'ll handle that myself and send you a quick cash transfer.',
        time: '4:22 pm',
        attachments: [],
      },
    ],
  },
  {
    id: 7,
    user: {
      name: 'John Baxter',
      photo: '/img/avatars/8.svg',
      role: 'Personal Contact',
      bio: 'John is a family member registered under the same account.',
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
        text: 'Hey hun, have you noticed any strange behavior when speaking with Amber lately?',
        time: '2:04 pm',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Yes, I\'ve talked to her, and it seems she\'s a bit in trouble with her account.',
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
        text: 'I think she overspent a bit, you know how your daughter is.',
        time: '9:00 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Again? That girl really needs to learn how to manage her money. I\'ll talk to her.',
        time: '9:01 am',
        attachments: [],
      },
      {
        type: 'received',
        text: 'Should I call her?',
        time: '9:05 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'Nah, I\'ve already handled it. I don\'t want her to mess up with her finals.',
        time: '9:06 am',
        attachments: [],
      },
      {
        type: 'sent',
        text: 'I\'ve sent a few hundred so she can make up for this month.',
        time: '2:22 pm',
        attachments: [],
      },
    ],
  },
])

const searchMessages = ref('')
const selectedOption = ref('chat')
const mobileOpen = ref(false)

const chatEl = ref<HTMLElement>()
const expanded = ref(false)
const loading = ref(false)
const search = ref('')
const message = ref('')
const messageLoading = ref(false)
const activeConversation = ref(1)

const selectedConversation = computed(() => {
  mobileOpen.value = false
  return conversations.value.find(
    conversation => conversation.id === activeConversation.value,
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
    conversation => conversation.id === activeConversation.value,
  )

  await new Promise(resolve => setTimeout(resolve, 200))

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
  <div class="text-muted-800 h-screen antialiased">
    <!--Header-->
    <div
      class="ltablet:z-30 border-muted-200 dark:border-muted-800 dark:bg-muted-950 relative flex h-16 w-full items-center justify-between border-b bg-white px-4 lg:z-30"
      :class="mobileOpen ? 'z-20' : 'z-30'"
    >
      <div class="flex w-1/2 items-center gap-2 sm:w-1/5">
        <!-- Hamburger -->
        <button
          class="ltablet:hidden relative flex size-10 items-center justify-center lg:hidden"
          @click="mobileOpen = !mobileOpen"
        >
          <div
            class="start-6 top-1/2 block w-4 -translate-x-1/2 -translate-y-1/2"
          >
            <span
              class="text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"
              :class="mobileOpen ? 'rotate-45' : '-translate-y-2'"
            />
            <span
              class="text-primary-500 absolute block h-0.5 w-5 bg-current transition duration-500 ease-in-out"
              :class="mobileOpen ? 'opacity-0' : ''"
            />
            <span
              class="text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"
              :class="mobileOpen ? '-rotate-45' : 'translate-y-2'"
            />
          </div>
        </button>
        <NuxtLink
          to="/"
          class="ltablet:flex hidden items-center gap-2 lg:flex"
          aria-label="Go to Tairo homepage"
        >
          <TairoLogoText class="text-primary-500 h-6 dark:text-white" />
        </NuxtLink>
      </div>
      <div
        class="ltablet:max-w-sm mx-auto hidden max-w-xs grow sm:block lg:max-w-xl"
      >
        <BaseInput
          v-model="searchMessages"
          rounded="lg"
          icon="lucide:search"
          placeholder="Search messages..."
          :classes="{
            input: '!h-11 !ps-11',
            icon: '!h-11 !w-11',
          }"
        />
      </div>
      <div class="flex w-1/2 items-center justify-end gap-4 sm:w-1/5">
        <DemoThemeSwitch />
        <DemoAccountMenu horizontal />
      </div>
    </div>
    <!--Wrapper-->
    <div
      class="relative z-20 flex h-[calc(100dvh_-_64px)] w-full flex-row overflow-x-hidden"
    >
      <!--Conversations sidebar-->
      <div
        class="ltablet:static ltablet:py-4 dark:bg-muted-900 ltablet:dark:bg-muted-950 lg:dark:bg-muted-950 fixed start-0 top-0 z-30 flex h-full w-72 shrink-0 flex-col bg-white ps-4 transition-transform duration-300 lg:static lg:py-4"
        :class="
          mobileOpen
            ? 'translate-x-0'
            : '-translate-x-full ltablet:translate-x-0 lg:translate-x-0'
        "
      >
        <!--Mobile header-->
        <div
          class="ltablet:hidden flex h-16 items-center justify-between pe-4 lg:hidden"
        >
          <NuxtLink
            to="/"
            class="flex items-center gap-2"
            aria-label="Go to Tairo homepage"
          >
            <TairoLogo class="text-muted-800 h-9 dark:text-white" />
            <TairoLogoText class="text-muted-800 h-3 dark:text-white" />
          </NuxtLink>
          <BaseButtonClose
            color="muted"
            rounded="lg"
            @click="mobileOpen = false"
          />
        </div>
        <div class="ltablet:pe-0 flex h-full flex-col pe-2 lg:pe-0">
          <!--New conversation-->
          <div class="flex h-20 items-center justify-center pe-2">
            <BaseButton
              rounded="full"
              color="primary"
              class="w-full"
            >
              <Icon name="lucide:plus" class="size-4" />
              <span>New Conversation</span>
            </BaseButton>
          </div>
          <!--Conversations list-->
          <div
            class="nui-slimscroll flex h-[calc(100dvh_-_160px)] flex-col space-y-1 overflow-y-auto pe-2"
          >
            <button
              v-for="conversation in conversations"
              :key="conversation.id"
              class="flex items-center gap-2 rounded-xl p-2 transition-colors duration-200 ease-in-out"
              :class="
                activeConversation === conversation.id
                  ? 'bg-primary-500/10'
                  : 'hover:bg-muted-100 dark:hover:bg-muted-900'
              "
              @click.prevent="selectConversation(conversation.id)"
            >
              <BaseAvatar :src="conversation.user.photo" />
              <BaseText
                size="sm"
                :class="
                  activeConversation === conversation.id
                    ? 'text-primary-500'
                    : 'text-muted-500 dark:text-muted-400'
                "
              >
                {{ conversation.user.name }}
              </BaseText>
              <span
                class="bg-primary-500 me-3 ms-auto block size-2 rounded-full transition-opacity duration-300"
                :class="
                  activeConversation === conversation.id
                    ? 'opacity-100'
                    : 'opacity-0'
                "
              />
            </button>
          </div>
          <!--Footer actions-->
          <div class="flex h-20 items-center justify-between gap-3 pe-2">
            <NuxtLink
              to="/dashboards"
              class="text-muted-500 dark:text-muted-400 hover:text-primary-500 border-muted-200 dark:border-muted-800 hover:border-primary-500 flex size-12 items-center justify-center rounded-xl border transition-colors duration-200 dark:hover:border-purple-500 dark:hover:text-purple-500"
            >
              <Icon name="ion:arrow-back-outline" class="size-4" />
            </NuxtLink>
            <button
              class="flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
              :class="
                selectedOption === 'chat'
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500'
              "
              data-nui-tooltip="Messaging"
              @click="selectedOption = 'chat'"
            >
              <Icon name="ion:chatbubble-outline" class="size-5" />
            </button>
            <button
              class="flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
              :class="
                selectedOption === 'calendar'
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500'
              "
              data-nui-tooltip="Calendar"
              @click="selectedOption = 'calendar'"
            >
              <Icon name="ion:calendar-outline" class="size-5" />
            </button>
            <button
              class="flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
              :class="
                selectedOption === 'settings'
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500'
              "
              data-nui-tooltip="Preferences"
              @click="selectedOption = 'settings'"
            >
              <Icon name="ion:options-outline" class="size-5" />
            </button>
          </div>
        </div>
      </div>

      <!--Chat body-->
      <div
        class="dark:bg-muted-950 flex h-full flex-auto flex-col bg-white p-4"
      >
        <div
          class="bg-muted-100 dark:bg-muted-900 flex h-full flex-auto shrink-0 flex-col overflow-hidden rounded-2xl"
        >
          <div class="relative flex h-full flex-col">
            <div
              ref="chatEl"
              class="relative flex h-full flex-col px-4 pb-24 pt-12"
              :class="
                loading ? 'overflow-hidden' : 'overflow-y-auto nui-slimscroll'
              "
            >
              <!-- Loader-->
              <div
                class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
                :class="
                  loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                "
              >
                <div class="mt-12 space-y-12">
                  <div class="flex w-full max-w-md gap-4">
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                      <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                    </div>
                  </div>
                  <div class="flex w-full max-w-md gap-4">
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                      <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                    </div>
                  </div>
                  <div
                    class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                  >
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload
                        class="ms-auto h-3 w-full max-w-64 rounded"
                      />
                      <BasePlaceload
                        class="ms-auto h-3 w-full max-w-48 rounded"
                      />
                    </div>
                  </div>
                  <div
                    class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                  >
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload
                        class="ms-auto h-3 w-full max-w-56 rounded"
                      />
                      <BasePlaceload
                        class="ms-auto h-3 w-full max-w-32 rounded"
                      />
                    </div>
                  </div>
                  <div class="flex w-full max-w-md gap-4">
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                      <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                    </div>
                  </div>
                  <div class="flex w-full max-w-md gap-4">
                    <BasePlaceload
                      class="size-8 shrink-0 rounded-full"
                      :width="32"
                      :height="32"
                    />
                    <div class="grow space-y-2">
                      <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                      <BasePlaceload class="h-3 w-full max-w-48 rounded" />
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
                        class="text-muted-800 dark:text-muted-200 rounded-xl p-4"
                        :class="[
                          item.type === 'received'
                            ? 'bg-muted-200 dark:bg-muted-950 rounded-ss-none'
                            : '',
                          item.type === 'sent'
                            ? 'bg-primary-500/20 rounded-se-none'
                            : '',
                        ]"
                      >
                        <p class="font-sans text-sm">
                          {{ item.text }}
                        </p>
                      </div>
                      <div
                        class="text-muted-400 mt-1 font-sans text-xs"
                        :class="item.type === 'received' ? 'text-end' : ''"
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
                            >
                          </div>
                          <NuxtLink
                            v-else-if="attachment.type === 'link'"
                            :to="attachment.url"
                            class="dark:bg-muted-950 block max-w-xs rounded-2xl bg-white p-2"
                            :class="item.type === 'sent' ? 'ms-auto' : ''"
                          >
                            <img
                              :src="attachment.image"
                              :alt="attachment.text"
                              class="rounded-xl"
                            >
                            <div class="px-1 py-2">
                              <p
                                class="text-muted-800 dark:text-muted-100 font-sans"
                              >
                                {{
                                  attachment.url?.replace(/(^\w+:|^)\/\//, '')
                                }}
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
                      />
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
            <!--Compose-->
            <div class="absolute inset-x-0 bottom-4 w-full px-4">
              <form
                method="POST"
                action=""
                class="dark:bg-muted-950 flex h-16 flex-row items-center gap-2 rounded-xl bg-white px-3"
                @submit.prevent="submitMessage"
              >
                <div class="hidden sm:block">
                  <button
                    class="hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hidden size-10 items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none sm:flex"
                  >
                    <Icon name="lucide:paperclip" class="size-5" />
                  </button>
                </div>
                <div class="grow">
                  <div class="relative w-full">
                    <BaseInput
                      v-model.trim="message"
                      :disabled="messageLoading"
                      rounded="lg"
                      :classes="{
                        input: 'pe-10',
                      }"
                      placeholder="Write a message..."
                    />
                    <button
                      class="text-muted-400 hover:text-muted-600 absolute right-0 top-0 flex h-full w-12 items-center justify-center"
                    >
                      <svg
                        class="size-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <BaseButton
                    type="submit"
                    color="primary"
                    rounded="lg"
                  >
                    <span>Send</span>
                    <Icon
                      name="ph:paper-plane-right-duotone"
                      class="!hidden size-5 sm:!block"
                    />
                  </BaseButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--Chat side-->
      <div
        class="dark:bg-muted-950 hidden w-80 shrink-0 flex-col bg-white py-4 pe-8 ps-4 lg:flex"
      >
        <div class="relative flex w-full flex-col">
          <!-- Loader -->
          <div v-if="loading" class="mt-4">
            <div class="mb-3 flex items-center justify-center">
              <BasePlaceload
                class="size-24 shrink-0 rounded-full"
                :width="96"
                :height="96"
              />
            </div>
            <div class="flex flex-col items-center">
              <BasePlaceload class="mb-2 h-3 w-full max-w-40 rounded" />
              <BasePlaceload class="mb-2 h-3 w-full max-w-24 rounded" />
              <div class="my-4 flex w-full flex-col items-center">
                <BasePlaceload class="mb-2 h-2 w-full max-w-60 rounded" />
                <BasePlaceload class="mb-2 h-2 w-full max-w-52 rounded" />
              </div>
              <div class="mb-6 flex w-full items-center justify-center">
                <div class="px-4">
                  <BasePlaceload class="h-3 w-14 rounded" />
                </div>
                <div class="px-4">
                  <BasePlaceload class="h-3 w-14 rounded" />
                </div>
              </div>
              <div class="w-full">
                <BasePlaceload class="h-10 w-full rounded-xl" />
                <BasePlaceload class="mx-auto mt-3 h-3 w-[7.5rem] rounded" />
              </div>
            </div>
          </div>
          <!-- User details -->
          <div v-else class="mt-4">
            <div class="flex items-center justify-center">
              <BaseAvatar :src="selectedConversation?.user.photo" size="2xl" />
            </div>
            <div class="text-center">
              <BaseHeading
                tag="h3"
                size="lg"
                class="text-muted-800 dark:text-muted-100 mt-4"
              >
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
                    class="text-muted-400 size-4"
                  />
                  <span class="text-muted-400 font-sans text-xs">
                    Age: {{ selectedConversation?.user.age }}
                  </span>
                </div>
                <div class="flex items-center justify-center gap-2 px-4">
                  <Icon
                    name="ph:map-pin-duotone"
                    class="text-muted-400 size-4"
                  />
                  <span class="text-muted-400 font-sans text-xs">
                    {{ selectedConversation?.user.location }}
                  </span>
                </div>
              </div>
              <div class="mt-6">
                <BaseButton rounded="lg" class="w-full">
                  <span>
                    View {{ selectedConversation?.user.name }}'s profile
                  </span>
                </BaseButton>
                <NuxtLink
                  to="/layouts/members"
                  class="text-primary-500 mt-3 block font-sans text-sm underline-offset-4 hover:underline"
                >
                  Manage members
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
