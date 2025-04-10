<script setup lang="ts">
const value = ref('team_member_1')
</script>

<template>
  <BaseField label="Company type">
    <BaseRadioGroup
      v-model="value"
      class="grid gap-4 lg:grid-cols-3"
    >
      <TairoRadioCard
        value="team_member_1"
        icon="solar:home-2-linear"
        label="Solo"
        subtitle="Small company"
        variant="muted"
      />
      <TairoRadioCard
        value="team_member_2"
        icon="solar:shop-linear"
        label="LLC"
        subtitle="Medium company"
        variant="muted"
      />
      <TairoRadioCard
        value="team_member_3"
        icon="solar:buildings-linear"
        label="Corp"
        subtitle="Bigger company"
        variant="muted"
      />
    </BaseRadioGroup>
  </BaseField>
</template>
