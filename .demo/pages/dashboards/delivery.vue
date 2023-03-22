<script setup lang="ts">
definePageMeta({
  title: 'Delivery',
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
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <!-- Header -->
          <div class="col-span-12">
            <div
              class="flex flex-col sm:flex-row items-center p-4 rounded-2xl bg-primary-800"
            >
              <div class="relative shrink-0 h-[120px] sm:h-[175px] w-[240px]">
                <img
                  class="absolute -top-6 sm:-top-2 left-3 sm:-left-10 pointer-events-none"
                  src="/img/illustrations/dashboards/delivery/header.svg"
                  alt="Food illustration"
                />
              </div>
              <div class="grow mt-6 sm:mt-0">
                <div class="text-center sm:text-left pb-4 sm:pb-0">
                  <BaseHeading tag="h1" class="text-white opacity-90 mb-2">
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
                      <Icon name="lucide:arrow-right" class="w-4 h-4" />
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Grid -->
          <div class="relative">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading tag="h3" size="xl" weight="semibold">
                <span>Popular Meals</span>
              </BaseHeading>
              <button
                class="inline-flex items-center justify-center gap-x-1 rounded-full py-2 pl-2 pr-4 font-sans bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 cursor-pointer text-sm transition-all duration-300"
              >
                <Icon name="ph:timer-duotone" class="w-5 h-5" />
                <span class="text-sm">Delivery:</span>
                <span>~ 25min</span>
              </button>
            </div>
            <!-- Food types -->
            <div class="grid grid-cols-4 sm:grid-cols-9 gap-4 mb-14">
              <div
                v-for="genre in genres"
                :key="genre.id"
                role="button"
                class="border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-500 ease-in-out"
                :class="
                  activeGenre === genre.id
                    ? 'bg-yellow-400 border-yellow-400'
                    : 'border-muted-200 dark:border-muted-700 hover:bg-muted-200/80 dark:hover:bg-muted-800/40'
                "
                @click="activeGenre = genre.id"
              >
                <div
                  class="border rounded-full p-2 transition-colors duration-500 ease-in-out"
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
                <p class="mt-3 mb-10 font-bold text-xs">{{ genre.name }}</p>
              </div>

              <div class="hidden sm:flex items-center justify-center">
                <BaseButtonIcon
                  shape="full"
                  class="hover:border-yellow-500 hover:text-yellow-500"
                  tooltip="All categories"
                >
                  <Icon name="lucide:chevron-right" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </div>
            <!-- Meals -->
            <div class="grid sm:grid-cols-3 gap-x-3 gap-y-6">
              <!-- Grid item -->
              <NuxtLink
                v-for="meal in meals"
                :key="meal.id"
                to="#"
                class="relative"
              >
                <BaseCard
                  shape="curved"
                  class="p-3 hover:border-primary-500 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-900/40"
                >
                  <div
                    class="relative w-full h-36 sm:h-32 ltablet:h-28 mb-3 rounded-xl bg-muted-100 dark:bg-muted-900"
                  >
                    <img
                      class="absolute -top-4 sm:-top-6 inset-x-0 max-w-[210px] sm:max-w-[190px] ltablet:max-w-[175px] mx-auto"
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
                      class="flex items-center divide-x divide-muted-200 dark:divide-muted-700"
                    >
                      <div class="pr-4">
                        <span
                          class="font-sans font-bold text-muted-800 dark:text-muted-100"
                        >
                          ${{ meal.price }}
                        </span>
                      </div>
                      <div class="flex items-center gap-1 pl-4">
                        <Icon
                          name="uiw:star-on"
                          class="w-3 h-3 text-yellow-400"
                        />
                        <span class="font-sans text-xs text-muted-400">
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
            <div class="flex items-center justify-center my-16">
              <BaseButton shape="full" color="default">
                <Icon name="ph:dots-nine-bold" class="w-4 h-4" />
                <span>Load more</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div
          class="flex flex-col gap-6 p-6 rounded-2xl bg-muted-200 dark:bg-muted-800"
        >
          <!-- Details -->
          <div class="p-6 bg-purple-800 rounded-2xl font-hairline text-xs">
            <div class="flex items-center gap-2 mb-4">
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
            <div class="flex justify-between items-center font-sans">
              <p class="text-white">112 Mc Cornell Av.</p>
              <button type="button" class="text-yellow-400 cursor-pointer">
                Edit
              </button>
            </div>
            <div class="flex items-center gap-2 mt-4 font-sans">
              <div class="rounded-lg py-1">
                <Icon name="ph:timer-duotone" class="w-5 h-5 text-yellow-400" />
              </div>
              <p class="text-white">35 min</p>
              <button
                type="button"
                class="text-yellow-400 cursor-pointer ml-auto"
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
                  class="relative w-14 h-14 flex items-center justify-center rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-900"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-12 h-12 object-contain"
                  />
                  <div
                    class="absolute -bottom-1 -right-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary-500"
                  >
                    <span
                      class="font-sans font-semibold text-[0.65rem] text-white"
                    >
                      x{{ item.quantity }}
                    </span>
                  </div>
                </div>
                <div>
                  <p
                    class="font-sans text-sm text-muted-800 dark:text-muted-100"
                  >
                    {{ item.name }}
                  </p>
                  <p class="font-sans text-xs text-muted-400">
                    unit price: ${{ item.price }}
                  </p>
                </div>
                <div class="ml-auto">
                  <p
                    class="font-sans font-semibold text-sm text-muted-800 dark:text-muted-100"
                  >
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div
            class="flex-grow flex flex-col justify-end border-t border-muted-300 dark:border-muted-800 py-4"
          >
            <ul class="font-sans space-y-2 my-4">
              <li>
                <div class="flex justify-between items-center">
                  <span class="text-sm">Subtotal:</span>
                  <span
                    class="font-medium text-sm text-muted-500 dark:text-muted-400"
                  >
                    ${{ subTotal.toFixed(2) }}
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <span class="text-sm">Taxes:</span>
                  <span
                    class="font-medium text-sm text-muted-500 dark:text-muted-400"
                  >
                    ${{ taxes.toFixed(2) }}
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-center">
                  <span>Total:</span>
                  <span
                    class="text-xl font-semibold text-muted-800 dark:text-muted-100"
                  >
                    ${{ total.toFixed(2) }}
                  </span>
                </div>
              </li>
            </ul>
            <div class="flex justify-between text-xs font-bold mt-4">
              <BaseButton
                color="none"
                shape="curved"
                class="group !h-14 !gap-3 w-full bg-yellow-400 hover:!shadow-xl hover:!shadow-yellow-400/20 text-muted-800"
              >
                <span class="text-base font-medium">Checkout</span>
                <Icon
                  name="lucide:arrow-right"
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
