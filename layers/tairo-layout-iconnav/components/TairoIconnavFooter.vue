<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    display?:
      | 'condensed'
      | 'horizontal-scroll'
      | 'expanded-sm'
      | 'expanded-md'
      | 'expanded-lg'
      | 'expanded-xl'
  }>(),
  {
    display: 'expanded-lg',
  },
)
const config = useAppConfig().tairo.iconnav?.footer
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t"
  >
    <NuxtLink
      v-if="config?.logoSeparator?.component"
      to="/"
      class="dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
    >
      <component
        :is="resolveComponentOrNative(config.logoSeparator.component)"
        v-bind="config.logoSeparator.props"
      />
    </NuxtLink>
    <div
      class="ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"
      :class="[
        props.display === 'expanded-sm' && 'mx-auto w-full max-w-5xl',
        props.display === 'expanded-md' && 'mx-auto w-full max-w-6xl',
        props.display === 'expanded-lg' && 'mx-auto w-full max-w-7xl',
        props.display === 'expanded-xl' && 'mx-auto w-full',
      ]"
    >
      <NuxtLink
        v-if="config?.logo?.component"
        to="/"
        aria-label="Go to homepage"
        class="ltablet:w-1/5 block w-full lg:w-1/5"
      >
        <component
          :is="resolveComponentOrNative(config.logo.component)"
          v-bind="config.logo.props"
        />
      </NuxtLink>
      <div v-else class="ltablet:w-1/5 block w-full lg:w-1/5" />
      <div
        class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"
      >
        <NuxtLink
          v-for="link of config?.links"
          :key="link.to"
          :to="link.to"
          :rel="link.rel"
          :target="link.target"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div
        class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"
      >
        <span
          v-if="config?.copyright?.name && config?.copyright?.to"
          class="inline-flex gap-1"
        >
          <span>©</span>
          <NuxtLink
            :to="config.copyright.to"
            target="_blank"
            rel="noopener"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            {{ config.copyright.name }}
          </NuxtLink>
          <span v-if="config?.copyright?.since">{{ config.copyright.since }}-{{ year }}.</span>
        </span>
      </div>
    </div>
  </footer>
</template>
