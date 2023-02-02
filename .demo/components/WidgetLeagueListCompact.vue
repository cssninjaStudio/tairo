<script setup lang="ts">
const leagues = [
  {
    id: 0,
    name: 'Ligue 1',
    location: 'France',
    logo: '/img/icons/soccer/leagues/ligue-1.svg',
    matches: 5,
  },
  {
    id: 1,
    name: 'La Liga',
    location: 'Spain',
    logo: '/img/icons/soccer/leagues/laliga.svg',
    matches: 3,
  },
  {
    id: 2,
    name: 'Liga',
    location: 'Portugal',
    logo: '/img/icons/soccer/leagues/liga.svg',
    matches: 7,
  },
  {
    id: 3,
    name: 'Bundesliga',
    location: 'Germany',
    logo: '/img/icons/soccer/leagues/bundesliga.svg',
    matches: 5,
  },
]
</script>

<template>
  <div class="space-y-5 mb-2">
    <div
      v-for="league in leagues"
      :key="league.id"
      class="flex items-center gap-3"
    >
      <img :src="league.logo" :alt="league.name" class="shrink-0 w-10 h-10" />
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ league.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            {{ league.location }}
          </span>
        </BaseParagraph>
      </div>
      <div class="flex items-center gap-1 ml-auto">
        <span class="font-sans text-xs text-muted-400">
          {{ league.matches }} matches
        </span>
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
