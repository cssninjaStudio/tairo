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
      title: 'Venture debt',
      subtitle: 'Invest in startups',
      purpose: '20-35% of the most recent equity round',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Get minimally dilutive capital to enhance your runway',
            'No equity, no board seats, no personal guarantees',
            'Fast and flexible financing',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'Our loans have low costs and founder friendly terms',
            'Our online questionnaire takes 10 minutes to complete',
            'We reach out to you within 2 business days',
            'Use our loans to grow your business the way you want and need',
            'Use diligence documents from your VC round',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'You need to have been through a first VC round',
            'There are additionnal warraty and insurance costs',
          ],
        },
      },
      targets: ['Acquisitions', 'R&D', 'Marketing', 'Payroll'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 2,
      title: 'Daily payout',
      subtitle: 'Ecommerce, dropshipping',
      purpose: 'Daily revenue',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Get advanced payout of your previous day sales, up to 80%',
            'Get the additional 20% when your provider receives the complete payment',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'A very fast approach to get your fees within 1-2 business days',
            'You don\'t have to giveup equity or personal guarantees',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'Payouts are limted to your available daily revenue',
            'Future funding is not guaranteed and depends on your performance',
          ],
        },
      },
      targets: ['Advertising', 'Inventory'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 3,
      title: 'Revenue based',
      subtitle: 'Ecommerce',
      purpose: '1-3 months of revenue',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Get 1-3 months income advance of your monthly average revenue',
            'You pay your provider a fixed fee until your full income gets on your bank account',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'A very fast approach to get your fees within 1-5 business days',
            'You don\'t have to giveup equity or personal guarantees',
            'Your repayments go up and down and scale with your revenue',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'Your gross margin need to be high enough to support this financing system',
            'Future funding is not guaranteed and depends on your performance',
          ],
        },
      },
      targets: ['Advertising', 'Inventory'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 4,
      title: 'SaaS funding',
      subtitle: 'Saas, b2b software',
      purpose: '30-60% of your annual recurring revenue',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Get 60% of your annual revenue in a flexible credit line',
            'Draw only what you need for this special line and repay when you want',
            'Repay the provider with equal monthly installments',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'Being non dilutive means that you will never have to giveup equity',
            'No covenants, security interest, no personal guarantees',
            'Your credit line scale as your revenue grows',
            'it\'s very fast, you can be funded in less than a week',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'Requires a minimum cash runway of 6 months',
            'Future funding is not guaranteed and depends on your performance',
          ],
        },
      },
      targets: ['Advertising', 'Expenses', 'Hiring'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 5,
      title: 'R&D tax credits',
      subtitle: 'Startups',
      purpose: 'Previous year funds spent on product research and development',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Get your R&D tax credit forms filled and sent to the Federal state by our experts',
            'If approved, get up to $150,000 in tax credits',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'Being non dilutive means that is is owned by you if the company pays for payroll taxes',
            'Optimize you accounting and tax fees at a cheap price',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'Credit can only be claimed with your most recent tax return - you cannot use tax returns from previous years',
            'The money is not immediately available and depends on the provider you are using',
          ],
        },
      },
      targets: ['Runway', 'Payroll', 'Advertising'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 6,
      title: 'Equity',
      subtitle: 'Startups',
      purpose: 'Varies and depends on business plan and results',
      benefits: {
        concept: {
          label: 'How it works',
          link: undefined,
          features: [
            'Startups can sell a portion of their company to investors in exchange for funding',
            'You can get mutiple rounds of funding as your company grows',
          ],
        },
        pros: {
          label: 'Pros',
          link: undefined,
          features: [
            'You can raise large amounts of money',
            'Quality investors can bring valuable expertise and connections to your company, more if they are on your company board',
          ],
        },
        cons: {
          label: 'Cons',
          link: undefined,
          features: [
            'You have to go through a rigorous fundraising process, from pitching to necotiating terms',
            'You giveup equity and some control of your company',
          ],
        },
      },
      targets: ['Business', 'Payroll', 'Aquisitions'],
      provider: {
        name: 'Tairo Inc.',
        logo: '/img/logos/logo.svg',
      },
    },
  ])
}
