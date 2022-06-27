export const properties = {
  props: [
    {
      name: 'shape',
      type: 'CardShape',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
    {
      name: 'elevated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'elevatedHover',
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
      description: 'Component content',
    },
  ],
}
