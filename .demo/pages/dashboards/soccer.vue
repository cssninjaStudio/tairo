<script setup lang="ts">
definePageMeta({
  title: 'Soccer',
  preview: {
    title: 'Soccer dashboard',
    description: 'For soccer & football fans',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-soccer.png',
    srcDark: '/img/screens/dashboards-soccer-dark.png',
    order: 20,
  },
})

const matches = [
  {
    id: 1,
    status: 'live',
    time: '11:30',
    stadium: 'Camp Nou',
    match: {
      home: {
        name: 'Barcelona',
        logo: '/img/icons/soccer/teams/barcelona.svg',
        score: 4,
      },
      away: {
        name: 'PSG',
        logo: '/img/icons/soccer/teams/psg.svg',
        score: 0,
      },
    },
  },
  {
    id: 2,
    status: 'scheduled',
    time: '14:30',
    stadium: 'Bernabeu',
    match: {
      home: {
        name: 'Real Madrid',
        logo: '/img/icons/soccer/teams/madrid.svg',
        score: 1,
      },
      away: {
        name: 'Liverpool',
        logo: '/img/icons/soccer/teams/liverpool.svg',
        score: 0,
      },
    },
  },
  {
    id: 3,
    status: 'scheduled',
    time: '16:30',
    stadium: 'Arsenal',
    match: {
      home: {
        name: 'Arsenal',
        logo: '/img/icons/soccer/teams/arsenal.svg',
        score: undefined,
      },
      away: {
        name: 'Chelsea',
        logo: '/img/icons/soccer/teams/chelsea.svg',
        score: undefined,
      },
    },
  },
  {
    id: 4,
    status: 'scheduled',
    time: '18:30',
    stadium: 'Goodison Park',
    match: {
      home: {
        name: 'Everton',
        logo: '/img/icons/soccer/teams/everton.svg',
        score: undefined,
      },
      away: {
        name: 'Liverpool',
        logo: '/img/icons/soccer/teams/liverpool.svg',
        score: undefined,
      },
    },
  },
  {
    id: 5,
    status: 'scheduled',
    time: '20:30',
    stadium: 'José Zorrilla',
    match: {
      home: {
        name: 'Valladolid',
        logo: '/img/icons/soccer/teams/valladolid.svg',
        score: undefined,
      },
      away: {
        name: 'Zagreb',
        logo: '/img/icons/soccer/teams/zagreb.svg',
        score: undefined,
      },
    },
  },
  {
    id: 6,
    status: 'scheduled',
    time: '22:30',
    stadium: 'Parc des Princes',
    match: {
      home: {
        name: 'PSG',
        logo: '/img/icons/soccer/teams/psg.svg',
        score: undefined,
      },
      away: {
        name: 'Chelsea',
        logo: '/img/icons/soccer/teams/chelsea.svg',
        score: undefined,
      },
    },
  },
]
</script>

<template>
  <div class="relative mt-12">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="ptablet:flex-row flex flex-col gap-6">
          <!-- Widget -->
          <BaseCard shape="curved" class="p-8">
            <!-- Title -->
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>UEFA Champions League</span>
              </BaseHeading>
            </div>
            <!-- Subtitle -->
            <div class="mb-6 flex items-center justify-between">
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mb-1 dark:text-white"
                >
                  <span>Group C</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-400">Match 3 of 6</span>
                </BaseParagraph>
              </div>
              <div>
                <BaseTag
                  shape="full"
                  color="danger"
                  class="inline-flex items-center justify-center gap-1"
                  condensed
                >
                  <Icon name="lucide:video" class="h-3 w-3" />
                  <span>Live now</span>
                </BaseTag>
              </div>
            </div>
            <!-- Results -->
            <div class="mb-6 flex items-center justify-between">
              <div class="flex flex-col text-center">
                <img
                  class="mx-auto h-12 w-12"
                  src="/img/icons/soccer/teams/barcelona.svg"
                  alt="Team logo"
                />
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="light"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 mt-2"
                >
                  <span>Barcelona</span>
                </BaseHeading>
              </div>
              <div
                class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"
              >
                <span class="text-5xl font-bold">4</span>
                <span class="text-4xl font-bold">:</span>
                <span class="text-5xl font-bold">0</span>
              </div>
              <div class="flex flex-col text-center">
                <img
                  class="mx-auto h-12 w-12"
                  src="/img/icons/soccer/teams/psg.svg"
                  alt="Team logo"
                />
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="light"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 mt-2"
                >
                  <span>PSG</span>
                </BaseHeading>
              </div>
            </div>
            <!-- Action -->
            <div>
              <BaseButton color="primary" shape="curved" class="!h-12 w-full">
                <span>Watch Now</span>
              </BaseButton>
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard shape="curved" class="p-8">
            <!-- Title -->
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Available Leagues</span>
              </BaseHeading>
            </div>
            <DemoLeagueListCompact />
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <!-- Header -->
          <div class="col-span-12">
            <div
              class="bg-primary-800 flex flex-col items-center rounded-2xl sm:flex-row"
            >
              <div class="mt-6 grow pe-6 ps-6 sm:mt-0 sm:pe-0 sm:ps-10">
                <div class="pb-4 text-center sm:pb-0 sm:text-left">
                  <BaseHeading tag="h1" class="text-white opacity-90">
                    <span>Win awesome prizes in our contest</span>
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-white opacity-70">
                    <span>
                      Predict who will win and how a match will end and get a
                      chance to win incredible cash prizes.
                    </span>
                  </BaseParagraph>
                  <div class="mt-2">
                    <BaseButton
                      size="sm"
                      color="light"
                      flavor="outline"
                      class="w-full sm:w-auto"
                    >
                      <span>Learn More</span>
                      <Icon name="lucide:arrow-right" class="h-4 w-4" />
                    </BaseButton>
                  </div>
                </div>
              </div>
              <div class="relative h-[280px] w-[320px] shrink-0 sm:h-[225px]">
                <img
                  class="pointer-events-none absolute bottom-0 end-6 sm:-end-10"
                  src="/img/illustrations/dashboards/soccer/soccer-player.svg"
                  alt="Soccer Player"
                />
              </div>
            </div>
          </div>
          <!-- Table -->
          <BaseCard shape="curved" class="p-8">
            <div class="mb-6 flex gap-4 font-sans">
              <button
                class="border-primary-500 text-muted-800 dark:text-muted-100 border-b-2 pb-4"
              >
                All
              </button>
              <button
                class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"
              >
                Live
              </button>
              <button
                class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"
              >
                Finished
              </button>
              <button
                class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"
              >
                Scheduled
              </button>
            </div>
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden">
                  <table
                    class="min-w-full table-fixed divide-y divide-slate-200 text-left dark:divide-slate-700"
                  >
                    <thead>
                      <th class="py-3 font-sans text-xs uppercase">Time</th>
                      <th
                        class="xs:px-8 py-3 text-center font-sans text-xs uppercase"
                      >
                        Match
                      </th>
                      <th class="xs:px-4 py-3 font-sans text-xs uppercase">
                        Stadium
                      </th>
                      <th class="xs:px-4 py-3 font-sans text-xs uppercase">
                        Details
                      </th>
                    </thead>
                    <tbody>
                      <tr v-for="match in matches" :key="match.id">
                        <td class="py-4 align-middle">
                          <div
                            class="text-muted-500 dark:text-muted-400 flex items-center gap-2 font-sans text-sm"
                            :data-tooltip="capitalize(match.status)"
                          >
                            <div
                              class="h-2 w-2 rounded-full"
                              :class="
                                match.status === 'live'
                                  ? 'bg-rose-500'
                                  : 'bg-muted-300 dark:bg-muted-600'
                              "
                            ></div>
                            <span>{{ match.time }}</span>
                          </div>
                        </td>
                        <td class="xs:px-8 py-4">
                          <div class="flex items-center justify-center gap-4">
                            <div
                              class="flex w-[120px] items-center justify-end gap-2"
                            >
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="light"
                                lead="none"
                                class="text-muted-500 dark:text-muted-400"
                              >
                                <span>{{ match.match.home.name }}</span>
                              </BaseHeading>
                              <img
                                class="h-8 w-8"
                                :src="match.match.home.logo"
                                :alt="match.match.home.name"
                              />
                            </div>
                            <div
                              class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"
                            >
                              <span class="text-sm font-bold">
                                {{
                                  match.match.home.score !== undefined
                                    ? match.match.home.score
                                    : '-'
                                }}
                              </span>
                              <span class="text-xs font-bold">:</span>
                              <span class="text-sm font-bold">
                                {{
                                  match.match.away.score !== undefined
                                    ? match.match.away.score
                                    : '-'
                                }}
                              </span>
                            </div>
                            <div class="flex w-[120px] items-center gap-2">
                              <img
                                class="h-8 w-8"
                                :src="match.match.away.logo"
                                :alt="match.match.away.name"
                              />
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="light"
                                lead="none"
                                class="text-muted-500 dark:text-muted-400"
                              >
                                <span>{{ match.match.away.name }}</span>
                              </BaseHeading>
                            </div>
                          </div>
                        </td>
                        <td class="xs:px-4 py-4">
                          <div
                            class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                          >
                            <span class="whitespace-nowrap">
                              {{ match.stadium }}
                            </span>
                          </div>
                        </td>
                        <td class="xs:px-4 py-4">
                          <div>
                            <BaseButtonIcon small muted>
                              <Icon
                                name="lucide:more-horizontal"
                                class="h-4 w-4"
                              />
                            </BaseButtonIcon>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
