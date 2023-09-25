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
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="options.first"
                value="demo-rounded-1"
                shape="rounded"
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
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="options.second"
                value="demo-rounded-2"
                shape="rounded"
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
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="options.third"
                value="demo-rounded-3"
                shape="rounded"
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
