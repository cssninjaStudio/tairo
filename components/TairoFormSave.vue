<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    shape: 'rounded',
  },
)
const emits = defineEmits<{
  (event: 'reset'): void
}>()
const { x, y } = useWindowScroll()
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-20 opacity-0"
    >
      <div
        v-if="y > 120"
        class="fixed inset-x-0 bottom-6 z-40 mx-auto w-full max-w-[304px]"
      >
        <BaseCard
          class="shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl"
          :shape="props.shape === 'full' ? 'curved' : props.shape"
        >
          <slot>
            <BaseButton
              type="reset"
              :shape="props.shape"
              class="w-full"
              :disabled="props.disabled"
              @click.prevent="() => emits('reset')"
            >
              <span>Reset</span>
            </BaseButton>
            <BaseButton
              type="submit"
              :disabled="props.disabled"
              :loading="props.loading"
              :shape="props.shape"
              color="primary"
              class="w-full"
            >
              <span>Save</span>
            </BaseButton>
          </slot>
        </BaseCard>
      </div>
    </Transition>
  </div>
</template>
