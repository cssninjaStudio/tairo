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
      image: '/img/illustrations/layouts/post-1.svg',
      category: 'Productivity',
      author: {
        id: 39,
        avatar: '/img/avatars/20.svg',
        name: 'Alejandro B.',
        initials: 'AB',
      },
    },
    {
      id: '2',
      title: 'Teamwork can dramatically increase productivity',
      published: '4 hours ago',
      image: '/img/illustrations/layouts/post-2.svg',
      category: 'Productivity',
      author: {
        id: 15,
        avatar: '/img/avatars/5.svg',
        name: 'Clarissa M.',
        initials: 'CM',
      },
    },
    {
      id: '3',
      title: 'Is team building a scam or the next thing?',
      published: '5 hours ago',
      image: '/img/illustrations/layouts/post-3.svg',
      category: 'Management',
      author: {
        id: 24,
        avatar: '/img/avatars/24.svg',
        name: 'Sandrine C.',
        initials: 'SC',
      },
    },
    {
      id: '4',
      title: '3 things you should know when applying for developer jobs',
      published: '8 hours ago',
      image: '/img/illustrations/layouts/post-4.svg',
      category: 'Engineering',
      author: {
        id: 27,
        avatar: '/img/avatars/12.svg',
        name: 'Carmen E.',
        initials: 'CE',
      },
    },
    {
      id: '5',
      title: 'The construction business massively invests in mobile apps',
      published: '1 day ago',
      image: '/img/illustrations/layouts/post-5.svg',
      category: 'Engineering',
      author: {
        id: 10,
        avatar: '/img/avatars/1.svg',
        name: 'Henry G.',
        initials: 'HG',
      },
    },
    {
      id: '6',
      title: 'Finding the right spot for your startup',
      published: '1 day ago',
      image: '/img/illustrations/layouts/post-6.svg',
      category: 'Management',
      author: {
        id: 22,
        avatar: '/img/avatars/10.svg',
        name: 'Kendra W.',
        initials: 'KW',
      },
    },
    {
      id: '7',
      title: '4 tips to make your business lunches awesome',
      published: '2 days ago',
      image: '/img/illustrations/layouts/post-7.svg',
      category: 'Collaboration',
      author: {
        id: 22,
        avatar: '/img/avatars/16.svg',
        name: 'Hermann M.',
        initials: 'HM',
      },
    },
    {
      id: '8',
      title: 'Setting up a design system for your app project',
      published: '2 days ago',
      image: '/img/illustrations/layouts/post-8.svg',
      category: 'UX Design',
      author: {
        id: 26,
        avatar: '/img/avatars/26.svg',
        name: 'Courtney W.',
        initials: 'CW',
      },
    },
    {
      id: '9',
      title: 'Setting up a design system for your app project',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-9.svg',
      category: 'UX Design',
      author: {
        id: 8,
        avatar: '/img/avatars/2.svg',
        name: 'Maya R.',
        initials: 'MR',
      },
    },
    {
      id: '10',
      title: 'Have you considered product management training?',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-10.svg',
      category: 'Product',
      author: {
        id: 14,
        avatar: '/img/avatars/14.svg',
        name: 'Ryan B.',
        initials: 'RB',
      },
    },
    {
      id: '11',
      title: 'Using flashy colors in your websites and apps',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-11.svg',
      category: 'UX Design',
      author: {
        id: 9,
        avatar: '/img/avatars/9.svg',
        name: 'Ana B.',
        initials: 'AB',
      },
    },
    {
      id: '12',
      title: 'Why it pays to profile your customers',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-12.svg',
      category: 'Marketing',
      author: {
        id: 22,
        avatar: '/img/avatars/10.svg',
        name: 'Kendra W.',
        initials: 'KW',
      },
    },
    {
      id: '13',
      title: 'Building a consistent and talented team',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-13.svg',
      category: 'Management',
      author: {
        id: 19,
        avatar: '/img/avatars/19.svg',
        name: 'Greta K.',
        initials: 'GK',
      },
    },
    {
      id: '14',
      title: 'Managing different personalities in your team',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-14.svg',
      category: 'Management',
      author: {
        id: 28,
        avatar: '/img/avatars/6.svg',
        name: 'Edouard F.',
        initials: 'EF',
      },
    },
    {
      id: '15',
      title: 'What framework to choose to build a mobile app in 2020?',
      published: '3 days ago',
      image: '/img/illustrations/layouts/post-15.svg',
      category: 'Engineering',
      author: {
        id: 5,
        avatar: '/img/avatars/25.svg',
        name: 'Mary L.',
        initials: 'ML',
      },
    },
    {
      id: '16',
      title: 'Diving into building an e-commerce brand - part 1',
      published: '4 days ago',
      image: '/img/illustrations/layouts/post-16.svg',
      category: 'Ecommerce',
      author: {
        id: 33,
        avatar: '/img/avatars/18.svg',
        name: 'Harvey M.',
        initials: 'HM',
      },
    },
    {
      id: '17',
      title: 'Diving into building an e-commerce brand - part 2',
      published: '4 days ago',
      image: '/img/illustrations/layouts/post-17.svg',
      category: 'Ecommerce',
      author: {
        id: 33,
        avatar: '/img/avatars/18.svg',
        name: 'Harvey M.',
        initials: 'HM',
      },
    },
    {
      id: '18',
      title: 'How to make sure to reach the goals you set',
      published: '4 days ago',
      image: '/img/illustrations/layouts/post-18.svg',
      category: 'Management',
      author: {
        id: 31,
        avatar: '/img/avatars/23.svg',
        name: 'Yasseen A.',
        initials: 'YA',
      },
    },
  ])
}
