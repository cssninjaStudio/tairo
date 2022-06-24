<script setup lang="ts">
import { toc } from '@@/documentation/elements/dropdown/toc'
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
} from '@@/documentation/elements/dropdown'
import {
  dropdownProperties,
  itemProperties,
} from '@@/documentation/elements/dropdown/properties'

definePageMeta({
  title: 'Dropdowns',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Dropdown',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/dropdown',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Dropdown button -->
        <DocSection id="dropdown-button-left" title="Button left" tag="1.0.0">
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
        <DocSection id="dropdown-button-right" title="Button right" tag="1.0.0">
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
        <DocSection id="dropdown-context-left" title="Context left" tag="1.0.0">
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
        <DocSection id="dropdown-text-left" title="Text left" tag="1.0.0">
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
        <DocSection id="dropdown-text-right" title="Text right" tag="1.0.0">
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
        <DocSection id="dropdown-icon-slot" title="Icon slot" tag="1.0.0">
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
                      <i class="i-ph-user-duotone w-5 h-5 block mr-2"></i>
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="/"
                    title="Projects"
                    text="View your projects"
                  >
                    <template #end>
                      <i class="i-ph-briefcase-duotone w-5 h-5 block mr-2"></i>
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem to="/" title="Team" text="Manage your team">
                    <template #end>
                      <i class="i-ph-users-four-duotone w-5 h-5 block mr-2"></i>
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownDivide />
                  <BaseDropdownItem
                    to="/"
                    title="Settings"
                    text="Set your preferences"
                  >
                    <template #end>
                      <i class="i-ph-gear-six-duotone w-5 h-5 block mr-2"></i>
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
        <DocSection id="dropdown-avatar-slot" title="Avatar slot" tag="1.0.0">
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
                        picture="/img/avatars/4.svg"
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
                        picture="/img/avatars/3.svg"
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
                        picture="/img/avatars/18.svg"
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
                        picture="/img/avatars/6.svg"
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
        <DocSection id="dropdown-header" title="Header" tag="1.0.0">
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
                        picture="/img/avatars/4.svg"
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
                        picture="/img/avatars/3.svg"
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
                        picture="/img/avatars/18.svg"
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
                        picture="/img/avatars/6.svg"
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
        <DocProps
          id="dropdown-props"
          component="Dropdown"
          :properties="dropdownProperties.props"
          :slots="dropdownProperties.slots"
        />

        <!-- Dropdown item properties -->
        <DocProps
          id="dropdown-item-props"
          component="Dropdown item"
          :properties="itemProperties.props"
          :slots="itemProperties.slots"
        />

        <div class="py-24"></div>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
