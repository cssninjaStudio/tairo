export const properties = {
  props: [
    {
      name: 'shape',
      type: 'PopoverShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
    {
      name: 'sizes',
      type: 'PopoverSizes',
      required: 'false',
      default: 'md',
      values: ['sm', 'md', 'lg'],
    },
    {
      name: 'orientation',
      type: 'PopoverOrientation',
      required: 'false',
      default: 'start',
      values: ['start', 'end'],
    },
  ],
  slots: [
    {
      name: '#trigger',
      properties: ['null'],
      description: 'Popover button content',
    },
    {
      name: '#content',
      properties: ['null'],
      description: 'Popover main content',
    },
  ],
}

export const helpProperties = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
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
    {
      name: 'icon',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'iconColors',
      type: 'PopoverIconColors',
      required: 'false',
      default: 'primary',
      values: ['primary', 'info', 'success', 'warning', 'danger'],
    },
  ],
  slots: [],
}

export const dualProperties = {
  props: [
    {
      name: 'stats',
      type: 'StatItem',
      required: 'true',
      default: '() = [ ]',
      values: ['array'],
    },
    {
      name: 'image',
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
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'footerTitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'footerText',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const mediaProperties = {
  props: [
    {
      name: 'images',
      type: 'string[]',
      required: 'true',
      default: '() = [ ]',
      values: ['array'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
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
    {
      name: 'footerTitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'footerText',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}
