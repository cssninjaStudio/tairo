<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref<string>()
const address = ref('')
</script>

<template>
  <div class="max-w-md">
    <form
      action=""
      method="POST"
      class="space-y-10"
      @submit.prevent
    >
      <TairoFormGroup label="Who are you?" sublabel="Let us know your name">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="firstName"
              label="First Name"
              placeholder="Ex: Emily"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="Last Name"
              placeholder="Ex: Walters"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="email"
              label="Email Address"
              placeholder="Ex: emilywalters@gmail.com"
            />
          </div>
        </div>
      </TairoFormGroup>

      <TairoFormGroup label="Where do you live?" sublabel="Let us know your location">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseSelect v-model="country" label="Country">
              <BaseSelectItem value="italy">
                United States
              </BaseSelectItem>

              <BaseSelectItem value="italy">
                Italy
              </BaseSelectItem>

              <BaseSelectItem value="france">
                France
              </BaseSelectItem>

              <BaseSelectItem value="spain">
                Spain
              </BaseSelectItem>

              <BaseSelectItem value="germany">
                Germany
              </BaseSelectItem>

              <BaseSelectItem value="portugal">
                China
              </BaseSelectItem>
            </BaseSelect>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="City"
              placeholder="Ex: Milano"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="address"
              label="Address"
              placeholder="Ex: 23, Plaza de la República, 28001"
            />
          </div>
        </div>
      </TairoFormGroup>

      <TairoFormSave />
    </form>
  </div>
</template>
