export const properties = {
  props: [
    {
      name: 'separator',
      type: 'BreadcrumbSeparator',
      required: 'false',
      default: 'dot',
      values: ['dot', 'slash', 'chevron', 'arrow'],
    },
    {
      name: 'items',
      type: 'BreadcrumbItem[ ]',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
    {
      name: 'withIcons',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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
  slots: [],
}
