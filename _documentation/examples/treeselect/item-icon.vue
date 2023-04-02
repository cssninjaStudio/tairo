<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree">
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            icon: child.item.icon,
          }"
        ></BaseTreeSelectItem>
      </template>
    </BaseTreeSelect>
  </div>
</template>

<script setup lang="ts">
const tree = [
  {
    item: {
      media: undefined,
      name: 'General',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          icon: 'ph:cards-duotone',
          name: 'Company',
          text: 'Everything about the company',
        },
      },
      {
        item: {
          icon: 'ph:buildings-duotone',
          name: 'Company',
          text: 'Select filial',
        },
        children: [
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 1',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 2',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 3',
              text: 'Everything about the company',
            },
          },
        ],
      },
      {
        item: {
          icon: 'ph:suitcase-duotone',
          name: 'Business',
          text: 'Questions regarding business',
        },
        children: [],
      },
    ],
  },
  {
    item: {
      icon: 'ph:suitcase-duotone',
      name: 'Business',
      text: 'Questions regarding business',
    },
  },
  {
    item: {
      media: undefined,
      name: 'Topics',
      text: undefined,
    },
    children: [
      {
        item: {
          media: undefined,
          name: 'Business',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:rocket-duotone',
              name: 'Startups',
              text: 'Managing startups',
            },
          },
          {
            item: {
              icon: 'ph:robot-duotone',
              name: 'Products',
              text: 'Product lifecycles',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Web Content',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:pencil-duotone',
              name: 'Blogging',
              text: 'Tips & tricks about blogging',
              children: [],
            },
          },
          {
            item: {
              icon: 'ph:circles-four-duotone',
              name: 'Social media',
              text: 'Managing social media content',
            },
          },
        ],
      },
    ],
  },
]
</script>
