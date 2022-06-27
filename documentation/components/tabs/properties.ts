export const properties = {
  props: [
    {
      name: 'tabs',
      type: 'TabsItem[ ]',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
    {
      name: 'type',
      type: 'TabsType',
      required: 'false',
      default: 'tabs',
      values: ['tabs', 'boxed'],
    },
    {
      name: 'justify',
      type: 'TabsAlign',
      required: 'false',
      default: 'start',
      values: ['start', 'center', 'end'],
    },
    {
      name: 'selected',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'boxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'hideLabel',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [
    {
      name: '#tab',
      properties: ['null'],
      description: 'Active tab content',
    },
  ],
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
      name: 'value',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'icon',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}
