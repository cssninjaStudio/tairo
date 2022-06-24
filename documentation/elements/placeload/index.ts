export const text = `
<template>
  <div class="max-w-sm space-y-2">
    <BasePlaceload class="h-4 w-full rounded" />
    <BasePlaceload class="h-4 w-[85%] rounded" />
  </div>
</template>
`

export const shape = `
<template>
  <div class="flex items-end flex-wrap gap-2">
    <BasePlaceload class="h-10 w-10 rounded" />
    <BasePlaceload class="h-12 w-12 rounded-xl" />
    <BasePlaceload class="h-16 w-16 rounded-full" />
  </div>
</template>
`

export const composition = `
<template>
  <div class="max-w-sm">
    <BaseCard shape="rounded" class="p-4 md:p-6">
      <div class="flex items-center">
        <BasePlaceload class="h-10 w-10 rounded-full" />
        <div class="grow space-y-2 ml-3">
          <BasePlaceload class="h-3 w-full rounded" />
          <BasePlaceload class="h-3 w-[85%] rounded" />
        </div>
      </div>
    </BaseCard>
  </div>
</template>
`
