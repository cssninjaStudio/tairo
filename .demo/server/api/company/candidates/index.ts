export default defineEventHandler(async () => {
  const data = [
    {
      id: 0,
      username: 'Erik K.',
      position: 'Product Manager',
      src: '/img/avatars/20.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Las Vegas, NV',
      industry: 'Software',
      status: 'online',
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
      username: 'Jimmy H.',
      position: 'Project Manager',
      src: '/img/avatars/22.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Los Angeles, CA',
      industry: 'Business',
      status: 'working',
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
      username: 'Tara S.',
      position: 'UI/UX Designer',
      src: '/img/avatars/13.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'Los Angeles, CA',
      industry: 'Finance',
      status: 'working',
      relations: [
        {
          id: 0,
          src: '/img/avatars/5.svg',
          text: 'CM',
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
      username: 'Kelly M.',
      position: 'Product Manager',
      src: '/img/avatars/11.svg',
      badge: '/img/icons/flags/england.svg',
      location: 'London, UK',
      industry: 'Software',
      status: 'online',
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
      color: 'h-yellow',
      initials: 'AT',
      location: 'San Francisco, CA',
      industry: 'Software',
      status: 'Offline',
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
          src: '/img/avatars/27.svg',
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
  ]

  return data
})
