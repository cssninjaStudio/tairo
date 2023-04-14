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
      return [item.name, item.category].some((item) => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: 'Introduction to Html5',
      picture: '/img/illustrations/layouts/course-1.jpg',
      category: 'Web Development',
      difficulty: 1,
      price: 26,
      skill: {
        icon: 'uiw:html5',
        name: 'Html5',
      },
      author: {
        id: 8,
        picture: '/images/avatars/svg/vuero-1.svg',
        username: 'Erik K.',
        initials: 'EK',
        color: 'info',
      },
    },
    {
      id: 1,
      name: 'Mastering VueJS and Typescript',
      picture: '/img/illustrations/layouts/course-2.png',
      category: 'Web Development',
      difficulty: 4,
      price: 12,
      skill: {
        icon: 'teenyicons:vue-solid',
        name: 'Vue',
      },
      author: {
        id: 12,
        picture: '/img/avatars/12.jpg',
        username: 'Joshua S.',
        initials: 'JS',
        color: 'info',
      },
    },
    {
      id: 2,
      name: 'Discovering CSS3 and Stylesheets',
      picture: '/img/illustrations/layouts/course-3.jpg',
      category: 'Web Development',
      difficulty: 2,
      price: 16,
      skill: {
        icon: 'simple-icons:css3',
        name: 'CSS3',
      },
      author: {
        id: 12,
        picture: '/img/avatars/5.jpg',
        username: 'Mary L.',
        initials: 'ML',
        color: 'info',
      },
    },
    {
      id: 3,
      name: 'Get Started with Laravel 10',
      picture: '/img/illustrations/layouts/course-4.png',
      category: 'Web Development',
      difficulty: 3,
      price: 0,
      skill: {
        icon: 'teenyicons:laravel-solid',
        name: 'Laravel',
      },
      author: {
        id: 18,
        picture: '/img/avatars/18.jpg',
        username: 'Esteban C.',
        initials: 'EC',
        color: 'info',
      },
    },
    {
      id: 4,
      name: 'Python Basics for Beginners',
      picture: '/img/illustrations/layouts/course-5.jpeg',
      category: 'Web Development',
      difficulty: 1,
      price: 8,
      skill: {
        icon: 'akar-icons:python-fill',
        name: 'Python',
      },
      author: {
        id: 18,
        picture: '/img/avatars/18.jpg',
        username: 'Esteban C.',
        initials: 'EC',
        color: 'info',
      },
    },
    {
      id: 5,
      name: 'Mastering State with React Hooks',
      picture: '/img/illustrations/layouts/course-6.jpg',
      category: 'Web Development',
      difficulty: 4,
      price: 25,
      skill: {
        icon: 'teenyicons:react-solid',
        name: 'React.js',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'Clément D.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 6,
      name: 'Setting up an Express Server',
      picture: '/img/illustrations/layouts/course-7.png',
      category: 'Web Development',
      difficulty: 3,
      price: 12,
      skill: {
        icon: 'akar-icons:node-fill',
        name: 'Node.js',
      },
      author: {
        id: 38,
        picture: '/img/avatars/38.jpg',
        username: 'Christie D.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 7,
      name: 'Learning to use Kubernetes',
      picture: '/img/illustrations/layouts/course-9.jpg',
      category: 'Web Development',
      difficulty: 5,
      price: 34,
      skill: {
        icon: 'pajamas:kubernetes',
        name: 'Kubernetes',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'Clément D.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 8,
      name: 'Another Angular Crash Course',
      picture: '/img/illustrations/layouts/course-11.jpg',
      category: 'Web Development',
      difficulty: 4,
      price: 22,
      skill: {
        icon: 'simple-icons:angular',
        name: 'Angular',
      },
      author: {
        id: 34,
        picture: '/img/avatars/34.jpg',
        username: 'Daniel R.',
        initials: 'DR',
        color: 'info',
      },
    },
    {
      id: 9,
      name: 'learning Advanced Docker Concepts',
      picture: '/img/illustrations/layouts/course-12.jpg',
      category: 'Web Development',
      difficulty: 5,
      price: 35,
      skill: {
        icon: 'simple-icons:docker',
        name: 'Docker',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'Clément D.',
        initials: 'CD',
        color: 'info',
      },
    },
  ])
}
