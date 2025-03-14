<script setup lang="ts">
definePageMeta({
  title: 'Preferences',
  preview: {
    title: 'Preferences - Profile',
    description: 'For account management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-preferences-profile.png',
    srcDark: '/img/screens/layouts-preferences-profile-dark.png',
    order: 84,
    new: true,
  },
})

const form = reactive({
  username: 'kendraw',
  firstName: 'Kendra',
  lastName: 'Wilson',
  email: 'kendra@tairo.io',
  jobTitle: 'UI/UX Designer',
  country: 'United States',
  website: 'kendra-wilson.me',
  bio: '',
  showProfile: true,
})
</script>

<template>
  <div class="dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="mt-6 space-y-1">
      <BaseParagraph
        size="md"
        weight="medium"
        class="text-muted-900 dark:text-muted-200"
      >
        Personal info
      </BaseParagraph>
      <BaseParagraph
        size="sm"
        weight="medium"
        class="text-muted-500 dark:text-muted-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipis.
      </BaseParagraph>
    </div>

    <form
      action="#"
      method="POST"
      class="mt-12 max-w-3xl"
    >
      <div class="space-y-8">
        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Profile Photo </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <div class="flex items-center space-x-6">
              <BaseAvatar
                src="/img/avatars/10.svg"
                size="md"
                rounded="none"
                mask="blob"
              />
              <BaseButton rounded="md" size="sm">
                Remove
              </BaseButton>
              <BaseButton
                rounded="md"
                size="sm"
                variant="primary"
              >
                Update
              </BaseButton>
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> First & Last Name </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <div class="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <BaseInput
                v-model="form.firstName"
                type="text"
                placeholder="First Name"
                rounded="md"
                size="lg"
              />

              <BaseInput
                v-model="form.lastName"
                type="text"
                placeholder="Last Name"
                rounded="md"
                size="lg"
              />
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Email Address </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <BaseInput
              v-model="form.email"
              type="text"
              placeholder="Email Address"
              rounded="md"
              size="lg"
            />
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Write Your Bio </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <BaseTextarea
              v-model="form.bio"
              rounded="md"
              placeholder="Short bio..."
            />
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <div class="sm:mt-px sm:pt-2">
            <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Username </label>
            <BaseParagraph
              size="xs"
              weight="medium"
              class="text-muted-400"
            >
              You can change it later
            </BaseParagraph>
          </div>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <div class="flex items-center focus-within:nui-focus rounded-md  *:first:border-e-0 *:first:rounded-e-none *:last:rounded-s-none">
              <div class="border h-12 px-4 flex items-center justify-center rounded-md bg-input-muted-bg border-input-muted-border">
                <span class="text-sm font-medium text-input-muted-text/60">https://tairo.io/users/</span>
              </div>
              <BaseInput
                v-model="form.username"
                type="text"
                placeholder="Username"
                rounded="md"
                size="lg"
                class="ring-0!"
              />
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Website </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <div class="flex items-center focus-within:nui-focus rounded-md  *:first:border-e-0 *:first:rounded-e-none *:last:rounded-s-none">
              <div class="border h-12 px-4 flex items-center justify-center rounded-md bg-input-muted-bg border-input-muted-border">
                <span class="text-sm font-medium text-input-muted-text/60">https://</span>
              </div>
              <BaseInput
                v-model="form.website"
                type="text"
                placeholder="Username"
                rounded="md"
                size="lg"
                class="ring-0!"
              />
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Job Title </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <BaseInput
              v-model="form.jobTitle"
              type="text"
              placeholder="Job Title"
              rounded="md"
              size="lg"
            />

            <div class="relative mt-2 flex items-center">
              <BaseCheckbox
                v-model="form.showProfile"
                label="Show this on my profile "
              />
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
          <label class="text-muted-900 dark:text-muted-100 block font-sans text-sm font-medium sm:mt-px sm:pt-2"> Country </label>
          <div class="mt-2 sm:col-span-2 sm:mt-0">
            <BaseSelect
              v-model="form.country"
              size="lg"
              rounded="md"
              placeholder="Select a country"
            >
              <BaseSelectItem value="United States">
                United States
              </BaseSelectItem>
              <BaseSelectItem value="Canada">
                Canada
              </BaseSelectItem>
              <BaseSelectItem value="United Kingdom">
                United Kingdom
              </BaseSelectItem>
              <BaseSelectItem value="France">
                France
              </BaseSelectItem>
              <BaseSelectItem value="China">
                China
              </BaseSelectItem>
            </BaseSelect>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-12 flex justify-end">
        <BaseButton
          rounded="md"
          variant="primary"
          class="w-full md:w-40"
        >
          Update Profile
        </BaseButton>
      </div>
    </form>
  </div>
</template>
