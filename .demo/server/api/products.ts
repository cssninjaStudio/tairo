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
      name: 'Gray couch',
      price: 2499.99,
      image: '/img/illustrations/layouts/furniture-1.svg',
      sku: 'FC-59859',
      stock: 10,
      category: 'Couches',
    },
    {
      id: 1,
      name: 'Clay style sofa',
      price: 1999.99,
      image: '/img/illustrations/layouts/furniture-2.svg',
      sku: 'FC-15984',
      stock: 16,
      category: 'Couches',
    },
    {
      id: 2,
      name: 'Victorian armchair',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-3.svg',
      sku: 'FC-48668',
      stock: 24,
      category: 'Chairs',
    },
    {
      id: 3,
      name: 'Relaxed sofa',
      price: 1499.99,
      image: '/img/illustrations/layouts/furniture-4.svg',
      sku: 'FC-75549',
      stock: 17,
      category: 'Couches',
    },
    {
      id: 4,
      name: 'Flat gray sofa',
      price: 1649.99,
      image: '/img/illustrations/layouts/furniture-5.svg',
      sku: 'FC-45654',
      stock: 11,
      category: 'Couches',
    },
    {
      id: 5,
      name: 'Cosy flat couch',
      price: 1449.49,
      image: '/img/illustrations/layouts/furniture-6.svg',
      sku: 'FC-81155',
      stock: 21,
      category: 'Couches',
    },
    {
      id: 6,
      name: 'Simple sofa',
      price: 999.99,
      image: '/img/illustrations/layouts/furniture-7.svg',
      sku: 'FC-15898',
      stock: 15,
      category: 'Couches',
    },
    {
      id: 7,
      name: 'Emperor couch',
      price: 2999.99,
      image: '/img/illustrations/layouts/furniture-8.svg',
      sku: 'FC-41599',
      stock: 22,
      category: 'Couches',
    },
    {
      id: 8,
      name: 'Minimalist couch',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-9.svg',
      sku: 'FC-16945',
      stock: 8,
      category: 'Couches',
    },
    {
      id: 9,
      name: 'Lazyboy sofa',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-10.svg',
      sku: 'FC-84165',
      stock: 9,
      category: 'Couches',
    },
    {
      id: 10,
      name: 'Monastic chair',
      price: 2499,
      image: '/img/illustrations/layouts/furniture-11.svg',
      sku: 'FC-59859',
      stock: 10,
      category: 'Couches',
    },
    {
      id: 11,
      name: 'Roman style couch',
      price: 2499,
      image: '/img/illustrations/layouts/furniture-12.svg',
      sku: 'FC-47988',
      stock: 3,
      category: 'Chairs',
    },
    {
      id: 12,
      name: 'Cosy Armchair',
      price: 3499.99,
      image: '/img/illustrations/layouts/furniture-13.svg',
      sku: 'FC-12654',
      stock: 5,
      category: 'Couches',
    },
    {
      id: 13,
      name: 'Compact couch',
      price: 549.99,
      image: '/img/illustrations/layouts/furniture-14.svg',
      sku: 'FC-23559',
      stock: 52,
      category: 'Chairs',
    },
    {
      id: 14,
      name: 'Cosy wine chair',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-15.svg',
      sku: 'FC-11568',
      stock: 16,
      category: 'Couches',
    },
    {
      id: 15,
      name: 'Modern sofa',
      price: 999.99,
      image: '/img/illustrations/layouts/furniture-16.svg',
      sku: 'FC-78589',
      stock: 21,
      category: 'Chairs',
    },
    {
      id: 16,
      name: 'Modern armchair',
      price: 1499.99,
      image: '/img/illustrations/layouts/furniture-17.svg',
      sku: 'FC-154489',
      stock: 9,
      category: 'Couches',
    },
    {
      id: 17,
      name: 'Curvy sofa',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-18.svg',
      sku: 'FC-41589',
      stock: 19,
      category: 'Chair',
    },
    {
      id: 18,
      name: 'Classy sofa',
      price: 1799.99,
      image: '/img/illustrations/layouts/furniture-19.svg',
      sku: 'FC-15659',
      stock: 12,
      category: 'Couches',
    },
    {
      id: 19,
      name: 'Laydown sofa',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-20.svg',
      sku: 'FC-11568',
      stock: 7,
      category: 'Couches',
    },
  ])
}
