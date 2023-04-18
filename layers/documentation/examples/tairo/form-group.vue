<template>
  <div class="max-w-md">
    <form action="" method="POST" @submit.prevent>
      <TairoFormGroup label="Who are you?" sublabel="Let us know your name">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseInput v-model="firstName" label="First Name" placeholder="Ex: Emily" />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput v-model="lastName" label="Last Name" placeholder="Ex: Walters" />
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
    </form>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
</script>
