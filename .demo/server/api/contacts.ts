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
      return [item.name, item.location, item.role].some((item) =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: '13',
      name: 'Tara Svenson',
      shortname: 'Tara S.',
      location: 'New York, NY',
      role: 'UI/UX Designer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/13.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 65,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '37',
      name: 'Helmut Fritz',
      shortname: 'Helmut F.',
      location: 'Paris, France',
      role: 'Product Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/37.jpg',
        badge: '/images/icons/flags/france.svg',
      },
      progress: 38,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '25',
      name: 'Melany Wallace',
      shortname: 'Melany W.',
      location: 'San Jose, CA',
      role: 'Web Developer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/25.jpg',
        badge: '/images/icons/stacks/js.svg',
      },
      progress: 58,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '29',
      name: 'Hakeem Calami',
      shortname: 'Hakeem C.',
      location: 'Berlin, Germany',
      role: 'Software Engineer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/29.jpg',
        badge: '/images/icons/stacks/python.svg',
      },
      progress: 85,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '39',
      name: 'Alejandro Badajoz',
      shortname: 'Alejandro B.',
      location: 'New York, NY',
      role: 'Business Analyst',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/39.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 28,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '40',
      name: 'Jeanne Marchand',
      shortname: 'Jeanne M.',
      location: 'Paris, France',
      role: 'Mobile Developer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/40.jpg',
        badge: '/images/icons/stacks/android.svg',
      },
      progress: 67,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '19',
      name: 'Greta Kroppfer',
      shortname: 'Greta K.',
      location: 'Berlin, Germany',
      role: 'Sales Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/19.jpg',
        badge: '/images/icons/flags/germany.svg',
      },
      progress: 56,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '9',
      name: 'Ana Baker',
      shortname: 'Ana B.',
      location: 'San Francisco, CA',
      role: 'UI/UX Designer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/9.jpg',
        badge: '/images/icons/stacks/photoshop.svg',
      },
      progress: 12,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '5',
      name: 'Mary Lebowski',
      shortname: 'Mary L.',
      location: 'San Diego, CA',
      role: 'Project Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/5.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 29,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '32',
      name: 'Jonathan Krugger',
      shortname: 'Jonathan K.',
      location: 'Los Angeles, CA',
      role: 'Product Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/32.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 91,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '36',
      name: 'Benoit Leblanc',
      shortname: 'Benoit L.',
      location: 'Paris, France',
      role: 'Software Engineer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/36.jpg',
        badge: '/images/icons/stacks/reactjs.svg',
      },
      progress: 44,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '38',
      name: 'Christie Dallas',
      shortname: 'Christie D.',
      location: 'Los Angeles, CA',
      role: 'Web Developer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/38.jpg',
        badge: '/images/icons/stacks/vuejs.svg',
      },
      progress: 61,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '26',
      name: 'Courtney Wilson',
      shortname: 'Courtney W.',
      location: 'Melbourne, Australia',
      role: 'Web Developer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/26.jpg',
        badge: '/images/icons/stacks/html5.svg',
      },
      progress: 53,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '16',
      name: 'Jason Guarank',
      shortname: 'Jason G.',
      location: 'Houston, TX',
      role: 'Business Analyst',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/16.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 78,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '23',
      name: 'Irina Vierbovsky',
      shortname: 'Irina V.',
      location: 'San Diego, CA',
      role: 'Project Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/23.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 36,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '28',
      name: 'Edouard Falant',
      shortname: 'Edouard F.',
      location: 'Paris, France',
      role: 'Web Developer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/28.jpg',
        badge: '/images/icons/stacks/angular.svg',
      },
      progress: 49,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '7',
      name: 'Alice Carasca',
      shortname: 'Alice C.',
      location: 'San Diego, CA',
      role: 'Software Engineer',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/7.jpg',
        badge: '/images/icons/stacks/csharp.svg',
      },
      progress: 78,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '22',
      name: 'Dwayne Hicks',
      shortname: 'Dwayne H.',
      location: 'Los Angeles, CA',
      role: 'Product Manager',
      bio: 'This is a nice user description that we can use as demo content.',
      medias: {
        avatar: '/demo/avatars/22.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 17,
      social: [
        {
          channel: 'Linkedin',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'Twitter',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'Dribbble',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'GitHub',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
  ])
}
