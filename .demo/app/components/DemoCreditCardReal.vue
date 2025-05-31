<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string | null
    number?: number | string
    expiryYear?: number | string
    expiryMonth?: number | string
    cvc?: number | string
    centered?: boolean
    contrast?: 'low' | 'high'
  }>(),
  {
    name: '•••••• ••••••',
    number: '•••• •••• •••• ••••',
    expiryYear: '••',
    expiryMonth: '••',
    cvc: '•••',
    centered: true,
    contrast: 'low',
  },
)
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative h-[200px] w-full max-w-[315px] rounded-xl border bg-white p-6 shadow-xl"
    :class="[
      props.centered ? 'mx-auto' : '',
      props.contrast === 'high' && 'dark:bg-muted-950',
      props.contrast === 'low' && 'dark:bg-muted-900',

    ]"
  >
    <!-- Card content -->
    <div class="flex h-full flex-col gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-muted-200 dark:bg-muted-700 size-2 rounded-full" />
        <span class="text-muted-400 font-sans text-sm"> Mastercard </span>
      </div>
      <div class="mt-auto space-y-1">
        <img
          class="mb-3 w-11"
          src="/img/illustrations/card-chip.svg"
          alt="Card chip"
          width="44"
          height="31"
        >
        <div>
          <h5 class="font-heading text-muted-500 text-sm" x-text="cardholder">
            {{ props.name }}
          </h5>
        </div>
        <div>
          <p class="font-heading text-muted-400 text-xs">
            <span>{{ props.number }}</span>
          </p>
        </div>
        <div
          class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs"
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

    <!-- Mastercard -->
    <div class="absolute end-5 top-4 flex">
      <div class="-me-2 size-9 rounded-full bg-rose-500/60" />
      <div
        class="relative z-10 -ms-2 size-9 rounded-full bg-yellow-500/60"
      />
    </div>

    <!-- Logo -->
    <div class="absolute bottom-7 end-5 flex">
      <TairoLogo class="text-primary-500 size-10" />
    </div>
  </div>
</template>
