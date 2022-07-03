export const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  {
    id: 2,
    name: 'Vue.js',
  },
  {
    id: 3,
    name: 'React.js',
  },
  {
    id: 4,
    name: 'Angular',
  },
  {
    id: 5,
    name: 'Alpine.js',
  },
]

export const peopleNames = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
  },
]

export const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]

export const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

export const selectedFramework = ref(frameworks[0])
export const selectedPersonName = ref(peopleNames[0])
export const selectedHobby = ref(hobbies[1])
export const selectedPerson = ref(people[2])
