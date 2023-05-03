<template>
  <AddonMarkdownRemark :source="markdownDemo" />
</template>

<script setup lang="ts">
const markdownDemo = `## Heading 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.
### Heading 3
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.
`
</script>
