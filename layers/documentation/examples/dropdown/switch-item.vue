<template>
  <div class="flex items-end">
    <BaseDropdown flavor="button" label="Dropdown" orientation="start">
      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="options.first" value="value_1">
          <BaseDropdownItem
            to="#"
            title="Personal"
            text="Some useful info"
            shape="rounded"
            color="default"
          >
            <template #start>
              <BaseSwitchThin
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
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="options.second" value="value_2">
          <BaseDropdownItem
            to="#"
            title="Company"
            text="Some useful info"
            shape="rounded"
            color="default"
          >
            <template #start>
              <BaseSwitchThin
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
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="options.third" value="value_3">
          <BaseDropdownItem
            to="#"
            title="Non profit"
            text="Some useful info"
            shape="rounded"
            color="default"
          >
            <template #start>
              <BaseSwitchThin
                v-model="options.third"
                value="demo-curved-3"
                shape="curved"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: false,
  third: false,
})
</script>
