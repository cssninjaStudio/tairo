<template>
  <div
    class="flex flex-col gap-6 md:flex-row md:items-end"
  >
    <div class="w-full max-w-sm space-y-4">
      <BaseInput
        shape="straight"
        label="Search"
        placeholder="Enter search terms..."
        icon="lucide:search"
      />
      <BaseInput
        shape="rounded"
        label="Email Address"
        placeholder="Your email..."
        icon="lucide:mail"
      />
    </div>
    <div class="w-full max-w-sm space-y-4">
      <BaseInput
        shape="curved"
        label="Username"
        placeholder="Your username..."
        icon="lucide:user"
      />
      <BaseInput
        type="password"
        shape="full"
        label="Password"
        placeholder="Enter password..."
        icon="lucide:lock"
      />
    </div>
  </div>
</template>
