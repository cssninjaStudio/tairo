<template>
  <div class="grid gap-4 md:grid-cols-3">
    <BaseAccordion :items="accordion" exclusive shape="straight" />

    <BaseAccordion :items="accordion" shape="rounded" />

    <BaseAccordion :items="accordion" exclusive shape="curved" />
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
