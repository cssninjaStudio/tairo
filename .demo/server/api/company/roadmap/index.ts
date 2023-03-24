export default defineEventHandler(async () => {
  const data = await getDemoData()

  return data
})

async function getDemoData() {
  return Promise.resolve([
    {
      year: '2022',
      progress: 90,
      quarters: [
        {
          id: 0,
          year: '2022',
          quarter: 1,
          name: 'Q1',
          progress: 100,
          features: [
            {
              title: 'AI driven website design',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
              url: 'https://vuero.cssninja.io',
            },
            {
              title: 'AI driven marketing automation',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Account personalization',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Theme color settings persistance',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Refreshed landing page UI',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 1,
          year: '2022',
          quarter: 2,
          name: 'Q2',
          progress: 100,
          features: [
            {
              title: 'Ecommerce storefront configuration',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'algolia deep search integration',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Payments gateways integration',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Auth and user modules',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 2,
          year: '2022',
          quarter: 3,
          name: 'Q3',
          progress: 72,
          features: [
            {
              title: 'Ecommerce storefront configuration',
              value: 27,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'algolia deep search integration',
              value: 31,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Payments gateways integration',
              value: 68,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Auth and user modules',
              value: 84,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Auth and user modules',
              value: 90,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Auth and user modules',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 3,
          year: '2022',
          quarter: 4,
          name: 'Q4',
          progress: 0,
          features: [
            {
              title: 'Integration with Github services',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Integration with Gitlab services',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Integration with Digital Ocean services',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Automated production backups',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Task scheduler implementation',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Calendar implementation',
              value: 0,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
      ],
    },
    {
      year: '2021',
      progress: 100,
      quarters: [
        {
          id: 0,
          year: '2021',
          quarter: 1,
          name: 'Q1',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q1 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q1 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q1 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q1 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q1 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 1,
          year: '2021',
          quarter: 2,
          name: 'Q2',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q2 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q2 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q2 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q2 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q2 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 2,
          year: '2021',
          quarter: 3,
          name: 'Q3',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q3 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q3 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q3 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q3 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q3 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 3,
          year: '2021',
          quarter: 4,
          name: 'Q4',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q4 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q4 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q4 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q4 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q4 2021',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
      ],
    },
    {
      year: '2020',
      progress: 100,
      quarters: [
        {
          id: 0,
          year: '2020',
          quarter: 1,
          name: 'Q1',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q1 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q1 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q1 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q1 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q1 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 1,
          year: '2020',
          quarter: 2,
          name: 'Q2',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q2 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q2 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q2 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q2 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q2 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 2,
          year: '2020',
          quarter: 3,
          name: 'Q3',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q3 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q3 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q3 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q3 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q3 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 3,
          year: '2020',
          quarter: 4,
          name: 'Q4',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q4 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q4 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q4 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q4 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q4 2020',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
      ],
    },
    {
      year: '2019',
      progress: 100,
      quarters: [
        {
          id: 0,
          year: '2019',
          quarter: 1,
          name: 'Q1',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q1 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q1 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q1 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q1 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q1 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 1,
          year: '2019',
          quarter: 2,
          name: 'Q2',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q2 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q2 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q2 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q2 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q2 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 2,
          year: '2019',
          quarter: 3,
          name: 'Q3',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q3 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q3 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q3 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q3 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q3 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
        {
          id: 3,
          year: '2019',
          quarter: 4,
          name: 'Q4',
          progress: 100,
          features: [
            {
              title: 'Some nice feature done in Q4 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Another feature done in Q4 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some cool feature done in Q4 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'App UI revamp done in Q4 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
            {
              title: 'Some difficult feature done in Q4 2019',
              value: 100,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Philosophi autem in suis lectulis plerumque moriuntur. Ad eas enim res ab Epicuro praecepta dantur.',
            },
          ],
        },
      ],
    },
  ])
}
