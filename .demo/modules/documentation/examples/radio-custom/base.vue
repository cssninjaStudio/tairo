<script setup lang="ts">
const customRadio = ref('value_1')
</script>

<template>
  <div class="w-full">
    <form class="w-full mx-auto">
      <fieldset class="w-full space-y-6">
        <div class="flex items-center justify-between py-4 border-b border-muted-200 dark:border-muted-700">
          <legend class="font-sans font-medium text-xl text-muted-800 dark:text-muted-100">Change Plan</legend>
          <NuxtLink to="#" class="font-sans font-medium text-sm underline-offset-4 hover:underline text-primary-500">
            Cancel your plan
          </NuxtLink>
        </div>
        <div class="grid sm:grid-cols-4 gap-6">
          <BaseRadioHeadless v-model="customRadio" name="radio_custom" value="value_1">
            <BaseCard
              shape="curved"
              class="relative p-5 border-2 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="font-sans font-medium text-sm text-muted-500 dark:text-muted-200 leading-tight uppercase mb-3"
                >
                  Starter
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">1</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$5</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute top-3 right-2 opacity-0">
                <Icon name="ph:check-circle-duotone" class="w-7 h-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="customRadio" name="radio_custom" value="value_2">
            <BaseCard
              shape="curved"
              class="relative p-5 border-2 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="font-sans font-medium text-sm text-muted-500 dark:text-muted-200 leading-tight uppercase mb-3"
                >
                  Freelancer
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">5</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$10</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute top-3 right-2 opacity-0">
                <Icon name="ph:check-circle-duotone" class="w-7 h-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="customRadio" name="radio_custom" value="value_3">
            <BaseCard
              shape="curved"
              class="relative p-5 border-2 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="font-sans font-medium text-sm text-muted-500 dark:text-muted-200 leading-tight uppercase mb-3"
                >
                  Business
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">10</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$15</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute top-3 right-2 opacity-0">
                <Icon name="ph:check-circle-duotone" class="w-7 h-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="customRadio" name="radio_custom" value="value_4">
            <BaseCard
              shape="curved"
              class="relative p-5 border-2 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="font-sans font-medium text-sm text-muted-500 dark:text-muted-200 leading-tight uppercase mb-3"
                >
                  Enterprise
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">20</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$20</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute top-3 right-2 opacity-0">
                <Icon name="ph:check-circle-duotone" class="w-7 h-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
        </div>
      </fieldset>
    </form>
  </div>
</template>
