export default defineEventHandler(async () => {
  const data = await getDemoData()

  return data
})

async function getDemoData() {
  return Promise.resolve([
    {
      type: 'people',
      name: 'Melany L.',
      subtext: 'UI/UX Designer',
      src: '/img/avatars/25.svg',
      text: 'ML',
      url: '#',
    },
    {
      type: 'people',
      name: 'Kendra W.',
      subtext: 'Frontend Developer',
      src: '/img/avatars/10.svg',
      text: 'KW',
      url: '#',
    },
    {
      type: 'people',
      name: 'Hermann M.',
      subtext: 'Backend Developer',
      src: '/img/avatars/16.svg',
      text: 'HM',
      url: '#',
    },
    {
      type: 'project',
      name: 'Delivery App',
      src: '/img/apps/1.jpg',
      subtext: 'Webdesign project',
      text: 'CG',
      url: '#',
    },
    {
      type: 'project',
      name: 'E-Learning mobile app',
      src: '/img/apps/2.png',
      subtext: 'Webdesign project',
      text: 'CG',
      url: '#',
    },
    {
      type: 'people',
      name: 'Greta K.',
      subtext: 'Frontend Developer',
      src: '/img/avatars/24.svg',
      text: 'GK',
      url: '#',
    },
    {
      type: 'people',
      name: 'Maya R.',
      subtext: 'Frontend Developer',
      src: '/img/avatars/2.svg',
      text: 'MR',
      url: '#',
    },
    {
      type: 'file',
      name: 'company-ui-ux-guide.pdf',
      src: '/img/icons/files/pdf.svg',
      subtext: 'PDF file',
      text: 'CG',
      url: '#',
    },
    {
      type: 'file',
      name: 'company-budget.xlsx',
      src: '/img/icons/files/sheet.svg',
      subtext: 'Excel file',
      text: 'CG',
      url: '#',
    },
    {
      type: 'file',
      name: 'company-logo.ai',
      src: '/img/icons/files/ai.svg',
      subtext: 'AI file',
      text: 'AI',
      url: '#',
    },
    {
      type: 'project',
      name: 'Health and fitness dashboard',
      src: '/img/apps/3.jpg',
      subtext: 'Webapp project',
      text: 'HF',
      url: '#',
    },
    {
      type: 'project',
      name: 'HR Webapp Design',
      src: '/img/apps/4.png',
      subtext: 'Webdesign project',
      text: 'HR',
      url: '#',
    },
    {
      type: 'people',
      name: 'Howard C.',
      subtext: 'Solution Architect',
      src: '/img/avatars/20.svg',
      text: 'HC',
      url: '#',
    },
    {
      type: 'people',
      name: 'Clarke G.',
      subtext: 'Fullstack Developer',
      src: '/img/avatars/3.svg',
      text: 'CG',
      url: '#',
    },
  ])
}
