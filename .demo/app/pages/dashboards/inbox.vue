<script setup lang="ts">
definePageMeta({
  title: 'Inbox',
  // layout: 'empty',
  preview: {
    title: 'Inbox app',
    description: 'For email and messaging apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-inbox.png',
    srcDark: '/img/screens/dashboards-inbox-dark.png',
    order: 25,
  },
})

const split = ref()
const search = ref('')
const { md } = useTailwindBreakpoints()

const paneSize = ref(50)
watch(
  md,
  async (isMd) => {
    await nextTick()
    if (isMd) {
      paneSize.value = 50
    }
    else {
      paneSize.value = 100
    }
  },
  { immediate: true },
)

const messages = [
  {
    id: 1,
    sender: {
      name: 'Joshua Stevens',
      email: 'joshua@tairo.io',
      photo: '/img/avatars/15.svg',
    },
    title: 'We need to review the project',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Kendra,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Joshua',
    attachments: [
      {
        name: 'project.pdf',
        size: '2.5MB',
        type: 'pdf',
      },
      {
        name: 'project.zip',
        size: '2.5MB',
        type: 'zip',
      },
    ],
    time: '1 hour ago',
    status: 'unread',
  },
  {
    id: 2,
    sender: {
      name: 'Hermann Mayer',
      email: 'hermann@tairo.io',
      photo: '/img/avatars/16.svg',
    },
    title: 'Demo not ready yet',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Kendra,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Hermann',
    attachments: [
      {
        name: 'design.pdf',
        size: '8.5MB',
        type: 'pdf',
      },
      {
        name: 'design.ai',
        size: '14.5MB',
        type: 'ai',
      },
    ],
    time: '4 hours ago',
    status: 'unread',
  },
  {
    id: 3,
    sender: {
      name: 'Clarissa Miller',
      email: 'clarissa@tairo.io',
      photo: '/img/avatars/5.svg',
    },
    title: 'How about having lunch together?👋',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Kendra,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clarissa',
    attachments: [
      {
        name: 'restaurants.pdf',
        size: '3.74MB',
        type: 'pdf',
      },
    ],
    time: '5 hours ago',
    status: 'read',
  },
  {
    id: 4,
    sender: {
      name: 'Eddy Bricks',
      email: 'eddy@tairo.io',
      photo: '/img/avatars/8.svg',
    },
    title: 'We should talk about the budget',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Kendra,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Eddy',
    attachments: [
      {
        name: 'budget.pdf',
        size: '3.74MB',
        type: 'pdf',
      },
      {
        name: 'budget.xls',
        size: '175KB',
        type: 'sheet',
      },
    ],
    time: '7 hours ago',
    status: 'read',
  },
  {
    id: 5,
    sender: {
      name: 'Clark Smith',
      email: 'clark@tairo.io',
      photo: '/img/avatars/3.svg',
    },
    title: 'Latest feedback from the client',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Kendra,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clark',
    attachments: [
      {
        name: 'feedback.pdf',
        size: '3.74MB',
        type: 'pdf',
      },
      {
        name: 'feedback.docx',
        size: '175KB',
        type: 'doc',
      },
    ],
    time: 'Yesterday ago',
    status: 'read',
  },
]

const activeMessage = ref(1)

const selectedMessage = computed(() => {
  return messages.find(message => message.id === activeMessage.value)
})

const panelActive = ref(false)
</script>

<template>
  <div
    class="-mt-6 w-full overflow-hidden dark:[--color-input-default-bg:var(--color-muted-950)]"
  >
    <SplitterGroup direction="horizontal" class="h-[calc(100dvh_-_56px)]!">
      <SplitterPanel
        :default-size="20"
        :min-size="md ? 30 : 100"
        :max-size="md ? 60 : 100"
      >
        <!-- Messages list -->
        <div
          class="bg-muted-50 dark:bg-muted-900 flex size-full flex-col pt-3 lg:w-full"
        >
          <!-- Head (search) -->
          <div class="h-16 w-full px-4 sm:px-8">
            <TairoInput
              v-model.trim="search"
              rounded="lg"
              placeholder="Search"
              icon="lucide:search"
            />
          </div>

          <ul
            class="nui-slimscroll-opaque grow space-y-2 overflow-y-auto ps-4 pe-2 me-2 pb-8 sm:ps-8 sm:pe-4 sm:me-4 pt-4"
          >
            <li
              v-for="message in messages"
              :key="message.id"
              class="duration 300 cursor-pointer rounded-xl p-4 transition-colors sm:p-6"
              :class="[
                activeMessage === message.id
                  ? 'bg-muted-200/60 dark:bg-muted-950/60'
                  : 'hover:bg-muted-100 dark:hover:bg-muted-950/30',
                message.status === 'read' ? 'opacity-60 hover:opacity-100' : '',
              ]"
              role="button"
              tabindex="0"
              @click=";(activeMessage = message.id), (panelActive = true)"
            >
              <div>
                <BaseHeading
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white mb-2"
                >
                  {{ message.title }}
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 pointer-events-none"
                >
                  {{ message.abstract }}
                </BaseParagraph>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <BaseAvatar
                  size="xxs"
                  rounded="none"
                  mask="blob"
                  :src="message.sender.photo"
                  class="pointer-events-none"
                />
                <div class="pointer-events-none">
                  <BaseHeading
                    size="sm"
                    weight="medium"
                    lead="tight"
                  >
                    <span>{{ message.sender.name }}</span>
                  </BaseHeading>
                </div>
                <div class="pointer-events-none ms-auto">
                  <span class="text-muted-400 font-sans text-xs">
                    {{ message.time }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </SplitterPanel>
      <SplitterResizeHandle class="w-1 bg-muted-100 hover:bg-muted-200 dark:bg-muted-800/50 dark:hover:bg-muted-800 transition-colors duration-100" />
      <SplitterPanel :default-size="80">
        <!-- Message details -->
        <div
          class="bg-muted-50 dark:bg-muted-900 border-muted-200 dark:border-muted-800/60 fixed end-0 top-0 z-10 flex h-full flex-col border-s transition-transform duration-300 lg:static lg:grow"
          :class="
            panelActive
              ? 'translate-x-0'
              : 'translate-x-full lg:translate-x-0'
          "
        >
          <!-- Toolbar -->
          <div class="mx-auto w-full lg:px-10">
            <div
              class="relative z-10 flex lg:hidden h-16 w-full items-center px-8"
            >
              <div
                class="ms-auto text-muted-700 dark:text-muted-300 flex items-center gap-2"
              >
                <button
                  type="button"
                  class="flex size-9 items-center justify-center"
                  @click="panelActive = false"
                >
                  <Icon name="lucide:x" class="size-5" />
                </button>
              </div>
            </div>

            <!-- Message header -->
            <div
              class="border-muted-200 dark:border-muted-800 flex h-20 flex-col justify-between border-b px-8 lg:flex-row lg:items-center"
            >
              <div class="flex items-center gap-x-4">
                <div class="hidden lg:block">
                  <BaseAvatar
                    size="sm"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="block lg:hidden">
                  <BaseAvatar
                    size="sm"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="flex flex-col">
                  <BaseHeading size="md" weight="medium" lead="tight" class="text-muted-900 dark:text-white">
                    {{ selectedMessage?.sender.name }}
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                    {{ selectedMessage?.sender.email }}
                  </BaseParagraph>
                </div>
              </div>
              <div>
                <div class="mb-2 flex gap-x-2 lg:mb-0">
                  <BaseButton size="icon-sm" rounded="md">
                    <Icon name="solar:reply-2-linear" class="size-4" />
                  </BaseButton>
                  <BaseButton size="icon-sm" rounded="md">
                    <Icon name="solar:bookmark-linear" class="size-4" />
                  </BaseButton>
                  <BaseButton size="icon-sm" rounded="md">
                    <Icon name="solar:trash-bin-trash-linear" class="size-4" />
                  </BaseButton>
                </div>
              </div>
            </div>
            <!-- Message body -->
            <div
              class="nui-slimscroll h-[calc(100vh_-_316px)] overflow-y-auto p-8"
            >
              <div v-if="selectedMessage?.attachments?.length" class="mb-3 flex items-center gap-2">
                <Icon name="solar:paperclip-linear" class="size-4 text-muted-500 dark:text-muted-400" />
                <span>&middot;</span>
                <BaseTag rounded="full">
                  {{ selectedMessage?.attachments.length }} attachment{{ selectedMessage.attachments.length > 1 ? 's' : '' }}
                </BaseTag>
              </div>
              <BaseHeading size="2xl" weight="medium" class="text-muted-900 dark:text-white">
                {{ selectedMessage?.title }}
              </BaseHeading>
              <article
                class="text-muted-500 dark:text-muted-400 mt-8 leading-7 tracking-wider"
              >
                <p class="font-sans whitespace-pre-line">
                  {{ selectedMessage?.content }}
                </p>
              </article>
              <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-4">
                <button
                  v-for="(file, index) in selectedMessage?.attachments"
                  :key="index"
                  type="button"
                  class="cursor-pointer hover:bg-muted-200/50 dark:hover:bg-muted-800/60 group flex items-center gap-3 rounded-xl p-2 text-start transition-colors duration-300"
                >
                  <img
                    v-if="file.type === 'pdf'"
                    class="size-11"
                    src="/img/icons/files/pdf.svg"
                    alt="Pdf file"
                  >
                  <img
                    v-else-if="file.type === 'zip'"
                    class="size-11"
                    src="/img/icons/files/zip-format.svg"
                    alt="Zip file"
                  >
                  <img
                    v-else-if="file.type === 'ai'"
                    class="size-11"
                    src="/img/icons/files/ai.svg"
                    alt="AI file"
                  >
                  <img
                    v-else-if="file.type === 'sheet'"
                    class="size-11"
                    src="/img/icons/files/sheet.svg"
                    alt="Sheet"
                  >
                  <img
                    v-else-if="file.type === 'doc'"
                    class="size-11"
                    src="/img/icons/files/doc-2.svg"
                    alt="Document"
                  >
                  <span class="block font-sans">
                    <span
                      class="text-muted-900 dark:text-muted-100 block text-sm font-semibold"
                    >
                      {{ file.name }}
                    </span>
                    <span class="text-muted-600 dark:text-muted-400 block text-xs">
                      {{ file.size }}
                    </span>
                  </span>
                  <span class="ms-auto block">
                    <span
                      class="me-3 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <Icon
                        name="lucide:arrow-down"
                        class="size-4"
                      />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <!-- Message reply -->
            <div
              class="relative flex h-44 w-full items-center justify-center px-8"
            >
              <div
                class="border-muted-300 dark:border-muted-800/60 bg-muted-100 dark:bg-muted-950 focus-within:outline-muted-200 dark:focus-within:outline-muted-700 mb-3 w-full rounded-xl border outline-none outline-offset-4 transition-all duration-300 focus-within:outline-dashed focus-within:outline-2"
              >
                <textarea
                  class="bg-muted-100 dark:bg-muted-950 placeholder:text-muted-300 dark:placeholder:text-muted-600 w-full resize-none rounded-2xl p-3 font-sans outline-none"
                  placeholder="Type your reply here..."
                  rows="2"
                />
                <div class="flex items-center justify-between p-3">
                  <div class="flex items-center gap-2">
                    <BaseButton
                      size="icon-md"
                      variant="default"
                      rounded="lg"
                      class="text-muted-500 dark:text-muted-100 flex size-8 items-center justify-center"
                    >
                      <Icon name="solar:paperclip-linear" class="size-4" />
                    </BaseButton>
                    <BaseButton
                      size="icon-md"
                      variant="default"
                      rounded="lg"
                      class="text-muted-500 dark:text-muted-100 flex size-8 items-center justify-center"
                    >
                      <Icon name="solar:gallery-minimalistic-linear" class="size-4" />
                    </BaseButton>
                  </div>
                  <BaseButton
                    rounded="lg"
                    variant="dark"
                  >
                    <span>Send Reply</span>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
