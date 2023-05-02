<script setup lang="ts">
const { x, y } = useWindowScroll()
const isSearchOpen = useState('search-open', () => false)
const isMobileOpen = ref(false)

const metaKey = useMetaKey()
</script>

<template>
  <div
    class="ltablet:max-w-[1000px] ptablet:max-w-[47rem] fixed inset-x-0 top-0 z-50 mx-auto max-w-[350px] transition-all duration-200 lg:max-w-7xl"
    :class="y > 60 ? 'mt-2' : 'mt-4'"
  >
    <div
      class="flex items-center justify-between rounded-2xl border p-4 transition-all duration-200"
      :class="
        y > 60
          ? 'bg-white/95 dark:bg-muted-950/95 border-muted-200 dark:border-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20'
          : 'border-transparent'
      "
    >
      <div class="flex w-1/5 items-center gap-2">
        <NuxtLink to="/" class="ms-2 inline-flex">
          <TairoLogoText
            class="text-primary-500 transition-all duration-200"
            :class="y > 60 ? 'h-6' : 'h-7'"
          />
        </NuxtLink>
      </div>
      <div
        class="ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent"
        :class="[
          isMobileOpen
            ? 'shadow-muted-300/30 dark:shadow-muted-900/20 flex flex-col space-y-4 rounded-xl p-6 shadow-xl transition-all duration-200'
            : 'hidden',
          isMobileOpen && y > 60
            ? 'ltablet:mt-0 mt-2 lg:mt-0'
            : 'ltablet:mt-0 mt-4 lg:mt-0',
        ]"
      >
        <NuxtLink
          to="/demos"
          class="inline-flex items-center justify-center px-6"
        >
          Prebuilt pages
        </NuxtLink>
        <NuxtLink
          to="/documentation"
          class="inline-flex items-center justify-center px-6"
        >
          Documentation
        </NuxtLink>
        <div class="px-6">
          <button
            type="button"
            class="group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3"
            :class="
              y > 60
                ? 'bg-muted-100 dark:bg-muted-900 border border-muted-100 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500'
                : 'text-muted-800 dark:text-muted-200'
            "
            @click="isSearchOpen = true"
          >
            <Icon
              name="lucide:search"
              class="h-4 w-4 transition-colors duration-300"
            />
            <span
              class="rounded-lg border px-2 py-0.5 transition-colors duration-300"
              :class="
                y > 60
                  ? 'bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700 shadow group-hover:text-muted-600 dark:group-hover:text-muted-100'
                  : ' border-transparent'
              "
            >
              <kbd class="font-sans text-sm tracking-wide">
                {{ metaKey }} + k
              </kbd>
            </span>
          </button>
        </div>
      </div>
      <div class="flex w-1/5 items-center justify-end gap-4">
        <BaseThemeToggle />
        <BaseButton
          shape="curved"
          color="primary"
          to="https://go.cssninja.io/buy-tairo"
          class="ltablet:!flex !hidden lg:!flex"
        >
          Buy Tairo
        </BaseButton>
        <button
          type="button"
          class="ltablet:hidden flex items-center justify-center lg:hidden"
          @click="isMobileOpen = !isMobileOpen"
        >
          <div class="space-y-1.5">
            <span
              class="bg-primary-600 block h-0.5 transition-all duration-300"
              :class="isMobileOpen ? 'w-2' : 'w-6'"
            ></span>
            <span
              class="bg-primary-600 block h-0.5 transition-all duration-300"
              :class="isMobileOpen ? 'w-6' : 'w-6'"
            ></span>
            <span
              class="bg-primary-600 block h-0.5 transition-all duration-300"
              :class="isMobileOpen ? 'w-4' : 'w-6'"
            ></span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
