export default defineEventHandler(async () => {
  const data = await getDemoData()

  return data
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      user: {
        name: 'Melany L.',
        src: '/img/avatars/25.svg',
        text: 'ML',
      },
      date: 'Mar 2, 2023',
      time: '11:28 am',
      status: 0,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'made some changes to the',
      },
      people: [
        {
          name: 'Maya R.',
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Kendra W.',
        src: '/img/avatars/10.svg',
        text: 'KW',
      },
      date: 'Feb 28, 2023',
      time: '2:14 pm',
      status: 0,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'left a comment on a task, in the',
      },
      people: [
        {
          name: 'Greta K.',
          src: '/img/avatars/24.svg',
          text: 'GK',
        },
      ],
    },
    {
      id: 3,
      user: {
        name: 'Hermann M.',
        src: '/img/avatars/16.svg',
        text: 'HM',
      },
      date: 'Feb 28, 2023',
      time: '5:29 pm',
      status: 1,
      target: {
        type: 'project',
        name: 'Resume management app',
        url: '/layouts/projects/details/resume-management-mobile-app',
        text: 'Invited 3 persons to the',
      },
      people: [
        {
          name: 'Maya R.',
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          name: 'John B.',
          src: '/img/avatars/8.svg',
          text: 'JB',
        },
        {
          name: 'Betty C.',
          src: '/img/avatars/24.svg',
          text: 'BC',
        },
      ],
    },
    {
      id: 4,
      user: {
        name: 'John B.',
        src: '/img/avatars/8.svg',
        text: 'JB',
      },
      date: 'Feb 28, 2023',
      time: '6:12 pm',
      status: 1,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'Changed the status of a task, in the',
      },
      people: [],
    },
    {
      id: 5,
      user: {
        name: 'Clarissa M.',
        src: '/img/avatars/5.svg',
        text: 'JB',
      },
      date: 'Feb 27, 2023',
      time: '9:47 am',
      status: 1,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'Uploaded 3 new files, in the',
      },
      people: [],
    },
    {
      id: 6,
      user: {
        name: 'Betty D.',
        src: '/img/avatars/24.svg',
        text: 'BD',
      },
      date: 'Feb 26, 2023',
      time: '10:19 am',
      status: 1,
      target: {
        type: 'project',
        name: 'Resume management app',
        url: '/layouts/projects/details/resume-management-mobile-app',
        text: 'mentionned you in a comment, in the',
      },
      people: [],
    },
    {
      id: 7,
      user: {
        name: 'Howard C.',
        src: '/img/avatars/20.svg',
        text: 'HC',
      },
      date: 'Feb 25, 2023',
      time: '11:27 am',
      status: 0,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'left a comment on a task, in the',
      },
      people: [
        {
          name: 'Sandra W.',
          src: '/img/avatars/12.svg',
          text: 'SW',
        },
      ],
    },
    {
      id: 8,
      user: {
        name: 'John B.',
        src: '/img/avatars/8.svg',
        text: 'JB',
      },
      date: 'Feb 25, 2023',
      time: '3:19 pm',
      status: 1,
      target: {
        type: 'project',
        name: 'Delivery App',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'Changed the status of a task, in the',
      },
      people: [],
    },
  ])
}
