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
      return [item.username, item.location, item.position].some((item) =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 29,
      picture: '/img/avatars/22.svg',
      badge: '/img/stacks/python.svg',
      username: 'Miranda L.',
      initials: 'ML',
      status: 'new',
      location: 'Berlin, Germany',
      position: 'Software Engineer',
      completed: 12,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 21,
      picture: '/img/avatars/21.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'Elisabeth F.',
      initials: 'EF',
      status: 'available',
      location: 'London, UK',
      position: 'Mobile Developer',
      completed: 49,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 8,
      picture: '/img/avatars/23.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Erik K.',
      initials: 'EK',
      status: 'available',
      location: 'New York, NY',
      position: 'Software Engineer',
      completed: 61,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 7,
      picture: '/img/avatars/10.svg',
      badge: '/img/stacks/js.svg',
      username: 'Kendra W.',
      initials: 'KW',
      status: 'available',
      location: 'San Diego, CA',
      position: 'Software Engineer',
      completed: 28,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 122,
      picture: '/img/avatars/16.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Hermann M.',
      initials: 'HM',
      color: 'warning',
      status: 'busy',
      location: 'San Diego, CA',
      position: 'Product Manager',
      completed: 36,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 23,
      picture: '/img/avatars/11.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Dan B.',
      initials: 'DB',
      status: 'available',
      location: 'San Diego, CA',
      position: 'Project Manager',
      completed: 71,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 37,
      picture: '/img/avatars/24.svg',
      badge: '/img/icons/flags/france.svg',
      username: 'Christina F.',
      initials: 'CF',
      status: 'available',
      location: 'Paris, France',
      position: 'Product Manager',
      completed: 32,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 25,
      picture: '/img/avatars/25.svg',
      badge: '/img/stacks/js.svg',
      username: 'Melany W.',
      initials: 'MW',
      status: 'new',
      location: 'San Diego, CA',
      position: 'Web Developer',
      completed: 49,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 39,
      picture: '/img/avatars/3.svg',
      badge: '/img/stacks/python.svg',
      username: 'Alejandro B.',
      initials: 'AB',
      status: 'available',
      location: 'New York, NY',
      position: 'Business Analyst',
      completed: 58,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 19,
      picture: '/img/avatars/19.svg',
      badge: '/img/icons/flags/germany.svg',
      username: 'Greta K.',
      initials: 'GK',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'Sales Manager',
      completed: 19,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 9,
      picture: '/img/avatars/9.svg',
      badge: '/img/stacks/illustrator.svg',
      username: 'Anna B.',
      initials: 'AB',
      status: 'busy',
      location: 'San Francisco, CA',
      position: 'UI/UX Designer',
      completed: 49,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 124,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Alan T.',
      initials: 'AT',
      status: 'busy',
      location: 'New York, NY',
      position: 'Software Engineer',
      completed: 56,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 120,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Sara C.',
      initials: 'SC',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'UI/UX Designer',
      completed: 35,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 32,
      picture: '/img/avatars/1.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Jonathan K.',
      initials: 'JK',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'Product Manager',
      completed: 24,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 36,
      picture: '/img/avatars/18.svg',
      badge: '/img/stacks/reactjs.svg',
      username: 'Benoit B.',
      initials: 'BB',
      status: 'offline',
      location: 'Paris, France',
      position: 'Software Engineer',
      completed: 41,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 38,
      picture: '/img/avatars/2.svg',
      badge: '/img/stacks/vuejs.svg',
      username: 'Maya R.',
      initials: 'MR',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'Web Developer',
      completed: 36,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 26,
      picture: '/img/avatars/26.svg',
      badge: '/img/stacks/html5.svg',
      username: 'Courtney W.',
      initials: 'CW',
      status: 'available',
      location: 'Melbourne, AU',
      position: 'Web Developer',
      completed: 64,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 16,
      picture: '/img/avatars/8.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Jason G.',
      initials: 'JG',
      status: 'offline',
      location: 'Houston, TX',
      position: 'Business Analyst',
      completed: 85,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 28,
      picture: '/img/avatars/17.svg',
      badge: '/img/stacks/angular.svg',
      username: 'Edouard F.',
      initials: 'EF',
      status: 'new',
      location: 'Paris, France',
      position: 'Web Developer',
      completed: 14,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 22,
      picture: '/img/avatars/13.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Dwayne H.',
      initials: 'DH',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'Product Manager',
      completed: 29,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 13,
      picture: '/img/avatars/22.svg',
      badge: '/img/stacks/illustrator.svg',
      username: 'Tara S.',
      initials: 'TS',
      status: 'busy',
      location: 'New York, NY',
      position: 'UI/UX Designer',
      completed: 57,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 24,
      picture: '/img/avatars/5.svg',
      badge: '/img/icons/flags/france.svg',
      username: 'Clarissa M.',
      initials: 'CM',
      status: 'available',
      location: 'Lyon, France',
      position: 'HR Manager',
      completed: 61,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 27,
      picture: '/img/avatars/12.svg',
      badge: '/img/icons/flags/spain.svg',
      username: 'Carmen E.',
      initials: 'CE',
      status: 'available',
      location: 'Madrid, Spain',
      position: 'HR Manager',
      completed: 41,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 11,
      picture: '/img/avatars/4.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'Kelly M.',
      initials: 'KM',
      status: 'offline',
      location: 'London, UK',
      position: 'HR Manager',
      completed: 52,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 15,
      picture: '/img/avatars/15.svg',
      badge: '/img/icons/flags/germany.svg',
      username: 'Josh C.',
      initials: 'JC',
      status: 'available',
      location: 'Berlin, Germany',
      position: 'Software Engineer',
      completed: 37,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 14,
      picture: '/img/avatars/14.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'Ryan B.',
      initials: 'RB',
      status: 'available',
      location: 'London, UK',
      position: 'Web Developer',
      completed: 89,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 10,
      picture: '/img/avatars/6.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Henry G.',
      initials: 'HG',
      status: 'busy',
      location: 'Miami, FL',
      position: 'Business Analyst',
      completed: 56,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 18,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Esteban C.',
      initials: 'EC',
      status: 'available',
      location: 'Miami, FL',
      position: 'UI/UX Designer',
      completed: 81,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
  ])
}
