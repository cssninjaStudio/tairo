export const properties = {
  props: [
    {
      name: 'src',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'srcDark',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'badgeSrc',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'false',
      default: '?',
      values: ['string'],
    },
    {
      name: 'size',
      type: 'AvatarSize',
      required: 'false',
      default: 'md',
      values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    {
      name: 'shape',
      type: 'AvatarShape',
      required: 'false',
      default: 'circle',
      values: ['circle', 'square'],
    },
    {
      name: 'dot',
      type: 'boolean | AvatarDotColor',
      required: 'false',
      default: 'false',
      values: [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'pink',
        'yellow',
      ],
    },
  ],
  slots: [
    {
      name: '#avatar',
      properties: ['null'],
      description: 'Main avatar content',
    },
    {
      name: '#badge',
      properties: ['null'],
      description: 'Badge content',
    },
  ],
}
