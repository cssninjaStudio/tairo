export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''
  const slug = (query.slug as string) || ''

  if (perPage >= 50) {
    // Create an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const data = await getDemoData()

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
    recent: data.filter((item) => item.recent === true),
    project: slug ? data.find((item) => item.slug === slug) : undefined,
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
      slug: 'delivery-app-project',
      name: 'Delivery App Project',
      dueDate: 'August 2020',
      updated: '3m ago',
      image: '/img/apps/1.jpg',
      completed: 75,
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
        badge: '/img/stacks/reactjs.svg',
        role: 'Frontend Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Clarke G.',
        text: 'CG',
      },
      team: [
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'health-and-fitness-dashboard',
      name: 'Health and Fitness Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/2.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Marjory L.',
        text: 'ML',
      },
      team: [
        {
          id: 13,
          src: '/img/avatars/10.svg',
          badge: '/img/stacks/reactjs.svg',
          role: 'Software Engineer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Kendra W.',
          'data-tooltip': 'Kendra W.',
          text: 'KW',
        },
        {
          id: 21,
          src: '/img/avatars/21.svg',
          badge: '/img/stacks/html5.svg',
          role: 'UI Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Elizabet F.',
          'data-tooltip': 'Elizabet F.',
          text: 'EF',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/16.svg',
          badge: '/img/stacks/react.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Hermann M.',
          'data-tooltip': 'Hermann M.',
          text: 'HM',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'learning-tracker-dashboard',
      name: 'Learning Tracker Dashboard',
      dueDate: 'September 2020',
      updated: '5h ago',
      image: '/img/apps/3.jpg',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Maya R.',
        text: 'MR',
      },
      team: [
        {
          id: 14,
          src: '/img/avatars/14.svg',
          badge: '/img/stacks/js.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Ryan B.',
          'data-tooltip': 'Ryan B.',
          text: 'RB',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'banking-and-finance-dashboard',
      name: 'Banking and Finance Dashboard',
      dueDate: 'October 2020',
      updated: '5h ago',
      image: '/img/apps/4.jpg',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Hermann M.',
        text: 'HM',
      },
      team: [
        {
          id: 13,
          src: '/img/avatars/1.svg',
          badge: '/img/stacks/vuejs.svg',
          role: 'Solution Architect',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Rob H.',
          'data-tooltip': 'Rob H.',
          text: 'RH',
        },
        {
          id: 21,
          src: '/img/avatars/20.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fronted Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Anthony D.',
          'data-tooltip': 'Anthony D.',
          text: 'AD',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          description: 'Mobile Framework',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'resume-management-mobile-app',
      name: 'Resume Management App',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/5.jpg',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Mike B.',
        text: 'MB',
      },
      team: [
        {
          id: 30,
          src: '/img/avatars/10.svg',
          badge: '/img/stacks/js.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Kendra W.',
          'data-tooltip': 'Kendra W.',
          text: 'KW',
        },
        {
          id: 39,
          src: '/img/avatars/25.svg',
          badge: '/img/stacks/reactjs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Melany L.',
          'data-tooltip': 'Melany L.',
          text: 'ML',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'banking-landing-page',
      name: 'Banking Landing Page',
      dueDate: 'December 2020',
      updated: '3d ago',
      image: '/img/apps/6.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Ana B.',
        text: 'AB',
      },
      team: [
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JS',
        },
        {
          id: 59,
          src: '/img/avatars/2.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'Graphic Artist',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Maya R.',
          'data-tooltip': 'Maya R.',
          text: 'MR',
        },
        {
          id: 40,
          src: '/img/avatars/20.svg',
          badge: '/img/stacks/js.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Harold S',
          'data-tooltip': 'Harold S',
          text: 'HS',
        },
        {
          id: 8,
          src: '/img/avatars/11.svg',
          badge: '/img/stacks/js.svg',
          role: 'Solution Architect',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Mike B.',
          'data-tooltip': 'Mike B.',
          text: 'MB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'learning-app-design',
      name: 'Learning App Design',
      dueDate: 'November 2020',
      updated: '1h ago',
      image: '/img/apps/7.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Melany L.',
        text: 'ML',
      },
      team: [
        {
          id: 11,
          src: '/img/avatars/11.svg',
          badge: '/img/stacks/js.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Mike B.',
          'data-tooltip': 'Mike B.',
          text: 'MB',
        },
        {
          id: 11,
          src: '/img/avatars/8.svg',
          badge: '/img/stacks/android.svg',
          role: 'Mobile Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Arthur B.',
          'data-tooltip': 'Arthur B.',
          text: 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'educational-app-design',
      name: 'Educational App Design',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/8.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Clarissa M.',
        text: 'CM',
      },
      team: [
        {
          id: 21,
          src: '/img/avatars/9.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Ana B.',
          'data-tooltip': 'Ana B.',
          text: 'AB',
        },
        {
          id: 29,
          src: '/img/avatars/13.svg',
          badge: '/img/stacks/reactjs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Henry C.',
          'data-tooltip': 'Henry C.',
          text: 'HC',
        },
        {
          id: 33,
          src: '/img/avatars/22.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Greta K.',
          'data-tooltip': 'Greta K.',
          text: 'GK',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'banking-solution-website',
      name: 'Banking Solution Website',
      dueDate: 'October 2020',
      updated: '2h ago',
      image: '/img/apps/9.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'Frontend Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Carmen E.',
        text: 'CE',
      },
      team: [
        {
          id: 30,
          src: '/img/avatars/3.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Clarke G.',
          'data-tooltip': 'Clarke G.',
          text: 'CG',
        },
        {
          id: 19,
          src: '/img/avatars/19.svg',
          badge: '/img/stacks/nodejs.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Greta K.',
          'data-tooltip': 'Greta K.',
          text: 'GK',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'hr-webapp-design',
      name: 'HR Webapp Design',
      dueDate: 'August 2020',
      updated: '2h ago',
      image: '/img/apps/10.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'Frontend Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Carmen E.',
        text: 'CE',
      },
      team: [
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 24,
          src: '/img/avatars/22.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Sandrine C.',
          'data-tooltip': 'Sandrine C.',
          text: 'SC',
        },
        {
          id: 22,
          src: '/img/avatars/10.svg',
          badge: '/img/stacks/js.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Kendra W.',
          'data-tooltip': 'Kendra W.',
          text: 'KW',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'ice-cream-delivery-dashboard',
      name: 'Ice Cream Delivery Dashboard',
      dueDate: 'January 2021',
      updated: '2h ago',
      image: '/img/apps/11.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Terry S.',
        text: 'TS',
      },
      team: [
        {
          id: 28,
          src: '/img/avatars/9.svg',
          badge: '/img/stacks/android.svg',
          role: 'Mobile Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Ana B.',
          'data-tooltip': 'Ana B.',
          text: 'AB',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/reactjs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'mobile-app-landing-page',
      name: 'Mobile App Landing Page',
      dueDate: 'November 2020',
      updated: '4d ago',
      image: '/img/apps/12.jpg',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Kendra W.',
        text: 'KW',
      },
      team: [
        {
          id: 119,
          src: '/img/avatars/22.svg',
          badge: '/img/stacks/js.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Sarah C.',
          'data-tooltip': 'Sarah C.',
          text: 'SC',
        },
        {
          id: 27,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/vuejs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Carmen E.',
          'data-tooltip': 'Carmen E.',
          text: 'CE',
        },
        {
          id: 15,
          src: '/img/avatars/15.svg',
          badge: '/img/stacks/js.svg',
          role: 'Fullstack Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Josh C.',
          'data-tooltip': 'Josh C.',
          text: 'JC',
        },
        {
          id: 12,
          src: '/img/avatars/12.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Marjory L.',
          'data-tooltip': 'Marjory L.',
          text: 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'web-marketing-landing-page',
      name: 'Web Marketing Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/13.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Harold S.',
        text: 'HS',
      },
      team: [
        {
          id: 8,
          src: '/img/avatars/3.svg',
          badge: '/img/stacks/js.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Clarke G.',
          'data-tooltip': 'Clarke G.',
          text: 'CG',
        },
        {
          id: 15,
          src: '/img/avatars/16.svg',
          badge: '/img/stacks/android.svg',
          role: 'Mobile Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Hermann M.',
          'data-tooltip': 'Hermann M.',
          text: 'HM',
        },
        {
          id: 12,
          src: '/img/avatars/8.svg',
          badge: '/img/stacks/python.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Mario T.',
          'data-tooltip': 'Mario T.',
          text: 'MT',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'startup-landing-page',
      name: 'Startup Landing Page',
      dueDate: 'November 2020',
      updated: '3m ago',
      image: '/img/apps/14.jpg',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Josh K.',
        text: 'JK',
      },
      team: [
        {
          id: 31,
          src: '/img/avatars/21.svg',
          badge: '/img/stacks/illustrator.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Howard D.',
          'data-tooltip': 'Howard D.',
          text: 'HD',
        },
        {
          id: 15,
          src: '/img/avatars/16.svg',
          badge: '/img/stacks/python.svg',
          role: 'Solution Architect',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Hermann M.',
          'data-tooltip': 'Hermann M.',
          text: 'HM',
        },
        {
          id: 12,
          src: '/img/avatars/8.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Mario T.',
          'data-tooltip': 'Mario T.',
          text: 'MT',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
      slug: 'expense-management-system',
      name: 'Expense Management System',
      dueDate: 'January 2021',
      updated: '2d ago',
      image: '/img/apps/15.png',
      completed: 75,
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
        badge: '/img/stacks/js.svg',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        name: 'Hermann M.',
        text: 'HM',
      },
      team: [
        {
          id: 5,
          src: '/img/avatars/5.svg',
          badge: '/img/stacks/js.svg',
          role: 'UI/UX Designer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Clarissa M.',
          'data-tooltip': 'Clarissa M.',
          text: 'CM',
        },
        {
          id: 15,
          src: '/img/avatars/16.svg',
          badge: '/img/stacks/vuejs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Hermann M.',
          'data-tooltip': 'Hermann M.',
          text: 'HM',
        },
        {
          id: 12,
          src: '/img/avatars/8.svg',
          badge: '/img/stacks/reactjs.svg',
          role: 'Frontend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Mario T.',
          'data-tooltip': 'Mario T.',
          text: 'MT',
        },
        {
          id: 24,
          src: '/img/avatars/24.svg',
          badge: '/img/stacks/csharp.svg',
          role: 'Solution Architect',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          tooltip: 'Ana B.',
          'data-tooltip': 'Ana B.',
          text: 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
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
          name: 'Create a new figma design for the new homepage elements',
          description:
            'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
          completion: 100,
          status: 5,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'a week ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a set of button elements',
              done: true,
            },
            {
              text: 'Create a set of badge elements',
              done: true,
            },
            {
              text: 'Create a set of input elements',
              done: true,
            },
            {
              text: 'Create a set of checkbox elements',
              done: true,
            },
            {
              text: 'Create a set of card elements',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think buttons corners should be a little more rounded.',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Are you planning to add this as a global setting in the configuration file?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Not sure about it yet. Still need to check this out with the engineering team',
              author: {
                name: 'Marjory L.',
                picture: '/img/avatars/12.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'Build a landing page template for future marketing campaigns',
          description:
            'The website should provide a customizable landing page template that can be used to support marketing campaigns. It should also be easily customizable by the marketing team.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Melany D.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '5 days ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a customizable hero section',
              done: true,
            },
            {
              text: 'Create a customizable pricing section',
              done: true,
            },
            {
              text: 'Create a customizable features section',
              done: true,
            },
            {
              text: 'Create a customizable testimonials section',
              done: false,
            },
            {
              text: 'Create a customizable contact section',
              done: false,
            },
          ],
          created: '6 days ago',
          attachments: 2,
          comments: [
            {
              text: 'Iam wondering if we should add a section for the team members? it could be nice. And what about a section for the latest blog posts?',
              author: {
                name: 'Selena M.',
                picture: '/img/avatars/24.svg',
                posted: '7 hours ago',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Build a custom javascript video player with streaming support',
          description:
            "Since we couldn't find an out of the box solution, we are forced to build a custom player that we can reuse in othe projects.",
          completion: 45,
          status: 1,
          created: '18 days ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Greta K.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Implement basic frame and controls',
              done: true,
            },
            {
              text: 'Design and implement custom svg control icons',
              done: true,
            },
            {
              text: 'Implement video streaming support',
              done: false,
            },
            {
              text: 'Implement video playback speed control',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'Iam wondering if we should add several display modes for the player? It could be nice to have a fullscreen mode for example.',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'Yeah, that would be nice. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '3 days ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, ahave you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Erik K.',
                picture: '/img/avatars/8.svg',
                posted: '3 days ago',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Design a set of custom branded illustrations for the website and the app',
          description:
            'The customer wants to have a set of illustrations that can be used on the website and the app. They should be custom branded and fit the overall design.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'Fullstack Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Josh C.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '1 month ago',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create illustrations for the landing page',
              done: true,
            },
            {
              text: 'Rework svgs to use the currentColor for fill and stroke attributes',
              done: true,
            },
            {
              text: 'Prepare svg parts that will be animated',
              done: true,
            },
            {
              text: 'Work on a set of branded icons',
              done: false,
            },
          ],
          comments: [
            {
              text: 'This is starting to look really good. I wonder if we should abstract the characters a little bit more? What do you guys think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '5 hours ago',
              },
            },
            {
              text: 'Looks good to me. I think we can start working on the icons now. I will add it to the list of features. Anything else you can think of?',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I think that should be it for now. I will let you know if I think of anything else. Now that you say it, have you though about cusomtization and Tailwind CSS support?',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '1 hour ago',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'Implement a complete job offers API endpoint',
          description:
            'The API endpoint should return a JSON list of jobs. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 65,
          status: 1,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: false,
            },
            {
              text: 'Create a new database model',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Rob H.',
                picture: '/img/avatars/13.svg',
                posted: '2 days ago',
              },
            },
            {
              text: "Yup, it looks clunky to me as well. Let's try something different. I will add it to the list of features. Anything else you can think of?",
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'Implement company users API endpoint',
          description:
            'The API endpoint should return a JSON list of users. The endpoint should be able to filter the results by keyword, location, type and category.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I feel this architecture is not the best. I think we should use a different approach. What do you guys think?',
              author: {
                name: 'Betty L.',
                picture: '/img/avatars/24.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I have sent some notes to the team. That should help them refactor the code.',
              author: {
                name: 'John B.',
                picture: '/img/avatars/8.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Hold your horses! I am still working on it. I will let you know when I am done.',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'Build a complete authentication system and API endpoint',
          description:
            'The authentication system should be able to handle user registration, login, logout, password reset and email verification. The API endpoint should return a Bearer token.',
          completion: 100,
          status: 0,
          created: '2 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 weeks ago',
              author: {
                name: 'Josh S.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '5 days ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint',
              done: true,
            },
            {
              text: 'Create a new database table',
              done: true,
            },
            {
              text: 'Create a new database migration',
              done: true,
            },
            {
              text: 'Create a new database seeder',
              done: true,
            },
            {
              text: 'Create a new database model',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'Create reusable components to build different pricing sections',
          description:
            'The components should be able to handle different pricing plans and should be able to display the most popular plan. Also, the components should be able to display a button to purchase the plan.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '5 days ago',
              author: {
                name: 'Ana B.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design components in a Figma project',
              done: true,
            },
            {
              text: 'Design pricing sections in the Figma project',
              done: true,
            },
            {
              text: 'Implement the components in the project',
              done: true,
            },
            {
              text: 'Implement the pricing sections in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I like very much the design. There is just one thing I would change. I would make the button a bit bigger.',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
                posted: '4 days ago',
              },
            },
            {
              text: 'Are you sure? I think the button is the right size. I will ask the team what they think.',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think the button is fine. I would not change it.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'Implement a user profile page',
          description:
            'The user profile page should display the user avatar, name, email, bio, location, social links and a list of the user projects.',
          completion: 100,
          status: 5,
          created: '3 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the user profile page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the user profile page in the project',
              done: true,
            },
          ],
          comments: [
            {
              text: 'This looks great! I have just one question. How will the user change the avatar?',
              author: {
                name: 'Henry D.',
                picture: '/img/avatars/1.svg',
                posted: '8 hours ago',
              },
            },
            {
              text: 'I think the user will be able to change the avatar from the settings page.',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'Create a concept for a contact list page',
          description:
            'The contact list page should display a list of contacts with their name, email, phone number and avatar.',
          completion: 75,
          status: 3,
          created: '2 weeks ago',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'UI/UX Designer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Carmen E.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '2 weeks ago',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Draw some first stage wireframes',
              done: true,
            },
            {
              text: 'Design the contact list page in a Figma project',
              done: true,
            },
            {
              text: 'Implement the contact list page in the project',
              done: true,
            },
            {
              text: 'Build a search functionality for the contact list page',
              done: false,
            },
          ],
          comments: [
            {
              text: 'The filter is a great addition. I think it will be very useful.',
              author: {
                name: 'Melany L.',
                picture: '/img/avatars/25.svg',
                posted: '6 hours ago',
              },
            },
            {
              text: "That's the cherry on top of the cake. I think it's ready to be implemented.",
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '7 hours ago',
              },
            },
            {
              text: 'I agree. I will start working on the implementation.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/16.svg',
                posted: '8 hours ago',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'Implement a contact list API endpoint',
          description:
            'The contact list API endpoint should return a list of contacts with their name, email, phone number and avatar.',
          completion: 50,
          status: 1,
          created: '6 days ago',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Marjory L.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '1 week ago',
              author: {
                name: 'Maya R.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: true,
            },
            {
              text: 'Create a new database table for the contact list',
              done: false,
            },
            {
              text: 'Create filter queries and pagination for the contact list',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I think we should add a search functionality to the contact list.',
              author: {
                name: 'Lana E.',
                picture: '/img/avatars/4.svg',
                posted: '2 hours ago',
              },
            },
            {
              text: 'I agree. I will add it to the checklist.',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'Implement a messaging frontend for contacts',
          description:
            'The messaging frontend should allow users to send messages to each other. The messages should be stored in a database. The frontend should be implemented in React.',
          completion: 100,
          status: 5,
          created: '2 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '2 weeks ago',
              author: {
                name: 'Elias D.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '6 days ago',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create new components for the messaging frontend',
              done: true,
            },
            {
              text: 'Add a new route for the messaging frontend',
              done: true,
            },
            {
              text: 'Create a new database table for the messages',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
          ],
          comments: [
            {
              text: 'I think we should add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarissa M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'Iam not sure if we should add this. It would be a lot of work. What do you think @Hermann M.?',
              author: {
                name: 'Josh D.',
                picture: '/img/avatars/11.svg',
                posted: '2 days ago',
              },
            },
            {
              text: 'I think we should add it. It would be a nice feature.',
              author: {
                name: 'Hermann M.',
                picture: '/img/avatars/5.svg',
                posted: '2 days ago',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'Implement a messaging API endpoint for the frontend',
          description:
            'The messaging API endpoint should allow users to send messages to each other. The messages should be stored in a database. The API endpoint should be implemented in Node.js.',
          completion: 65,
          status: 1,
          created: '3 weeks ago',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
            tooltip: 'Clarke G.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '2 weeks ago',
              author: {
                name: 'Kendra W.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'Create a new API endpoint for the messaging frontend',
              done: true,
            },
            {
              text: 'Implement the messaging functionality',
              done: true,
            },
            {
              text: 'Save the messages in a database',
              done: false,
            },
          ],
          comments: [
            {
              text: 'I have been doing some heavy lifting on this. I think we should defintiely add the ability to send images and files. What do you think?',
              author: {
                name: 'Clarke C.',
                picture: '/img/avatars/3.svg',
                posted: '10 hours ago',
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
