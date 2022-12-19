```vue
<template>
  <BasePopover orientation="end">
    <div class="flex items-center">
      <span
        class="font-heading text-sm font-semibold text-muted-800 dark:text-white border border-muted-300 dark:border-muted-600 rounded-full py-1.5 px-3"
      >
        Beautiful house
      </span>
    </div>

    <template #content>
      <BasePopoverContentMedia
        :images="[
          'https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300',
          'https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150',
          'https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150',
        ]"
        title="House"
        subtitle="5 rooms"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti."
        footer-title="$150/night"
        footer-text="14 Columbia Av., Block C"
        link-label="Rent Now"
        link="/"
      />
    </template>
  </BasePopover>
</template>
```
