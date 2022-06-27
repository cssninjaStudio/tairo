export const x2Rounded = `
<template>
  <BaseTabSlider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
    >
    <template #tab="{ activeValue }">
      <p
        v-if="activeValue === 'team'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times.
      </p>
      <p
        v-else-if="activeValue === 'projects'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo
        Reges: constructio interrete.
      </p>
      <p
        v-else-if="activeValue === 'tasks'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra.
      </p>
    </template>
  </BaseTabSlider>
</template>
`

export const x2Full = `
<template>
  <BaseTabSlider
    shape="full"
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
    >
    <template #tab="{ activeValue }">
      <p
        v-if="activeValue === 'team'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times.
      </p>
      <p
        v-else-if="activeValue === 'projects'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo
        Reges: constructio interrete.
      </p>
      <p
        v-else-if="activeValue === 'tasks'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra.
      </p>
    </template>
  </BaseTabSlider>
</template>
`

export const x3Rounded = `
<template>
  <BaseTabSlider
    :slots="3"
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
    >
    <template #tab="{ activeValue }">
      <p
        v-if="activeValue === 'team'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times.
      </p>
      <p
        v-else-if="activeValue === 'projects'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo
        Reges: constructio interrete.
      </p>
      <p
        v-else-if="activeValue === 'tasks'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra.
      </p>
    </template>
  </BaseTabSlider>
</template>
`

export const x3Full = `
<template>
  <BaseTabSlider
    shape="full"
    :slots="3"
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
    >
    <template #tab="{ activeValue }">
      <p
        v-if="activeValue === 'team'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times.
      </p>
      <p
        v-else-if="activeValue === 'projects'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo
        Reges: constructio interrete.
      </p>
      <p
        v-else-if="activeValue === 'tasks'"
        class="font-text text-sm text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quid iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra.
      </p>
    </template>
  </BaseTabSlider>
</template>
`
