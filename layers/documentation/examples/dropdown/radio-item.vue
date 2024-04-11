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
        <BaseRadioHeadless
          v-model="value"
          value="personal"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="Personal"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="personal"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseRadioHeadless
          v-model="value"
          value="company"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="Company"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="company"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseRadioHeadless
          v-model="value"
          value="nonprofit"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="Non profit"
            text="Some useful info"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="nonprofit"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const value = ref('personal')
</script>
