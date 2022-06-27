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
      name: 'shape',
      type: 'TabsShapes',
      required: 'false',
      default: 'rounded',
      values: ['rounded', 'full'],
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
      name: 'slots',
      type: 'tabSlots',
      required: 'false',
      default: '2',
      values: ['2', '3'],
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
