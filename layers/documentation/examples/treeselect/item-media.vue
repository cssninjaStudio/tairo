<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree" treeline>
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            media: child.item.media,
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
      name: 'Top Management',
      text: undefined,
    },
    children: [
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/8.svg',
          name: 'Harold Frazier',
          text: 'Group Founder',
        },
        children: [],
      },
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/5.svg',
          name: 'Clarissa Miller',
          text: 'Executive Director',
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: 'Teams',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: 'Marketing',
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/3.svg',
              name: 'Clark Smith',
              text: 'Marketing Associate',
            },
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
              name: 'Olga familly',
              text: 'Marketing Associate',
            },
            children: [
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'Clark Smith',
                  text: 'Marketing Associate',
                },
                children: [],
              },
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'Olga familly',
                  text: 'Marketing Associate',
                },
              },
            ],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/16.svg',
              name: 'Hermann Mayer',
              text: 'Marketing Officer',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Sales',
          text: undefined,
        },
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/9.svg',
              name: 'Anna Lopez',
              text: 'Sales Manager',
            },
            children: [],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/25.svg',
              name: 'Melany Lawfield',
              text: 'Sales Manager',
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: 'https://media.cssninja.io/shuriken/avatars/14.svg',
      name: 'Jean LeBeauss',
      text: 'Marketing Associate',
    },
  },
]
</script>
