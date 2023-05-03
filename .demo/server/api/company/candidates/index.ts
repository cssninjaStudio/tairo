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
      return [item.username, item.location, item.position, item.industry].some(
        (item) => item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      username: 'Erik K.',
      position: 'Product Manager',
      src: '/img/avatars/20.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Las Vegas, NV',
      industry: 'Software',
      status: 'online',
      tasks: {
        pending: 37,
        done: 164,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/25.svg',
          text: 'AC',
        },
        {
          id: 2,
          src: '/img/avatars/16.svg',
          text: 'HM',
        },
        {
          id: 1,
          src: undefined,
          text: 'JP',
        },
        {
          id: 3,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 1,
      username: 'Sandra T.',
      position: 'Project Manager',
      src: '/img/avatars/22.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Los Angeles, CA',
      industry: 'Business',
      status: 'working',
      tasks: {
        pending: 21,
        done: 598,
        status: 0,
      },
      relations: [
        {
          id: 148,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 2,
      username: 'Melany W.',
      position: 'Web Developer',
      src: '/img/avatars/25.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'San Jose, CA',
      industry: 'Design',
      status: 'online',
      tasks: {
        pending: 45,
        done: 265,
        status: 1,
      },
      relations: [
        {
          id: 127,
          src: undefined,
          text: 'BT',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 19,
          src: '/img/avatars/19.svg',
          text: 'GK',
        },
        {
          id: 148,
          src: undefined,
          text: 'SC',
        },
        {
          id: 149,
          src: undefined,
          text: 'SC',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 3,
      username: 'Hermann M',
      position: 'Backend Developer',
      src: '/img/avatars/16.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Las Vegas, NV',
      industry: 'Accounting',
      status: 'suspended',
      tasks: {
        pending: 15,
        done: 575,
        status: 0,
      },
      relations: [
        {
          id: 7,
          src: '/img/avatars/8.svg',
          initials: 'TS',
        },
      ],
    },
    {
      id: 4,
      username: 'Heinrich L.',
      position: 'UI/UX Designer',
      src: '/img/avatars/13.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Los Angeles, CA',
      industry: 'Finance',
      status: 'working',
      tasks: {
        pending: 6,
        done: 47,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/3.svg',
          text: 'CD',
        },
        {
          id: 14,
          src: '/img/avatars/11.svg',
          text: 'KL',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
        {
          id: 152,
          src: undefined,
          text: 'SC',
        },
        {
          id: 154,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 5,
      username: 'Greta K.',
      position: 'Sales Manager',
      src: '/img/avatars/19.svg',
      badge: '/img/icons/flags/germany.svg',
      location: 'Berlin, Germany',
      industry: 'Business',
      status: 'online',
      tasks: {
        pending: 68,
        done: 128,
        status: 1,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/4.svg',
          text: 'AC',
        },
        {
          id: 49,
          src: '/img/avatars/3.svg',
          text: 'CJ',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
        {
          id: 152,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 6,
      username: 'Clément D.',
      position: 'Software Engineer',
      src: '/img/avatars/3.svg',
      badge: '/img/icons/flags/france.svg',
      location: 'Toulouse, France',
      industry: 'Software',
      status: 'Offline',
      tasks: {
        pending: 19,
        done: 127,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/15.svg',
          text: 'AC',
        },
        {
          id: 145,
          src: '/img/avatars/22.svg',
          text: 'AC',
        },
        {
          id: 8,
          src: '/img/avatars/16.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 7,
      username: 'Ronald D.',
      position: 'Product Manager',
      src: '/img/avatars/11.svg',
      badge: '/img/icons/flags/england.svg',
      location: 'London, UK',
      industry: 'Software',
      status: 'online',
      tasks: {
        pending: 24,
        done: 277,
        status: 0,
      },
      relations: [
        {
          id: 25,
          src: '/img/avatars/25.svg',
          text: 'AC',
        },
        {
          id: 13,
          src: '/img/avatars/13.svg',
          text: 'TS',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
      ],
    },
    {
      id: 8,
      username: 'Alan T.',
      position: 'Software Engineer',
      src: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      initials: 'AT',
      location: 'San Francisco, CA',
      industry: 'Software',
      status: 'Offline',
      tasks: {
        pending: 42,
        done: 227,
        status: 2,
      },
      relations: [
        {
          id: 25,
          src: '/img/avatars/25.svg',
          text: 'MW',
        },
      ],
    },
    {
      id: 9,
      username: 'Courtney W.',
      position: 'Web Developer',
      src: '/img/avatars/26.svg',
      badge: '/img/icons/flags/australia.svg',
      location: 'Melbourne, Australia',
      industry: 'Software',
      status: 'Offline',
      tasks: {
        pending: 12,
        done: 272,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/6.svg',
          text: 'AC',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 27,
          src: '/img/avatars/16.svg',
          text: 'CE',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 10,
      username: 'Jennifer D.',
      position: 'Sales Manager',
      src: '/img/avatars/24.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'San Diego, CA',
      industry: 'Sales',
      status: 'Offline',
      tasks: {
        pending: 11,
        done: 72,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          id: 156,
          src: undefined,
          text: 'JB',
        },
      ],
    },
    {
      id: 11,
      username: 'Kendra W.',
      position: 'HR Manager',
      src: '/img/avatars/10.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'New York, NY',
      industry: 'HR',
      status: 'Offline',
      tasks: {
        pending: 17,
        done: 272,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          id: 7,
          src: '/img/avatars/6.svg',
          text: 'JB',
        },
        {
          id: 27,
          src: '/img/avatars/9.svg',
          text: 'AB',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 12,
      username: 'Mike H.',
      position: 'Business Analyst',
      src: '/img/avatars/23.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Houston, TX',
      industry: 'Business',
      status: 'Offline',
      tasks: {
        pending: 27,
        done: 272,
        status: 1,
      },
      relations: [
        {
          id: 150,
          src: undefined,
          text: 'TE',
        },
        {
          id: 151,
          src: undefined,
          text: 'GV',
        },
      ],
    },
    {
      id: 13,
      username: 'Bryan F.',
      position: 'Software Engineer',
      src: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      initials: 'BF',
      location: 'Santa Monica, CA',
      industry: 'Software',
      status: 'Offline',
      tasks: {
        pending: 8,
        done: 28,
        status: 0,
      },
      relations: [
        {
          id: 150,
          src: undefined,
          text: 'TE',
        },
        {
          id: 151,
          src: undefined,
          text: 'GV',
        },
        {
          id: 12,
          src: '/img/avatars/25.svg',
          text: 'JT',
        },
      ],
    },
    {
      id: 14,
      username: 'John B.',
      position: 'Board Member',
      src: '/img/avatars/6.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'New York, NY',
      industry: 'Business',
      status: 'Offline',
      tasks: {
        pending: 4,
        done: 75,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: undefined,
          text: 'ST',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 27,
          src: '/img/avatars/5.svg',
          text: 'CM',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
  ])
}
