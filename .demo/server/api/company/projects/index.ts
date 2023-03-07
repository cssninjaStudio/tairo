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
    recent: data.filter((item) => item.recent === true),
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
      return [item.name, item.owner.name, item.category].some((item) =>
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
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          tooltip: 'Josh C.',
          text: 'JS',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          tooltip: 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'Design Software',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'Javascript',
          description: 'Programming Language',
          icon: '/img/stacks/js.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/flashlite.svg',
        name: 'Flashlite',
        text: 'Delivery',
      },
    },
    {
      id: '2',
      name: 'Health and Fitness Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/2.png',
      recent: true,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Kendra W.',
          text: 'KW',
        },
        {
          id: 21,
          src: '/img/avatars/21.svg',
          tooltip: 'Elizabet F.',
          text: 'EF',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Android',
          description: 'Mobile OS',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'React',
          description: 'JS Library',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'HTML5',
          description: 'Markup language',
          icon: '/img/stacks/html5.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/nitro.svg',
        name: 'Nitro',
        text: 'Wellness',
      },
    },
    {
      id: '3',
      name: 'Learning Tracker Dashboard',
      dueDate: 'September 2020',
      updated: '5h ago',
      image: '/img/apps/3.jpg',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Ryan B.',
          text: 'RB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Python',
          description: 'Programming Language',
          icon: '/img/stacks/python.svg',
        },
        {
          name: 'C#',
          description: 'Programming Language',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'Angular',
          description: 'JS Library',
          icon: '/img/stacks/angular.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/slicer.svg',
        name: 'Slicer Inc.',
        text: 'Productivity',
      },
    },
    {
      id: '4',
      name: 'Banking and Finance Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/4.jpg',
      recent: true,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Clarissa M.',
          text: 'CM',
        },
        {
          id: 21,
          src: '/img/avatars/3.svg',
          tooltip: 'Clarke G.',
          text: 'CG',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Vue',
          description: 'JS Library',
          icon: '/img/stacks/vuejs.svg',
        },
        {
          name: 'Android',
          description: 'Programming Language',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'Javascript',
          description: 'Programming Language',
          icon: '/img/stacks/js.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/okano.svg',
        name: 'Okano',
        text: 'Banking',
      },
    },
    {
      id: '5',
      name: 'Resume Management Mobile App',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/5.jpg',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Kendra W.',
          text: 'KW',
        },
        {
          id: 39,
          src: '/img/avatars/25.svg',
          tooltip: 'Melany L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'Markup Language',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'Android',
          description: 'Mobile Framework',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'Swift',
          description: 'Mobile Framework',
          icon: '/img/stacks/swift.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/clover.svg',
        name: 'Clover',
        text: 'SaaS Application',
      },
    },
    {
      id: '6',
      name: 'Banking Landing Page',
      dueDate: 'December 2020',
      updated: '3d ago',
      image: '/img/apps/6.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Josh C.',
          text: 'JS',
        },
        {
          id: 40,
          src: '/img/avatars/20.svg',
          tooltip: 'Harold S',
          text: 'HS',
        },
        {
          id: 8,
          src: '/img/avatars/11.svg',
          tooltip: 'Mike B.',
          text: 'MB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'C#',
          description: 'Programming Language',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'React',
          description: 'JS Library',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'Nodejs',
          description: 'Javascript Framework',
          icon: '/img/stacks/nodejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/bankaria.svg',
        name: 'Bankaria',
        text: 'Banking Solutions',
      },
    },
    {
      id: '7',
      name: 'Learning App Design',
      dueDate: 'November 2020',
      updated: '1h ago',
      image: '/img/apps/7.png',
      recent: true,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Mike B.',
          text: 'MB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'React',
          description: 'JS Library',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'Android',
          description: 'Mobile Framework',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'Swift',
          description: 'Mobile Framework',
          icon: '/img/stacks/swift.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/courserio.svg',
        name: 'Courserio',
        text: 'ELearning',
      },
    },
    {
      id: '8',
      name: 'Educational App Design',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/8.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Ana B.',
          text: 'AB',
        },
        {
          id: 29,
          src: '/img/avatars/10.svg',
          tooltip: 'Kendra W.',
          text: 'KW',
        },
        {
          id: 33,
          src: '/img/avatars/18.svg',
          tooltip: 'Harvey M.',
          text: 'HM',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Nodejs',
          description: 'JavaScript Runtime',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Sass',
          description: 'CSS Preprocessor',
          icon: '/img/stacks/sass.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/gradius.svg',
        name: 'Gradius',
        text: 'Digital Learning',
      },
    },
    {
      id: '9',
      name: 'Banking Solution Website',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/9.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Clarke G.',
          text: 'CG',
        },
        {
          id: 19,
          src: '/img/avatars/19.svg',
          tooltip: 'Greta K.',
          text: 'GK',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Nodejs',
          description: 'JavaScript Runtime',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Bulma',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/bulma.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/okano.svg',
        name: 'Okano',
        text: 'Banking',
      },
    },
    {
      id: '10',
      name: 'HR Webapp Design',
      dueDate: 'August 2020',
      updated: '2h ago',
      image: '/img/apps/10.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Sandrine C.',
          text: 'SC',
        },
        {
          id: 22,
          src: '/img/avatars/10.svg',
          tooltip: 'Kendra W.',
          text: 'KW',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Nodejs',
          description: 'JavaScript Runtime',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Tailwind CSS',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/rekrew.svg',
        name: 'Rekrew',
        text: 'Hiring Software',
      },
    },
    {
      id: '11',
      name: 'Ice Cream Delivery Dashboard',
      dueDate: 'January 2021',
      updated: '2h ago',
      image: '/img/apps/11.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Ana B.',
          text: 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Nodejs',
          description: 'JavaScript Runtime',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Tailwind CSS',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/meatboy.svg',
        name: 'Meatboy',
        text: 'Food Tech',
      },
    },
    {
      id: '12',
      name: 'Mobile App Landing Page',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/12.jpg',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Sarah Connor.',
          text: 'SC',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Laravel',
          description: 'Php Framework',
          icon: '/img/stacks/laravel.svg',
        },
        {
          name: 'Tailwind CSS',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/mobilol.svg',
        name: 'Mobilol',
        text: 'Mobile Application',
      },
    },
    {
      id: '13',
      name: 'Web Marketing Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/13.png',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Clarke G.',
          text: 'CG',
        },
        {
          id: 15,
          src: '/img/avatars/16.svg',
          tooltip: 'Hermann M.',
          text: 'HM',
        },
        {
          id: 12,
          src: '/img/avatars/8.svg',
          tooltip: 'Mario T.',
          text: 'MT',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'Design Software',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'Bulma',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/bulma.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/metamovies.svg',
        name: 'Metamovies',
        text: 'Digital Media',
      },
    },
    {
      id: '14',
      name: 'Startup Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/14.jpg',
      recent: false,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Yasseen A.',
          text: 'YA',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Nodejs',
          description: 'JavaScript Runtime',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Tailwind CSS',
          description: 'CSS Framework',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'Design Software',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/bingo.svg',
        name: 'Bingo',
        text: 'Startup',
      },
    },
    {
      id: '15',
      name: 'Expense Management System',
      dueDate: 'January 2021',
      updated: '2d ago',
      image: '/img/apps/15.png',
      recent: true,
      category: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'Fixed',
      },
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
          tooltip: 'Clarissa M.',
          text: 'CM',
        },
        {
          id: 24,
          src: '/img/avatars/24.svg',
          tooltip: 'Ana B.',
          text: 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'Company UX Guide',
          icon: '/img/icons/files/pdf.svg',
          size: '4.7MB',
          version: '1.5.2',
          uploaded: '2 weeks ago',
          author: {
            name: 'Hermann M.',
            picture: '/img/avatars/16.svg',
          },
        },
        {
          id: 1,
          name: 'Thech summit expenses',
          icon: '/img/icons/files/sheet.svg',
          size: '34KB',
          version: '1.1.3',
          uploaded: '3 days ago',
          author: {
            name: 'Clarissa M.',
            picture: '/img/avatars/5.svg',
          },
        },
        {
          id: 2,
          name: 'Project outline',
          icon: '/img/icons/files/doc-2.svg',
          size: '77KB',
          version: '1.0.0',
          uploaded: '5 days ago',
          author: {
            name: 'Clark D.',
            picture: '/img/avatars/3.svg',
          },
        },
        {
          id: 3,
          name: 'UX presentation',
          icon: '/img/icons/files/ppt.svg',
          size: '2.3MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Terry S.',
            picture: '/img/avatars/11.svg',
          },
        },
        {
          id: 4,
          name: 'Website Homepage Redesign',
          icon: '/img/icons/files/ai.svg',
          size: '4.8MB',
          version: '1.0.0',
          uploaded: '2 weeks ago',
          author: {
            name: 'Lana E.',
            picture: '/img/avatars/4.svg',
          },
        },
        {
          id: 5,
          name: 'UX Ramp Up for Interns',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '3 days ago',
          author: {
            name: 'Howard L.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'Sketch',
          description: 'Design Software',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'Illustrator',
          description: 'Design Software',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Photoshop',
          description: 'Design Software',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Python',
          description: 'Programming Language',
          icon: '/img/stacks/python.svg',
        },
        {
          name: 'C#',
          description: 'Programming Language',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'Angular',
          description: 'JS Library',
          icon: '/img/stacks/angular.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 75,
          created: '2 days ago',
          attachments: 3,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a desktop and mobile landing page wireframe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 25,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom video player javascript librar',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design custom illustrations for landing page',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement job management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement user management API controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Develop a JWT authentication controller',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 7,
          name: 'Create a new design for the homepage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completion: 0,
          created: '2 days ago',
          attachments: 0,
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/masterio.svg',
        name: 'Masterio',
        text: 'Fintech',
      },
    },
  ])
}
