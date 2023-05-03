<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string
    endingNumber?: number
    balance?: number
    active: boolean
  }>(),
  {
    type: '',
    endingNumber: 0,
    balance: 0,
  },
)
</script>

<template>
  <div
    role="button"
    class="xs:w-[240px] xs:h-[144px] ltablet:h-[130px] relative flex h-[160px] w-[290px] max-w-full cursor-pointer flex-col overflow-hidden rounded-xl p-5 transition-all duration-300 lg:w-full"
    :class="[
      props.active ? 'bg-primary-700' : 'bg-muted-200 dark:bg-muted-900',
    ]"
  >
    <div
      class="absolute -bottom-5 -end-5 h-[70px] w-[70px] rounded-full bg-white opacity-30 dark:opacity-10"
    ></div>
    <div class="flex items-center justify-between">
      <div>
        <span>
          <svg
            class="h-10 w-10"
            :class="props.active ? 'text-white' : 'text-primary-500'"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m22.222 15.768l-.225-1.125h-2.514l-.4 1.117l-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588c.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82l-1.015 2.82zM7.06 8.257l2.026.002l-3.132 7.51l-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804A63.566 63.566 0 0 0 0 8.465V8.26h3.237c.56 0 .887.271.992.827c.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508l-1.928-.002l1.6-7.508l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.959.62 1.085 1.177 1.073 1.782c-.013 1.256-1.073 2.495-3.309 2.495c-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907c-.744-.411-1.788-.98-1.774-2.122c.017-1.462 1.402-2.443 3.369-2.443z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="mt-auto">
      <span
        class="block font-sans text-lg font-semibold"
        :class="
          props.active ? 'text-white' : 'text-muted-800 dark:text-muted-200'
        "
      >
        {{ formatPrice(props.balance) }}
      </span>
      <span
        class="block font-sans text-sm"
        :class="
          props.active ? 'text-white' : 'text-muted-500 dark:text-muted-400'
        "
      >
        **** **** **** {{ props.endingNumber }}
      </span>
    </div>
  </div>
</template>
