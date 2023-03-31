export default defineEventHandler(async () => {
  const data = await getDemoData()

  return data
})

async function getDemoData() {
  return Promise.resolve({
    personalInfo: {
      firstName: 'Maya',
      lastName: 'Rosselini',
      picture: '/img/avatars/2.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      role: 'Product Manager',
      shortBio:
        'Hey everyone, Iam a product manager from New York and Iam looking for new opportunities in the software business.',
      longBio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli igitur possumus. Praeteritis, inquit, gaudeo. Duo Reges: constructio interrete. Idemne, quod iucunde? Quis enim redargueret? Non semper, inquam; Quid nunc honeste dicit? Eam tum adesse, cum dolor omnis absit; Negat enim summo bono afferre incrementum diem.',
      projects: 59,
      relations: 500,
      socials: [
        {
          name: 'facebook',
          url: 'https://facebook.com',
          icon: 'fa6-brands:facebook-f',
        },
        {
          name: 'twitter',
          url: 'https://twitter.com',
          icon: 'fa6-brands:twitter',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com',
          icon: 'fa6-brands:linkedin-in',
        },
      ],
      experiences: [
        {
          company: 'Github',
          position: 'Product Manager',
          logo: '/img/logos/brands/github.svg',
          period: 'December 2022 · Today',
        },
        {
          company: 'Facebook',
          position: 'Product Manager',
          logo: '/img/logos/brands/facebook.svg',
          period: 'October 2021 · November 2022',
        },
        {
          company: 'Atlassian',
          position: 'Product Manager',
          logo: '/img/logos/brands/atlassian.svg',
          period: 'November 2020 · September 2021',
        },
        {
          company: 'Airbnb',
          position: 'Product Manager',
          logo: '/img/logos/brands/airbnb.svg',
          period: 'January 2018 · October 2020',
        },
        {
          company: 'Slack',
          position: 'Product owner',
          logo: '/img/logos/brands/slack.svg',
          period: 'May 2017 · January 2018',
        },
        {
          company: 'Gitlab',
          position: 'Product owner',
          logo: '/img/logos/brands/gitlab.svg',
          period: 'August 2016 · February 2017',
        },
      ],
      languages: [
        {
          name: 'English',
          mastery: 'Native Speaker, fluent',
          level: 100,
          icon: '/img/icons/flags/united-states-of-america.svg',
        },
        {
          name: 'French',
          mastery: 'Fluent, written and spoken',
          level: 85,
          icon: '/img/icons/flags/france.svg',
        },
        {
          name: 'German',
          mastery: 'Beginner level',
          level: 25,
          icon: '/img/icons/flags/germany.svg',
        },
        {
          name: 'Spanish',
          mastery: 'Beginner level',
          level: 35,
          icon: '/img/icons/flags/spain.svg',
        },
      ],
      tools: [
        {
          name: 'Adobe Illustrator',
          mastery: 'Advanced level',
          level: 82,
          logo: '/img/stacks/illustrator.svg',
        },
        {
          name: 'Jira Software',
          mastery: 'Intermediate level',
          level: 56,
          logo: '/img/logos/brands/jira.svg',
        },
        {
          name: 'MS Office',
          mastery: 'Expert level',
          level: 95,
          logo: '/img/logos/brands/office.svg',
        },
      ],
      viewed: [
        {
          name: 'Arthur B.',
          role: 'Product Manager',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/8.svg',
          text: 'AB',
        },
        {
          name: 'Melany L.',
          role: 'Project Manager',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/25.svg',
          text: 'ML',
        },
        {
          name: 'John H.',
          role: 'Software Engineer',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '',
          text: 'JH',
        },
        {
          name: 'Howard D.',
          role: 'Sales Manager',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/20.svg',
          text: 'HD',
        },
      ],
      skills: [
        {
          name: 'Javascript',
          experience: 7,
          level: 95,
          logo: '/img/stacks/js.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'Clarke G.',
                src: '/img/avatars/3.svg',
                text: 'CG',
              },
              {
                name: 'Clarissa M.',
                src: '/img/avatars/5.svg',
                text: 'CM',
              },
              {
                name: 'John H.',
                src: undefined,
                text: 'JH',
              },
              {
                name: 'Betty D.',
                src: '/img/avatars/24.svg',
                text: 'BD',
              },
            ],
          },
        },
        {
          name: 'Product management',
          experience: 4,
          level: 95,
          icon: 'ph:archive-duotone',
          related: {
            total: '2K',
            people: [
              {
                name: 'Kenshiro Y.',
                text: 'KY',
              },
              {
                name: 'Arthur B.',
                src: '/img/avatars/8.svg',
                text: 'AB',
              },
              {
                name: 'Kendra W.',
                src: '/img/avatars/10.svg',
                text: 'KW',
              },
            ],
          },
        },
        {
          name: 'Vue',
          experience: 10,
          level: 75,
          logo: '/img//stacks/vuejs.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'Elizabeth N.',
                src: '/img/avatars/21.svg',
                text: 'EN',
              },
              {
                name: 'Howard F.',
                src: '/img/avatars/20.svg',
                text: 'HF',
              },
            ],
          },
        },
        {
          name: 'React',
          experience: 10,
          level: 68,
          logo: '/img/stacks/reactjs.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'Hermann M.',
                src: '/img/avatars/16.svg',
                text: 'HM',
              },
              {
                name: 'Marjory L.',
                src: '/img/avatars/25.svg',
                text: 'ML',
              },
              {
                name: 'Greta K.',
                src: '/img/avatars/22.svg',
                text: 'GK',
              },
              {
                name: 'Mary W.',
                text: 'MW',
              },
            ],
          },
        },
      ],
      recommandations: [
        {
          name: 'Clarke G.',
          role: 'Product Manager',
          src: '/img/avatars/3.svg',
          badge: '/img/icons/flags/united-states-of-america.svg',
          text: 'Maya is a great product manager. He is very passionate about his work and always delivers on time. I would recommend him to any company.',
          date: 'January 8, 2023',
        },
        {
          name: 'Betty C.',
          role: 'Product Manager',
          src: '/img/avatars/24.svg',
          badge: '/img/icons/flags/united-states-of-america.svg',
          text: 'Maya is a great product manager. He is very passionate about his work and always delivers on time. I would recommend him to any company.',
          date: 'March 3, 2023',
        },
      ],
    },
    notifications: true,
  })
}
