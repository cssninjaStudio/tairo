<template>
  <div class="flex w-full items-end gap-6">
    <form class="mx-auto w-full">
      <fieldset class="w-full space-y-6">
        <div
          class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"
        >
          <legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium">
            Change Plan
          </legend>

          <NuxtLink
            to="#"
            class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
          >
            Cancel your plan
          </NuxtLink>
        </div>

        <div class="grid gap-6 sm:grid-cols-4">
          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_1">
            <BaseCard
              shape="curved"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Starter
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">1</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$5</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/month</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_2">
            <BaseCard
              shape="curved"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Freelancer
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">5</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$10</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/month</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_3">
            <BaseCard
              shape="curved"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Business
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">10</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$15</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/month</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_4">
            <BaseCard
              shape="curved"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Enterprise
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">20</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$20</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/month</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
const value = ref('value_1')
</script>
