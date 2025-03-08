<script setup lang="ts">
const followers = [
  {
    'data-nui-tooltip': 'Clarke Smith',
    'src': '/img/avatars/3.svg',
  },
  {
    'data-nui-tooltip': 'John Rowner',
    'src': '/img/avatars/6.svg',
  },
  {
    'data-nui-tooltip': 'Maggie Pitts',
    'src': '/img/avatars/9.svg',
  },
]
</script>

<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-900 dark:text-white"
      >
        <span>Followers</span>
      </BaseHeading>
      <BaseAvatarGroup
        :avatars="followers"
        size="xs"
        :limit="3"
      />
    </div>
    <div>
      <BaseParagraph size="xs">
        <span class="text-muted-600 dark:text-muted-400">
          Great News!
          <NuxtLink
            to="#"
            class="text-primary-500 underline-offset-2 hover:underline"
          >
            Clarke
          </NuxtLink>
          ,
          <NuxtLink
            to="#"
            class="text-primary-500 underline-offset-2 hover:underline"
          >
            John
          </NuxtLink>
          and
          <NuxtLink
            to="#"
            class="text-primary-500 underline-offset-2 hover:underline"
          >
            Maggie
          </NuxtLink>
          are now following you. Take some time to look at their profile.
        </span>
      </BaseParagraph>
    </div>
  </div>
</template>
