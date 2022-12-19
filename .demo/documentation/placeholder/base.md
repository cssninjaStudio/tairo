```vue
<template>
  <BasePlaceholderPage
    title="Looks like you are new!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
  >
    <template #image>
      <NuxtImg
        src="/img/illustrations/placeholders/people/2.svg"
        alt="placeholder-image"
      />
    </template>

    <div class="flex justify-center gap-2 mt-2">
      <BaseButton
        color="primary"
        shape="curved"
        class="h-11 w-40"
      >
        Take some action
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
```
