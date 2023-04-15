<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Nuxt Layers</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Why choose Tairo
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="tight"
            class="mb-3"
          >
            Some nice subtitle
          </BaseHeading>
          <div class="space-y-2">
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius, cur omnium horum
              magister, Orata, non iucundissime vixerit?
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="tight"
            class="mb-3"
          >
            Some nice subtitle
          </BaseHeading>
          <div class="space-y-2">
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius, cur omnium horum
              magister, Orata, non iucundissime vixerit?
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="tight"
            class="mb-3"
          >
            Some nice subtitle
          </BaseHeading>
          <div class="space-y-2">
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius, cur omnium horum
              magister, Orata, non iucundissime vixerit?
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              complectitur verbis, quod vult, et dicit plane, quod intellegam;
              Quid affers, cur Thorius, cur Caius Postumius.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/img/illustrations/nation.svg"
          alt="placeholder-image"
          class="mx-auto max-w-3xl"
        />
        <div class="mx-auto mb-3 max-w-md text-center">
          <BaseHeading
            as="h3"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mb-1 dark:text-white"
          >
            Join the Tairo Nation
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-100">
            Built-in props allow you to customize component options, shapes and
            sizes to fit your branding.
          </BaseParagraph>
        </div>
        <div class="mt-2 flex justify-center gap-2">
          <BaseButton
            color="primary"
            shape="curved"
            shadow="hover"
            class="!h-11 w-48"
          >
            <Icon name="cib:envato" class="h-4 w-4" />
            <span>Purchase Tairo</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
