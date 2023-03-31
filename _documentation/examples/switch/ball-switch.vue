<template>
  <BaseFocusLoop class="grid grid-cols-2 md:grid-cols-4 md:max-w-lg gap-6">
    <BaseSwitchBall :checked="true" label="Primary" color="primary" />
    <BaseSwitchBall :checked="true" label="Info" color="info" />
    <BaseSwitchBall :checked="true" label="Success" color="success" />
    <BaseSwitchBall :checked="true" label="Warning" color="warning" />
    <BaseSwitchBall :checked="true" label="Danger" color="danger" />
  </BaseFocusLoop>
</template>
