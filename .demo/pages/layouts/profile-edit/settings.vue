<script setup lang="ts">
definePageMeta({
  title: 'Settings',
})
const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <form class="w-full pb-16">
    <BaseCard>
      <div class="flex items-center justify-between p-4">
        <div>
          <BaseHeading
            tag="h2"
            size="sm"
            weight="medium"
            lead="normal"
            class="uppercase tracking-wider"
          >
            Settings
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Edit your account prefs and settings
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/layouts/profile">Cancel</BaseButton>
          <BaseButton color="primary" class="w-24">Save</BaseButton>
        </div>
      </div>
      <div class="p-4">
        <div class="max-w-lg mx-auto py-8 space-y-12">
          <TairoFormGroup
            label="Change Password"
            sublabel="For an improved account security"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12">
                <BaseInput
                  type="password"
                  icon="ph:lock-duotone"
                  placeholder="Old password"
                />
              </div>
              <div class="col-span-12">
                <BaseInput
                  type="password"
                  icon="ph:lock-duotone"
                  placeholder="New password"
                />
              </div>
              <div class="col-span-12">
                <BaseInput
                  type="password"
                  icon="ph:lock-duotone"
                  placeholder="Repeat new password"
                />
              </div>
            </div>
          </TairoFormGroup>
          <TairoFormGroup
            label="2 Factor Auth"
            sublabel="Enable or disable 2 factor authentication"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12">
                <BaseSwitchThin
                  :checked="false"
                  label="Toggle"
                  sublabel="Toggle 2 factor authentication"
                  color="primary"
                />
              </div>
              <div class="col-span-12">
                <BaseInput
                  type="number"
                  icon="ph:phone-duotone"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </TairoFormGroup>
          <TairoFormGroup
            label="Notifications"
            sublabel="Configure how you receive notifications"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12">
                <BaseSwitchBall
                  :checked="false"
                  label="Disable"
                  sublabel="Disable all notifications"
                  color="primary"
                />
              </div>
              <div class="col-span-12">
                <BaseSwitchBall
                  :checked="true"
                  label="Flush"
                  sublabel="Flush low priority notifications"
                  color="primary"
                />
              </div>
            </div>
          </TairoFormGroup>
          <TairoFormGroup
            label="Marketing"
            sublabel="Configure how you receive promotions"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12">
                <BaseSwitchBall
                  :checked="false"
                  label="Emails"
                  sublabel="Enable marketing emails"
                  color="primary"
                />
              </div>
              <div class="col-span-12">
                <BaseSwitchBall
                  :checked="false"
                  label="Partners"
                  sublabel="Enable partner emails"
                  color="primary"
                />
              </div>
            </div>
          </TairoFormGroup>
        </div>
      </div>
    </BaseCard>
    <TairoFormSave />
  </form>
</template>
