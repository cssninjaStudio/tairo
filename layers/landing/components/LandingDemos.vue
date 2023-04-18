<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    limit?: number
    cta?: boolean
  }>(),
  {
    limit: undefined,
    cta: true,
  },
)

const categories = [
  'dashboards',
  'lists',
  'apps',
  'authentication',
  'system',
  'utility',
  'forms',
]

const demos = [
  {
    title: 'Personal dashboard v1',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards',
    screenshots: {
      light: '/img/screens/dashboards-personal-1.png',
      dark: '/img/screens/dashboards-personal-1-dark.png',
    },
  },
  {
    title: 'Personal dashboard v2',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards/personal-2',
    screenshots: {
      light: '/img/screens/dashboards-personal-2.png',
      dark: '/img/screens/dashboards-personal-2-dark.png',
    },
  },
  {
    title: 'Personal dashboard v3',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards/personal-3',
    screenshots: {
      light: '/img/screens/dashboards-personal-3.png',
      dark: '/img/screens/dashboards-personal-3-dark.png',
    },
  },
  {
    title: 'Analytics dashboard',
    subtitle: 'For heavy stats and kpis',
    categories: ['Dashboards'],
    url: '/dashboards/analytics',
    screenshots: {
      light: '/img/screens/dashboards-analytics.png',
      dark: '/img/screens/dashboards-analytics-dark.png',
    },
  },
  {
    title: 'Stocks dashboard',
    subtitle: 'For stock market analysis',
    categories: ['Dashboards'],
    url: '/dashboards/stocks',
    screenshots: {
      light: '/img/screens/dashboards-stocks.png',
      dark: '/img/screens/dashboards-stocks-dark.png',
    },
  },
  {
    title: 'Sales dashboard',
    subtitle: 'For sales and marketing',
    categories: ['Dashboards'],
    url: '/dashboards/sales',
    screenshots: {
      light: '/img/screens/dashboards-sales.png',
      dark: '/img/screens/dashboards-sales-dark.png',
    },
  },
  {
    title: 'Banking dashboard v1',
    subtitle: 'For banking and accounts',
    categories: ['Dashboards'],
    url: '/dashboards/banking-1',
    screenshots: {
      light: '/img/screens/dashboards-banking-1.png',
      dark: '/img/screens/dashboards-banking-1-dark.png',
    },
  },
  {
    title: 'Banking dashboard v2',
    subtitle: 'For banking and accounts',
    categories: ['Dashboards'],
    url: '/dashboards/banking-2',
    screenshots: {
      light: '/img/screens/dashboards-banking-2.png',
      dark: '/img/screens/dashboards-banking-2-dark.png',
    },
  },
  {
    title: 'Banking dashboard v3',
    subtitle: 'For banking and accounts',
    categories: ['Dashboards'],
    url: '/dashboards/banking-3',
    screenshots: {
      light: '/img/screens/dashboards-banking-3.png',
      dark: '/img/screens/dashboards-banking-3-dark.png',
    },
  },
  {
    title: 'Flights dashboard',
    subtitle: 'For travel and booking',
    categories: ['Dashboards'],
    url: '/dashboards/flights',
    screenshots: {
      light: '/img/screens/dashboards-flights.png',
      dark: '/img/screens/dashboards-flights-dark.png',
    },
  },
  {
    title: 'Company dashboard',
    subtitle: 'For corporate business',
    categories: ['Dashboards'],
    url: '/dashboards/company',
    screenshots: {
      light: '/img/screens/dashboards-company.png',
      dark: '/img/screens/dashboards-company-dark.png',
    },
  },
  {
    title: 'HR dashboard',
    subtitle: 'For HR management',
    categories: ['Dashboards'],
    url: '/dashboards/human-resources',
    screenshots: {
      light: '/img/screens/dashboards-human-resources.png',
      dark: '/img/screens/dashboards-human-resources-dark.png',
    },
  },
  {
    title: 'Course dashboard',
    subtitle: 'For School and Education',
    categories: ['Dashboards'],
    url: '/dashboards/course',
    screenshots: {
      light: '/img/screens/dashboards-course.png',
      dark: '/img/screens/dashboards-course-dark.png',
    },
  },
  {
    title: 'Jobs dashboard',
    subtitle: 'For recruitment and job search',
    categories: ['Dashboards'],
    url: '/dashboards/jobs',
    screenshots: {
      light: '/img/screens/dashboards-jobs.png',
      dark: '/img/screens/dashboards-jobs-dark.png',
    },
  },
  {
    title: 'Influencer dashboard',
    subtitle: 'For social media influencers',
    categories: ['Dashboards'],
    url: '/dashboards/influencer',
    screenshots: {
      light: '/img/screens/dashboards-influencer.png',
      dark: '/img/screens/dashboards-influencer-dark.png',
    },
  },
  {
    title: 'Hobbies dashboard',
    subtitle: 'For hobbies and interests',
    categories: ['Dashboards'],
    url: '/dashboards/hobbies',
    screenshots: {
      light: '/img/screens/dashboards-hobbies.png',
      dark: '/img/screens/dashboards-hobbies-dark.png',
    },
  },
  {
    title: 'Health dashboard',
    subtitle: 'For health and fitness',
    categories: ['Dashboards'],
    url: '/dashboards/health',
    screenshots: {
      light: '/img/screens/dashboards-health.png',
      dark: '/img/screens/dashboards-health-dark.png',
    },
  },
  {
    title: 'Writer dashboard',
    subtitle: 'For writers and bloggers',
    categories: ['Dashboards'],
    url: '/dashboards/writer',
    screenshots: {
      light: '/img/screens/dashboards-writer.png',
      dark: '/img/screens/dashboards-writer-dark.png',
    },
  },
  {
    title: 'Video dashboard',
    subtitle: 'For video content creators',
    categories: ['Dashboards'],
    url: '/dashboards/video',
    screenshots: {
      light: '/img/screens/dashboards-video.png',
      dark: '/img/screens/dashboards-video-dark.png',
    },
  },
  {
    title: 'Soccer dashboard',
    subtitle: 'For soccer & football fans',
    categories: ['Dashboards'],
    url: '/dashboards/soccer',
    screenshots: {
      light: '/img/screens/dashboards-soccer.png',
      dark: '/img/screens/dashboards-soccer-dark.png',
    },
  },
  {
    title: 'Ecommerce dashboard',
    subtitle: 'For sales and online stores',
    categories: ['Dashboards'],
    url: '/dashboards/ecommerce',
    screenshots: {
      light: '/img/screens/dashboards-ecommerce.png',
      dark: '/img/screens/dashboards-ecommerce-dark.png',
    },
  },
  {
    title: 'Delivery dashboard',
    subtitle: 'For food delivery services',
    categories: ['Dashboards'],
    url: '/dashboards/delivery',
    screenshots: {
      light: '/img/screens/dashboards-delivery.png',
      dark: '/img/screens/dashboards-delivery-dark.png',
    },
  },
  {
    title: 'Left map panel',
    subtitle: 'For location based apps',
    categories: ['Dashboards'],
    url: '/dashboards/map-left',
    screenshots: {
      light: '/img/screens/dashboards-map-left.png',
      dark: '/img/screens/dashboards-map-left-dark.png',
    },
  },
  {
    title: 'Right map panel',
    subtitle: 'For location based apps',
    categories: ['Dashboards'],
    url: '/dashboards/map-right',
    screenshots: {
      light: '/img/screens/dashboards-map-right.png',
      dark: '/img/screens/dashboards-map-right-dark.png',
    },
  },
  {
    title: 'Inbox app',
    subtitle: 'For email and messaging apps',
    categories: ['Dashboards'],
    url: '/dashboards/inbox',
    screenshots: {
      light: '/img/screens/dashboards-inbox.png',
      dark: '/img/screens/dashboards-inbox-dark.png',
    },
  },
  {
    title: 'Messaging app',
    subtitle: 'For chat and messaging apps',
    categories: ['Dashboards'],
    url: '/dashboards/messaging',
    screenshots: {
      light: '/img/screens/dashboards-messaging.png',
      dark: '/img/screens/dashboards-messaging-dark.png',
    },
  },
  {
    title: 'Chart examples',
    subtitle: 'For data visualization',
    categories: ['Dashboards'],
    url: '/dashboards/charts',
    screenshots: {
      light: '/img/screens/dashboards-charts.png',
      dark: '/img/screens/dashboards-charts-dark.png',
    },
  },
  {
    title: 'UI Widgets',
    subtitle: 'For page compositions',
    categories: ['Dashboards'],
    url: '/dashboards/widgets',
    screenshots: {
      light: '/img/screens/dashboards-widgets-ui.png',
      dark: '/img/screens/dashboards-widgets-ui-dark.png',
    },
  },
  {
    title: 'Creative Widgets',
    subtitle: 'For page compositions',
    categories: ['Dashboards'],
    url: '/dashboards/widgets/creative',
    screenshots: {
      light: '/img/screens/dashboards-widgets-creative.png',
      dark: '/img/screens/dashboards-widgets-creative-dark.png',
    },
  },
  {
    title: 'List Widgets',
    subtitle: 'For page compositions',
    categories: ['Dashboards'],
    url: '/dashboards/widgets/list',
    screenshots: {
      light: '/img/screens/dashboards-widgets-lists.png',
      dark: '/img/screens/dashboards-widgets-lists-dark.png',
    },
  },
  {
    title: 'Wizard — Step 1',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard',
    screenshots: {
      light: '/img/screens/wizard-1.png',
      dark: '/img/screens/wizard-1-dark.png',
    },
  },
  {
    title: 'Wizard — Step 2',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-2',
    screenshots: {
      light: '/img/screens/wizard-2.png',
      dark: '/img/screens/wizard-2-dark.png',
    },
  },
  {
    title: 'Wizard — Step 3',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-3',
    screenshots: {
      light: '/img/screens/wizard-3.png',
      dark: '/img/screens/wizard-3-dark.png',
    },
  },
  {
    title: 'Wizard — Step 4',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-4',
    screenshots: {
      light: '/img/screens/wizard-4.png',
      dark: '/img/screens/wizard-4-dark.png',
    },
  },
  {
    title: 'Wizard — Step 5',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-5',
    screenshots: {
      light: '/img/screens/wizard-5.png',
      dark: '/img/screens/wizard-5-dark.png',
    },
  },
  {
    title: 'Wizard — Step 6',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-6',
    screenshots: {
      light: '/img/screens/wizard-6.png',
      dark: '/img/screens/wizard-6-dark.png',
    },
  },
  {
    title: 'Wizard — Step 7',
    subtitle: 'For onboarding and step forms',
    categories: ['Dashboards'],
    url: '/wizard/step-7',
    screenshots: {
      light: '/img/screens/wizard-7.png',
      dark: '/img/screens/wizard-7-dark.png',
    },
  },
  {
    title: 'List view 1',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts',
    screenshots: {
      light: '/img/screens/layouts-list-view-1.png',
      dark: '/img/screens/layouts-list-view-1-dark.png',
    },
  },
  {
    title: 'List view 2',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/list-view-2',
    screenshots: {
      light: '/img/screens/layouts-list-view-2.png',
      dark: '/img/screens/layouts-list-view-2-dark.png',
    },
  },
  {
    title: 'List view 3',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/list-view-3',
    screenshots: {
      light: '/img/screens/layouts-list-view-3.png',
      dark: '/img/screens/layouts-list-view-3-dark.png',
    },
  },
  {
    title: 'List view 4',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/list-view-4',
    screenshots: {
      light: '/img/screens/layouts-list-view-4.png',
      dark: '/img/screens/layouts-list-view-4-dark.png',
    },
  },
  {
    title: 'Flex list 1',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/flex-list-1',
    screenshots: {
      light: '/img/screens/layouts-list-flex-1.png',
      dark: '/img/screens/layouts-list-flex-1-dark.png',
    },
  },
  {
    title: 'Flex list 2',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/flex-list-2',
    screenshots: {
      light: '/img/screens/layouts-list-flex-2.png',
      dark: '/img/screens/layouts-list-flex-2-dark.png',
    },
  },
  {
    title: 'Flex list 3',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/flex-list-3',
    screenshots: {
      light: '/img/screens/layouts-list-flex-3.png',
      dark: '/img/screens/layouts-list-flex-3-dark.png',
    },
  },
  {
    title: 'Table list 1',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/table-list-1',
    screenshots: {
      light: '/img/screens/layouts-table-list-1.png',
      dark: '/img/screens/layouts-table-list-1-dark.png',
    },
  },
  {
    title: 'Table list 2',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/table-list-2',
    screenshots: {
      light: '/img/screens/layouts-table-list-2.png',
      dark: '/img/screens/layouts-table-list-2-dark.png',
    },
  },
  {
    title: 'Table list 3',
    subtitle: 'For list views and collections',
    categories: ['Layouts'],
    url: '/layouts/table-list-3',
    screenshots: {
      light: '/img/screens/layouts-table-list-3.png',
      dark: '/img/screens/layouts-table-list-3-dark.png',
    },
  },
  {
    title: 'Form layout 1',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-1',
    screenshots: {
      light: '/img/screens/layouts-form-1.png',
      dark: '/img/screens/layouts-form-1-dark.png',
    },
  },
  {
    title: 'Form layout 2',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-2',
    screenshots: {
      light: '/img/screens/layouts-form-2.png',
      dark: '/img/screens/layouts-form-2-dark.png',
    },
  },
  {
    title: 'Form layout 3',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-3',
    screenshots: {
      light: '/img/screens/layouts-form-3.png',
      dark: '/img/screens/layouts-form-3-dark.png',
    },
  },
  {
    title: 'Form layout 4',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-4',
    screenshots: {
      light: '/img/screens/layouts-form-4.png',
      dark: '/img/screens/layouts-form-4-dark.png',
    },
  },
  {
    title: 'Form layout 5',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-5',
    screenshots: {
      light: '/img/screens/layouts-form-5.png',
      dark: '/img/screens/layouts-form-5-dark.png',
    },
  },
  {
    title: 'Form layout 6',
    subtitle: 'For forms and input fields',
    categories: ['Layouts'],
    url: '/layouts/form-6',
    screenshots: {
      light: '/img/screens/layouts-form-6.png',
      dark: '/img/screens/layouts-form-6-dark.png',
    },
  },
  {
    title: 'Placeload 1',
    subtitle: 'For loading states',
    categories: ['Layouts'],
    url: '/layouts/placeload-1',
    screenshots: {
      light: '/img/screens/layouts-placeload-1.png',
      dark: '/img/screens/layouts-placeload-1-dark.png',
    },
  },
  {
    title: 'Placeload 2',
    subtitle: 'For loading states',
    categories: ['Layouts'],
    url: '/layouts/placeload-2',
    screenshots: {
      light: '/img/screens/layouts-placeload-2.png',
      dark: '/img/screens/layouts-placeload-2-dark.png',
    },
  },
  {
    title: 'Placeload 3',
    subtitle: 'For loading states',
    categories: ['Layouts'],
    url: '/layouts/placeload-3',
    screenshots: {
      light: '/img/screens/layouts-placeload-3.png',
      dark: '/img/screens/layouts-placeload-3-dark.png',
    },
  },
  {
    title: 'Placeload 4',
    subtitle: 'For loading states',
    categories: ['Layouts'],
    url: '/layouts/placeload-4',
    screenshots: {
      light: '/img/screens/layouts-placeload-4.png',
      dark: '/img/screens/layouts-placeload-4-dark.png',
    },
  },
  {
    title: 'Card grid 1',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/card-grid-1',
    screenshots: {
      light: '/img/screens/layouts-card-grid-1.png',
      dark: '/img/screens/layouts-card-grid-1-dark.png',
    },
  },
  {
    title: 'Card grid 2',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/card-grid-2',
    screenshots: {
      light: '/img/screens/layouts-card-grid-2.png',
      dark: '/img/screens/layouts-card-grid-2-dark.png',
    },
  },
  {
    title: 'Card grid 3',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/card-grid-3',
    screenshots: {
      light: '/img/screens/layouts-card-grid-3.png',
      dark: '/img/screens/layouts-card-grid-3-dark.png',
    },
  },
  {
    title: 'Card grid 4',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/card-grid-4',
    screenshots: {
      light: '/img/screens/layouts-card-grid-4.png',
      dark: '/img/screens/layouts-card-grid-4-dark.png',
    },
  },
  {
    title: 'Tile grid 1',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/tile-grid-1',
    screenshots: {
      light: '/img/screens/layouts-tile-grid-1.png',
      dark: '/img/screens/layouts-tile-grid-1-dark.png',
    },
  },
  {
    title: 'Tile grid 2',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/tile-grid-2',
    screenshots: {
      light: '/img/screens/layouts-tile-grid-2.png',
      dark: '/img/screens/layouts-tile-grid-2-dark.png',
    },
  },
  {
    title: 'Tile grid 3',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/tile-grid-3',
    screenshots: {
      light: '/img/screens/layouts-tile-grid-3.png',
      dark: '/img/screens/layouts-tile-grid-3-dark.png',
    },
  },
  {
    title: 'User grid 1',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/user-grid-1',
    screenshots: {
      light: '/img/screens/layouts-user-grid-1.png',
      dark: '/img/screens/layouts-user-grid-1-dark.png',
    },
  },
  {
    title: 'User grid 2',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/user-grid-2',
    screenshots: {
      light: '/img/screens/layouts-user-grid-2.png',
      dark: '/img/screens/layouts-user-grid-2-dark.png',
    },
  },
  {
    title: 'User grid 3',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/user-grid-3',
    screenshots: {
      light: '/img/screens/layouts-user-grid-3.png',
      dark: '/img/screens/layouts-user-grid-3-dark.png',
    },
  },
  {
    title: 'User grid 4',
    subtitle: 'For item grids and collections',
    categories: ['Layouts'],
    url: '/layouts/user-grid-4',
    screenshots: {
      light: '/img/screens/layouts-user-grid-4.png',
      dark: '/img/screens/layouts-user-grid-4-dark.png',
    },
  },
  {
    title: 'Project list 1',
    subtitle: 'For displaying a list of projects',
    categories: ['Layouts'],
    url: '/layouts/projects',
    screenshots: {
      light: '/img/screens/layouts-projects-1.png',
      dark: '/img/screens/layouts-projects-1-dark.png',
    },
  },
  {
    title: 'Project list 2',
    subtitle: 'For displaying a list of projects',
    categories: ['Layouts'],
    url: '/layouts/projects/project-list-2',
    screenshots: {
      light: '/img/screens/layouts-projects-2.png',
      dark: '/img/screens/layouts-projects-2-dark.png',
    },
  },
  {
    title: 'Project list 3',
    subtitle: 'For displaying a list of projects',
    categories: ['Layouts'],
    url: '/layouts/projects/project-list-3',
    screenshots: {
      light: '/img/screens/layouts-projects-3.png',
      dark: '/img/screens/layouts-projects-3-dark.png',
    },
  },
  {
    title: 'Project details hub',
    subtitle: 'For displaying recent projects',
    categories: ['Layouts'],
    url: '/layouts/projects/details',
    screenshots: {
      light: '/img/screens/layouts-projects-details-hub.png',
      dark: '/img/screens/layouts-projects-details-hub-dark.png',
    },
  },
  {
    title: 'Project details',
    subtitle: 'For displaying project details',
    categories: ['Layouts'],
    url: '/layouts/projects/details/health-and-fitness-dashboard',
    screenshots: {
      light: '/img/screens/layouts-projects-details.png',
      dark: '/img/screens/layouts-projects-details-dark.png',
    },
  },
  {
    title: 'Project board hub',
    subtitle: 'For displaying recent projects',
    categories: ['Layouts'],
    url: '/layouts/projects/board',
    screenshots: {
      light: '/img/screens/layouts-projects-board-hub.png',
      dark: '/img/screens/layouts-projects-board-hub-dark.png',
    },
  },
  {
    title: 'Project board',
    subtitle: 'For displaying a kanban board',
    categories: ['Layouts'],
    url: '/layouts/projects/board/health-and-fitness-dashboard',
    screenshots: {
      light: '/img/screens/layouts-projects-board.png',
      dark: '/img/screens/layouts-projects-board-dark.png',
    },
  },
  {
    title: 'Profile',
    subtitle: 'For displaying a user profile',
    categories: ['Layouts'],
    url: '/layouts/profile',
    screenshots: {
      light: '/img/screens/layouts-subpages-profile.png',
      dark: '/img/screens/layouts-subpages-profile-dark.png',
    },
  },
  {
    title: 'Edit profile 1',
    subtitle: 'For editing a user profile',
    categories: ['Layouts'],
    url: '/layouts/profile-edit',
    screenshots: {
      light: '/img/screens/layouts-subpages-profile-edit-1.png',
      dark: '/img/screens/layouts-subpages-profile-edit-1-dark.png',
    },
  },
  {
    title: 'Edit profile 2',
    subtitle: 'For editing a user profile',
    categories: ['Layouts'],
    url: '/layouts/profile-edit/experience',
    screenshots: {
      light: '/img/screens/layouts-subpages-profile-edit-2.png',
      dark: '/img/screens/layouts-subpages-profile-edit-2-dark.png',
    },
  },
  {
    title: 'Edit profile 3',
    subtitle: 'For editing a user profile',
    categories: ['Layouts'],
    url: '/layouts/profile-edit/skills',
    screenshots: {
      light: '/img/screens/layouts-subpages-profile-edit-3.png',
      dark: '/img/screens/layouts-subpages-profile-edit-3-dark.png',
    },
  },
  {
    title: 'Edit profile 4',
    subtitle: 'For editing a user profile',
    categories: ['Layouts'],
    url: '/layouts/profile-edit/settings',
    screenshots: {
      light: '/img/screens/layouts-subpages-profile-edit-4.png',
      dark: '/img/screens/layouts-subpages-profile-edit-4-dark.png',
    },
  },
  {
    title: 'Notifications',
    subtitle: 'For displaying account notifications',
    categories: ['Layouts'],
    url: '/layouts/profile-notifications',
    screenshots: {
      light: '/img/screens/layouts-subpages-notifications.png',
      dark: '/img/screens/layouts-subpages-notifications-dark.png',
    },
  },
  {
    title: 'Settings',
    subtitle: 'For displaying account settings',
    categories: ['Layouts'],
    url: '/layouts/profile-settings',
    screenshots: {
      light: '/img/screens/layouts-subpages-settings.png',
      dark: '/img/screens/layouts-subpages-settings-dark.png',
    },
  },
  {
    title: 'Search results',
    subtitle: 'For displaying search results',
    categories: ['Layouts'],
    url: '/layouts/search-results',
    screenshots: {
      light: '/img/screens/layouts-subpages-search-results.png',
      dark: '/img/screens/layouts-subpages-search-results-dark.png',
    },
  },
  {
    title: 'Empty search',
    subtitle: 'For displaying search results',
    categories: ['Layouts'],
    url: '/layouts/search-empty',
    screenshots: {
      light: '/img/screens/layouts-subpages-search-empty.png',
      dark: '/img/screens/layouts-subpages-search-empty-dark.png',
    },
  },
  {
    title: 'SaaS billing',
    subtitle: 'For saas billing plans',
    categories: ['Layouts'],
    url: '/layouts/utility-billing',
    screenshots: {
      light: '/img/screens/layouts-subpages-billing.png',
      dark: '/img/screens/layouts-subpages-billing-dark.png',
    },
  },
  {
    title: 'Action 1',
    subtitle: 'For actions and tasks',
    categories: ['Layouts'],
    url: '/layouts/utility-action-1',
    screenshots: {
      light: '/img/screens/layouts-subpages-action-1.png',
      dark: '/img/screens/layouts-subpages-action-1-dark.png',
    },
  },
  {
    title: 'Action 2',
    subtitle: 'For actions and tasks',
    categories: ['Layouts'],
    url: '/layouts/utility-action-2',
    screenshots: {
      light: '/img/screens/layouts-subpages-action-2.png',
      dark: '/img/screens/layouts-subpages-action-2-dark.png',
    },
  },
  {
    title: 'Confirm account',
    subtitle: 'For account confirmation',
    categories: ['Layouts'],
    url: '/layouts/utility-confirm',
    screenshots: {
      light: '/img/screens/layouts-utility-confirm.png',
      dark: '/img/screens/layouts-utility-confirm-dark.png',
    },
  },
  {
    title: 'Promotion',
    subtitle: 'For promotional offers',
    categories: ['Layouts'],
    url: '/layouts/utility-promotion',
    screenshots: {
      light: '/img/screens/layouts-utility-promotion.png',
      dark: '/img/screens/layouts-utility-promotion-dark.png',
    },
  },
  {
    title: 'Invoice',
    subtitle: 'For accounting and invoices',
    categories: ['Layouts'],
    url: '/layouts/utility-invoice',
    screenshots: {
      light: '/img/screens/layouts-utility-invoice.png',
      dark: '/img/screens/layouts-utility-invoice-dark.png',
    },
  },
  {
    title: 'Service status',
    subtitle: 'For company service status',
    categories: ['Layouts'],
    url: '/layouts/utility-status',
    screenshots: {
      light: '/img/screens/layouts-utility-status.png',
      dark: '/img/screens/layouts-utility-status-dark.png',
    },
  },
  {
    title: 'Error',
    subtitle: 'For system errors',
    categories: ['Layouts'],
    url: '/layouts/utility-error',
    screenshots: {
      light: '/img/screens/layouts-utility-error.png',
      dark: '/img/screens/layouts-utility-error-dark.png',
    },
  },
  {
    title: 'Onboarding 1',
    subtitle: 'For onboarding new users',
    categories: ['Layouts'],
    url: '/layouts/onboarding-1',
    screenshots: {
      light: '/img/screens/layouts-onboarding-1.png',
      dark: '/img/screens/layouts-onboarding-1-dark.png',
    },
  },
  {
    title: 'Onboarding 2',
    subtitle: 'For onboarding new users',
    categories: ['Layouts'],
    url: '/layouts/onboarding-2',
    screenshots: {
      light: '/img/screens/layouts-onboarding-2.png',
      dark: '/img/screens/layouts-onboarding-2-dark.png',
    },
  },
  {
    title: 'Onboarding 3',
    subtitle: 'For onboarding new users',
    categories: ['Layouts'],
    url: '/layouts/onboarding-3',
    screenshots: {
      light: '/img/screens/layouts-onboarding-3.png',
      dark: '/img/screens/layouts-onboarding-3-dark.png',
    },
  },
  {
    title: 'Login 1',
    subtitle: 'For authentication and sign in',
    categories: ['Authentication'],
    url: '/auth',
    screenshots: {
      light: '/img/screens/auth-login-1.png',
      dark: '/img/screens/auth-login-1-dark.png',
    },
  },
  {
    title: 'Login 2',
    subtitle: 'For authentication and sign in',
    categories: ['Authentication'],
    url: '/auth/login-1',
    screenshots: {
      light: '/img/screens/auth-login-2.png',
      dark: '/img/screens/auth-login-2-dark.png',
    },
  },
  {
    title: 'Login 3',
    subtitle: 'For authentication and sign in',
    categories: ['Authentication'],
    url: '/auth/login-2',
    screenshots: {
      light: '/img/screens/auth-login-3.png',
      dark: '/img/screens/auth-login-3-dark.png',
    },
  },
  {
    title: 'Login 4',
    subtitle: 'For authentication and sign in',
    categories: ['Authentication'],
    url: '/auth/login-3',
    screenshots: {
      light: '/img/screens/auth-login-4.png',
      dark: '/img/screens/auth-login-4-dark.png',
    },
  },
  {
    title: 'Signup 1',
    subtitle: 'For authentication and sign up',
    categories: ['Authentication'],
    url: '/auth/signup-1',
    screenshots: {
      light: '/img/screens/auth-signup-1.png',
      dark: '/img/screens/auth-signup-1-dark.png',
    },
  },
  {
    title: 'Signup 2',
    subtitle: 'For authentication and sign up',
    categories: ['Authentication'],
    url: '/auth/signup-2',
    screenshots: {
      light: '/img/screens/auth-signup-2.png',
      dark: '/img/screens/auth-signup-2-dark.png',
    },
  },
  {
    title: 'Signup 3',
    subtitle: 'For authentication and sign up',
    categories: ['Authentication'],
    url: '/auth/signup-3',
    screenshots: {
      light: '/img/screens/auth-signup-3.png',
      dark: '/img/screens/auth-signup-3-dark.png',
    },
  },
  {
    title: 'Recover',
    subtitle: 'For password recovery',
    categories: ['Authentication'],
    url: '/auth/recover',
    screenshots: {
      light: '/img/screens/auth-recover.png',
      dark: '/img/screens/auth-recover-dark.png',
    },
  },
  {
    title: 'Error',
    subtitle: 'For system errors',
    categories: ['Error'],
    url: '/test-error',
    screenshots: {
      light: '/img/screens/error.png',
      dark: '/img/screens/error-dark.png',
    },
  },
]

const selectedCategories = ref(['all'])
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Prebuilt pages</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          {{ demos.length }}+ Amazing demos
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo ships with {{ demos.length }}+ prebuilt pages, including
          dashboard and app examples, as well as collections like lists, grids,
          profile and personal pages and many other authentication and utility
          pages.
        </BaseParagraph>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <!-- Col -->
        <div
          class="ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"
        >
          <ul class="space-y-3 lg:sticky lg:top-28">
            <li
              v-for="(category, index) in categories"
              :key="index"
              class="capitalize"
            >
              <BaseCheckbox
                v-model="selectedCategories"
                :value="category"
                color="primary"
                :label="category"
              />
            </li>
          </ul>
        </div>
        <!-- Col -->
        <div class="ltablet:col-span-10 col-span-12 lg:col-span-10">
          <div class="grid gap-8 sm:grid-cols-2">
            <NuxtLink
              :to="demo.url"
              v-for="demo in demos.slice(0, props.limit)"
              :key="demo.title"
              class="group relative block"
            >
              <div>
                <img
                  class="border-muted-200 block rounded-lg border transition-opacity duration-200 group-hover:opacity-75"
                  :class="demo.screenshots.dark ? 'dark:hidden' : ''"
                  :src="demo.screenshots.light"
                  :alt="`Tairo - ${demo.title}`"
                />
                <img
                  v-if="demo.screenshots.dark"
                  class="border-muted-800 hidden rounded-lg border transition-opacity duration-200 group-hover:opacity-75 dark:block"
                  :src="demo.screenshots.dark"
                  :alt="`Tairo - ${demo.title}`"
                />
                <div
                  class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%] duration-300"
                >
                  <BaseCard
                    shape="curved"
                    class="flex items-center p-4"
                    elevated
                  >
                    <div>
                      <BaseHeading
                        as="h3"
                        size="sm"
                        weight="medium"
                        lead="none"
                        class="text-muted-800 mx-auto dark:text-white"
                        >{{ demo.title }}</BaseHeading
                      >
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400"
                        >{{ demo.subtitle }}</BaseText
                      >
                    </div>
                    <div
                      class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="h-4 w-4 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                      />
                    </div>
                  </BaseCard>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div v-if="props.cta" class="mt-24 flex items-center justify-center">
            <BaseButton
              shape="curved"
              color="primary"
              flavor="outline"
              to="/demos"
              >View All {{ demos.length }} Demos</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
