<script setup lang="ts">
definePageMeta({
  title: 'Jobs',
  preview: {
    title: 'Jobs dashboard',
    description: 'For recruitment and job search',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-jobs.png',
    srcDark: '/img/screens/dashboards-jobs-dark.png',
    order: 14,
  },
})

const search = ref('')
const location = ref('')
const alertKeyword = ref('')

const selectedType = ref('all')
const selectedRange = ref('all')

const jobTypes = ref([])
const jobSeniority = ref([])
const jobSalary = ref([])

const jobs = [
  {
    company: 'Airbnb',
    logo: 'logos:airbnb-icon',
    title: 'UI / UX Designer',
    description:
      'We are looking for a UI / UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'UX design', 'Senior level'],
    applicants: [
      {
        tooltip: 'Clark Smith',
        src: '/img/avatars/3.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
      {
        tooltip: 'Clarissa Miller',
        src: '/img/avatars/5.svg',
      },
      {
        tooltip: 'Jane Doe',
        src: '/img/avatars/4.svg',
      },
    ],
  },
  {
    company: 'Slack',
    logo: 'logos:slack-icon',
    title: 'Product Designer',
    description:
      'We are looking for a Product Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Product design', 'Marketing'],
    applicants: [
      {
        tooltip: 'Hermann Mayer',
        src: '/img/avatars/16.svg',
      },
      {
        tooltip: 'Jen Rossi',
        src: '/img/avatars/10.svg',
      },
    ],
  },
  {
    company: 'Gitlab',
    logo: 'logos:gitlab',
    title: 'Project Manager',
    description:
      'We are looking for a Project Manager to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Product management'],
    applicants: [
      {
        tooltip: 'Alex Wielder',
        src: '/img/avatars/11.svg',
      },
      {
        tooltip: 'Rob Howards',
        src: '/img/avatars/18.svg',
      },
    ],
  },
  {
    company: 'Google',
    logo: 'logos:google-icon',
    title: 'Product Owner',
    description:
      'We are looking for a Product Owner to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Scrum master', 'Management'],
    applicants: [
      {
        tooltip: 'Clarence Bodicker',
        src: '/img/avatars/13.svg',
      },
      {
        tooltip: 'Andrew Holmes',
        src: '/img/avatars/14.svg',
      },
    ],
  },
  {
    company: 'Atlassian',
    logo: 'logos:atlassian',
    title: 'Fullstack Developer',
    description:
      'We are looking for a Fullstack  to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Fullstack', 'Engineering'],
    applicants: [
      {
        tooltip: 'Sam Brettman',
        src: '/img/avatars/15.svg',
      },
      {
        tooltip: 'Elina Wheeler',
        src: '/img/avatars/9.svg',
      },
    ],
  },
  {
    company: 'Dribbble',
    logo: 'logos:dribbble-icon',
    title: 'Community Manager',
    description:
      'We are looking for a Community Manager to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Manager', 'Community'],
    applicants: [
      {
        tooltip: 'John Baxter',
        src: '/img/avatars/6.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
    ],
  },
  {
    company: 'Figma',
    logo: 'logos:figma',
    title: 'Business Developer',
    description:
      'We are looking for a Business Developer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Business', 'Sales'],
    applicants: [
      {
        tooltip: 'Edward Rowell',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Nick Kowalski',
        src: '/img/avatars/17.svg',
      },
    ],
  },
  {
    company: 'Airtable',
    logo: 'logos:airtable',
    title: 'Frontend Developer',
    description:
      'We are looking for a Frontend Developer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
    tags: ['Full Time', 'Frontend', 'Sales'],
    applicants: [
      {
        tooltip: 'Edward Rowell',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Nick Kowalski',
        src: '/img/avatars/17.svg',
      },
      {
        tooltip: 'John Baxter',
        src: '/img/avatars/6.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
    ],
  },
]
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Search bar -->
    <div class="relative">
      <BaseCard
        rounded="lg"
        class="md:portrait:py-6 md:portrait:px-4 md:portrait:grid md:portrait:grid-cols-12 lg:landscape:divide-x divide-muted-200 dark:divide-muted-800 mb-10 flex w-full flex-col items-center py-2 sm:flex-row sm:py-0 2xl:landscape:divide-x"
      >
        <div
          class="md:portrait:ps-4 md:portrait:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2"
        >
          <TairoInput
            v-model.trim="search"
            rounded="lg"
            placeholder="Job keywords"
            icon="lucide:search"
          />
        </div>
        <div class="md:portrait:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <TairoInput
            v-model.trim="location"
            rounded="lg"
            placeholder="Location"
            icon="lucide:map-pin"
          />
        </div>
        <div class="md:portrait:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedType"
            rounded="lg"
            icon="lucide:briefcase"
            label=""
            hide-label
            placeholder="Select a type"
          >
            <BaseSelectItem value="all">
              All
            </BaseSelectItem>
            <BaseSelectItem value="design">
              Design
            </BaseSelectItem>
            <BaseSelectItem value="engineering">
              Engineering
            </BaseSelectItem>
            <BaseSelectItem value="frontend">
              Frontend
            </BaseSelectItem>
            <BaseSelectItem value="backend">
              Backend
            </BaseSelectItem>
          </BaseSelect>
        </div>
        <div class="md:portrait:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedRange"
            rounded="lg"
            icon="lucide:dollar-sign"
            label=""
            placeholder="Select a range"
          >
            <BaseSelectItem value="all">
              All
            </BaseSelectItem>
            <BaseSelectItem value="10k-20k">
              10k ~ 20k
            </BaseSelectItem>
            <BaseSelectItem value="20k-30k">
              20k ~ 40k
            </BaseSelectItem>
            <BaseSelectItem value="40k-75k">
              40k ~ 75k
            </BaseSelectItem>
            <BaseSelectItem value="75k">
              75k+
            </BaseSelectItem>
          </BaseSelect>
        </div>
        <div class="md:portrait:col-span-12 w-full px-4 py-2 sm:w-auto">
          <BaseButton
            rounded="lg"
            variant="primary"
            class="md:portrait:w-full w-full sm:w-32"
          >
            Search
          </BaseButton>
        </div>
      </BaseCard>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div
        class="md:portrait:col-span-4 lg:landscape:col-span-4 col-span-12 2xl:landscape:col-span-3"
      >
        <div class="w-full">
          <div class="bg-muted-200 dark:bg-muted-950/60 mb-12 rounded-xl p-6">
            <!-- Title -->
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 mb-2 dark:text-white"
              >
                <span>Create job alert</span>
              </BaseHeading>
              <BaseParagraph size="xs">
                <span class="text-muted-500 dark:text-muted-400">
                  Create a job alert matching the following keywords and get
                  notified as soon as a new offer matching your criteria is
                  posted.
                </span>
              </BaseParagraph>
            </div>
            <!-- Form -->
            <form class="space-y-2">
              <BaseInput
                v-model.trim="alertKeyword"
                rounded="lg"
                placeholder="Job keywords"
              />
              <BaseButton
                rounded="lg"
                variant="primary"
                class="w-full"
              >
                Create alert
              </BaseButton>
            </form>
          </div>
          <!-- Filters -->
          <div class="space-y-12">
            <!-- Filter group -->
            <div class="relative">
              <!-- Title -->
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  <span>Job type</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <BaseCheckboxGroup v-model="jobTypes" class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="job-types-1"
                    label="Full time jobs"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    67
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="job-types-2"
                    label="Part time jobs"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="job-types-3"
                    label="Remote jobs"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    49
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="job-types-4"
                    label="Internships"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    17
                  </BaseTag>
                </div>
              </BaseCheckboxGroup>
            </div>
            <!-- Filter group -->
            <div class="relative">
              <!-- Title -->
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  <span>Seniority</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <BaseCheckboxGroup v-model="jobSeniority" class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="seniority-level-1"
                    label="Student level"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    56
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="seniority-level-2"
                    label="Entry level"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    84
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="seniority-level-3"
                    label="Mid level"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="seniority-level-4"
                    label="Senior level"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    59
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="seniority-level-5"
                    label="Director level"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    11
                  </BaseTag>
                </div>
              </BaseCheckboxGroup>
            </div>
            <!-- Filter group -->
            <div class="relative">
              <!-- Title -->
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  <span>Salary range</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <BaseCheckboxGroup v-model="jobSalary" class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="salary-range-1"
                    label="10k ~ 20k"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    61
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="salary-range-2"
                    label="20k ~ 40k"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    28
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="salary-range-3"
                    label="40k ~ 75k"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    112
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    value="salary-range-4"
                    label="75k+"
                  />
                  <BaseTag
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    58
                  </BaseTag>
                </div>
              </BaseCheckboxGroup>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div
        class="md:portrait:col-span-8 lg:landscape:col-span-8 col-span-12 2xl:landscape:col-span-9"
      >
        <!-- Title -->
        <div class="mb-6 mt-12 sm:mt-0">
          <BaseHeading
            as="h3"
            size="lg"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>Showing 46 jobs</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500">
              These are the matching jobs that we found
            </span>
          </BaseParagraph>
        </div>
        <!-- Inner jobs grid -->
        <div class="grid grid-cols-1 gap-4 2xl:grid-cols-2">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="relative"
          >
            <BaseCard rounded="lg" class="p-6">
              <div class="flex w-full flex-col gap-4 sm:flex-row">
                <BaseTooltip :content="job.company">
                  <Icon :name="job.logo" class="size-8 shrink-0" />
                </BaseTooltip>
                <div>
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="after:text-muted-900 mb-4 dark:text-white"
                  >
                    <span>{{ job.title }}</span>
                  </BaseHeading>
                  <BaseParagraph size="sm">
                    <span
                      class="text-muted-500 dark:text-muted-400 line-clamp-4"
                    >
                      {{ job.description }}
                    </span>
                  </BaseParagraph>
                  <div class="flex flex-wrap items-center gap-2 py-4">
                    <BaseTag
                      v-for="tag in job.tags"
                      :key="tag"
                      size="sm"
                      class="text-xs"
                    >
                      {{ tag }}
                    </BaseTag>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <BaseAvatarGroup
                        :avatars="job.applicants"
                        :limit="2"
                        size="xs"
                      />
                    </div>
                    <div class="flex gap-2">
                      <BaseButton
                        rounded="lg"
                        size="sm"
                        variant="primary"
                        class="w-20"
                      >
                        Apply
                      </BaseButton>
                      <BaseButton
                        rounded="lg"
                        size="sm"
                        variant="default"
                        class="w-20"
                      >
                        Details
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
