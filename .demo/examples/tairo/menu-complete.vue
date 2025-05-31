<template>
  <TairoMenu>
    <TairoMenuList>
      <TairoMenuItem>
        <TairoMenuTrigger>
          <span>Featured</span>
          <Icon
            name="lucide:chevron-down"
            class="transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
          />
        </TairoMenuTrigger>
        <TairoMenuContent>
          <TairoMenuListItems
            class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px]"
          >
            <li class="row-span-3 grid">
              <div
                class="grid sm:grid-cols-5 gap-4"
              >
                <div class="hidden sm:block sm:col-span-2">
                  <div class="flex flex-col justify-end h-full w-full bg-primary-950 rounded-xl p-4">
                    <div>
                      <TairoLogo class="size-10 text-white mb-3" />
                      <BaseHeading class="text-white mb-2">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="xs" class="max-w-[260px] text-white">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3 flex flex-col justify-between">
                  <TairoMenuLink as-child>
                    <NuxtLink to="/layouts">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Design System
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Create your design system with a set of consistent design patterns.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink>
                    <NuxtLink to="/layouts/projects">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                  <TairoMenuLink as-child>
                    <NuxtLink to="#">
                      <BaseHeading size="sm" weight="medium" class="text-muted-900 dark:text-white in-[.router-link-exact-active]:text-primary-500">
                        Amazing UI
                      </BaseHeading>
                      <BaseParagraph size="sm" class="max-w-[260px] text-muted-600 dark:text-muted-400">
                        Build high-quality, accessible design systems and web apps.
                      </BaseParagraph>
                    </NuxtLink>
                  </TairoMenuLink>
                </div>
              </div>
            </li>
          </TairoMenuListItems>
        </TairoMenuContent>
      </TairoMenuItem>
      <TairoMenuItem>
        <TairoMenuLink as-child>
          <NuxtLink to="/documentation" active-class="text-primary-500">
            Documentation
          </NuxtLink>
        </TairoMenuLink>
      </TairoMenuItem>
    </TairoMenuList>

    <div
      class="absolute top-full start-0 flex w-full mt-[10px] z-50"
    >
      <TairoMenuViewport />
    </div>
  </TairoMenu>
</template>
