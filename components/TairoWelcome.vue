<script setup lang="ts">
const app = useAppConfig()

const codePage = [
  `<script setup lang="ts">`,
  `definePageMeta({`,
  `  title: 'My page',`,
  `})`,
  `<` + `/script>`,
  ``,
  `<template>`,
  `  Hello Tairo!`,
  `</template>`,
].join('\n')

const codeTailwind = [
  `const { cssninjaConfig } = require('@cssninja/nuxt-ui/tailwind')`,
  `const colors = require('tailwindcss/colors')`,
  ``,
  `module.exports = cssninjaConfig({`,
  `  theme: {`,
  `    extend: {`,
  `      colors: {`,
  `        primary: colors.red,`,
  `        muted: colors.stone,`,
  `      }`,
  `    }`,
  `  }`,
  `})`,
].join('\n')
</script>

<template>
  <div>
    <BaseCard class="p-6" shape="rounded">
      <BaseHeading class="flex items-center justify-between">
        <span>Getting started</span>
        <BaseThemeToggle />
      </BaseHeading>

      <div class="grid grid-cols-8">
        <BaseProse class="col-span-8 md:col-span-6">
          <ol>
            <li>
              <p>
                Define your app settings in
                <code>app.config.ts</code>
                <small>(logo, name, sidebars, panels, ...)</small>
              </p>
              <pre><code>export default defineAppConfig({{app.tairo}})</code></pre>
            </li>
            <li>
              <p>
                Create your first page
                <code>pages/index.vue</code>
              </p>
              <pre><code>{{codePage}}</code></pre>
            </li>
            <li>
              <p>
                Customize tailwind settings in
                <code>tailwind.config.cjs</code>
                <small>(colors, fonts, ...)</small>
              </p>
              <pre><code>{{codeTailwind}}</code></pre>
            </li>
            <li>
              Customize nuxt settings in
              <code>nuxt.config.ts</code>
              <small>(seo meta, route rules, modules, ...)</small>
            </li>
          </ol>
        </BaseProse>
        <div class="col-span-8 flex flex-col gap-2 py-6 md:col-span-2">
          <BaseButton>
            <Icon name="lucide:external-link" class="text-sm" />
            <span>Online documentation</span>
          </BaseButton>
          <BaseButton>
            <Icon name="lucide:external-link" class="text-sm" />
            <span>Online demo</span>
          </BaseButton>
          <BaseButton>
            <Icon name="logos:nuxt-icon" class="text-sm" />
            <span>Nuxt documentation</span>
          </BaseButton>
          <BaseButton>
            <Icon name="logos:github-icon" class="text-sm" />
            <span>GitHub access</span>
          </BaseButton>
          <BaseButton>
            <Icon name="logos:discord-icon" class="text-sm" />
            <span>Discord</span>
          </BaseButton>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
