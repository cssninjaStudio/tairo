export const properties = {
  props: [],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Table body content',
    },
    {
      name: '#header',
      properties: ['null'],
      description: 'Table header content',
    },
  ],
}

export const rowProperties = {
  props: [
    {
      name: 'shape',
      type: 'FlexRowShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Table row content',
    },
  ],
}

export const headingProperties = {
  props: [
    {
      name: 'type',
      type: 'FlexTableHeadingType',
      required: 'false',
      default: 'stable',
      values: ['stable', 'grow', 'shrink'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Heading content',
    },
  ],
}

export const cellProperties = {
  props: [
    {
      name: 'type',
      type: 'FlexTableCellType',
      required: 'false',
      default: 'stable',
      values: ['stable', 'grow', 'shrink'],
    },
    {
      name: 'light',
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
      description: 'Cell content',
    },
  ],
}
