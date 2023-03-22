<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
  }>(),
  {
    shape: 'rounded',
  },
)

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
          <BaseButton
            type="button"
            :shape="props.shape"
            class="w-full"
            @click="$router.back()"
          >
            <span>Cancel</span>
          </BaseButton>
          <BaseButton
            type="button"
            :shape="props.shape"
            color="primary"
            class="w-full"
          >
            <span>Save</span>
          </BaseButton>
        </BaseCard>
      </div>
    </Transition>
  </div>
</template>
