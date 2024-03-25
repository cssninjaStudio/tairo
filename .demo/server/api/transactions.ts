export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 50) {
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
      return [item.issuer, item.date, item.status].some(item =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: 'May 26, 2023',
      issuer: 'Victoria\'s Treats',
      type: 'out',
      amount: 52.14,
      account: '**** 7623',
      status: 'processing',
      method: 'credit card',
    },
    {
      id: 2,
      date: 'May 25, 2023',
      issuer: 'Morgan Seis, LLC',
      type: 'out',
      amount: 428.47,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 3,
      date: 'May 23, 2023',
      issuer: 'Wallmart',
      type: 'out',
      amount: 112.23,
      account: '**** 7623',
      status: 'in progress',
      method: 'cheque',
    },
    {
      id: 4,
      date: 'May 21, 2023',
      issuer: 'John Rowland',
      type: 'out',
      amount: 950,
      account: '**** 7623',
      status: 'cancelled',
      method: 'transfer',
    },
    {
      id: 5,
      date: 'May 18, 2023',
      issuer: 'Harry\'s, LLC',
      type: 'out',
      amount: 24.49,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 6,
      date: 'May 18, 2023',
      issuer: 'Game\'s Store',
      type: 'out',
      amount: 89.49,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 7,
      date: 'May 17, 2023',
      issuer: 'Wallmart',
      type: 'out',
      amount: 143.19,
      account: '**** 7623',
      status: 'complete',
      method: 'cheque',
    },
    {
      id: 8,
      date: 'May 14, 2023',
      issuer: 'Park Groceries',
      type: 'out',
      amount: 31.22,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 9,
      date: 'May 14, 2023',
      issuer: 'Jane Callaway',
      type: 'in',
      amount: 300,
      account: '**** 7623',
      status: 'complete',
      method: 'transfer',
    },
    {
      id: 10,
      date: 'May 13, 2023',
      issuer: 'Harold Brenner',
      type: 'in',
      amount: 575,
      account: '**** 3283',
      status: 'complete',
      method: 'transfer',
    },
    {
      id: 11,
      date: 'May 12, 2023',
      issuer: 'Urban LLC',
      type: 'out',
      amount: 79.99,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 12,
      date: 'May 12, 2023',
      issuer: 'Wallmart',
      type: 'out',
      amount: 84.67,
      account: '**** 7623',
      status: 'complete',
      method: 'cheque',
    },
    {
      id: 13,
      date: 'May 11, 2023',
      issuer: 'Artcom Inc.',
      type: 'in',
      amount: 5272.99,
      account: '**** 7623',
      status: 'complete',
      method: 'transfer',
    },
    {
      id: 14,
      date: 'May 11, 2023',
      issuer: 'HS Loans',
      type: 'out',
      amount: 3275.27,
      account: '**** 7623',
      status: 'complete',
      method: 'bank',
    },
    {
      id: 15,
      date: 'May 12, 2023',
      issuer: 'San Marina Rest.',
      type: 'out',
      amount: 279.44,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 16,
      date: 'May 10, 2023',
      issuer: 'Twister Park',
      type: 'out',
      amount: 120,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 17,
      date: 'May 10, 2023',
      issuer: 'Gianni\'s Pizza',
      type: 'out',
      amount: 40.22,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 18,
      date: 'May 9, 2023',
      issuer: 'San Marina Rest.',
      type: 'out',
      amount: 110.31,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 19,
      date: 'May 7, 2023',
      issuer: 'Taco Bell',
      type: 'out',
      amount: 31.19,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 20,
      date: 'May 5, 2023',
      issuer: 'American Airlines',
      type: 'out',
      amount: 489.99,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 21,
      date: 'May 5, 2023',
      issuer: 'Park Groceries',
      type: 'out',
      amount: 45.52,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 22,
      date: 'May 3, 2023',
      issuer: 'Gianni\'s Pizza',
      type: 'out',
      amount: 61.17,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 23,
      date: 'May 3, 2023',
      issuer: 'Urban LLC',
      type: 'out',
      amount: 156.29,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
    {
      id: 24,
      date: 'May 2, 2023',
      issuer: 'Nintendo Store',
      type: 'out',
      amount: 265.99,
      account: '**** 7623',
      status: 'complete',
      method: 'credit card',
    },
  ])
}
