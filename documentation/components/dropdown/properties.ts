export const dropdownProperties = {
  props: [
    {
      name: 'flavor',
      type: 'DropdownFlavors',
      required: 'false',
      default: 'button',
      values: ['button', 'context', 'text'],
    },
    {
      name: 'shape',
      type: 'DropdownShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
    {
      name: 'orientation',
      type: 'DropdownOrientation',
      required: 'false',
      default: 'start',
      values: ['start', 'end'],
    },
    {
      name: 'label',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'headerLabel',
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
      description: 'Dropdown content',
    },
  ],
}

export const itemProperties = {
  props: [
    {
      name: 'to',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [
    {
      name: '#media',
      properties: ['null'],
      description: 'Display a media element',
    },
    {
      name: '#content',
      properties: ['null'],
      description: 'Dropdown item content',
    },
  ],
}
