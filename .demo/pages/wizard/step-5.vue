<script setup lang="ts">
import type {
  Project,
  ProjectStepData,
  TeamMember,
  TeamMemberRole,
} from '../../types'

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

// function setTeammateRole (
//   teammate: Omit<TeamMember, 'role'>,
//   role: TeamMemberRole,
// ) {
//   const index = project.team?.findIndex((item) => {
//     return item.name === teammate.name
//   })

//   if (index && index > -1 && project.team) {
//     project.team[index].role = role
//   }
// }

// function removeTeammate(teammate: Omit<TeamMember, 'role'>) {
//   const index = project.team?.findIndex((item) => {
//     return item.name === teammate.name
//   })
//   if (index && index > -1) {
//     project.team?.splice(index, 1)
//   }
// }

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
            class="rounded-full max-w-[210px] mx-auto"
            alt=""
          />
        </template>
        <div class="text-center mt-2">
          <button
            type="button"
            class="font-sans underline underline-offset-4 text-primary-500"
            @click="toggled = true"
          >
            Add Members
          </button>
        </div>
      </BasePlaceholderPage>
      <div v-else class="relative max-w-5xl mx-auto">
        <div class="w-full flex flex-col items-center">
          <BaseAvatar
            size="xl"
            src="/img/avatars/2.svg"
            badge-src="/img/icons/flags/united-states-of-america.svg"
          />
          <p class="my-3 font-sans text-sm text-muted-400">
            You are the project owner
          </p>
          <div class="w-full relative max-w-sm">
            <BaseInput
              v-model="search"
              icon="lucide:search"
              shape="curved"
              placeholder="ex: Clarissa, Kendra, ..."
              :classes="{
                wrapper: 'w-full relative z-10',
                input: 'h-12 text-base !pl-12',
                icon: 'h-12 w-12',
              }"
            />
            <div
              class="absolute z-20 top-14 left-0 w-full p-4 rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 transition-all duration-300"
              :class="
                search.length > 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none translate-y-1'
              "
            >
              <!-- Results -->
              <div
                v-if="filteredUsers.length > 0"
                class="space-y-2 max-h-[186px] overflow-y-auto slimscroll"
              >
                <!-- Result -->
                <div
                  v-for="user in filteredUsers"
                  :key="user.name"
                  role="button"
                  class="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-muted-100"
                >
                  <BaseAvatar size="sm" :src="user.picture" />
                  <div class="flex flex-col">
                    <h3
                      class="font-sans text-sm font-semibold text-muted-800 dark:text-muted-100"
                    >
                      Invite
                    </h3>
                    <p
                      class="font-sans text-xs text-muted-500 dark:text-muted-400"
                    >
                      {{ user.name }}
                    </p>
                  </div>
                  <div class="ml-auto">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="addTeammate(user)"
                    >
                      <Icon name="lucide:plus" class="w-4 h-4" />
                    </BaseButtonIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full max-w-2xl mx-auto mt-8 pb-40">
            <!-- Added members -->
            <template v-if="project.team && project.team.length > 0">
              <div class="w-full space-y-2">
                <div
                  v-for="(member, idx) in project.team"
                  :key="member.name"
                  class="flex items-center gap-3 p-4 rounded-lg cursor-pointer border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
                >
                  <BaseAvatar size="sm" :src="member.picture" />
                  <div class="flex flex-col">
                    <h3
                      class="font-sans text-sm font-semibold text-muted-800 dark:text-muted-100"
                    >
                      Invited
                    </h3>
                    <p
                      class="font-sans text-xs text-muted-500 dark:text-muted-400"
                    >
                      {{ member.name }}
                    </p>
                  </div>
                  <div class="ml-auto">
                    <div class="relative w-48 flex justify-between">
                      <div
                        class="relative z-10 shrink-0"
                        tooltip="Reader"
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
                        tooltip="Collaborator"
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
                        tooltip="Manager"
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
                        tooltip="Owner"
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
                      <div class="absolute top-1/2 -translate-y-1/2 w-full">
                        <BaseProgress
                          size="xs"
                          :value="getRoleLevel(member)"
                          :max="3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="ml-8">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="removeTeammate(idx)"
                    >
                      <Icon name="lucide:x" class="w-4 h-4" />
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
