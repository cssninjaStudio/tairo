<template>
  <div class="flex items-end">
    <BaseDropdown flavor="button" label="Dropdown" orientation="start" size="lg">
      <div class="relative p-2">
        <BaseInput icon="lucide:search" shape="rounded" placeholder="Search users..." />
      </div>

      <div class="nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2">
        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.first" value="value_1">
            <BaseDropdownItem
              to="#"
              title="John Rowland"
              text="Software Engineer"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.first"
                  value="demo-curved-1"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.second" value="value_2">
            <BaseDropdownItem
              to="#"
              title="Paula Hartley"
              text="Sales Manager"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.second"
                  value="demo-curved-2"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.third" value="value_3">
            <BaseDropdownItem
              to="#"
              title="John Lock"
              text="Adventurer"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.third"
                  value="demo-curved-3"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.fourth" value="value_3">
            <BaseDropdownItem
              to="#"
              title="Adrian Smith"
              text="Web Developer"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.fourth"
                  value="demo-curved-4"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.fifth" value="value_3">
            <BaseDropdownItem
              to="#"
              title="Clarence Nelson"
              text="Solution Architect"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.fifth"
                  value="demo-curved-5"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.sixth" value="value_3">
            <BaseDropdownItem
              to="#"
              title="John Baxter"
              text="Senior Accountant"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.sixth"
                  value="demo-curved-6"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="options.fifth" value="value_3">
            <BaseDropdownItem
              to="#"
              title="Mike Pendleton"
              text="Operations Officer"
              shape="rounded"
              color="default"
            >
              <template #start>
                <BaseCheckbox
                  v-model="options.fifth"
                  value="demo-curved-7"
                  shape="curved"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>
      </div>

      <div class="relative p-2">
        <BaseButton size="sm" flavor="pastel" color="danger" class="w-full">
          <Icon name="lucide:user-minus" class="h-4 w-4" />

          <span>Delete user</span>
        </BaseButton>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  sixth: false,
  seventh: false,
})
</script>
