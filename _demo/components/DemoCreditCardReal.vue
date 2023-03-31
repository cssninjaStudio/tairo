<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string
    number?: number | string
    expiryYear?: number | string
    expiryMonth?: number | string
    cvc?: number | string
  }>(),
  {
    name: '•••••• ••••••',
    number: '•••• •••• •••• ••••',
    expiryYear: '••',
    expiryMonth: '••',
    cvc: '•••',
  },
)
</script>

<template>
  <div
    class="relative w-full h-[200px] max-w-[315px] mx-auto rounded-xl p-6 bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
  >
    <!--Card content-->
    <div class="h-full flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <div class="h-2 w-2 rounded-full bg-muted-200 dark:bg-muted-700"></div>
        <span class="font-sans text-sm text-muted-400"> Mastercard </span>
      </div>
      <div class="mt-auto space-y-1">
        <img
          class="w-11 mb-3"
          src="/img/illustrations/card-chip.svg"
          alt="Card chip"
          width="44"
          height="31"
        />
        <div>
          <h5 class="font-heading text-sm text-muted-500" x-text="cardholder">
            {{ props.name }}
          </h5>
        </div>
        <div>
          <p class="font-heading text-xs text-muted-400">
            <span>{{ props.number }}</span>
          </p>
        </div>
        <div
          class="w-full flex items-center gap-2 font-heading text-xs text-muted-400"
        >
          <div class="flex items-center gap-2">
            <span>EXP</span>
            <span>{{ props.expiryMonth }}/{{ props.expiryYear }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>CVC</span>
            <span>{{ props.cvc }}</span>
          </div>
        </div>
      </div>
    </div>

    <!--Mastercard-->
    <div class="absolute top-4 right-5 flex">
      <div class="h-9 w-9 rounded-full bg-rose-500/60 -mr-2"></div>
      <div
        class="relative h-9 w-9 rounded-full bg-yellow-500/60 -ml-2 z-10"
      ></div>
    </div>

    <!--Logo-->
    <div class="absolute bottom-7 right-5 flex">
      <TairoLogo class="h-10 w-10 text-primary-500" />
    </div>
  </div>
</template>
