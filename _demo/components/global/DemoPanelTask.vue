<script setup lang="ts">
const { close } = usePanels()

const props = withDefaults(
  defineProps<{
    task?: any
    project?: any
  }>(),
  {
    task: undefined,
    project: undefined,
  },
)

const commentArea = ref('')
</script>

<template>
  <div
    class="border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        Task Details
      </h2>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="h-6 w-6" />
      </button>
    </div>

    <div
      class="relative h-[calc(100%_-_64px)] w-full px-10 py-5 overflow-y-auto slimscroll"
    >
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <BaseButtonIcon shape="full" data-tooltip="Edit task" condensed>
              <Icon name="lucide:edit-3" />
            </BaseButtonIcon>
            <h4
              class="font-sans text-xs font-semibold uppercase text-muted-400"
            >
              Overview
            </h4>
          </div>
          <BaseTag
            shape="full"
            flavor="pastel"
            color="muted"
            class="py-0 h-6 font-semibold inline-flex items-center gap-1 text-xs m-0 scale-90 -ms-1"
          >
            <span
              class="block h-2 w-2 rounded-full"
              :class="[
                props.task?.status === 0 && 'bg-info-500',
                props.task?.status === 1 && 'bg-primary-500',
                props.task?.status === 2 && 'bg-danger-500',
                props.task?.status === 3 && 'bg-warning-500',
                props.task?.status === 4 && 'bg-yellow-400',
                props.task?.status === 5 && 'bg-success-500',
              ]"
            ></span>
            <span>Task #{{ props.task?.id }}</span>
          </BaseTag>
        </div>
        <div class="pb-6 border-b border-muted-200 dark:border-muted-700">
          <BaseHeading as="h3" size="md" weight="medium" class="mb-2">
            {{ props.task?.name }}
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
            {{ props.task?.description }}
          </BaseParagraph>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center gap-2 shrink-0">
              <BaseAvatar
                :src="props.task?.assignee.src"
                size="xs"
                class="flex-shrink-0"
              />
              <div>
                <BaseText size="xs" class="text-muted-400" lead="none"
                  >Assigned to</BaseText
                >
                <BaseHeading as="h4" size="sm" weight="medium">
                  {{ props.task?.assignee.tooltip }}
                </BaseHeading>
              </div>
            </div>
            <div class="grow max-w-[120px]">
              <BaseText size="xs" class="mb-2 text-muted-400" lead="none"
                >{{ props.task?.completion }}% complete</BaseText
              >
              <BaseProgress
                :value="props.task?.completion"
                size="xs"
                :color="props.task?.status === 5 ? 'success' : 'primary'"
              />
            </div>
          </div>
        </div>
        <div class="py-6 border-b border-muted-200 dark:border-muted-700">
          <h4 class="font-sans text-xs font-semibold uppercase text-muted-400">
            Checklist
          </h4>
          <div v-if="props.task?.checklist.length === 0">
            <div class="flex items-center justify-center mt-10 text-muted-400">
              <Icon name="ph:file-thin" class="w-10 h-10" />
            </div>
            <div class="text-center mt-2 mb-6">
              <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                <span>Nothing to show</span>
              </BaseHeading>
              <BaseParagraph
                size="xs"
                lead="tight"
                class="!font-sans max-w-[200px] mx-auto text-muted-500 dark:text-muted-400"
              >
                <span>There is no checklist to show in here for now.</span>
              </BaseParagraph>
            </div>
          </div>
          <div v-else class="space-y-4 mt-6">
            <div
              v-for="(item, index) in props.task?.checklist"
              :key="index"
              shape="curved"
            >
              <div class="w-full flex items-center gap-2">
                <BaseCheckbox
                  v-model="item.done"
                  class="flex-shrink-0"
                  color="primary"
                  :label="item.text"
                  :classes="{
                    wrapper: '!items-start max-w-[240px]',
                    label:
                      'text-[0.85rem] text-muted-500 dark:text-muted-300 leading-snug',
                  }"
                ></BaseCheckbox>
              </div>
            </div>
          </div>
        </div>
        <div class="py-6 border-b border-muted-200 dark:border-muted-700">
          <h4 class="font-sans text-xs font-semibold uppercase text-muted-400">
            Attached Files ({{ props.task?.files.length }})
          </h4>
          <div v-if="props.task?.files.length === 0">
            <div class="flex items-center justify-center mt-10 text-muted-400">
              <Icon name="ph:file-thin" class="w-10 h-10" />
            </div>
            <div class="text-center mt-2 mb-6">
              <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                <span>Nothing to show</span>
              </BaseHeading>
              <BaseParagraph
                size="xs"
                lead="tight"
                class="!font-sans max-w-[200px] mx-auto text-muted-500 dark:text-muted-400"
              >
                <span
                  >There are no attached files to show in here for now.</span
                >
              </BaseParagraph>
            </div>
          </div>
          <div v-else class="space-y-4 mt-6">
            <div
              v-for="(file, index) in props.task?.files"
              :key="index"
              shape="curved"
            >
              <div class="w-full flex items-center gap-2">
                <img :src="file.icon" :alt="file.name" class="max-w-[40px]" />
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ file.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ file.size }}</span>
                    <span class="text-base px-1 leading-tight"> &middot; </span>
                    <span>v{{ file.version }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseButtonIcon
                    shape="full"
                    data-tooltip="Download file"
                    condensed
                  >
                    <Icon name="lucide:arrow-down" />
                  </BaseButtonIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-6">
          <h4 class="font-sans text-xs font-semibold uppercase text-muted-400">
            Comments ({{ props.task?.comments.length }})
          </h4>
          <div v-if="props.task?.comments.length === 0">
            <div class="flex items-center justify-center mt-10 text-muted-400">
              <Icon name="ph:chat-circle-thin" class="w-10 h-10" />
            </div>
            <div class="text-center mt-2 mb-6">
              <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                <span>Nothing to show</span>
              </BaseHeading>
              <BaseParagraph
                size="xs"
                lead="tight"
                class="!font-sans max-w-[200px] mx-auto text-muted-500 dark:text-muted-400"
              >
                <span>There are no comments to show in here for now.</span>
              </BaseParagraph>
            </div>
          </div>
          <div v-else class="flex flex-col gap-8 mt-6">
            <div
              v-for="(comment, c) in props.task?.comments"
              :key="c"
              class="flex gap-3"
            >
              <BaseAvatar :src="comment.author.picture" size="xs" />
              <div>
                <BaseHeading as="h3" size="sm" weight="medium">
                  {{ comment.author.name }}
                </BaseHeading>
                <BaseText size="xs" class="mb-2 text-muted-400" lead="none">
                  posted {{ comment.author.posted }}
                </BaseText>
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ comment.text }}
                </BaseParagraph>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BaseTextarea
            v-model="commentArea"
            shape="rounded"
            placeholder="Write a comment..."
            :rows="4"
            addon
          >
            <template #addon>
              <div class="flex items-center gap-2">
                <BaseAvatar src="/img/avatars/2.svg" class="me-1" size="xs" />
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Maya
                </BaseHeading>
              </div>
              <div class="flex items-center gap-2">
                <BaseButtonAction color="primary"> Publish </BaseButtonAction>
              </div>
            </template>
          </BaseTextarea>
        </div>
      </div>
    </div>
  </div>
</template>
