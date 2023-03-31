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
      return [item.title, item.location, item.duration].some((item) =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      logo: '/img/logos/brands/airbnb.svg',
      title: 'Node JS Fullstack Developer wanted 👌',
      location: 'San Diego',
      duration: 'Full Time',
      requirements: '3 Years Exp.',
    },
    {
      id: '2',
      logo: '/img/logos/brands/hubspot.svg',
      title: 'Project Manager for React Native Project',
      location: 'Los Angeles',
      duration: 'Part Time',
      requirements: '2 Years Exp.',
    },
    {
      id: '3',
      logo: '/img/logos/brands/slack.svg',
      title: 'UI/UX Designer to Consolidate the UX Team 💪💪',
      location: 'Los Angeles',
      duration: 'Full Time',
      requirements: '3 Years Exp.',
    },
    {
      id: '4',
      logo: '/img/logos/brands/gitlab.svg',
      title: 'IT Team Senior DevOps Manager',
      location: 'Los Angeles',
      duration: 'Full Time',
      requirements: '10 Years Exp.',
    },
    {
      id: '5',
      logo: '/img/logos/brands/google.svg',
      title: 'Fullstack Developer With Solid MongoDB Skills',
      location: 'San Francisco',
      duration: 'Full Time',
      requirements: '5 Years Exp.',
    },
    {
      id: '6',
      logo: '/img/logos/brands/facebook.svg',
      title: 'Fullstack Javascript and Node JS Developer',
      location: 'Pasadena',
      duration: 'Full Time',
      requirements: '4 Years Exp.',
    },
    {
      id: '7',
      logo: '/img/logos/brands/tnw.svg',
      title: 'Product Owner for React Native Project',
      location: 'Los Angeles',
      duration: 'Full Time',
      requirements: '2 Years Exp.',
    },
    {
      id: '8',
      logo: '/img/logos/brands/dribbble.svg',
      title: 'UI/UX Designer With Html5 and Sass Skills 👍',
      location: 'San Diego',
      duration: 'Full Time',
      requirements: '4 Years Exp.',
    },
    {
      id: '9',
      logo: '/img/logos/brands/atlassian.svg',
      title: 'Experienced Senior UX Team Manager',
      location: 'Melbourne',
      duration: 'Full Time',
      requirements: '10 Years Exp.',
    },
    {
      id: '10',
      logo: '/img/logos/brands/github.svg',
      title: 'Fullstack Javascript and Node JS Developer',
      location: 'Los Angeles',
      duration: 'Part Time',
      requirements: '1 Year Exp.',
    },
    {
      id: '11',
      logo: '/img/logos/brands/airbnb.svg',
      title: 'Node JS Fullstack Developer wanted 👌',
      location: 'San Diego',
      duration: 'Full Time',
      requirements: '3 Years Exp.',
    },
    {
      id: '12',
      logo: '/img/logos/brands/airbnb.svg',
      title: 'Node JS Fullstack Developer wanted 👌',
      location: 'San Diego',
      duration: 'Full Time',
      requirements: '3 Years Exp.',
    },
  ])
}
