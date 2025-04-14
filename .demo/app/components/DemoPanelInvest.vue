<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    option?: any
  }>(),
  {
    option: undefined,
  },
)

const emits = defineEmits<{
  close: [foo?: string]
}>()

onKeyStroke('Escape', () => emits('close'))
</script>

<template>
  <FocusScope
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-l bg-white"
    trapped
    loop
  >
    <div
      class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <div>
        <BaseHeading weight="medium">
          {{ props.option?.title }}
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          {{ props.option?.subtitle }}
        </BaseParagraph>
      </div>

      <!-- Close button -->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"
        @click="emits('close')"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </div>

    <div
      class="nui-slimscroll relative h-[calc(100dvh_-_80px)] w-full overflow-y-auto px-6"
    >
      <div class="py-10">
        <div class="space-y-6">
          <!-- Overview -->
          <div
            class="border-muted-200 dark:border-muted-800 grid grid-cols-12 border-b pb-6"
          >
            <div class="col-span-4">
              <BaseHeading
                size="sm"
                weight="medium"
                class="text-muted-400"
              >
                {{ props.option?.benefits.concept.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option?.benefits?.concept?.features" :key="feature">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                  >
                    {{ feature }}
                  </BaseParagraph>
                </li>
              </ul>
            </div>
          </div>
          <!-- Pros -->
          <div
            class="border-muted-200 dark:border-muted-800 grid grid-cols-12 border-b pb-6"
          >
            <div class="col-span-4">
              <BaseHeading
                size="sm"
                weight="medium"
                class="text-muted-400"
              >
                {{ props.option?.benefits.pros.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option?.benefits?.pros?.features" :key="feature">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                  >
                    {{ feature }}
                  </BaseParagraph>
                </li>
              </ul>
            </div>
          </div>
          <!-- Cons -->
          <div
            class="border-muted-200 dark:border-muted-800 grid grid-cols-12 border-b pb-6"
          >
            <div class="col-span-4">
              <BaseHeading
                size="sm"
                weight="medium"
                class="text-muted-400"
              >
                {{ props.option?.benefits.cons.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option?.benefits?.cons?.features" :key="feature">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                  >
                    {{ feature }}
                  </BaseParagraph>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Provider -->
        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              :src="props.option?.provider.logo"
              class="size-10"
              alt=""
            >
            <BaseHeading
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              {{ props.option?.provider.name }}
            </BaseHeading>
          </div>
          <div>
            <BaseButton
              rounded="md"
              variant="primary"
            >
              Get Started
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </FocusScope>
</template>
