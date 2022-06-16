export const properties = {
  props: [
    {
      name: 'picture',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'pictureDark',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'badge',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'initials',
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
      name: 'dotColor',
      type: 'AvatarDotColor',
      required: 'false',
      default: 'success',
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
