import { dictionray } from './dictionary'

export function generatePassphrase(wordCount = 3) {
  return Array.from({ length: wordCount }, () => generateRandomWord())
}

function generateRandomWord() {
  let randomNumberString = ''
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    randomNumberString += randomNumber
  }

  const word = dictionray[randomNumberString as unknown as keyof typeof dictionray]

  if (!word) {
    console.error(`Failed to find a word for number string: ${randomNumberString}`)
    return ''
  }

  return word
}
