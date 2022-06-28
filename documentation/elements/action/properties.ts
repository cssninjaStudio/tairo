export const properties = {
  props: [
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
      name: 'muted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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
      description: 'Action content',
    },
  ],
}
