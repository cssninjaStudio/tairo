<script setup lang="ts">
import iconCarousel from '~/documentation/carousel/icon.md?raw'
import userCarousel from '~/documentation/carousel/user.md?raw'

definePageMeta({
  title: 'Carousel',
  documentation: {
    category: 'Interaction',
    components: ['CarouselTeam', 'CarouselIcons'],
  },
})

// @unocss-include

const team = [
  {
    id: 0,
    avatar: '/img/avatars/3.svg',
    badge: '/img/icons/flags/united-states-of-america.svg',
    name: 'Daniel Clarke',
    role: 'Frontend developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: 'Sass',
        logo: '/img/logos/stacks/sass.svg',
      },
    ],
    to: '#/',
  },
  {
    id: 1,
    avatar: '/img/avatars/2.svg',
    badge: '/img/icons/flags/italy.svg',
    name: 'Maya Rosselini',
    role: 'Product Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Illustrator',
        logo: '/img/logos/stacks/illustrator.svg',
      },
      {
        name: 'Sketch',
        logo: '/img/logos/stacks/sketch.svg',
      },
      {
        name: 'Photoshop',
        logo: '/img/logos/stacks/photoshop.svg',
      },
    ],
    to: '#/',
  },
  {
    id: 2,
    avatar: '/img/avatars/4.svg',
    badge: '/img/icons/flags/finland.svg',
    name: 'Lana Henriks',
    role: 'Web developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'HTML5',
        logo: '/img/logos/stacks/html5.svg',
      },
      {
        name: 'CSS3',
        logo: '/img/logos/stacks/css3.svg',
      },
      {
        name: 'Javascript',
        logo: '/img/logos/stacks/javascript.svg',
      },
    ],
    to: '#/',
  },
  {
    id: 3,
    avatar: '/img/avatars/9.svg',
    badge: '/img/icons/flags/canada.svg',
    name: 'Alina Gheller',
    role: 'Mobile developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Android',
        logo: '/img/logos/stacks/android.svg',
      },
      {
        name: 'Swift',
        logo: '/img/logos/stacks/swift.svg',
      },
      {
        name: 'Flutter',
        logo: '/img/logos/stacks/flutter.svg',
      },
    ],
    to: '#/',
  },
  {
    id: 4,
    avatar: '/img/avatars/12.svg',
    badge: '/img/icons/flags/france.svg',
    name: 'Karine Marchand',
    role: 'Frontend developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Bulma',
        logo: '/img/logos/stacks/bulma.svg',
      },
      {
        name: 'Tailwind CSS',
        logo: '/img/logos/stacks/tailwind.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
    ],
    to: '#/',
  },
  {
    id: 5,
    avatar: '/img/avatars/14.svg',
    badge: '/img/icons/flags/spain.svg',
    name: 'Raimundo Perez',
    role: 'Frontend developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: 'Typescript',
        logo: '/img/logos/stacks/typescript.svg',
      },
    ],
    to: '#/',
  },
]

const topics = [
  {
    icon: 'ph:megaphone-simple-duotone',
    title: 'Marketing',
    link: '/',
  },
  {
    icon: 'ph:chart-bar-duotone',
    title: 'Analytics',
    link: '/',
  },
  {
    icon: 'ph:storefront-duotone',
    title: 'Ecommerce',
    link: '/',
  },
  {
    icon: 'ph:rocket-duotone',
    title: 'Startups',
    link: '/',
  },
  {
    icon: 'ph:bank-duotone',
    title: 'Funding',
    link: '/',
  },
  {
    icon: 'ph:app-window-duotone',
    title: 'SEO',
    link: '/',
  },
  {
    icon: 'ph:sketch-logo-duotone',
    title: 'Product',
    link: '/',
  },
  {
    icon: 'ph:heartbeat-duotone',
    title: 'Health',
    link: '/',
  },
  {
    icon: 'ph:pen-nib-duotone',
    title: 'Content',
    link: '/',
  },
  {
    icon: 'ph:briefcase-duotone',
    title: 'Business',
    link: '/',
  },
  {
    icon: 'ph:leaf-duotone',
    title: 'Ecology',
    link: '/',
  },
  {
    icon: 'ph:flask-duotone',
    title: 'Experiments',
    link: '/',
  },
  {
    icon: 'ph:users-three-duotone',
    title: 'Jobs',
    link: '/',
  },
  {
    icon: 'ph:buildings-duotone',
    title: 'Enterprise',
    link: '/',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- User carousel -->
        <DocSection title="User Carousel" tag="1.0.0">
          <DocComponent label="User carousel example">
            <template #demo>
              <div class="pt-5">
                <CarouselTeam :slides-to-show="3" :slides="team" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="userCarousel" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="CarouselTeam" />

        <!-- Icon carousel -->
        <DocSection title="Icon Carousel" tag="1.0.0">
          <DocComponent label="Icon carousel example">
            <template #demo>
              <div class="pt-5">
                <CarouselIcons :slides-to-show="6" :slides="topics" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconCarousel" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon carousel properties -->
        <DocComponentMeta name="CarouselIcons" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
