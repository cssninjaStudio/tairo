<script setup lang="ts">
definePageMeta({
  title: 'E-Learning',
  preview: {
    title: 'Course dashboard',
    description: 'For School and Education',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-course.png',
    srcDark: '/img/screens/dashboards-course-dark.png',
    order: 13,
  },
})

const courses = [
  {
    title: 'ANA118 - Anatomy and physiology of young subjects',
    description:
      'This week features a deeper approach of young subject anatomy and basic physiological properties. It also focuses on the latest released articles.',
    category: 'Anatomy',
    week: 6,
    duration: 120,
    comments: 25,
    time: '10:00 - 12:00',
    date: 'Feb 3, 2023',
    students: [
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
    title: 'IMM107 - Immunology and treatment of human disease',
    description:
      'This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.',
    category: 'Immunology',
    week: 6,
    duration: 90,
    comments: 12,
    time: '9:00 - 10:30',
    date: 'Feb 7, 2023',
    students: [
      {
        tooltip: 'Anna Vorsky',
        src: '/img/avatars/12.svg',
      },
      {
        tooltip: 'Hermann Mayer',
        src: '/img/avatars/16.svg',
      },
      {
        tooltip: 'Eddie Johnson',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Jane Doe',
        src: '/img/avatars/14.svg',
      },
    ],
  },
  {
    title: 'CAR112 - Cardiovascular Metabolic Management',
    description:
      'This unit has a strong focus on significal clinical problems in immunology and the scientific background to these problems.',
    category: 'Cardiology',
    week: 6,
    duration: 120,
    comments: 7,
    time: '2:00 - 4:00',
    date: 'Feb 7, 2023',
    students: [
      {
        tooltip: 'Troy Baker',
        src: '/img/avatars/15.svg',
      },
      {
        tooltip: 'Alan Baxter',
        src: '/img/avatars/11.svg',
      },
      {
        tooltip: 'Eric Klaus',
        src: '/img/avatars/7.svg',
      },
      {
        tooltip: 'Jane Doe',
        src: '/img/avatars/17.svg',
      },
    ],
  },
]

const files = [
  {
    name: 'Holtz - Complete Anatomy',
    size: '94.7 MB',
    uploaded: '2 days ago',
    icon: '/img/icons/files/pdf.svg',
  },
  {
    name: 'Assessing doses Pt. 2',
    size: '79 KB',
    uploaded: '1 week ago',
    icon: '/img/icons/files/sheet.svg',
  },
  {
    name: 'Written exam template',
    size: '42 KB',
    uploaded: '2 weeks ago',
    icon: '/img/icons/files/doc-2.svg',
  },
]

const students = [
  {
    name: 'Maya Rosselini',
    avatar: '/img/avatars/2.svg',
    completion: '78% completed',
    location: 'Los Angeles, CA',
    status: 'Online',
    presence: 'On time',
  },
  {
    name: 'Clark Smith',
    avatar: '/img/avatars/3.svg',
    completion: '64% completed',
    location: 'San Diego, CA',
    status: 'Offline',
    presence: 'Late (10 min)',
  },
  {
    name: 'Hermann Mayer',
    avatar: '/img/avatars/16.svg',
    completion: '37% completed',
    location: 'New York, NY',
    status: 'Online',
    presence: 'Late (5 min)',
  },
  {
    name: 'Andrew Brickman',
    avatar: '/img/avatars/8.svg',
    completion: '89% completed',
    location: 'San Diego, CA',
    status: 'Online',
    presence: 'On time',
  },
  {
    name: 'Jen Connelli',
    avatar: '/img/avatars/10.svg',
    completion: '54% completed',
    location: 'San Francisco, CA',
    status: 'Offline',
    presence: 'On time',
  },
]
</script>

<template>
  <div>
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Week 6 classes</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">Classes from January 6 to 10</span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButton>
          <span>Settings</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Schedule</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="ltablet:gap-4 grid grid-cols-12 gap-6">
      <!-- Course Card -->
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="ltablet:col-span-4 relative col-span-12 sm:col-span-6 lg:col-span-4"
      >
        <BaseCard shape="curved" class="flex h-full flex-col p-6">
          <div class="mb-6">
            <BaseTag color="primary">
              <span>{{ course.category }}</span>
            </BaseTag>
          </div>
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="lg"
              weight="medium"
              lead="tight"
              class="mb-2"
            >
              <span class="text-muted-800 dark:text-muted-100">
                {{ course.title }}
              </span>
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
              <span>{{ course.description }}</span>
            </BaseParagraph>
          </div>
          <div class="mb-8 mt-auto flex items-center justify-between">
            <BaseAvatarGroup :avatars="course.students" :limit="3" size="sm" />
            <div>
              <BaseButtonAction>
                <span>Discussion</span>
              </BaseButtonAction>
            </div>
          </div>
          <div class="mb-8">
            <BaseHeading
              as="h4"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>Week {{ course.week }} lecture recording</span>
            </BaseHeading>
            <div class="flex gap-6">
              <div class="text-muted-400 flex items-center gap-1">
                <Icon name="ph:timer-duotone" class="h-5 w-5" />
                <span class="font-sans text-sm">{{ course.duration }} min</span>
              </div>
              <div class="text-muted-400 flex items-center gap-1">
                <Icon name="ph:chat-circle-dots-duotone" class="h-5 w-5" />
                <span class="font-sans text-sm">
                  {{ course.comments }} comments
                </span>
              </div>
            </div>
          </div>
          <div class="mb-8">
            <BaseHeading
              as="h4"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>Week {{ course.week }} examination</span>
            </BaseHeading>
            <div class="flex gap-6">
              <div class="text-muted-400 flex items-center gap-1">
                <Icon name="ph:calendar-check-duotone" class="h-5 w-5" />
                <span class="font-sans text-sm">
                  {{ course.date }} — {{ course.time }}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <BaseButton color="primary" shape="curved" class="w-full">
              <span>Class Details</span>
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
    <!-- Grid -->
    <div class="ltablet:gap-x-4 mt-10 grid grid-cols-12 gap-x-6 gap-y-12">
      <!-- Column -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="mb-4">
          <BaseHeading
            as="h2"
            size="lg"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Week 6 files</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500">
              Files you will need for this week
            </span>
          </BaseParagraph>
        </div>
        <div class="space-y-4">
          <BaseCard
            v-for="(file, fileIndex) in files"
            :key="fileIndex"
            shape="curved"
            class="p-4"
          >
            <div class="flex w-full items-center gap-3">
              <img
                :src="file.icon"
                :alt="file.name"
                class="h-10 w-10 shrink-0"
              />
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ file.name }}</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-400">
                    {{ file.size }} · uploaded {{ file.uploaded }}
                  </span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon small data-tooltip="Download file">
                  <Icon name="lucide:arrow-down" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="mb-4">
          <BaseHeading
            as="h2"
            size="lg"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Students</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500">Summary of attending students</span>
          </BaseParagraph>
        </div>
        <div class="space-y-2">
          <DemoFlexTableRow
            v-for="(student, studentIndex) in students"
            :key="studentIndex"
            shape="curved"
            spaced
          >
            <template #start>
              <DemoFlexTableStart
                label="Student"
                hide-label
                :title="student.name"
                :subtitle="student.completion"
                :avatar="student.avatar"
              />
            </template>
            <template #end>
              <DemoFlexTableCell
                label="location"
                hide-label
                class="w-full sm:w-32"
              >
                <span
                  class="text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm"
                >
                  {{ student.location }}
                </span>
              </DemoFlexTableCell>
              <DemoFlexTableCell
                label="status"
                hide-label
                class="w-full sm:w-16"
              >
                <BaseTag
                  :color="student.status === 'Online' ? 'success' : 'muted'"
                  shape="full"
                  flavor="pastel"
                  condensed
                >
                  {{ student.status }}
                </BaseTag>
              </DemoFlexTableCell>
              <DemoFlexTableCell
                label="location"
                hide-label
                class="w-full sm:w-28"
              >
                <span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  {{ student.presence }}
                </span>
              </DemoFlexTableCell>
              <DemoFlexTableCell label="action" hide-label>
                <BaseButtonAction>Chat</BaseButtonAction>
              </DemoFlexTableCell>
            </template>
          </DemoFlexTableRow>
        </div>
      </div>
    </div>
  </div>
</template>
