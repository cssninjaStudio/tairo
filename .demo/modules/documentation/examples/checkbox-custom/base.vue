<script setup lang="ts">
const checkboxCustom = ref([])
</script>

<template>
  <div class="w-full">
    <form class="w-full mx-auto">
      <fieldset class="w-full space-y-6">
        <div class="flex items-center justify-between py-4 border-b border-muted-200 dark:border-muted-700">
          <legend class="font-sans font-medium text-xl text-muted-800 dark:text-muted-100">Select people</legend>
          <NuxtLink to="#" class="font-sans font-medium text-sm underline-offset-4 hover:underline text-primary-500">
            Cancel
          </NuxtLink>
        </div>
        <div class="grid sm:grid-cols-3 gap-6">
          <BaseCheckboxHeadless v-model="checkboxCustom" value="team_member_1" name="team-member-1">
            <BaseCard
              shape="rounded"
              class="p-4 border-2 grayscale peer-checked:grayscale-0 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500"
            >
              <div class="w-full flex items-center gap-2">
                <BaseAvatar src="/img/avatars/10.svg" />
                <div>
                  <BaseHeading as="h4" size="sm" weight="medium" lead="none">Kendra Wilson</BaseHeading>
                  <BaseText size="xs" class="text-muted-400">Software Engineer</BaseText>
                </div>
                <div class="child ml-auto text-muted-300">
                  <div class="h-3 w-3 rounded-full bg-current"></div>
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
          <BaseCheckboxHeadless v-model="checkboxCustom" value="team_member_2" name="team-member-2">
            <BaseCard
              shape="rounded"
              class="p-4 border-2 grayscale peer-checked:grayscale-0 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500"
            >
              <div class="w-full flex items-center gap-2">
                <BaseAvatar src="/img/avatars/16.svg" />
                <div>
                  <BaseHeading as="h4" size="sm" weight="medium" lead="none">Hermann Mayer</BaseHeading>
                  <BaseText size="xs" class="text-muted-400">Sales Manager</BaseText>
                </div>
                <div class="child ml-auto text-muted-300">
                  <div class="h-3 w-3 rounded-full bg-current"></div>
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
          <BaseCheckboxHeadless v-model="checkboxCustom" value="team_member_3" name="team-member-3">
            <BaseCard
              shape="rounded"
              class="p-4 border-2 grayscale peer-checked:grayscale-0 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500"
            >
              <div class="w-full flex items-center gap-2">
                <BaseAvatar src="/img/avatars/25.svg" />
                <div>
                  <BaseHeading as="h4" size="sm" weight="medium" lead="none">Melany Lawright</BaseHeading>
                  <BaseText size="xs" class="text-muted-400">HR Manager</BaseText>
                </div>
                <div class="child ml-auto text-muted-300">
                  <div class="h-3 w-3 rounded-full bg-current"></div>
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
        </div>
      </fieldset>
    </form>
  </div>
</template>
