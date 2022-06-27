export const properties = {
  props: [
    {
      name: 'shape',
      type: 'IconBoxShapes',
      required: 'false',
      default: 'rounded',
      values: ['circle', 'rounded'],
    },
    {
      name: 'size',
      type: 'IconBoxSizes',
      required: 'false',
      default: 'xs',
      values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      name: 'bordered',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Icon box content',
    },
  ],
}
