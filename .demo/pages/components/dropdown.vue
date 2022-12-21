<script setup lang="ts">
import avatarSlot from '~/documentation/dropdown/avatar-slot.md?raw'
import buttonLeft from '~/documentation/dropdown/button-left.md?raw'
import buttonRight from '~/documentation/dropdown/button-right.md?raw'
import contextLeft from '~/documentation/dropdown/context-left.md?raw'
import contextRight from '~/documentation/dropdown/context-right.md?raw'
import header from '~/documentation/dropdown/header.md?raw'
import iconSlot from '~/documentation/dropdown/icon-slot.md?raw'
import textLeft from '~/documentation/dropdown/text-left.md?raw'
import textRight from '~/documentation/dropdown/text-right.md?raw'

definePageMeta({
  title: 'Dropdowns',
  documentation: {
    category: 'Interaction',
    components: ['BaseDropdown', 'BaseDropdownItem'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Dropdown button -->
        <DocSection title="Button left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="button"
                  label="Dropdown"
                  orientation="start"
                >
                  <BaseDropdownItem>
                    Profile

                    <template #text> View your profile </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="buttonLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown button right -->
        <DocSection title="Button right" tag="1.0.0">
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <BaseDropdown
                  flavor="button"
                  label="Dropdown"
                  orientation="end"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="buttonRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown context left -->
        <DocSection title="Context left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="context"
                  label="Dropdown"
                  orientation="start"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="contextLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown context right -->
        <DocSection
          id="dropdown-context-right"
          title="Context right"
          tag="1.0.0"
        >
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <BaseDropdown
                  flavor="context"
                  label="Dropdown"
                  orientation="end"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="contextRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown text left -->
        <DocSection title="Text left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="text"
                  label="Dropdown"
                  orientation="start"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="textLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown text right -->
        <DocSection title="Text right" tag="1.0.0">
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <BaseDropdown flavor="text" label="Dropdown" orientation="end">
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Team"
                    text="Manage your team"
                  />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  />
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="textRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown icon slot -->
        <DocSection title="Icon slot" tag="1.0.0">
          <DocComponent label="Icon slot example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="button"
                  label="Dropdown"
                  orientation="start"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Profile"
                    text="View your profile"
                  >
                    <template #end>
                      <Icon name="ph:user-duotone" class="mr-2 block h-5 w-5" />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  >
                    <template #end>
                      <Icon
                        name="ph:briefcase-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem to="/" title="Team" text="Manage your team">
                    <template #end>
                      <Icon
                        name="ph:users-four-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownDivide />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  >
                    <template #end>
                      <Icon
                        name="ph:gear-six-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconSlot" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown avatar slot -->
        <DocSection title="Avatar slot" tag="1.0.0">
          <DocComponent label="Avatar slot example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="button"
                  label="Dropdown"
                  orientation="start"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Lana Jensen"
                    text="Software Engineer"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/4.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Shawn Miller"
                    text="Product Manager"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/3.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="John Marynski"
                    text="Sales Manager"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/18.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownDivide />
                  <BaseDropdownItem
                    to="/"
                    title="Garry Porter"
                    text="CEO - Founder"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/6.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="avatarSlot" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown header -->
        <DocSection title="Header" tag="1.0.0">
          <DocComponent label="Dropdown header example">
            <template #demo>
              <div class="flex items-end">
                <BaseDropdown
                  flavor="button"
                  label="Dropdown"
                  orientation="start"
                  header-label="My Team"
                >
                  <BaseDropdownItem
                    to="/"
                    title="Lana Jensen"
                    text="Software Engineer"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/4.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Shawn Miller"
                    text="Product Manager"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/3.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="John Marynski"
                    text="Sales Manager"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/18.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownDivide />
                  <BaseDropdownItem
                    to="/"
                    title="Garry Porter"
                    text="CEO - Founder"
                  >
                    <template #start>
                      <BaseAvatar
                        src="/img/avatars/6.svg"
                        size="xs"
                        class="mr-3"
                      />
                    </template>
                  </BaseDropdownItem>
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="header" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown properties -->
        <DocComponentMeta name="BaseDropdown" />
        <DocComponentMeta name="BaseDropdownItem" />

        <div class="py-24" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
