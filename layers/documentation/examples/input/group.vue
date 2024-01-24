<template>
  <BaseButtonGroup>
    <BaseButton color="muted">
      <span>USD</span>
    </BaseButton>

    <BaseInput
      v-model.number="amount"
      :classes="{
        wrapper: 'w-28',
      }"
      type="number"
      placeholder="0.00"
    />

    <BaseSelect
      v-model="taxes"
      :classes="{
        wrapper: 'w-36',
      }"
    >
      <option value="With taxes">
        With taxes
      </option>

      <option value="Without taxes">
        Without taxes
      </option>
    </BaseSelect>
  </BaseButtonGroup>
</template>

<script setup lang="ts">
const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>
