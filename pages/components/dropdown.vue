<script setup lang="ts">
import {
  avatarSlot,
  buttonLeft,
  buttonRight,
  contextLeft,
  contextRight,
  header,
  iconSlot,
  textLeft,
  textRight,
} from '@@/documentation/components/dropdown'

import {
  BaseDropdownItemMeta,
  BaseDropdownMeta,
} from 'virtual:vue-component-meta'

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

                    <template #text>View your profile</template>
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
              <DocCode language="html" :code="buttonLeft" />
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
              <DocCode language="html" :code="buttonRight" />
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
              <DocCode language="html" :code="contextLeft" />
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
              <DocCode language="html" :code="contextRight" />
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
              <DocCode language="html" :code="textLeft" />
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
              <DocCode language="html" :code="textRight" />
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
                      <BaseIcon
                        name="ph:user-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  >
                    <template #end>
                      <BaseIcon
                        name="ph:briefcase-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem to="/" title="Team" text="Manage your team">
                    <template #end>
                      <BaseIcon
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
                      <BaseIcon
                        name="ph:gear-six-duotone"
                        class="mr-2 block h-5 w-5"
                      />
                    </template>
                  </BaseDropdownItem>
                </BaseDropdown>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconSlot" />
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
              <DocCode language="html" :code="avatarSlot" />
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
              <DocCode language="html" :code="header" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown properties -->
        <DocComponentMeta :meta="BaseDropdownMeta" />
        <DocComponentMeta :meta="BaseDropdownItemMeta" />

        <div class="py-24"></div>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
