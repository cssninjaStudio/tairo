const colors = [
  'bg-primary-500/20 text-primary-500',
  'bg-info-500/20 text-info-500',
  'bg-success-500/20 text-success-500',
  'bg-amber-500/20 text-amber-500',
  'bg-pink-500/20 text-pink-500',
  'bg-yellow-400/20 text-yellow-400',
  'bg-indigo-500/20 text-indigo-500',
  'bg-lime-500/20 text-lime-500',
  'bg-rose-500/20 text-rose-500',
  'bg-purple-500/20 text-purple-500',
] as const

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
