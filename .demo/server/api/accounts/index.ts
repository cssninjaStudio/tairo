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
      return [item.type, item.owner.name].some(item => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      type: 'checking',
      number: '**** 4897',
      balance: 9543.12,
      owner: {
        name: 'Maya Rosselini',
        avatar: '/img/avatars/10.svg',
        slug: 'maya-rosselini',
      },
      details: {
        routingNumber: '856854851',
        accountNumber: '1487 3256 54122 4897',
        iban: 'AB-NXC',
        bankCode: 'BNK-486155',
      },
      history: [
        {
          name: 'Balance',
          data: [
            3143.16, 4298.49, 2876.54, 5183.76, 4232.87, 10876.56, 9543.12,
          ],
        },
      ],
    },
    {
      id: 2,
      type: 'checking',
      number: '**** 4869',
      balance: 1211.67,
      owner: {
        name: 'John Baxter',
        avatar: '/img/avatars/8.svg',
        slug: 'john-baxter',
      },
      details: {
        routingNumber: '856854851',
        accountNumber: '3524 65456 3245 4869',
        iban: 'AB-NXC',
        bankCode: 'BNK-486155',
      },
      history: [
        {
          name: 'Balance',
          data: [4629.43, 2349.38, 5649.98, 6239.83, 3492.23, 2420.37, 1211.67],
        },
      ],
    },
    {
      id: 3,
      type: 'savings',
      number: '**** 6279',
      balance: 4653.97,
      owner: {
        name: 'Maya Rosselini',
        avatar: '/img/avatars/7.svg',
        slug: 'maya-rosselini',
      },
      details: {
        routingNumber: '856854851',
        accountNumber: '3524 65456 3245 4869',
        iban: 'AB-NXC',
        bankCode: 'BNK-486155',
      },
      history: [
        {
          name: 'Balance',
          data: [364.32, 932.38, 1538.39, 2378.89, 3229.23, 3931.19, 4653.97],
        },
      ],
    },
  ])
}
