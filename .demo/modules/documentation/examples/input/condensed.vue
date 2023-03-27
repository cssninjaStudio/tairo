<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-end">
    <div class="w-full max-w-sm space-y-4">
      <BaseInput shape="straight" label="Search" placeholder="Enter search terms..." condensed />
      <BaseInput shape="rounded" label="Email Address" placeholder="Your email..." condensed />
    </div>
    <div class="w-full max-w-sm space-y-4">
      <BaseInput shape="curved" label="Username" placeholder="Search..." icon="lucide:search" condensed />
      <BaseInput
        type="password"
        shape="full"
        label="Password"
        placeholder="Enter password..."
        icon="lucide:lock"
        condensed
      />
    </div>
  </div>
</template>
