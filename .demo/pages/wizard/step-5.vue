<script setup lang="ts">
import type {
  Project,
  ProjectStepData,
  TeamMember,
  TeamMemberRole,
} from '../../types'

definePageMeta({
  title: 'Wizard — Step 5',
  preview: {
    title: 'Wizard — Step 5',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-5.png',
    srcDark: '/img/screens/wizard-5-dark.png',
    order: 34,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Team members',
})

const toggled = ref(false)

const team: TeamMember[] = [
  {
    picture: '/img/avatars/16.svg',
    name: 'Hermann Mayer',
    role: undefined,
  },
  {
    picture: '/img/avatars/10.svg',
    name: 'Kendra Wilson',
    role: undefined,
  },
  {
    picture: '/img/avatars/3.svg',
    name: 'Clark Smith',
    role: undefined,
  },
  {
    picture: '/img/avatars/5.svg',
    name: 'Clarissa Miller',
    role: undefined,
  },
  {
    picture: '/img/avatars/8.svg',
    name: 'Eddy Fisher',
    role: undefined,
  },
]

const search = ref('')
const filteredUsers = ref<Omit<TeamMember, 'role'>[]>([])

function addTeammate(teammate: Omit<TeamMember, 'role'>) {
  project.value.team?.push({
    ...teammate,
    role: 'reader',
  })
  search.value = ''
}

function setTeammateRole(index: number, role: TeamMemberRole) {
  if (project.value.team && project.value.team[index]) {
    project.value.team[index].role = role
  }
}

function removeTeammate(index: number) {
  if (project.value.team) {
    project.value.team.splice(index, 1)
  }
}

function getRoleLevel(teammate: TeamMember) {
  switch (teammate.role) {
    case 'collaborator':
      return 1
    case 'manager':
      return 2
    case 'owner':
      return 3
    case 'reader':
    default:
      return 0
  }
}

watchEffect(() => {
  const teamRef = project.value.team
  if (!search.value) {
    filteredUsers.value = []
    return
  }

  filteredUsers.value = team
    .filter((item) => {
      return !teamRef?.find((_item) => {
        return item.name === _item.name
      })
    })
    .filter((item) => item.name.match(new RegExp(search.value, 'i')))
})
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="px-4">
      <BasePlaceholderPage
        v-if="!toggled"
        title="Invite People"
        subtitle="Start collaborating by inviting some team members to this project. Don't worry, you can do it later."
      >
        <template #image>
          <img
            src="/img/illustrations/wizard/team.svg"
            class="mx-auto max-w-[210px] rounded-full"
            alt=""
          />
        </template>
        <div class="mt-2 text-center">
          <button
            type="button"
            class="text-primary-500 font-sans underline underline-offset-4"
            @click="toggled = true"
          >
            Add Members
          </button>
        </div>
      </BasePlaceholderPage>
      <div v-else class="relative mx-auto max-w-5xl">
        <div class="flex w-full flex-col items-center">
          <BaseAvatar
            size="xl"
            src="/img/avatars/2.svg"
            badge-src="/img/icons/flags/united-states-of-america.svg"
          />
          <p class="text-muted-400 my-3 font-sans text-sm">
            You are the project owner
          </p>
          <div class="relative w-full max-w-sm">
            <BaseInput
              v-model="search"
              icon="lucide:search"
              shape="curved"
              placeholder="ex: Clarissa, Kendra, ..."
              :classes="{
                wrapper: 'w-full relative z-10',
                input: 'h-12 text-base !ps-12',
                icon: 'h-12 w-12',
              }"
            />
            <div
              class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 z-20 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300"
              :class="
                search.length > 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none translate-y-1'
              "
            >
              <!-- Results -->
              <div
                v-if="filteredUsers.length > 0"
                class="slimscroll max-h-[186px] space-y-2 overflow-y-auto"
              >
                <!-- Result -->
                <div
                  v-for="user in filteredUsers"
                  :key="user.name"
                  role="button"
                  class="hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"
                >
                  <BaseAvatar size="sm" :src="user.picture" />
                  <div class="flex flex-col">
                    <h3
                      class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                    >
                      Invite
                    </h3>
                    <p
                      class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                    >
                      {{ user.name }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="addTeammate(user)"
                    >
                      <Icon name="lucide:plus" class="h-4 w-4" />
                    </BaseButtonIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-8 w-full max-w-2xl pb-40">
            <!-- Added members -->
            <template v-if="project.team && project.team.length > 0">
              <div class="w-full space-y-2">
                <div
                  v-for="(member, idx) in project.team"
                  :key="member.name"
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-4"
                >
                  <BaseAvatar size="sm" :src="member.picture" />
                  <div class="flex flex-col">
                    <h3
                      class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                    >
                      Invited
                    </h3>
                    <p
                      class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                    >
                      {{ member.name }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <div class="relative flex w-48 justify-between">
                      <div
                        class="relative z-10 shrink-0"
                        data-tooltip="Reader"
                        tabindex="0"
                        @keydown.space.prevent="setTeammateRole(idx, 'reader')"
                        @click="setTeammateRole(idx, 'reader')"
                      >
                        <div
                          class="h-3 w-3 rounded-full"
                          :class="[
                            getRoleLevel(member) >= 0
                              ? 'bg-primary-500'
                              : 'bg-muted-300 dark:bg-muted-700',
                          ]"
                        ></div>
                      </div>
                      <div
                        class="relative z-10 shrink-0"
                        data-tooltip="Collaborator"
                        tabindex="0"
                        @keydown.space.prevent="
                          setTeammateRole(idx, 'collaborator')
                        "
                        @click="setTeammateRole(idx, 'collaborator')"
                      >
                        <div
                          class="h-3 w-3 rounded-full"
                          :class="[
                            getRoleLevel(member) >= 1
                              ? 'bg-primary-500'
                              : 'bg-muted-300 dark:bg-muted-700',
                          ]"
                        ></div>
                      </div>
                      <div
                        class="relative z-10 shrink-0"
                        data-tooltip="Manager"
                        tabindex="0"
                        @keydown.space.prevent="setTeammateRole(idx, 'manager')"
                        @click="setTeammateRole(idx, 'manager')"
                      >
                        <div
                          class="h-3 w-3 rounded-full"
                          :class="[
                            getRoleLevel(member) >= 2
                              ? 'bg-primary-500'
                              : 'bg-muted-300 dark:bg-muted-700',
                          ]"
                        ></div>
                      </div>
                      <div
                        class="relative z-10 shrink-0"
                        data-tooltip="Owner"
                        tabindex="0"
                        @keydown.space.prevent="setTeammateRole(idx, 'owner')"
                        @click="setTeammateRole(idx, 'owner')"
                      >
                        <div
                          class="h-3 w-3 rounded-full"
                          :class="[
                            getRoleLevel(member) >= 3
                              ? 'bg-primary-500'
                              : 'bg-muted-300 dark:bg-muted-700',
                          ]"
                        ></div>
                      </div>
                      <div class="absolute top-1/2 w-full -translate-y-1/2">
                        <BaseProgress
                          size="xs"
                          :value="getRoleLevel(member)"
                          :max="3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="ms-8">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="removeTeammate(idx)"
                    >
                      <Icon name="lucide:x" class="h-4 w-4" />
                    </BaseButtonIcon>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
