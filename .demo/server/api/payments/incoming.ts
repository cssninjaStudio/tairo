export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 50) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 1000))
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
      return [item.recipient.name, item.DemoToolbarLanguage].some(item =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: 'May 18, 2023',
      amount: 387.56,
      status: 'sent',
      account: '**** 7623',
      recipient: {
        name: 'Melany Gheller',
        photo: '/img/avatars/25.svg',
      },
    },
    {
      id: 2,
      date: 'May 13, 2023',
      amount: 875,
      status: 'opened',
      account: '**** 7623',
      recipient: {
        name: 'Hermann Mayer',
        photo: '/img/avatars/16.svg',
      },
    },
    {
      id: 3,
      date: 'May 26, 2023',
      amount: 185,
      status: 'in progress',
      account: '**** 7623',
      recipient: {
        name: 'Clarissa Miller',
        photo: '/img/avatars/5.svg',
      },
    },
    {
      id: 4,
      date: 'May 8, 2023',
      amount: 580,
      status: 'complete',
      account: '**** 7623',
      recipient: {
        name: 'Clark Smith',
        photo: '/img/avatars/3.svg',
      },
    },
    {
      id: 5,
      date: 'May 6, 2023',
      amount: 1240,
      status: 'complete',
      account: '**** 7623',
      recipient: {
        name: 'John Baxter',
        photo: '/img/avatars/8.svg',
      },
    },
    {
      id: 6,
      date: 'May 3, 2023',
      amount: 625,
      status: 'complete',
      account: '**** 7623',
      recipient: {
        name: 'Howard Streim',
        photo: '/img/avatars/20.svg',
      },
    },
  ])
}
