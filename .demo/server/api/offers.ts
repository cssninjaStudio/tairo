export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 200) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 2000))
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
      return [item.categories, item.title].some(item => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      categories: ['popular', 'development'],
      slug: 'asana',
      title: 'Asana',
      subtitle: '-15% on subscription',
      icon: 'logos:asana-icon',
      remaining: '10 days',
    },
    {
      id: 2,
      categories: ['popular', 'development'],
      slug: 'supabase',
      title: 'Supabase',
      subtitle: '2 months free',
      icon: 'logos:supabase-icon',
      remaining: '15 days',
    },
    {
      id: 3,
      categories: ['popular', 'development'],
      slug: 'twilio',
      title: 'Twilio',
      subtitle: '-20% off now',
      icon: 'logos:twilio-icon',
      remaining: '25 days',
    },
    {
      id: 4,
      categories: ['popular', 'development'],
      slug: 'heroku',
      title: 'Heroku',
      subtitle: '6 months free',
      icon: 'logos:heroku-icon',
      remaining: '5 days',
    },
    {
      id: 5,
      categories: ['popular', 'development'],
      slug: 'dropbox',
      title: 'Dropbox',
      subtitle: '-15% off now',
      icon: 'logos:dropbox',
      remaining: '7 days',
    },
    {
      id: 6,
      categories: ['popular', 'development'],
      slug: 'github',
      title: 'Github',
      subtitle: '-30% off enterprise',
      icon: 'logos:github-icon',
      remaining: '12 days',
    },
    {
      id: 7,
      categories: ['recent'],
      slug: 'elastic-search',
      title: 'Elastic Search',
      subtitle: '-12% on subscription',
      icon: 'logos:elasticpath-icon',
      remaining: '25 days',
    },
    {
      id: 8,
      categories: ['recent'],
      slug: 'docker',
      title: 'Docker',
      subtitle: '2 months free',
      icon: 'logos:docker-icon',
      remaining: '30 days',
    },
    {
      id: 9,
      categories: ['recent'],
      slug: 'g-suite',
      title: 'G Suite',
      subtitle: '-20% off now',
      icon: 'logos:google-icon',
      remaining: '15 days',
    },
    {
      id: 10,
      categories: ['recent'],
      slug: 'hound-ci',
      title: 'Hound CI',
      subtitle: '2 months free',
      icon: 'logos:houndci',
      remaining: '5 days',
    },
    {
      id: 11,
      categories: ['recent'],
      slug: 'haxe',
      title: 'Haxe',
      subtitle: '-35% off now',
      icon: 'logos:haxe',
      remaining: '20 days',
    },
    {
      id: 12,
      categories: ['recent'],
      slug: 'evergreen',
      title: 'Evergreen',
      subtitle: '-10% off all plans',
      icon: 'logos:evergreen-icon',
      remaining: '15 days',
    },
    {
      id: 13,
      categories: ['communication'],
      slug: 'slack',
      title: 'Slack',
      subtitle: '-12% off subscription',
      icon: 'logos:slack-icon',
      remaining: '20 days',
    },
    {
      id: 14,
      categories: ['communication'],
      slug: 'mattermost',
      title: 'Mattermost',
      subtitle: '1 month free',
      icon: 'logos:mattermost-icon',
      remaining: '5 days',
    },
    {
      id: 15,
      categories: ['communication'],
      slug: 'teams',
      title: 'Teams',
      subtitle: '-50% off now',
      icon: 'logos:microsoft-teams',
      remaining: '20 days',
    },
    {
      id: 16,
      categories: ['communication'],
      slug: 'intercom',
      title: 'Intercom',
      subtitle: '2 months free',
      icon: 'logos:intercom-icon',
      remaining: '25 days',
    },
    {
      id: 17,
      categories: ['communication'],
      slug: 'google-meet',
      title: 'Google Meet',
      subtitle: '-10% off now',
      icon: 'logos:google-meet',
      remaining: '10 days',
    },
    {
      id: 18,
      categories: ['communication'],
      slug: 'hipchat',
      title: 'Hipchat',
      subtitle: '-25% off all plans',
      icon: 'logos:hipchat',
      remaining: '5 days',
    },
    {
      id: 19,
      categories: ['design'],
      slug: 'sketch',
      title: 'Sketch',
      subtitle: '-20% on subscription',
      icon: 'logos:sketch',
      remaining: '15 days',
    },
    {
      id: 20,
      categories: ['design'],
      slug: 'figma',
      title: 'Figma',
      subtitle: '3 months free',
      icon: 'logos:figma',
      remaining: '25 days',
    },
    {
      id: 21,
      categories: ['design'],
      slug: 'adobe-xd',
      title: 'Adobe XD',
      subtitle: '-30% off now',
      icon: 'logos:adobe-xd',
      remaining: '5 days',
    },
    {
      id: 22,
      categories: ['design'],
      slug: 'adobe-illustrator',
      title: 'Illustrator',
      subtitle: '-30% off now',
      icon: 'logos:adobe-illustrator',
      remaining: '5 days',
    },
    {
      id: 23,
      categories: ['design'],
      slug: 'zeplin',
      title: 'Zeplin',
      subtitle: '-30% off now',
      icon: 'logos:zeplin',
      remaining: '15 days',
    },
    {
      id: 24,
      categories: ['design'],
      slug: 'invision',
      title: 'Invision',
      subtitle: '-25% off all plans',
      icon: 'logos:invision-icon',
      remaining: '25 days',
    },
    {
      id: 25,
      categories: ['development'],
      slug: 'code-igniter',
      title: 'Code Igniter',
      subtitle: '-20% on subscription',
      icon: 'logos:codeigniter-icon',
      remaining: '5 days',
    },
    {
      id: 26,
      categories: ['development'],
      slug: 'gitlab',
      title: 'Gitlab',
      subtitle: '-15% off enterprise',
      icon: 'logos:gitlab',
      remaining: '25 days',
    },
    {
      id: 27,
      categories: ['development'],
      slug: 'firebase',
      title: 'Firebase',
      subtitle: '3 months free',
      icon: 'logos:firebase',
      remaining: '10 days',
    },
  ])
}
