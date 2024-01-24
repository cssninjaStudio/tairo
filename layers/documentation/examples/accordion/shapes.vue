<template>
  <div class="grid gap-4 md:grid-cols-2">
    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="none"
    />

    <BaseAccordion :items="accordion" rounded="sm" />

    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="md"
    />

    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="lg"
    />
  </div>
</template>

<script setup lang="ts">
// demo data for the accordion
const accordion = [
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
]
</script>
