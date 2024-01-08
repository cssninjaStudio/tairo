<template>
  <BasePlaceholderPage
    title="Looks like you are new!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  >
    <template #image>
      <img src="/img/illustrations/placeholders/people/1.svg" alt="placeholder-image">
    </template>

    <div class="mt-2 flex justify-center gap-2">
      <BaseButton
        color="default"
        rounded="lg"
        class="h-11 w-32"
      >
        Go Home
      </BaseButton>

      <BaseButton
        color="primary"
        rounded="lg"
        class="h-11 w-32"
      >
        Edit Profile
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
