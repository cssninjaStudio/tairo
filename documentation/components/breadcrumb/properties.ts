export const properties = {
  props: [
    {
      name: 'items',
      type: 'BreadcrumbItem[ ]',
      required: 'false',
      default: '() => [ ]',
      values: ['array'],
    },
  ],
  slots: [],
}

export const itemProperties = {
  props: [
    {
      name: 'label',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'hideLabel',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'icon',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'RouteLocationRaw',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Separator between items',
    },
  ],
}
