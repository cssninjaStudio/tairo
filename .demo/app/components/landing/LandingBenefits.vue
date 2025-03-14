<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          We back you up
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Customer satisfaction
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          We are here to help you. We have a dedicated support team and a
          community of developers to help you with any issue you might have.
          Discover our automated Github access from your cssninja account.
        </BaseParagraph>
      </div>
      <div class="grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="Support portal"
          icon="ph:lifebuoy-duotone"
          to="https://cssninja.io/faq/support"
          color="indigo"
        >
          Running into issues? We have a dedicated support portal where you can
          open a ticket and get help from our support team.
        </LandingLayersBox>
        <LandingLayersBox
          title="Github access"
          icon="fa6-brands:github"
          to="https://cssninja.io/faq/github-access"
          color="purple"
        >
          We built Github automation that allows you to access to our private
          repositories, for the products you've purchased from us.
        </LandingLayersBox>
        <LandingLayersBox
          title="Community"
          icon="fa6-brands:discord"
          to="https://go.cssninja.io/discord"
        >
          We have a thrilling Discord community where you can discuss your work
          and get help from our community of customers and developers.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
