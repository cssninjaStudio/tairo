<script setup lang="ts">
const banks = [
  {
    id: 1,
    name: 'X Bank',
    text: 'checking **** **** 0499',
    icon: 'solar:banknote-2-linear',
  },
  {
    id: 2,
    name: 'Bankaria',
    text: 'checking **** **** 1548',
    icon: 'solar:cash-out-linear',
  },
  {
    id: 3,
    name: 'Bankus',
    text: 'checking **** **** 8448',
    icon: 'solar:course-up-outline',
  },
]

const value = ref('Surgery')
const bank = ref(banks[0])
</script>

<template>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
    <BaseField label="Select a speciality">
      <TairoSelect
        v-model="value"
        icon="solar:dropper-3-linear"
      >
        <BaseSelectItem value="Surgery">
          Surgery
        </BaseSelectItem>
        <BaseSelectItem value="Cardiology">
          Cardiology
        </BaseSelectItem>
        <BaseSelectItem value="Pediatry">
          Pediatry
        </BaseSelectItem>
        <BaseSelectItem value="Dermatology">
          Dermatology
        </BaseSelectItem>
        <BaseSelectItem value="Traumatology">
          Traumatology
        </BaseSelectItem>
      </TairoSelect>
    </BaseField>

    <BaseField label="Select an account">
      <TairoSelect
        v-model="bank"
        :icon="bank?.icon || 'solar:dropper-3-linear'"
      >
        <TairoSelectItem
          v-for="item in banks"
          :key="item.id"
          :value="item"
          :icon="item.icon"
          :name="item.name"
          :text="item.text"
        />
      </TairoSelect>
    </BaseField>
  </div>
</template>
