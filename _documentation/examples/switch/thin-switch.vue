<template>
  <BaseFocusLoop class="grid grid-cols-2 md:grid-cols-4 md:max-w-lg gap-6">
    <BaseSwitchThin :checked="true" label="Primary" color="primary" />
    <BaseSwitchThin :checked="true" label="Info" color="info" />
    <BaseSwitchThin :checked="true" label="Success" color="success" />
    <BaseSwitchThin :checked="true" label="Warning" color="warning" />
    <BaseSwitchThin :checked="true" label="Danger" color="danger" />
  </BaseFocusLoop>
</template>
