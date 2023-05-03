<script setup lang="ts">
// @ts-expect-error - splitpanes types exists only for vue2
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

definePageMeta({
  title: 'Inbox',
  layout: 'empty',
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
watch(md, async (isMd) => {
  await nextTick()
  if (isMd) {
    paneSize.value = 50
  } else {
    paneSize.value = 100
  }
})

const messages = [
  {
    id: 1,
    sender: {
      name: 'Kendra Wilson',
      email: 'kwilson@tairo.io',
      photo: '/img/avatars/10.svg',
    },
    title: 'We need to review the project',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Kendra',
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
  },
  {
    id: 2,
    sender: {
      name: 'Hermann Mayer',
      email: 'hermann@tairo.io',
      photo: '/img/avatars/16.svg',
    },
    title: 'We need to review the project',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Hermann',
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
  },
  {
    id: 3,
    sender: {
      name: 'Clarissa Miller',
      email: 'clarissa@tairo.io',
      photo: '/img/avatars/5.svg',
    },
    title: 'How about having lunch together?',
    abstract:
      'Lorem ipsum is a dummy text used by typographers and web designers.',
    content:
      'Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clarissa',
    attachments: [
      {
        name: 'restaurants.pdf',
        size: '3.74MB',
        type: 'pdf',
      },
    ],
    time: '5 hours ago',
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
      'Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Eddy',
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
      'Hi Maya,/n I spoke with the rest of the team this morning. They want to do a full review of the current progress. Do you think you would be available this afternoon or tomorrow in the morning?. /n We specifically need to go through the hi-fidelity wireframes amd see how they fit with the different UX scenari we already have. When something matches, we need Larry to start working on more detailed designs./n Also, I thought we could introduce some new tools. Iam not that much into XD anymore and I would like the team to switch to Figma within the month. Do you think that would be possible or are we going to spend a lot again with accelarated training sessions? /n Best Regards, /n Clark',
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
  },
]

const activeMessage = ref(1)

const selectedMessage = computed(() => {
  return messages.find((message) => message.id === activeMessage.value)
})

const panelActive = ref(false)
</script>

<template>
  <!-- Wrapper -->
  <div
    class="bg-muted-100 dark:bg-muted-900 flex h-screen w-full overflow-hidden"
  >
    <!-- Sidebar -->
    <div
      class="border-muted-200 dark:border-muted-700/40 dark:bg-muted-800 flex w-20 flex-col items-center border-r bg-white"
    >
      <NuxtLink
        to="/dashboards"
        class="flex h-16 w-16 items-center justify-center"
      >
        <TairoLogo class="text-primary-600 h-10" />
      </NuxtLink>
      <nav class="relative flex h-full flex-col">
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-primary-500/10 text-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:tray-duotone" class="h-5 w-5" />
            <span
              class="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white"
            >
              3
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:bookmark-simple-duotone" class="h-5 w-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:calendar-blank-duotone" class="h-5 w-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:folder-duotone" class="h-5 w-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:trash-duotone" class="h-5 w-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative flex h-16 w-16 items-center justify-center"
        >
          <div
            class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
          </div>
        </NuxtLink>
        <div class="mt-auto flex flex-col items-center">
          <a
            href="#"
            class="relative flex h-16 w-16 items-center justify-center"
            title="Back"
            @click.prevent="$router.back()"
          >
            <div
              class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
            >
              <Icon name="lucide:arrow-left" class="h-5 w-5" />
            </div>
          </a>
          <button
            type="button"
            class="relative flex h-16 w-16 items-center justify-center"
          >
            <div
              class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex h-12 w-12 items-center justify-center rounded-xl"
            >
              <Icon name="lucide:plus" class="h-5 w-5" />
            </div>
          </button>
          <div class="relative flex h-16 w-16 items-center justify-center">
            <DemoAccountMenu />
          </div>
        </div>
      </nav>
    </div>

    <Splitpanes ref="split" @resize="paneSize = $event[0].size">
      <Pane
        :size="paneSize"
        :min-size="md ? 30 : 100"
        :max-size="md ? 60 : 100"
      >
        <!-- Messages list -->
        <div
          class="ltablet:w-full bg-muted-50 dark:bg-muted-900 flex h-full w-full flex-col pt-3 lg:w-full"
        >
          <!-- Head (search) -->
          <div class="h-16 w-full px-4 sm:px-8">
            <BaseInput
              v-model.trim="search"
              shape="curved"
              icon="lucide:search"
              placeholder="Search"
            />
          </div>

          <ul
            class="slimscroll h-[calc(100%_-_64px)] space-y-2 overflow-y-auto px-4 pb-8 sm:px-8"
          >
            <li
              v-for="message in messages"
              :key="message.id"
              class="duration 300 cursor-pointer rounded-xl p-4 transition-colors sm:p-6"
              :class="
                activeMessage === message.id
                  ? 'bg-primary-500/10'
                  : 'hover:bg-muted-100 dark:hover:bg-muted-800'
              "
              role="button"
              @click=";(activeMessage = message.id), (panelActive = true)"
            >
              <div class="mb-3 flex items-center gap-2">
                <BaseAvatar
                  size="xs"
                  shape="straight"
                  mask="blob"
                  :src="message.sender.photo"
                  class="pointer-events-none"
                />
                <div class="pointer-events-none">
                  <BaseHeading size="sm" weight="semibold" lead="tight">
                    <span>{{ message.sender.name }}</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" lead="none">
                    <span class="text-muted-500 dark:text-muted-400">
                      {{ message.sender.email }}
                    </span>
                  </BaseParagraph>
                </div>
                <div class="pointer-events-none ms-auto">
                  <span class="text-muted-400 font-sans text-xs">
                    {{ message.time }}
                  </span>
                </div>
              </div>
              <div
                class="text-muted-500 dark:text-muted-400 pointer-events-none font-sans text-sm leading-tight"
              >
                {{ message.abstract }}
              </div>
            </li>
          </ul>
        </div>
      </Pane>
      <Pane :size="100 - paneSize">
        <!-- Message details -->
        <div
          class="ltablet:static ltablet:grow border-muted-200 dark:border-muted-700/40 dark:bg-muted-800 fixed end-0 top-0 flex h-full flex-col border-l bg-white transition-transform duration-300 lg:static lg:grow"
          :class="
            panelActive
              ? 'translate-x-0'
              : 'translate-x-full ltablet:translate-x-0 lg:translate-x-0'
          "
        >
          <!-- Toolbar -->
          <div class="ltablet:max-w-5xl mx-auto w-full lg:max-w-5xl">
            <div
              class="relative z-10 flex h-16 w-full items-center justify-between px-8"
            >
              <div
                class="text-muted-700 dark:text-muted-300 flex items-center gap-2"
              >
                <button
                  type="button"
                  class="ltablet:hidden flex h-9 w-9 items-center justify-center lg:hidden"
                  @click="panelActive = false"
                >
                  <Icon name="lucide:arrow-left" class="h-5 w-5" />
                </button>
                <BaseHeading size="2xl">
                  <span>Inbox</span>
                </BaseHeading>
              </div>
              <TairoSidebarTools
                class="relative -end-4 z-20 flex h-16 w-full scale-90 items-center justify-end gap-2 sm:end-0 sm:scale-100"
              />
            </div>

            <!-- Message header -->
            <div
              class="ltablet:flex-row ltablet:items-center border-muted-200 dark:border-muted-700 flex h-24 flex-col justify-between border-b px-8 lg:flex-row lg:items-center"
            >
              <div class="flex items-center gap-x-4">
                <div class="ltablet:block hidden lg:block">
                  <BaseAvatar
                    size="lg"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="ltablet:hidden block lg:hidden">
                  <BaseAvatar
                    size="sm"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="flex flex-col font-sans">
                  <h3 class="text-lg font-semibold">
                    {{ selectedMessage?.sender.name }}
                  </h3>
                  <p class="text-muted-400 text-sm">
                    {{ selectedMessage?.sender.email }}
                  </p>
                </div>
              </div>
              <div>
                <div class="ltablet:mb-0 mb-2 flex gap-x-2 lg:mb-0">
                  <BaseButtonIcon small class="scale-[0.8]">
                    <Icon
                      name="ph:arrow-bend-down-left-duotone"
                      class="h-4 w-4"
                    />
                  </BaseButtonIcon>
                  <BaseButtonIcon small class="scale-[0.8]">
                    <Icon name="ph:bookmark-simple-duotone" class="h-4 w-4" />
                  </BaseButtonIcon>
                  <BaseButtonIcon small class="scale-[0.8]">
                    <Icon name="ph:printer-duotone" class="h-4 w-4" />
                  </BaseButtonIcon>
                  <BaseButtonIcon small class="scale-[0.8]">
                    <Icon name="ph:trash-duotone" class="h-4 w-4" />
                  </BaseButtonIcon>
                </div>
              </div>
            </div>
            <!-- Message body -->
            <div class="slimscroll h-[calc(100vh_-_344px)] overflow-y-auto p-8">
              <h1 class="text-2xl font-bold">{{ selectedMessage?.title }}</h1>
              <article
                class="text-muted-500 dark:text-muted-400 mt-8 leading-7 tracking-wider"
              >
                <p
                  class="font-sans"
                  v-html="
                    selectedMessage?.content.replaceAll('/n ', '<br /><br />')
                  "
                ></p>
              </article>
              <div class="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-4">
                <button
                  v-for="(file, index) in selectedMessage?.attachments"
                  :key="index"
                  type="button"
                  class="hover:bg-muted-100/80 dark:hover:bg-muted-700/60 group flex items-center gap-3 rounded-xl p-2 text-left transition-colors duration-300"
                >
                  <img
                    v-if="file.type === 'pdf'"
                    class="h-11 w-11"
                    src="/img/icons/files/pdf.svg"
                    alt="Pdf file"
                  />
                  <img
                    v-else-if="file.type === 'zip'"
                    class="h-11 w-11"
                    src="/img/icons/files/zip-format.svg"
                    alt="Zip file"
                  />
                  <img
                    v-else-if="file.type === 'ai'"
                    class="h-11 w-11"
                    src="/img/icons/files/ai.svg"
                    alt="AI file"
                  />
                  <img
                    v-else-if="file.type === 'sheet'"
                    class="h-11 w-11"
                    src="/img/icons/files/sheet.svg"
                    alt="Sheet"
                  />
                  <img
                    v-else-if="file.type === 'doc'"
                    class="h-11 w-11"
                    src="/img/icons/files/doc-2.svg"
                    alt="Document"
                  />
                  <span class="block font-sans">
                    <span
                      class="text-muted-800 dark:text-muted-100 block text-sm font-semibold"
                    >
                      {{ file.name }}
                    </span>
                    <span class="text-muted-400 block text-xs">
                      {{ file.size }}
                    </span>
                  </span>
                  <span class="ms-auto block">
                    <span
                      class="me-3 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <Icon
                        name="lucide:arrow-down"
                        class="text-primary-500 h-4 w-4"
                      />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <!-- Messsage reply -->
            <div
              class="relative flex h-44 w-full items-center justify-center px-8"
            >
              <div
                class="border-muted-200 dark:border-muted-700/40 bg-muted-50 dark:bg-muted-900 focus-within:outline-muted-200 dark:focus-within:outline-muted-700 mb-3 w-full rounded-xl border outline-none outline-offset-4 transition-all duration-300 focus-within:outline-dashed focus-within:outline-2"
              >
                <textarea
                  class="bg-muted-50 dark:bg-muted-900 placeholder:text-muted-300 dark:placeholder:text-muted-600 w-full resize-none rounded-2xl p-3 font-sans outline-none"
                  placeholder="Type your reply here..."
                  rows="2"
                ></textarea>
                <div class="flex items-center justify-between p-3">
                  <button
                    class="text-muted-500 dark:text-muted-100 flex h-6 w-6 items-center justify-center"
                  >
                    <Icon name="uit:paperclip" class="h-7 w-7" />
                  </button>
                  <BaseButton shape="curved" color="primary" class="w-24">
                    <span>Reply</span>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Pane>
    </Splitpanes>

    <TairoPanels />
  </div>
</template>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  @apply w-1 bg-muted-100 hover:bg-muted-200 dark:bg-muted-700/50 dark:hover:bg-muted-700 transition-colors duration-100;
}
</style>
