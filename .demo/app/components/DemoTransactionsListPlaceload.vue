<script setup lang="ts"></script>

<template>
  <div class="mt-7 overflow-x-auto px-2">
    <table class="w-full whitespace-nowrap">
      <thead>
        <tr>
          <th class="w-1/5 px-4 pb-3">
            <BasePlaceload class="h-3.5 w-6 rounded-sm" />
          </th>
          <th class="w-2/5 px-4 pb-3">
            <BasePlaceload class="h-3.5 w-14 rounded-sm" />
          </th>
          <th class="px-4 pb-3">
            <BasePlaceload class="h-3.5 w-16 rounded-sm" />
          </th>
          <th class="px-4 pb-3">
            <BasePlaceload class="h-3.5 w-16 rounded-sm" />
          </th>
          <th class="px-4 pb-3">
            <BasePlaceload class="h-3.5 w-12 rounded-sm" />
          </th>
          <th class="px-4 pb-3 font-sans text-xs font-semibold">
            <BasePlaceload class="h-3.5 w-20 rounded-sm" />
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Row -->
        <tr
          v-for="index in 10"
          :key="index"
          tabindex="0"
        >
          <td class="px-4 py-2">
            <BasePlaceload class="h-4 w-20 rounded-sm" />
          </td>
          <td class="px-4 py-2">
            <BasePlaceload class="h-4 w-28 rounded-sm" />
          </td>
          <td class="px-4 py-2">
            <BasePlaceload class="h-4 w-20 rounded-sm" />
          </td>
          <td class="px-4 py-2">
            <BasePlaceload class="h-4 w-20 rounded-sm" />
          </td>
          <td class="px-4 py-2">
            <BasePlaceload class="m-1 w-16 rounded-full p-3" />
          </td>
          <td class="px-4 py-2">
            <div class="flex items-center gap-2">
              <BasePlaceload class="size-5 rounded-full" />
              <BasePlaceload class="h-4 w-16 rounded-sm" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
