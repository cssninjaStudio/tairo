type ColorName = 'primary' | 'muted'

export const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const

export const primaryPresets = [
  {
    name: 'cyan',
    label: 'Cyan',
    class: 'bg-cyan-500',
  },
  {
    name: 'sky',
    label: 'Sky',
    class: 'bg-sky-500',
  },
  {
    name: 'blue',
    label: 'Blue',
    class: 'bg-blue-500',
  },
  {
    name: 'indigo',
    label: 'Indigo',
    class: 'bg-indigo-500',
  },
  {
    name: 'purple',
    label: 'Purple',
    class: 'bg-purple-500',
  },
  {
    name: 'violet',
    label: 'Violet',
    class: 'bg-violet-500',
  },
  {
    name: 'lime',
    label: 'Lime',
    class: 'bg-lime-500',
  },
  {
    name: 'green',
    label: 'Green',
    class: 'bg-green-500',
  },
  {
    name: 'teal',
    label: 'Teal',
    class: 'bg-teal-500',
  },
  {
    name: 'emerald',
    label: 'Emerald',
    class: 'bg-emerald-500',
  },
  {
    name: 'rose',
    label: 'Rose',
    class: 'bg-rose-500',
  },
  {
    name: 'red',
    label: 'Red',
    class: 'bg-red-500',
  },
  {
    name: 'pink',
    label: 'Pink',
    class: 'bg-pink-500',
  },
  {
    name: 'yellow',
    label: 'Yellow',
    class: 'bg-yellow-500',
  },
  {
    name: 'amber',
    label: 'Amber',
    class: 'bg-amber-500',
  },
  {
    name: 'orange',
    label: 'Orange',
    class: 'bg-orange-500',
  },
  // {
  //   name: 'mauve',
  //   label: 'Custom',
  //   shades: {
  //     50: '#EEECF9',
  //     100: '#DCD8F3',
  //     200: '#B6AEE5',
  //     300: '#9488D8',
  //     400: '#6E5DCB',
  //     500: '#4E3CB9',
  //     600: '#3E2F92',
  //     700: '#302470',
  //     800: '#1F1849',
  //     900: '#100C27',
  //     950: '#080613',
  //   },
  //   class: 'bg-mauve-500',
  // },
] as const

export const mutedPresets = [
  {
    name: 'gray',
    label: 'Gray',
    class: 'bg-gray-300 dark:bg-gray-900',
  },
  {
    name: 'slate',
    label: 'Slate',
    class: 'bg-slate-300 dark:bg-slate-900',
  },
  {
    name: 'stone',
    label: 'Stone',
    class: 'bg-stone-300 dark:bg-stone-900',
  },
  {
    name: 'zinc',
    label: 'Zinc',
    class: 'bg-zinc-300 dark:bg-zinc-900',
  },
  {
    name: 'neutral',
    label: 'Neutral',
    class: 'bg-neutral-300 dark:bg-neutral-900',
  },
] as const
/**
 * Set a tailwind color complete shade.
 */
export function switchColorShades(
  name: ColorName,
  from: string,
) {
  for (const shade of shades) {
    window.document.documentElement.style.setProperty(
      `--color-${name}-${shade}`,
      `var(--color-${from}-${shade})`,
    )
  }
}

/**
 * Reset all shades of a color.
 */
export function resetColor(name: ColorName) {
  for (const shade of shades) {
    window.document.documentElement.style.removeProperty(
      `--color-${name}-${shade}`,
    )
  }
}
