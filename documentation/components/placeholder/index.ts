export const base = `
<template>
  <BasePlaceholderPage
    title="Looks like you are new!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
    >
    <template #image>
      <img
        src="/img/illustrations/placeholders/people/2.svg"
        alt="placeholder-image"
      />
    </template>

    <div class="flex justify-center gap-2 mt-2">
      <BaseButton color="primary" shape="curved" class="h-11 w-40">
        Take some action
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
`

export const variation = `
<template>
  <BasePlaceholderPage
    title="Looks like you are new!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
    >
    <template #image>
      <img
        src="/img/illustrations/placeholders/people/1.svg"
        alt="placeholder-image"
      />
    </template>

    <div class="flex justify-center gap-2 mt-2">
      <BaseButton color="default" shape="curved" class="h-11 w-32">
        Go Home
      </BaseButton>
      <BaseButton color="primary" shape="curved" class="h-11 w-32">
        Edit Profile
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
`
