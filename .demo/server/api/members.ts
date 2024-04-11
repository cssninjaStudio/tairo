export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''
  const slug = (query.slug as string) || ''

  if (perPage >= 200) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  const data = await getDemoData()
  const member = data.find(item => item.slug === slug)

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
    member,
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
      slug: 'maya-rosselini',
      name: 'Maya Rosselini',
      email: 'mayar@gmail.com',
      picture: '/img/avatars/2.svg',
      role: {
        label: 'Admin',
        details: [
          {
            label: 'Bank accounts',
            access: 'Full access',
            permissions: [
              {
                label: 'Access to all accounts',
                status: true,
              },
              {
                label: 'Download statements',
                status: true,
              },
              {
                label: 'Move money',
                status: true,
              },
            ],
          },
          {
            label: 'Team management',
            access: 'Full access',
            permissions: [
              {
                label:
                  'Add/remove members, change their permissions and manage their cards',
                status: true,
              },
              {
                label:
                  'Change other admins permissions or remove them without consent',
                status: true,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: 'Jun 11, 2022',
          name: 'Kendra\'s card',
          account: '**** 7623',
          cardInfo: {
            name: 'Kendra Wilson',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 4479',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
        {
          id: 2,
          creationDate: 'Jun 11, 2022',
          name: 'Kendra\'s v-card',
          account: '**** 7218',
          cardInfo: {
            name: 'Kendra Wilson',
            type: 'virtual',
            brand: 'mastercard',
            number: '•••• 4268',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
      ],
    },
    {
      id: 2,
      slug: 'john-baxter',
      name: 'John Baxter',
      email: 'johnbaxter@gmail.com',
      picture: '/img/avatars/8.svg',
      role: {
        label: 'Admin',
        details: [
          {
            label: 'Bank accounts',
            access: 'Full access',
            permissions: [
              {
                label: 'Access to all accounts',
                status: true,
              },
              {
                label: 'Download statements',
                status: true,
              },
              {
                label: 'Move money',
                status: true,
              },
            ],
          },
          {
            label: 'Team management',
            access: 'Full access',
            permissions: [
              {
                label:
                  'Add/remove members, change their permissions and manage their cards',
                status: true,
              },
              {
                label:
                  'Change other admins permissions or remove them without consent',
                status: true,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: 'Jun 11, 2022',
          name: 'John\'s card',
          account: '**** 7623',
          cardInfo: {
            name: 'Kendra Wilson',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 2671',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
      ],
    },
    {
      id: 3,
      slug: 'jennifer-wilson',
      name: 'Jennifer Wilson',
      email: 'jennwilson@gmail.com',
      picture: '/img/avatars/12.svg',
      role: {
        label: 'Bookkeeper',
        details: [
          {
            label: 'Bank accounts',
            access: 'Partial access',
            permissions: [
              {
                label: 'Access to all accounts',
                status: true,
              },
              {
                label: 'Download statements',
                status: true,
              },
              {
                label: 'Move money',
                status: false,
              },
            ],
          },
          {
            label: 'Team management',
            access: 'No access',
            permissions: [
              {
                label:
                  'Add/remove members, change their permissions and manage their cards',
                status: false,
              },
              {
                label:
                  'Change other admins permissions or remove them without consent',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: 'Jun 11, 2022',
          name: 'Jennifer\'s card',
          account: '**** 7623',
          cardInfo: {
            name: 'Jennifer Wilson',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 2671',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
      ],
    },
    {
      id: 4,
      slug: 'amber-wilson',
      name: 'Amber Wilson',
      email: 'amberwilson@gmail.com',
      picture: '/img/avatars/24.svg',
      role: {
        label: 'Card Only',
        details: [
          {
            label: 'Bank accounts',
            access: 'No access',
            permissions: [
              {
                label: 'Access to all accounts',
                status: false,
              },
              {
                label: 'Download statements',
                status: false,
              },
              {
                label: 'Move money',
                status: false,
              },
            ],
          },
          {
            label: 'Team management',
            access: 'No access',
            permissions: [
              {
                label:
                  'Add/remove members, change their permissions and manage their cards',
                status: false,
              },
              {
                label:
                  'Change other admins permissions or remove them without consent',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: 'Jun 11, 2022',
          name: 'Amber\'s card',
          account: '**** 7623',
          cardInfo: {
            name: 'Amber Wilson',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 6982',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
      ],
    },
    {
      id: 5,
      slug: 'kaleb-wilson',
      name: 'Kaleb Wilson',
      email: 'kalebwilson@gmail.com',
      picture: '/img/avatars/3.svg',
      role: {
        label: 'Custom',
        details: [
          {
            label: 'Bank accounts',
            access: 'No access',
            permissions: [
              {
                label: 'Access to all accounts',
                status: true,
              },
              {
                label: 'Download statements',
                status: true,
              },
              {
                label: 'Move money',
                status: false,
              },
            ],
          },
          {
            label: 'Team management',
            access: 'No access',
            permissions: [
              {
                label:
                  'Add/remove members, change their permissions and manage their cards',
                status: false,
              },
              {
                label:
                  'Change other admins permissions or remove them without consent',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: 'Jun 11, 2022',
          name: 'Kaleb\'s card',
          account: '**** 7623',
          cardInfo: {
            name: 'Kaleb Wilson',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 3112',
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
          address: [
            '148, Victoria Street',
            'Suite D23, 3rd floor',
            'New York, NY',
          ],
        },
      ],
    },
  ])
}
