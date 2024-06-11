<script setup lang="ts">
import type { Company } from '~/types/company'
import type { TaskResult } from '~/types/api/taskResult'
import type { Ref } from 'vue'

definePageMeta({
  title: 'Clients potentiels',
})

const search = ref('')
const location = ref('')
const alertKeyword = ref('')

const selectedType = ref('all')
const selectedRange = ref('all')

const jobTypes = ref([])
const jobSeniority = ref([])
const jobSalary = ref([])

const route = useRoute()

const { data } = await useFetch<Ref<TaskResult<Company>>>('/api/tasks/' + route.params.id)

const taskResults: Ref<TaskResult<Company>> = data.value!
console.log(taskResults)

</script>

<template>
  <div>
    <!-- Search bar -->
    <div class="relative">
      <BaseCard
        rounded="lg"
        class="ptablet:py-6 ptablet:px-4 ptablet:grid ptablet:grid-cols-12 ltablet:divide-x divide-muted-200 dark:divide-muted-700 mb-10 flex w-full flex-col items-center py-2 sm:flex-row sm:py-0 lg:divide-x"
      >
        <div
          class="ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2"
        >
          <BaseInput
            v-model.trim="search"
            rounded="lg"
            icon="lucide:search"
            placeholder="Mots-clés"
          />
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseInput
            v-model.trim="location"
            rounded="lg"
            icon="lucide:map-pin"
            placeholder="Localisation"
          />
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedType"
            rounded="lg"
            icon="lucide:briefcase"
            label=""
            hide-label
          >
            <option value="all">
              Toutes
            </option>
            <option value="restaurant">
              Restaurant
            </option>
            <option value="avocat">
              Avocat
            </option>
            <option value="bar">
              Bar
            </option>
            <option value="real-estate">
              Immobilier
            </option>
          </BaseSelect>
        </div>
        <div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto">
          <BaseSelect
            v-model="selectedRange"
            rounded="lg"
            icon="lucide:dollar-sign"
            label=""
            hide-label
          >
            <option value="">
              Select a range
            </option>
            <option value="all">
              All
            </option>
            <option value="10k-20k">
              10k ~ 20k
            </option>
            <option value="20k-30k">
              20k ~ 40k
            </option>
            <option value="40k-75k">
              40k ~ 75k
            </option>
            <option value="75k">
              75k+
            </option>
          </BaseSelect>
        </div>
        <div class="ptablet:col-span-12 w-full px-4 py-2 sm:w-auto">
          <BaseButton
            rounded="lg"
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
                rounded="lg"
                icon="lucide:search"
                placeholder="Job keywords"
              />
              <BaseButton
                rounded="lg"
                color="primary"
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
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    67
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-2"
                    label="Part time jobs"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-3"
                    label="Remote jobs"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    49
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobTypes"
                    value="job-types-4"
                    label="Internships"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
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
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    56
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-2"
                    label="Entry level"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    84
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-3"
                    label="Mid level"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    31
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-4"
                    label="Senior level"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    59
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="seniority-level-5"
                    label="Director level"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
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
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    61
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-2"
                    label="20k ~ 40k"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    28
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-3"
                    label="40k ~ 75k"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
                  >
                    112
                  </BaseTag>
                </div>
                <div class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="jobSeniority"
                    value="salary-range-4"
                    label="75k+"
                    rounded="sm"
                    color="primary"
                  />
                  <BaseTag
                    color="default"
                    rounded="full"
                    class="text-xs"
                    size="sm"
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
          <template
            v-for="(result, index) in taskResults.results"
            :key="index"
          >
            <div
              v-if="result.website"
              class="relative"
            >
              <BaseCard
                rounded="lg"
                class="h-full p-6"
              >
                <div class="flex size-full flex-col gap-4 sm:flex-row">
                  <div :data-nui-tooltip="result">
                    <!--                  <Icon name="/img/icons/banking/bank-1.svg' class="size-10 shrink-0" />-->
                  </div>
                  <div>
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="after:text-muted-800 mb-4 dark:text-white"
                    >
                      <span>{{ result.name }}</span>
                    </BaseHeading>
                    <BaseParagraph size="sm">
                      <span
                        class="text-muted-500 dark:text-muted-400 line-clamp-4"
                      >
                        {{ result.address }}
                      </span>
                    </BaseParagraph>
                    <div class="bottom-full flex flex-wrap items-center gap-2 py-4">
                      <BaseTag
                        v-for="(category, key) in result.categories"
                        :key="key"
                        color="default"
                        size="sm"
                        class="text-xs"
                      >
                        {{ category }}
                      </BaseTag>
                    </div>
                    <div class="flex items-center justify-between">
                      <!--                    <div>-->
                      <!--                      <BaseAvatarGroup-->
                      <!--                        :avatars="result.applicants"-->
                      <!--                        :limit="2"-->
                      <!--                        size="xs"-->
                      <!--                      />-->
                      <!--                    </div>-->
                      <div class="flex gap-2">
                        <BaseButton
                          rounded="lg"
                          color="primary"
                          class="w-24"
                        >
                          Apply
                        </BaseButton>
                        <BaseButton
                          rounded="lg"
                          color="default"
                          class="w-24"
                        >
                          Details
                        </BaseButton>
                      </div>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
