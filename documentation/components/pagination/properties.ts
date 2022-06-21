export const properties = {
  props: [
    {
      name: 'string',
      type: 'string',
      required: 'false',
      default: 'rounded',
      values: ['string'],
    },
    {
      name: 'boolean',
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
