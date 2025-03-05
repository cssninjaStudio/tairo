<script setup lang="ts">
definePageMeta({
  title: 'Messaging',
  preview: {
    title: 'Messaging app',
    description: 'For chat and messaging apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-messaging.png',
    srcDark: '/img/screens/dashboards-messaging-dark.png',
    order: 26,
  },
})

const chatEl = useTemplateRef<HTMLElement>('chatEl')
const expanded = ref(false)
const loading = ref(false)
const search = ref('')
const message = ref('')
const messageLoading = ref(false)
const selectedConversationId = ref(1)

const { data: selectedConversation } = useFetch(`/api/messaging/${selectedConversationId.value}`, {
  watch: [selectedConversationId],
})

// onMounted(() => {
//   setTimeout(() => {
//     if (chatEl.value) {
//       chatEl.value.scrollTo({
//         top: chatEl.value.scrollHeight,
//         behavior: 'smooth',
//       })
//     }
//   }, 300)
// })

async function submitMessage() {
  if (!message.value)
    return
  if (messageLoading.value)
    return

  messageLoading.value = true

  const newMessage = {
    type: 'sent',
    text: message.value,
    time: 'Just now',
    attachments: [],
  }

  await new Promise(resolve => setTimeout(resolve, 200))

  selectedConversation.value?.messages.push(newMessage)
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
  <div class="flex">
    <div
      class="relative flex w-full transition-all duration-300 h-[calc(100dvh_-_56px)] -mt-6"
    >
      <div class="flex w-full h-full flex-col grow">
        <!-- Header -->
        <!-- <div
          class="flex h-16 w-full items-center justify-between px-4 sm:px-8"
        >
          <TairoInput
            v-model="search"
            rounded="lg"
            placeholder="Search"
            icon="lucide:search"
          />

          <TairoSidebarTools
            class="relative -end-4 z-20 flex h-16 w-full scale-90 items-center justify-end gap-2 sm:end-0 sm:scale-100"
          />
        </div> -->
        <!-- Body -->
        <div
          ref="chatEl"
          class="relative grow w-full px-4 sm:px-8"
          :class="
            loading ? 'overflow-hidden' : 'overflow-y-auto nui-slimscroll'
          "
        >
          <!-- Loader -->
          <div
            class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
            :class="loading ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          >
            <div class="mt-12 space-y-12">
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-56 rounded-sm" />
                  <BasePlaceload class="h-3 w-full max-w-32 rounded-sm" />
                </div>
              </div>
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-64 rounded-sm" />
                  <BasePlaceload class="h-3 w-full max-w-48 rounded-sm" />
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
                    class="ms-auto h-3 w-full max-w-64 rounded-sm"
                  />
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-48 rounded-sm"
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
                    class="ms-auto h-3 w-full max-w-56 rounded-sm"
                  />
                  <BasePlaceload
                    class="ms-auto h-3 w-full max-w-32 rounded-sm"
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
                  <BasePlaceload class="h-3 w-full max-w-56 rounded-sm" />
                  <BasePlaceload class="h-3 w-full max-w-32 rounded-sm" />
                </div>
              </div>
              <div class="flex w-full max-w-md gap-4">
                <BasePlaceload
                  class="size-8 shrink-0 rounded-full"
                  :width="32"
                  :height="32"
                />
                <div class="grow space-y-2">
                  <BasePlaceload class="h-3 w-full max-w-64 rounded-sm" />
                  <BasePlaceload class="h-3 w-full max-w-48 rounded-sm" />
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
                    <p class="font-sans text-sm">
                      {{ item.text }}
                    </p>
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
                        >
                      </div>
                      <NuxtLink
                        v-else-if="attachment.type === 'link'"
                        :to="attachment.url"
                        class="dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2"
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
        <!-- Compose -->
        <form
          method="POST"
          action=""
          class="flex h-16 w-full items-center px-4 sm:px-8 shrink-0"
          @submit.prevent="submitMessage"
        >
          <div class="relative w-full">
            <BaseTextarea
              v-model.trim="message"
              :disabled="messageLoading"
              rounded="full"
              class="ps-6 pe-24"
              placeholder="Write a message..."
              autogrow
            />
            <div class="absolute end-2 top-0 flex h-10 items-center gap-1">
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 flex size-10 items-center justify-center transition-colors duration-300"
              >
                <Icon name="lucide:smile" class="size-5" />
              </button>
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 flex size-10 items-center justify-center transition-colors duration-300"
              >
                <Icon name="lucide:paperclip" class="size-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Current user -->
    <div
      class="flex flex-col ltablet:w-[310px] dark:bg-muted-800 h-full w-[390px] border-s border-muted-200 dark:border-muted-800/80 shrink-0 -mt-6"
      :class="expanded ? 'translate-x-full' : 'translate-x-0'"
    >
      <div class="flex h-16 w-full items-center justify-between px-8 shrink-0">
        <BaseHeading
          tag="h3"
          size="lg"
          class="text-muted-800 dark:text-white"
        >
          <span>User details</span>
        </BaseHeading>
        <BaseButton size="icon-sm" @click="expanded = true">
          <Icon
            name="lucide:arrow-right"
            class="pointer-events-none size-4"
          />
        </BaseButton>
      </div>
      <div class="relative flex w-full flex-col px-8 grow">
        <!-- Loader -->
        <div v-if="loading" class="mt-8">
          <div class="mb-3 flex items-center justify-center">
            <BasePlaceload
              class="size-24 shrink-0 rounded-full"
              :width="96"
              :height="96"
            />
          </div>
          <div class="flex flex-col items-center">
            <BasePlaceload class="mb-2 h-3 w-full max-w-40 rounded-sm" />
            <BasePlaceload class="mb-2 h-3 w-full max-w-24 rounded-sm" />
            <div class="my-4 flex w-full flex-col items-center">
              <BasePlaceload class="mb-2 h-2 w-full max-w-60 rounded-sm" />
              <BasePlaceload class="mb-2 h-2 w-full max-w-52 rounded-sm" />
            </div>
            <div class="mb-6 flex w-full items-center justify-center">
              <div class="px-4">
                <BasePlaceload class="h-3 w-14 rounded-sm" />
              </div>
              <div class="px-4">
                <BasePlaceload class="h-3 w-14 rounded-sm" />
              </div>
            </div>
            <div class="w-full">
              <BasePlaceload class="h-10 w-full rounded-xl" />
              <BasePlaceload class="mx-auto mt-3 h-3 w-[7.5rem] rounded-sm" />
            </div>
          </div>
        </div>
        <!-- User details -->
        <div v-else class="mt-8">
          <div class="flex items-center justify-center">
            <BaseAvatar :src="selectedConversation?.user.photo" size="2xl" />
          </div>
          <div class="text-center">
            <BaseHeading
              tag="h3"
              size="lg"
              class="mt-4"
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
</template>
