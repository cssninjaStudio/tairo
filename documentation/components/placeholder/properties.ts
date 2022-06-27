export const properties = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Placeholder actions',
    },
    {
      name: '#image',
      properties: ['null'],
      description: 'Placeholder image',
    },
  ],
}
