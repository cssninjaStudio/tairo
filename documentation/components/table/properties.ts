export const properties = {
  props: [
    {
      name: 'shape',
      type: 'TableShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
  ],
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
  props: [],
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
      name: 'uppercase',
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
      description: 'Heading content',
    },
  ],
}

export const cellProperties = {
  props: [
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
