export const properties = {
  props: [
    {
      name: 'items',
      type: 'AccordionItem',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
    {
      name: 'openItems',
      type: 'number[ ]',
      required: 'false',
      default: '() => [ ]',
      values: ['number'],
    },
    {
      name: 'exclusive',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'shape',
      type: 'AccordionShapes',
      required: 'false',
      default: 'false',
      values: ['straight', 'rounded', 'curved'],
    },
    {
      name: 'action',
      type: 'AccordionAction',
      required: 'false',
      default: 'false',
      values: ['dot', 'chevron', 'plus'],
    },
  ],
  slots: [
    {
      name: '#accordion-item',
      properties: ['null'],
      description: 'Accordion content',
    },
    {
      name: '#accordion-header-content',
      properties: ['null'],
      description: 'Accordion header content',
    },
    {
      name: '#accordion-item-content',
      properties: ['null'],
      description: 'Accordion item content',
    },
  ],
}

export const itemProperties = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}
