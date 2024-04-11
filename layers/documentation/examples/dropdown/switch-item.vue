<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="Dropdown"
      placement="bottom-start"
    >
      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_1">
          <BaseDropdownItem
            to="#"
            title="Personal"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseSwitchThin
                :checked="model.includes('value_1')"
                value="demo-lg-1"
                rounded="lg"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_2">
          <BaseDropdownItem
            to="#"
            title="Company"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseSwitchThin
                :checked="model.includes('value_2')"
                value="demo-lg-2"
                rounded="lg"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_3">
          <BaseDropdownItem
            to="#"
            title="Non profit"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseSwitchThin
                :checked="model.includes('value_3')"
                value="demo-lg-3"
                rounded="lg"
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
const model = ref(['value_1'])
</script>
