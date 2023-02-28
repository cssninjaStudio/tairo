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
      return [item.title, item.author.name].some((item) => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      title: 'How to serve coffee at the office the proper way',
      published: '30 minutes ago',
      image: '/demo/photos/11.jpg',
      author: {
        id: 39,
        avatar: '/demo/avatars/39.jpg',
        name: 'Alejandro B.',
        initials: 'AB',
        color: 'info',
      },
    },
    {
      id: '2',
      title: 'Teamwork can dramatically increase productivity',
      published: '4 hours ago',
      image: '/demo/photos/12.jpg',
      author: {
        id: 15,
        avatar: '/demo/avatars/15.jpg',
        name: 'Hilde V.',
        initials: 'HV',
        color: 'warning',
      },
    },
    {
      id: '3',
      title: 'Is team building a scam or the next thing?',
      published: '5 hours ago',
      image: '/demo/photos/13.jpg',
      author: {
        id: 24,
        avatar: '/demo/avatars/24.jpg',
        name: 'Sandrine C.',
        initials: 'SC',
        color: 'h-purple',
      },
    },
    {
      id: '4',
      title: '3 things you should know when applying for developer jobs',
      published: '8 hours ago',
      image: '/demo/photos/14.jpg',
      author: {
        id: 27,
        avatar: '/demo/avatars/27.jpg',
        name: 'Carmen E.',
        initials: 'CE',
        color: 'h-purple',
      },
    },
    {
      id: '5',
      title: 'The construction business massively invests in mobile apps',
      published: '1 day ago',
      image: '/demo/photos/15.jpg',
      author: {
        id: 10,
        avatar: '/demo/avatars/10.jpg',
        name: 'Henry G.',
        initials: 'HG',
        color: 'info',
      },
    },
    {
      id: '6',
      title: 'Finding the right spot for your startup',
      published: '1 day ago',
      image: '/demo/photos/17.jpg',
      author: {
        id: 22,
        avatar: '/demo/avatars/22.jpg',
        name: 'Jimmy H.',
        initials: 'JH',
        color: 'info',
      },
    },
    {
      id: '7',
      title: '4 tips to make your business lunches awesome',
      published: '2 days ago',
      image: '/demo/photos/18.jpg',
      author: {
        id: 22,
        avatar: '/demo/avatars/22.jpg',
        name: 'Jimmy H.',
        initials: 'JH',
        color: 'info',
      },
    },
    {
      id: '8',
      title: 'Setting up a design system for your app project',
      published: '2 days ago',
      image: '/demo/photos/18.jpg',
      author: {
        id: 26,
        avatar: '/demo/avatars/26.jpg',
        name: 'Courtney W.',
        initials: 'CW',
        color: 'info',
      },
    },
    {
      id: '9',
      title: 'Setting up a design system for your app project',
      published: '3 days ago',
      image: '/demo/photos/20.jpg',
      author: {
        id: 8,
        avatar: '/images/avatars/svg/vuero-1.svg',
        name: 'Erik K.',
        initials: 'EK',
        color: 'info',
      },
    },
    {
      id: '10',
      title: 'Have you considered product management training?',
      published: '3 days ago',
      image: '/demo/photos/21.jpg',
      author: {
        id: 14,
        avatar: '/demo/avatars/14.jpg',
        name: 'Ryan B.',
        initials: 'RB',
        color: 'info',
      },
    },
    {
      id: '11',
      title: 'Using flashy colors in your websites and apps',
      published: '3 days ago',
      image: '/demo/photos/22.jpg',
      author: {
        id: 9,
        avatar: '/demo/avatars/9.jpg',
        name: 'Ana B.',
        initials: 'AB',
        color: 'info',
      },
    },
    {
      id: '12',
      title: 'Why it pays to profile your customers',
      published: '3 days ago',
      image: '/demo/photos/23.jpg',
      author: {
        id: 40,
        avatar: '/demo/avatars/40.jpg',
        name: 'Jeanne M.',
        initials: 'JM',
        color: 'info',
      },
    },
    {
      id: '13',
      title: 'Building a consistent and talented team',
      published: '3 days ago',
      image: '/demo/photos/24.jpg',
      author: {
        id: 19,
        avatar: '/demo/avatars/19.jpg',
        name: 'Greta K.',
        initials: 'GK',
        color: 'info',
      },
    },
    {
      id: '14',
      title: 'Building a consistent and talented team',
      published: '3 days ago',
      image: '/demo/photos/25.jpg',
      author: {
        id: 28,
        avatar: '/demo/avatars/28.jpg',
        name: 'Edouard F.',
        initials: 'EF',
        color: 'info',
      },
    },
    {
      id: '15',
      title: 'What framework to choose to build a mobile app in 2020?',
      published: '3 days ago',
      image: '/demo/photos/26.jpg',
      author: {
        id: 5,
        avatar: '/demo/avatars/5.jpg',
        name: 'Mary L.',
        initials: 'ML',
        color: 'info',
      },
    },
    {
      id: '16',
      title: 'Diving into building an e-commerce brand - part 1',
      published: '4 days ago',
      image: '/demo/photos/27.jpg',
      author: {
        id: 33,
        avatar: '/demo/avatars/33.jpg',
        name: 'Harvey M.',
        initials: 'HM',
        color: 'success',
      },
    },
    {
      id: '17',
      title: 'Diving into building an e-commerce brand - part 2',
      published: '4 days ago',
      image: '/demo/photos/28.jpg',
      author: {
        id: 33,
        avatar: '/demo/avatars/33.jpg',
        name: 'Harvey M.',
        initials: 'HM',
        color: 'success',
      },
    },
    {
      id: '18',
      title: 'How to make sure to reach the goals you set',
      published: '4 days ago',
      image: '/demo/photos/29.jpg',
      author: {
        id: 31,
        avatar: '/demo/avatars/31.jpg',
        name: 'Yasseen A.',
        initials: 'YA',
        color: 'info',
      },
    },
  ])
}
