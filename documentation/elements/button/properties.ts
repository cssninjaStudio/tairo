export const properties = {
  props: [
    {
      name: 'color',
      type: 'string',
      required: 'false',
      default: 'default',
      values: [
        'default',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },
    {
      name: 'flavor',
      type: 'string',
      required: 'false',
      default: 'solid',
      values: ['solid', 'pastel', 'outline'],
    },
    {
      name: 'shape',
      type: 'string',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved', 'full'],
    },
    {
      name: 'to',
      type: 'RouteLocationRaw',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'loading',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'disabled',
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
      description: 'Button content',
    },
  ],
}
