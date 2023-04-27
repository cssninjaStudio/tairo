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
  <div>
    <!-- Search bar -->
    <div class="relative">
      <BaseCard
        shape="curved"
        class="ptablet:py-6 ptablet:px-4 ptablet:grid ptablet:grid-cols-12 ltablet:divide-x divide-muted-200 dark:divide-muted-700 mb-10 flex w-full flex-col items-center py-2 sm:flex-row sm:py-0 lg:divide-x"
      >
        <div
          class="ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2"
        >
          <BaseInput
            v-model.trim="search"
            shape="curved"
            icon="lucide:search"
            placeholder="Job keywords"
          />
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseInput
            v-model.trim="location"
            shape="curved"
            icon="lucide:map-pin"
            placeholder="Location"
          />
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedType"
            shape="curved"
            icon="lucide:briefcase"
            label=""
            hide-label
          >
            <option value="">Select a type</option>
            <option value="all">All</option>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </BaseSelect>
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedRange"
            shape="curved"
            icon="lucide:dollar-sign"
            label=""
            hide-label
          >
            <option value="">Select a range</option>
            <option value="all">All</option>
            <option value="10k-20k">10k ~ 20k</option>
            <option value="20k-30k">20k ~ 40k</option>
            <option value="40k-75k">40k ~ 75k</option>
            <option value="75k">75k+</option>
          </BaseSelect>
        </div>
        <div class="ptablet:col-span-12 w-full px-4 py-2 sm:w-auto">
          <BaseButton
            shape="curved"
            color="primary"
            class="ptablet:w-full w-full sm:w-32"
          >
            Search
          </BaseButton>
        </div>
      </BaseCard>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div
        class="ptablet:col-span-4 ltablet:col-span-4 col-span-12 lg:col-span-3"
      >
        <div class="w-full">
          <div class="bg-muted-200 dark:bg-muted-800 mb-12 rounded-xl p-6">
            <!-- Title -->
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="light"
                lead="tight"
                class="text-muted-800 mb-2 dark:text-white"
              >
                <span>Create job alert</span>
              </BaseHeading>
              <BaseParagraph size="xs">
                <span class="text-muted-500">
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
                shape="curved"
                icon="lucide:search"
                placeholder="Job keywords"
              />
              <BaseButton shape="curved" color="primary" class="w-full">
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
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mb-2 dark:text-white"
                >
                  <span>Job type</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-1"
                    label="Full time jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    67
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-2"
                    label="Part time jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-3"
                    label="Remote jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    49
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-4"
                    label="Internships"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    17
                  </BaseTag>
                </div>
              </div>
            </div>
            <!-- Filter group -->
            <div class="relative">
              <!-- Title -->
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mb-2 dark:text-white"
                >
                  <span>Seniority</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-1"
                    label="Student level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    56
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-2"
                    label="Entry level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    84
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-3"
                    label="Mid level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-4"
                    label="Senior level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    59
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-5"
                    label="Director level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    11
                  </BaseTag>
                </div>
              </div>
            </div>
            <!-- Filter group -->
            <div class="relative">
              <!-- Title -->
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mb-2 dark:text-white"
                >
                  <span>Salary range</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 ps-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-1"
                    label="10k ~ 20k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    61
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-2"
                    label="20k ~ 40k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    28
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-3"
                    label="40k ~ 75k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    112
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-4"
                    label="75k+"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag
                    color="default"
                    shape="full"
                    class="text-xs"
                    condensed
                  >
                    58
                  </BaseTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div
        class="ptablet:col-span-8 ltablet:col-span-8 col-span-12 lg:col-span-9"
      >
        <!-- Title -->
        <div class="mb-6 mt-12 sm:mt-0">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Showing 46 Jobs</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500">
              These are the matching jobs that we found
            </span>
          </BaseParagraph>
        </div>
        <!-- Inner jobs grid -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div v-for="(job, index) in jobs" :key="index" class="relative">
            <BaseCard shape="curved" class="p-6">
              <div class="flex w-full flex-col gap-4 sm:flex-row">
                <div :data-tooltip="job.company">
                  <Icon :name="job.logo" class="h-10 w-10 shrink-0" />
                </div>
                <div>
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="after:text-muted-800 mb-4 dark:text-white"
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
                      color="default"
                      condensed
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
                      <BaseButton shape="curved" color="primary" class="w-24">
                        Apply
                      </BaseButton>
                      <BaseButton shape="curved" color="default" class="w-24">
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
