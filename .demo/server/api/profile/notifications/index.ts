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
      date: 'March 2, 2023',
      time: '2 hours ago',
      status: 0,
      target: {
        type: 'project',
        name: 'Delivery App project',
        url: '/layouts/projects/delivery-app-project',
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
  ])
}
