<script setup lang="ts">
definePageMeta({
  title: 'Jobs',
  layout: 'sidebar',
})

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
        class="w-full flex flex-col sm:flex-row items-center py-2 sm:py-0 ptablet:py-6 ptablet:px-4 mb-10 ptablet:grid ptablet:grid-cols-12 ltablet:divide-x lg:divide-x divide-muted-200 dark:divide-muted-700"
      >
        <div
          class="w-full sm:w-auto sm:grow py-2 pl-4 sm:pl-2 ptablet:pl-4 pr-4 ptablet:col-span-6"
        >
          <BaseInput
            shape="curved"
            icon="lucide:search"
            placeholder="Job keywords"
          />
        </div>
        <div class="w-full sm:w-auto flex-1 py-2 px-4 ptablet:col-span-6">
          <BaseInput
            shape="curved"
            icon="lucide:map-pin"
            placeholder="Location"
          />
        </div>
        <div class="w-full sm:w-auto flex-1 py-2 px-4 ptablet:col-span-6">
          <BaseSelect
            v-model="selectedType"
            shape="curved"
            icon="lucide:briefcase"
            label="Job type"
            hideLabel
          >
            <option value="">Select a type</option>
            <option value="all">All</option>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </BaseSelect>
        </div>
        <div class="w-full sm:w-auto flex-1 py-2 px-4 ptablet:col-span-6">
          <BaseSelect
            v-model="selectedRange"
            shape="curved"
            icon="lucide:dollar-sign"
            label="Salary"
            hideLabel
          >
            <option value="">Select a range</option>
            <option value="all">All</option>
            <option value="10k-20k">10k ~ 20k</option>
            <option value="20k-30k">20k ~ 40k</option>
            <option value="40k-75k">40k ~ 75k</option>
            <option value="75k">75k+</option>
          </BaseSelect>
        </div>
        <div class="w-full sm:w-auto py-2 px-4 ptablet:col-span-12">
          <BaseButton
            shape="curved"
            color="primary"
            class="w-full ptablet:w-full sm:w-32"
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
        class="col-span-12 ptablet:col-span-4 ltablet:col-span-4 lg:col-span-3"
      >
        <div class="w-full">
          <div class="mb-12 p-6 rounded-xl bg-muted-200 dark:bg-muted-800">
            <!-- Title -->
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="light"
                lead="tight"
                class="mb-2 text-muted-800 dark:text-white"
              >
                <span>Create job alert</span>
              </BaseHeading>
              <BaseParagraph size="xs">
                <span class="text-muted-500"
                  >Create a job alert matching the following keywords and get
                  notified as soon as a new offer matching your criteria is
                  posted.</span
                >
              </BaseParagraph>
            </div>
            <!-- Form -->
            <form class="space-y-2">
              <BaseInput
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
                  class="mb-2 text-muted-800 dark:text-white"
                >
                  <span>Job type</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 pl-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    name="job-types-1"
                    label="Full time jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >67</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    name="job-types-2"
                    label="Part time jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >31</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    name="job-types-3"
                    label="Remote jobs"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >49</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    name="job-types-4"
                    label="Internships"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >17</BaseTag
                  >
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
                  class="mb-2 text-muted-800 dark:text-white"
                >
                  <span>Seniority</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 pl-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="seniority-level-1"
                    label="Student level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >56</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="seniority-level-2"
                    label="Entry level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >84</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="seniority-level-3"
                    label="Mid level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >31</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="seniority-level-4"
                    label="Senior level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >59</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="seniority-level-5"
                    label="Director level"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >11</BaseTag
                  >
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
                  class="mb-2 text-muted-800 dark:text-white"
                >
                  <span>Salary range</span>
                </BaseHeading>
              </div>
              <!-- Checkboxes -->
              <div class="flex flex-col gap-4 pl-2">
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="salary-range-1"
                    label="10k ~ 20k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >61</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="salary-range-2"
                    label="20k ~ 40k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >28</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="salary-range-3"
                    label="40k ~ 75k"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >112</BaseTag
                  >
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    name="salary-range-4"
                    label="75k+"
                    shape="rounded"
                    :classes="{ wrapper: 'text-primary-500' }"
                  />
                  <BaseTag color="default" shape="full" class="text-xs" compact
                    >58</BaseTag
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div
        class="col-span-12 ptablet:col-span-8 ltablet:col-span-8 lg:col-span-9"
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
            <span class="text-muted-500"
              >These are the matching jobs that we found</span
            >
          </BaseParagraph>
        </div>
        <!-- Inner jobs grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="(job, index) in jobs" :key="index" class="relative">
            <BaseCard shape="curved" class="p-6">
              <div class="w-full flex flex-col sm:flex-row gap-4">
                <div :tooltip="job.company">
                  <Icon :name="job.logo" class="w-10 h-10 shrink-0" />
                </div>
                <div>
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="mb-4 after:text-muted-800 dark:text-white"
                  >
                    <span>{{ job.title }}</span>
                  </BaseHeading>
                  <BaseParagraph size="sm">
                    <span
                      class="line-clamp-4 text-muted-500 dark:text-muted-400"
                      >{{ job.description }}</span
                    >
                  </BaseParagraph>
                  <div class="flex items-center flex-wrap gap-2 py-4">
                    <BaseTag
                      v-for="(tag, index) in job.tags"
                      :key="index"
                      color="default"
                      compact
                      class="text-xs"
                    >
                      {{ tag }}
                    </BaseTag>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <BaseAvatarGroup
                        :avatars="job.applicants"
                        :limit="3"
                        size="xs"
                      />
                    </div>
                    <div class="flex gap-2">
                      <BaseButton shape="curved" color="primary" class="w-28">
                        Apply
                      </BaseButton>
                      <BaseButton shape="curved" color="default" class="w-28">
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
