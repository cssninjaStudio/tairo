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
      return [item.cardInfo.name, item.cardInfo.type, item.cardInfo.brand].some(
        item => item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      creationDate: 'Jun 11, 2022',
      name: 'Maya\'s card',
      account: '**** 7623',
      cardInfo: {
        name: 'Maya Rosselini',
        type: 'physical',
        brand: 'mastercard',
        number: '•••• •••• •••• 4479',
        expiryYear: '••',
        expiryMonth: '••',
        cvc: '•••',
        status: 'active',
      },
      funds: {
        posted: 142.87,
        pending: 0,
        unavailable: 249.99,
        available: 5423.12,
      },
      monthSpent: 3642.27,
      daySpent: 177.34,
      dayWithdraw: 0,
      limits: {
        spend: 250,
        withdraw: 500,
      },
      address: ['148, Victoria Street', 'Suite D23, 3rd floor', 'New York, NY'],
    },
    {
      id: 2,
      creationDate: 'Jan 5, 2023',
      name: 'John\'s card',
      account: '**** 3215',
      cardInfo: {
        name: 'John Baxter',
        type: 'physical',
        brand: 'visa',
        number: '•••• •••• •••• 8923',
        expiryYear: '••',
        expiryMonth: '••',
        cvc: '•••',
        status: 'active',
      },
      funds: {
        posted: 123.89,
        pending: 12.45,
        unavailable: 0,
        available: 23893.12,
      },
      monthSpent: 4371.87,
      daySpent: 623.67,
      dayWithdraw: 600,
      limits: {
        spend: 2000,
        withdraw: 3000,
      },
      address: ['148, Victoria Street', 'Suite D23, 3rd floor', 'New York, NY'],
    },
    {
      id: 3,
      creationDate: 'Jun 13, 2022',
      name: 'Amber\'s v-card',
      account: '**** 5645',
      cardInfo: {
        name: 'Amber Wilson',
        type: 'virtual',
        brand: 'mastercard',
        number: '•••• •••• •••• 2197',
        expiryYear: '••',
        expiryMonth: '••',
        cvc: '•••',
        status: 'disabled',
      },
      funds: {
        posted: 11.43,
        pending: 0,
        unavailable: 0,
        available: 2828.21,
      },
      monthSpent: 345.12,
      daySpent: 49.99,
      dayWithdraw: 0,
      limits: {
        spend: 250,
        withdraw: 0,
      },
      address: ['12, Meg Street', 'Suite C2, 1st floor', 'New York, NY'],
    },
    {
      id: 4,
      creationDate: 'Oct 23, 2022',
      name: 'Kaleb\'s card',
      account: '**** 5645',
      cardInfo: {
        name: 'Kaleb Wilson',
        type: 'physical',
        brand: 'visa',
        number: '•••• •••• •••• 4479',
        expiryYear: '••',
        expiryMonth: '••',
        cvc: '•••',
        status: 'active',
      },
      funds: {
        posted: 0,
        pending: 49.99,
        unavailable: 249.99,
        available: 863.67,
      },
      monthSpent: 1242.13,
      daySpent: 21.99,
      dayWithdraw: 0,
      limits: {
        spend: 150,
        withdraw: 100,
      },
      address: ['148, Victoria Street', 'Suite D23, 3rd floor', 'New York, NY'],
    },
    {
      id: 5,
      creationDate: 'Oct 23, 2022',
      name: 'Jennifer\'s card',
      account: '**** 5645',
      cardInfo: {
        name: 'Jennifer Wilson',
        type: 'virtual',
        brand: 'visa',
        number: '•••• •••• •••• 4479',
        expiryYear: '••',
        expiryMonth: '••',
        cvc: '•••',
        status: 'locked',
      },
      funds: {
        posted: 0,
        pending: 324.99,
        unavailable: 612.43,
        available: 235.67,
      },
      monthSpent: 753.67,
      daySpent: 0,
      dayWithdraw: 0,
      limits: {
        spend: 350,
        withdraw: 100,
      },
      address: ['148, Victoria Street', 'Suite D23, 3rd floor', 'New York, NY'],
    },
  ])
}
