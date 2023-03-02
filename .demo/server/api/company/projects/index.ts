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
      return [item.name, item.owner.name, item.dueDate].some((item) =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      name: 'Delivery App Project',
      dueDate: 'August 2020',
      updated: '3m ago',
      image: '/img/apps/1.jpg',
      owner: {
        id: 7,
        avatar: '/img/avatars/3.svg',
        name: 'Clarke G.',
        text: 'CG',
      },
      team: [
        {
          id: 27,
          src: '/img/avatars/24.svg',
          name: 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          name: 'Hilde V.',
          text: 'HV',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          name: 'Joshua S.',
          text: 'JS',
        },
      ],
    },
    {
      id: '2',
      name: 'Health and Fitness Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/2.png',
      owner: {
        id: 8,
        avatar: '/img/avatars/12.svg',
        name: 'Marjory L.',
        text: 'ML',
      },
      team: [
        {
          id: 13,
          src: '/img/avatars/10.svg',
          name: 'Tara S.',
          text: 'TS',
        },
        {
          id: 21,
          src: '/img/avatars/21.svg',
          name: 'Elizabet F.',
          text: 'EF',
        },
      ],
    },
    {
      id: '3',
      name: 'Learning Tracker Dashboard',
      dueDate: 'September 2020',
      updated: '5h ago',
      image: '/img/apps/3.png',
      owner: {
        id: 25,
        avatar: '/img/avatars/2.svg',
        name: 'Maya R.',
        text: 'MR',
      },
      team: [
        {
          id: 14,
          src: '/img/avatars/14.svg',
          name: 'Ryan B.',
          text: 'RB',
        },
      ],
    },
    {
      id: '4',
      name: 'Banking and Finance Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/4.png',
      owner: {
        id: 23,
        avatar: '/img/avatars/16.svg',
        name: 'Hermann M.',
        text: 'HM',
      },
      team: [
        {
          id: 13,
          src: '/img/avatars/5.svg',
          name: 'Clarissa M.',
          text: 'CM',
        },
        {
          id: 21,
          src: '/img/avatars/3.svg',
          name: 'Clarke G.',
          text: 'CG',
        },
      ],
    },
    {
      id: '5',
      name: 'Resume Management Mobile App',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/5.png',
      owner: {
        id: 11,
        avatar: '/img/avatars/11.svg',
        name: 'Mike B.',
        text: 'MB',
      },
      team: [
        {
          id: 30,
          src: '/img/avatars/10.svg',
          name: 'Kendra W.',
          text: 'KW',
        },
        {
          id: 39,
          src: '/img/avatars/25.svg',
          name: 'Melany L.',
          text: 'ML',
        },
      ],
    },
    {
      id: '6',
      name: 'Banking Landing Page',
      dueDate: 'December 2020',
      updated: '3d ago',
      image: '/img/apps/6.png',
      owner: {
        id: 9,
        avatar: '/img/avatars/9.svg',
        name: 'Ana B.',
        text: 'AB',
      },
      team: [
        {
          id: 15,
          src: '/img/avatars/15.svg',
          name: 'Josh C.',
          text: 'JS',
        },
        {
          id: 40,
          src: '/img/avatars/20.svg',
          name: 'Harold S',
          text: 'HS',
        },
        {
          id: 8,
          src: '/img/avatars/11.svg',
          name: 'Erik K.',
          text: 'EK',
        },
      ],
    },
    {
      id: '7',
      name: 'Learning App Design',
      dueDate: 'November 2020',
      updated: '1h ago',
      image: '/img/apps/7.png',
      owner: {
        id: 25,
        avatar: '/img/avatars/25.svg',
        name: 'Melany L.',
        text: 'ML',
      },
      team: [
        {
          id: 11,
          src: '/img/avatars/11.svg',
          name: 'Mike B.',
          text: 'MB',
        },
      ],
    },
    {
      id: '8',
      name: 'Educational App Design',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/8.png',
      owner: {
        id: 5,
        avatar: '/img/avatars/5.svg',
        name: 'Clarissa M.',
        text: 'CM',
      },
      team: [
        {
          id: 21,
          src: '/img/avatars/9.svg',
          name: 'Ana B.',
          text: 'AB',
        },
        {
          id: 29,
          src: '/img/avatars/10.svg',
          name: 'Kendra W.',
          text: 'KW',
        },
        {
          id: 33,
          src: '/img/avatars/18.svg',
          name: 'Harvey M.',
          text: 'HM',
        },
      ],
    },
    {
      id: '9',
      name: 'Banking Solution Website',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/9.png',
      owner: {
        id: 27,
        avatar: '/img/avatars/24.svg',
        name: 'Carmen E.',
        text: 'CE',
      },
      team: [
        {
          id: 30,
          src: '/img/avatars/3.svg',
          name: 'Clarke G.',
          text: 'CG',
        },
        {
          id: 19,
          src: '/img/avatars/19.svg',
          name: 'Greta K.',
          text: 'GK',
        },
      ],
    },
    {
      id: '10',
      name: 'HR Webapp Design',
      dueDate: 'August 2020',
      updated: '2h ago',
      image: '/img/apps/10.png',
      owner: {
        id: 27,
        avatar: '/img/avatars/24.svg',
        name: 'Carmen E.',
        text: 'CE',
      },
      team: [
        {
          id: 24,
          src: '/img/avatars/22.svg',
          name: 'Sandrine C.',
          text: 'SC',
        },
        {
          id: 22,
          src: '/img/avatars/10.svg',
          name: 'Kendra W.',
          text: 'KW',
        },
      ],
    },
    {
      id: '11',
      name: 'Ice Cream Delivery Dashboard',
      dueDate: 'January 2021',
      updated: '2h ago',
      image: '/img/apps/11.png',
      owner: {
        id: 13,
        avatar: '/img/avatars/13.svg',
        name: 'Terry S.',
        text: 'TS',
      },
      team: [
        {
          id: 28,
          src: '/img/avatars/9.svg',
          name: 'Ana B.',
          text: 'AB',
        },
      ],
    },
    {
      id: '12',
      name: 'Mobile App Landing Page',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/12.jpg',
      owner: {
        id: 12,
        avatar: '/img/avatars/10.svg',
        name: 'Kendra W.',
        text: 'KW',
      },
      team: [
        {
          id: 119,
          src: undefined,
          name: 'Sarah Connor.',
          text: 'SC',
        },
      ],
    },
    {
      id: '13',
      name: 'Web Marketing Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/13.png',
      owner: {
        id: 12,
        avatar: '/img/avatars/20.svg',
        name: 'Harold S.',
        text: 'HS',
      },
      team: [
        {
          id: 8,
          src: '/img/avatars/3.svg',
          name: 'Clarke G.',
          text: 'CG',
        },
        {
          id: 15,
          src: '/img/avatars/16.svg',
          name: 'Hermann M.',
          text: 'HM',
        },
        {
          id: 12,
          src: '/img/avatars/8.svg',
          name: 'Mario T.',
          text: 'MT',
        },
      ],
    },
    {
      id: '14',
      name: 'Startup Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/14.jpg',
      owner: {
        id: 15,
        avatar: '/img/avatars/15.svg',
        name: 'Josh K.',
        text: 'JK',
      },
      team: [
        {
          id: 31,
          src: undefined,
          name: 'Yasseen A.',
          text: 'YA',
        },
      ],
    },
    {
      id: '15',
      name: 'Expense Management System',
      dueDate: 'January 2021',
      updated: '2d ago',
      image: '/img/apps/15.png',
      owner: {
        id: 39,
        avatar: '/img/avatars/16.svg',
        name: 'Hermann M.',
        text: 'HM',
      },
      team: [
        {
          id: 5,
          src: '/img/avatars/5.svg',
          name: 'Clarissa M.',
          text: 'CM',
        },
        {
          id: 24,
          src: '/img/avatars/24.svg',
          name: 'Ana B.',
          text: 'AB',
        },
      ],
    },
  ])
}
