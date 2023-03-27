<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-end">
    <div class="w-full max-w-sm space-y-8">
      <BaseInput shape="straight" label="Search" placeholder="Enter search terms..." icon="lucide:search" label-float />
      <BaseInput shape="rounded" label="Email Address" placeholder="Your email..." icon="lucide:mail" label-float />
    </div>
    <div class="w-full max-w-sm space-y-8">
      <BaseInput shape="curved" label="Username" placeholder="Your username..." label-float />
      <BaseInput type="password" shape="full" label="Password" placeholder="Enter password..." label-float />
    </div>
  </div>
</template>
