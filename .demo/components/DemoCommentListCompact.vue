<script setup lang="ts">
const comments = [
  {
    id: 0,
    firstName: 'Gary',
    lastName: 'Splitman',
    image: '/img/avatars/18.svg',
    text: 'GS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'Weinstein',
    image: '/img/avatars/14.svg',
    text: 'MW',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet.',
  },
  {
    id: 2,
    firstName: 'Clarissa',
    lastName: 'M',
    image: '/img/avatars/5.svg',
    text: 'CM',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 3,
    firstName: 'Eddy',
    lastName: 'Flayer',
    image: '/img/avatars/8.svg',
    text: 'EF',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div v-for="comment in comments" :key="comment.id" class="flex gap-3">
      <BaseAvatar
        :src="comment.image"
        :text="comment.text"
        size="xs"
        shape="straight"
        mask="blob"
        class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
      />
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>
            {{ comment.firstName }} {{ comment.lastName.slice(0, 1) }}.
          </span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            {{ comment.content }}
          </span>
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
