<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="Dropdown"
      placement="bottom-start"
      size="lg"
    >
      <div class="relative p-2">
        <BaseInput
          icon="lucide:search"
          rounded="sm"
          placeholder="Search users..."
        />
      </div>

      <div class="nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2">
        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_1">
            <BaseDropdownItem
              to="#"
              title="John Rowland"
              text="Software Engineer"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_1"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_2">
            <BaseDropdownItem
              to="#"
              title="Paula Hartley"
              text="Sales Manager"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_2"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_3">
            <BaseDropdownItem
              to="#"
              title="John Lock"
              text="Adventurer"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_3"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_4">
            <BaseDropdownItem
              to="#"
              title="Adrian Smith"
              text="Web Developer"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_4"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_5">
            <BaseDropdownItem
              to="#"
              title="Clarence Nelson"
              text="Solution Architect"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_5"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_6">
            <BaseDropdownItem
              to="#"
              title="John Baxter"
              text="Senior Accountant"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_6"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_7">
            <BaseDropdownItem
              to="#"
              title="Mike Pendleton"
              text="Operations Officer"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_7"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>
      </div>

      <div class="relative p-2">
        <BaseButton
          size="sm"
          variant="pastel"
          color="danger"
          class="w-full"
        >
          <Icon name="lucide:user-minus" class="size-4" />

          <span>Delete user</span>
        </BaseButton>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const model = ref(['value_1'])
</script>
