<script setup lang="ts">
// @ts-expect-error - splitpanes types exists only for vue2
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

definePageMeta({
  title: 'Inbox',
  layout: 'empty',
})

const split = ref()
const app = useAppConfig()
const panels = reactive(usePanels())
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
    class="flex w-full h-screen bg-muted-100 dark:bg-muted-900 overflow-hidden"
  >
    <!-- Sidebar -->
    <div
      class="flex flex-col items-center w-20 border-r border-muted-200 dark:border-muted-700/40 bg-white dark:bg-muted-800"
    >
      <NuxtLink
        to="/dashboards"
        class="flex items-center justify-center w-16 h-16"
      >
        <TairoLogo class="text-primary-600 h-10" />
      </NuxtLink>
      <nav class="relative flex flex-col h-full">
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-primary-500/10 text-primary-500"
          >
            <Icon name="ph:tray-duotone" class="w-5 h-5" />
            <span
              class="absolute -top-1 -right-1 bg-pink-600 h-5 w-5 flex justify-center items-center rounded-full font-sans text-xs text-white"
            >
              3
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
          >
            <Icon name="ph:bookmark-simple-duotone" class="w-5 h-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
          >
            <Icon name="ph:calendar-blank-duotone" class="w-5 h-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
          >
            <Icon name="ph:folder-duotone" class="w-5 h-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
          >
            <Icon name="ph:trash-duotone" class="w-5 h-5" />
          </div>
        </NuxtLink>
        <NuxtLink
          to="/dashboards/inbox"
          class="relative w-16 h-16 flex items-center justify-center"
        >
          <div
            class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
          >
            <Icon name="ph:gear-six-duotone" class="w-5 h-5" />
          </div>
        </NuxtLink>
        <div class="mt-auto flex flex-col items-center">
          <a
            href="#"
            class="relative w-16 h-16 flex items-center justify-center"
            title="Back"
            @click.prevent="$router.back()"
          >
            <div
              class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
            >
              <Icon name="lucide:arrow-left" class="w-5 h-5" />
            </div>
          </a>
          <button
            type="button"
            class="relative w-16 h-16 flex items-center justify-center"
          >
            <div
              class="relative h-12 w-12 flex items-center justify-center rounded-xl bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400"
            >
              <Icon name="lucide:plus" class="w-5 h-5" />
            </div>
          </button>
          <div class="relative w-16 h-16 flex items-center justify-center">
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
          class="flex flex-col pt-3 w-full ltablet:w-full lg:w-full bg-muted-50 dark:bg-muted-900 h-full"
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
            class="space-y-2 px-4 sm:px-8 pb-8 h-[calc(100%_-_64px)] overflow-y-auto slimscroll"
          >
            <li
              v-for="message in messages"
              :key="message.id"
              class="p-4 sm:p-6 rounded-xl transition-colors duration 300 cursor-pointer"
              :class="
                activeMessage === message.id
                  ? 'bg-primary-500/10'
                  : 'hover:bg-muted-100 dark:hover:bg-muted-800'
              "
              role="button"
              @click=";(activeMessage = message.id), (panelActive = true)"
            >
              <div class="flex items-center gap-2 mb-3">
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
                <div class="ml-auto pointer-events-none">
                  <span class="font-sans text-xs text-muted-400">
                    {{ message.time }}
                  </span>
                </div>
              </div>
              <div
                class="font-sans text-sm leading-tight text-muted-500 dark:text-muted-400 pointer-events-none"
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
          class="fixed top-0 right-0 ltablet:static lg:static ltablet:grow lg:grow flex flex-col border-l border-muted-200 dark:border-muted-700/40 bg-white dark:bg-muted-800 transition-transform duration-300"
          :class="
            panelActive
              ? 'translate-x-0'
              : 'translate-x-full ltablet:translate-x-0 lg:translate-x-0'
          "
        >
          <!-- Toolbar -->
          <div class="w-full ltablet:max-w-5xl lg:max-w-5xl mx-auto">
            <div
              class="relative h-16 w-full flex items-center justify-between px-8 z-10"
            >
              <div
                class="flex items-center gap-2 text-muted-700 dark:text-muted-300"
              >
                <button
                  type="button"
                  class="flex ltablet:hidden lg:hidden items-center justify-center h-9 w-9"
                  @click="panelActive = false"
                >
                  <Icon name="lucide:arrow-left" class="w-5 h-5" />
                </button>
                <BaseHeading size="2xl">
                  <span>Inbox</span>
                </BaseHeading>
              </div>
              <div
                class="relative h-16 w-full flex items-center justify-end gap-2 scale-90 sm:scale-100 -right-4 sm:right-0"
              >
                <template v-for="tool of (app.tairo.toolbar as any).tools">
                  <component
                    :is="resolveComponent(tool.component)"
                    v-if="tool.component"
                    :key="tool.component"
                    v-bind="tool.props"
                  />
                </template>
              </div>
            </div>

            <!-- Message header -->
            <div
              class="flex flex-col ltablet:flex-row lg:flex-row justify-between ltablet:items-center lg:items-center h-24 border-b border-muted-200 dark:border-muted-700 px-8"
            >
              <div class="flex gap-x-4 items-center">
                <div class="hidden ltablet:block lg:block">
                  <BaseAvatar
                    size="lg"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="block ltablet:hidden lg:hidden">
                  <BaseAvatar
                    size="sm"
                    :src="selectedMessage?.sender.photo"
                    :alt="selectedMessage?.sender.name"
                  />
                </div>
                <div class="flex flex-col font-sans">
                  <h3 class="font-semibold text-lg">
                    {{ selectedMessage?.sender.name }}
                  </h3>
                  <p class="text-sm text-muted-400">
                    {{ selectedMessage?.sender.email }}
                  </p>
                </div>
              </div>
              <div>
                <div class="flex gap-x-2 mb-2 ltablet:mb-0 lg:mb-0">
                  <BaseButtonIcon small class="scale-[0.8]">
                    <Icon name="ph:arrow-u-up-left-duotone" class="h-4 w-4" />
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
            <div class="h-[calc(100vh_-_344px)] p-8 overflow-y-auto slimscroll">
              <h1 class="font-bold text-2xl">{{ selectedMessage?.title }}</h1>
              <article
                class="mt-8 text-muted-500 dark:text-muted-400 leading-7 tracking-wider"
              >
                <p
                  class="font-sans"
                  v-html="
                    selectedMessage?.content.replaceAll('/n ', '<br /><br />')
                  "
                ></p>
              </article>
              <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-24">
                <button
                  v-for="(file, index) in selectedMessage?.attachments"
                  :key="index"
                  type="button"
                  class="group flex items-center gap-3 p-2 rounded-xl text-left hover:bg-muted-100/80 dark:hover:bg-muted-700/60 transition-colors duration-300"
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
                      class="block font-semibold text-sm text-muted-800 dark:text-muted-100"
                    >
                      {{ file.name }}
                    </span>
                    <span class="block text-xs text-muted-400">
                      {{ file.size }}
                    </span>
                  </span>
                  <span class="block ml-auto">
                    <span
                      class="flex items-center justify-center mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <Icon
                        name="lucide:arrow-down"
                        class="h-4 w-4 text-primary-500"
                      />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <!-- Messsage reply -->
            <div
              class="relative w-full h-44 flex items-center justify-center px-8"
            >
              <div
                class="w-full border border-muted-200 dark:border-muted-700/40 rounded-xl bg-muted-50 dark:bg-muted-900 mb-3 outline-none outline-offset-4 focus-within:outline-dashed focus-within:outline-2 focus-within:outline-muted-200 dark:focus-within:outline-muted-700 transition-all duration-300"
              >
                <textarea
                  class="w-full bg-muted-50 dark:bg-muted-900 p-3 rounded-2xl outline-none resize-none font-sans placeholder:text-muted-300 dark:placeholder:text-muted-600"
                  placeholder="Type your reply here..."
                  rows="2"
                ></textarea>
                <div class="flex items-center justify-between p-3">
                  <button
                    class="h-6 w-6 flex items-center justify-center text-muted-500 dark:text-muted-100"
                  >
                    <Icon name="uit:paperclip" class="w-7 h-7" />
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

    <!-- Active Panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      :enter-from-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
      leave-active-class="transition-transform duration-300 ease-in"
      :leave-to-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
    >
      <component
        :is="resolveComponent(panels.current.component)"
        v-if="panels.current?.component"
        class="fixed top-0 z-[100] h-full w-96"
        :class="[panels.current.position === 'left' ? 'left-0' : 'right-0']"
      />
    </Transition>
  </div>
</template>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  @apply w-1 bg-muted-100 hover:bg-muted-200 transition-colors duration-100;
}
</style>
