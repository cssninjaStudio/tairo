<script setup lang="ts">
definePageMeta({
  title: 'Delivery',
  preview: {
    title: 'Delivery dashboard',
    description: 'For food delivery services',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-delivery.png',
    srcDark: '/img/screens/dashboards-delivery-dark.png',
    order: 22,
  },
})

const genres = [
  {
    id: 1,
    name: 'All',
    icon: '/img/icons/food/icon-1.svg',
  },
  {
    id: 2,
    name: 'Pizza',
    icon: '/img/icons/food/icon-2.svg',
  },
  {
    id: 3,
    name: 'Asian',
    icon: '/img/icons/food/icon-3.svg',
  },
  {
    id: 4,
    name: 'Burgers',
    icon: '/img/icons/food/icon-4.svg',
  },
  {
    id: 5,
    name: 'Grill',
    icon: '/img/icons/food/icon-5.svg',
  },
  {
    id: 6,
    name: 'Sweets',
    icon: '/img/icons/food/icon-6.svg',
  },
  {
    id: 7,
    name: 'Thai',
    icon: '/img/icons/food/icon-7.svg',
  },
  {
    id: 8,
    name: 'Sushi',
    icon: '/img/icons/food/icon-8.svg',
  },
]

const meals = [
  {
    id: 1,
    name: 'Buritos Duo',
    description: 'Tomato sauce, mozzarella, basil, olive oil',
    price: 9.99,
    image: '/img/illustrations/dashboards/delivery/meal-1.png',
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 2,
    name: 'Chop Chop Suite',
    description: 'Sushi, salmon, avocado, cucumber, rice',
    price: 25.99,
    image: '/img/illustrations/dashboards/delivery/meal-2.png',
    rating: 4.8,
    reviews: 47,
  },
  {
    id: 3,
    name: 'Double Cheese Burger',
    description: 'Beef, cheese, lettuce, tomato, onion, ketchup',
    price: 14.99,
    image: '/img/illustrations/dashboards/delivery/meal-3.png',
    rating: 4.9,
    reviews: 172,
  },
  {
    id: 4,
    name: "Sweet n' Donuts",
    description: 'Donuts, chocolate, strawberry, vanilla, sugar',
    price: 9.99,
    image: '/img/illustrations/dashboards/delivery/meal-4.png',
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 5,
    name: "Sweet n' Milkshake",
    description: 'Milkshake, chocolate, strawberry, vanilla, sugar',
    price: 16.99,
    image: '/img/illustrations/dashboards/delivery/meal-5.png',
    rating: 4.8,
    reviews: 32,
  },
  {
    id: 6,
    name: 'Fried Chicken Bucket',
    description: 'Chicken, barbecue sauce, ketchup, soda',
    price: 12.99,
    image: '/img/illustrations/dashboards/delivery/meal-6.png',
    rating: 4.5,
    reviews: 59,
  },
  {
    id: 7,
    name: 'Peperoni Slice',
    description: 'Tomato sauce, mozzarella, basil, olive oil',
    price: 5.99,
    image: '/img/illustrations/dashboards/delivery/meal-7.png',
    rating: 4.8,
    reviews: 75,
  },
  {
    id: 8,
    name: 'Veggie Wrap',
    description: 'Tomato, mozzarella, basil, olive oil',
    price: 8.99,
    image: '/img/illustrations/dashboards/delivery/meal-8.png',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 9,
    name: 'Sashimi Special',
    description: 'Sushi, salmon, avocado, cucumber, rice',
    price: 19.99,
    image: '/img/illustrations/dashboards/delivery/meal-9.png',
    rating: 4.9,
    reviews: 71,
  },
]

const order = {
  items: [
    {
      id: 8,
      name: 'Veggie Wrap',
      description: 'Tomato, mozzarella, basil, olive oil',
      price: 8.99,
      image: '/img/illustrations/dashboards/delivery/meal-8.png',
      quantity: 2,
    },
    {
      id: 7,
      name: 'Peperoni Slice',
      description: 'Tomato sauce, mozzarella, basil, olive oil',
      price: 5.99,
      image: '/img/illustrations/dashboards/delivery/meal-7.png',
      quantity: 3,
    },
    {
      id: 9,
      name: 'Sashimi Special',
      description: 'Sushi, salmon, avocado, cucumber, rice',
      price: 19.99,
      image: '/img/illustrations/dashboards/delivery/meal-9.png',
      quantity: 1,
    },
    {
      id: 4,
      name: "Sweet n' Donuts",
      description: 'Donuts, chocolate, strawberry, vanilla, sugar',
      price: 9.99,
      image: '/img/illustrations/dashboards/delivery/meal-4.png',
      quantity: 1,
    },
  ],
}

const activeGenre = ref(1)

const subTotal = computed(() => {
  let price = 0
  order.items.forEach((item) => {
    price += item.price * item.quantity
  })
  return price
})

const taxes = computed(() => {
  return subTotal.value * 0.0625
})

const total = computed(() => {
  return subTotal.value + taxes.value
})
</script>

<template>
  <div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <!-- Header -->
          <div class="col-span-12">
            <div
              class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
            >
              <div class="relative h-[120px] w-[240px] shrink-0 sm:h-[175px]">
                <img
                  class="pointer-events-none absolute -top-6 start-3 sm:-start-10 sm:-top-2"
                  src="/img/illustrations/dashboards/delivery/header.svg"
                  alt="Food illustration"
                />
              </div>
              <div class="mt-6 grow sm:mt-0">
                <div class="pb-4 text-center sm:pb-0 sm:text-left">
                  <BaseHeading tag="h1" class="mb-2 text-white opacity-90">
                    <span>
                      Free delivery for 30 days!
                      <span class="text-3xl">🎉</span>
                    </span>
                  </BaseHeading>
                  <BaseParagraph
                    size="sm"
                    class="max-w-xs text-white opacity-70"
                  >
                    <span>
                      Don't miss out our $0 delivery fee for orders over $10 for
                      30 days. This one's for you!
                    </span>
                  </BaseParagraph>
                  <div class="mt-2">
                    <BaseButton
                      size="sm"
                      color="light"
                      flavor="outline"
                      class="w-full sm:w-auto"
                    >
                      <span>Learn More</span>
                      <Icon name="lucide:arrow-right" class="h-4 w-4" />
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Grid -->
          <div class="relative">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading tag="h3" size="xl" weight="semibold">
                <span>Popular Meals</span>
              </BaseHeading>
              <button
                class="bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 inline-flex cursor-pointer items-center justify-center gap-x-1 rounded-full py-2 pe-4 ps-2 font-sans text-sm transition-all duration-300"
              >
                <Icon name="ph:timer-duotone" class="h-5 w-5" />
                <span class="text-sm">Delivery:</span>
                <span>~ 25min</span>
              </button>
            </div>
            <!-- Food types -->
            <div class="mb-14 grid grid-cols-4 gap-4 sm:grid-cols-9">
              <div
                v-for="genre in genres"
                :key="genre.id"
                role="button"
                class="flex cursor-pointer flex-col items-center rounded-full border p-2 shadow-xl transition-colors duration-500 ease-in-out"
                :class="
                  activeGenre === genre.id
                    ? 'bg-yellow-400 border-yellow-400'
                    : 'border-muted-200 dark:border-muted-700 hover:bg-muted-200/80 dark:hover:bg-muted-800/40'
                "
                @click="activeGenre = genre.id"
              >
                <div
                  class="rounded-full border p-2 transition-colors duration-500 ease-in-out"
                  :class="
                    activeGenre === genre.id
                      ? 'bg-white border-yellow-400'
                      : 'border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-800'
                  "
                >
                  <img
                    :src="genre.icon"
                    alt="Food type icon"
                    class="h-12 w-12 scale-[0.8]"
                    :class="activeGenre === genre.id ? '' : 'dark:invert'"
                  />
                </div>
                <p class="mb-10 mt-3 text-xs font-bold">{{ genre.name }}</p>
              </div>

              <div class="hidden items-center justify-center sm:flex">
                <BaseButtonIcon
                  shape="full"
                  class="hover:border-yellow-500 hover:text-yellow-500"
                  data-tooltip="All categories"
                >
                  <Icon name="lucide:chevron-right" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>
            <!-- Meals -->
            <div class="grid gap-x-3 gap-y-6 sm:grid-cols-3">
              <!-- Grid item -->
              <NuxtLink
                v-for="meal in meals"
                :key="meal.id"
                to="#"
                class="relative"
              >
                <BaseCard
                  shape="curved"
                  class="hover:border-primary-500 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/40 p-3 hover:shadow-xl"
                >
                  <div
                    class="ltablet:h-28 bg-muted-100 dark:bg-muted-900 relative mb-3 h-36 w-full rounded-xl sm:h-32"
                  >
                    <img
                      class="ltablet:max-w-[175px] absolute inset-x-0 -top-4 mx-auto max-w-[210px] sm:-top-6 sm:max-w-[190px]"
                      :src="meal.image"
                      :alt="meal.name"
                    />
                  </div>
                  <div class="mb-2">
                    <BaseHeading
                      tag="h4"
                      size="sm"
                      weight="medium"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ meal.name }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-500 dark:text-muted-400 line-clamp-1"
                    >
                      <span>{{ meal.description }}</span>
                    </BaseParagraph>
                  </div>
                  <div class="flex items-center justify-between">
                    <div
                      class="divide-muted-200 dark:divide-muted-700 flex items-center divide-x"
                    >
                      <div class="pe-4">
                        <span
                          class="text-muted-800 dark:text-muted-100 font-sans font-bold"
                        >
                          ${{ meal.price }}
                        </span>
                      </div>
                      <div class="flex items-center gap-1 ps-4">
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3 text-yellow-400"
                        />
                        <span class="text-muted-400 font-sans text-xs">
                          {{ meal.rating }} ({{ meal.reviews }})
                        </span>
                      </div>
                    </div>

                    <div>
                      <BaseButtonAction shape="curved">
                        <span>Order</span>
                      </BaseButtonAction>
                    </div>
                  </div>
                </BaseCard>
              </NuxtLink>
            </div>
            <!-- Load more -->
            <div class="my-16 flex items-center justify-center">
              <BaseButton shape="full" color="default">
                <Icon name="ph:dots-nine-bold" class="h-4 w-4" />
                <span>Load more</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div
          class="bg-muted-200 dark:bg-muted-800 flex flex-col gap-6 rounded-2xl p-6"
        >
          <!-- Details -->
          <div class="font-hairline rounded-2xl bg-primary-800 p-6 text-xs">
            <div class="mb-4 flex items-center gap-2">
              <BaseAvatar src="/img/avatars/2.svg" size="xs" />
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="light"
                  lead="tight"
                  class="text-white"
                >
                  <span>Maya Rosselini</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-white/70">Complete your order</span>
                </BaseParagraph>
              </div>
            </div>
            <div class="flex items-center justify-between font-sans">
              <p class="text-white">112 Mc Cornell Av.</p>
              <button type="button" class="cursor-pointer text-yellow-400">
                Edit
              </button>
            </div>
            <div class="mt-4 flex items-center gap-2 font-sans">
              <div class="rounded-lg py-1">
                <Icon name="ph:timer-duotone" class="h-5 w-5 text-yellow-400" />
              </div>
              <p class="text-white">35 min</p>
              <button
                type="button"
                class="ms-auto cursor-pointer text-yellow-400"
              >
                Choose time
              </button>
            </div>
          </div>
          <!-- Title -->
          <div>
            <BaseHeading
              tag="h3"
              size="xl"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>My Order</span>
            </BaseHeading>
          </div>
          <!-- Items -->
          <ul class="space-y-4">
            <li v-for="item in order.items" :key="item.id">
              <div class="flex items-center gap-3">
                <div
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-900 relative flex h-14 w-14 items-center justify-center rounded-xl border bg-white"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="h-12 w-12 object-contain"
                  />
                  <div
                    class="bg-primary-500 absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full"
                  >
                    <span
                      class="font-sans text-[0.65rem] font-semibold text-white"
                    >
                      x{{ item.quantity }}
                    </span>
                  </div>
                </div>
                <div>
                  <p
                    class="text-muted-800 dark:text-muted-100 font-sans text-sm"
                  >
                    {{ item.name }}
                  </p>
                  <p class="text-muted-400 font-sans text-xs">
                    unit price: ${{ item.price }}
                  </p>
                </div>
                <div class="ms-auto">
                  <p
                    class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                  >
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div
            class="border-muted-300 dark:border-muted-800 flex grow flex-col justify-end border-t py-4"
          >
            <ul class="my-4 space-y-2 font-sans">
              <li>
                <div class="flex items-center justify-between">
                  <span class="text-sm">Subtotal:</span>
                  <span
                    class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                  >
                    ${{ subTotal.toFixed(2) }}
                  </span>
                </div>
              </li>
              <li>
                <div class="flex items-center justify-between">
                  <span class="text-sm">Taxes:</span>
                  <span
                    class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                  >
                    ${{ taxes.toFixed(2) }}
                  </span>
                </div>
              </li>
              <li>
                <div class="flex items-center justify-between">
                  <span>Total:</span>
                  <span
                    class="text-muted-800 dark:text-muted-100 text-xl font-semibold"
                  >
                    ${{ total.toFixed(2) }}
                  </span>
                </div>
              </li>
            </ul>
            <div class="mt-4 flex justify-between text-xs font-bold">
              <BaseButton
                color="none"
                shape="curved"
                class="text-muted-800 group !h-14 w-full !gap-3 bg-yellow-400 hover:!shadow-xl hover:!shadow-yellow-400/20"
              >
                <span class="text-base font-medium">Checkout</span>
                <Icon
                  name="lucide:arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
