export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 50) {
    // Create an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const data = await getDemoData()

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
  }
})

function filterDemoData(
  data: any[],
  filter: string,
  page: number,
  perPage: number,
) {
  const offset = (page - 1) * perPage
  if (!filter) {
    return data.slice(offset, offset + perPage)
  }
  const filterRe = new RegExp(filter, 'i')
  return data
    .filter((item) => {
      return [item.name, item.category, item.author.name].some((item) =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      icon: '/img/illustrations/layouts/cake-1.svg',
      name: 'Strawberry & Cream Cake',
      category: 'Cakes',
      duration: '1h 45m',
      attachments: 3,
      author: {
        name: 'Alice C.',
        avatar: '/img/avatars/22.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/9.svg',
        },
        {
          id: 2,
          src: '/img/avatars/20.svg',
        },
      ],
    },
    {
      id: '2',
      icon: '/img/illustrations/layouts/cake-2.svg',
      name: 'Orange & Lemon Cake',
      category: 'Cakes',
      duration: '1h 15m',
      attachments: 2,
      author: {
        name: 'Kendra W.',
        avatar: '/img/avatars/10.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/12.svg',
        },
        {
          id: 2,
          src: '/img/avatars/21.svg',
        },
        {
          id: 3,
          src: '/img/avatars/16.svg',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '3',
      icon: '/img/illustrations/layouts/cake-3.svg',
      name: 'Three Chocolates Cake',
      category: 'Cakes',
      duration: '2h',
      attachments: 2,
      author: {
        name: 'Karen V.',
        avatar: '/img/avatars/24.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/3.svg',
        },
        {
          id: 2,
          src: '/img/avatars/2.svg',
        },
        {
          id: 3,
          src: '/img/avatars/17.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '4',
      icon: '/img/illustrations/layouts/cake-4.svg',
      name: 'Wedding Cake',
      category: 'Cakes',
      duration: '3h 30m',
      attachments: 7,
      author: {
        name: 'Courtney W.',
        avatar: '/img/avatars/26.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/19.svg',
        },
        {
          id: 2,
          src: '/img/avatars/24.svg',
        },
        {
          id: 3,
          src: '/img/avatars/10.svg',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '5',
      icon: '/img/illustrations/layouts/cake-5.svg',
      name: 'Vanilla Waffles',
      category: 'Waffles',
      duration: '1h 0m',
      attachments: 2,
      author: {
        name: 'Ryan B.',
        avatar: '/img/avatars/14.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/20.svg',
        },
        {
          id: 2,
          src: '/img/avatars/9.svg',
        },
        {
          id: 3,
          src: '/img/avatars/13.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '6',
      icon: '/img/illustrations/layouts/cake-6.svg',
      name: 'Strawberry Slice',
      category: 'Slices',
      duration: '1h 0m',
      attachments: 2,
      author: {
        name: 'Arnold D.',
        avatar: '/img/avatars/20.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/14.svg',
        },
        {
          id: 2,
          src: '/img/avatars/5.svg',
        },
        {
          id: 3,
          src: '/img/avatars/8.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '7',
      icon: '/img/illustrations/layouts/cake-7.svg',
      name: 'Marmelade Donuts',
      category: 'Donuts',
      duration: '2h 15m',
      attachments: 2,
      author: {
        name: 'Clarissa M.',
        avatar: '/img/avatars/5.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/5.svg',
        },
        {
          id: 2,
          src: '/img/avatars/12.svg',
        },
        {
          id: 3,
          src: '/img/avatars/21.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '8',
      icon: '/img/illustrations/layouts/cake-8.svg',
      name: 'Peanut Butter Sandwich',
      category: 'Sandwiches',
      duration: '15m',
      attachments: 1,
      author: {
        name: 'Hermann M.',
        avatar: '/img/avatars/16.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/9.svg',
        },
        {
          id: 2,
          src: '/img/avatars/10.svg',
        },
        {
          id: 3,
          src: '/img/avatars/23.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '9',
      icon: '/img/illustrations/layouts/cake-9.svg',
      name: 'Peanut Butter Slice',
      category: 'Slices',
      duration: '15m',
      attachments: 1,
      author: {
        name: 'Joshua S.',
        avatar: '/img/avatars/12.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/5.svg',
        },
        {
          id: 2,
          src: '/img/avatars/22.svg',
        },
        {
          id: 3,
          src: '/img/avatars/16.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
      ],
    },
    {
      id: '10',
      icon: '/img/illustrations/layouts/cake-9.svg',
      name: 'Strawberry Spicy',
      category: 'Slices',
      duration: '1h 15m',
      attachments: 1,
      author: {
        name: 'Kelly M.',
        avatar: '/img/avatars/9.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/24.svg',
        },
        {
          id: 2,
          src: '/img/avatars/23.svg',
        },
        {
          id: 3,
          src: '/img/avatars/13.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
  ])
}
