export const properties = {
  props: [
    {
      name: 'color',
      type: 'TagColors',
      required: 'false',
      default: 'default',
      values: [
        'default',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },
    {
      name: 'flavor',
      type: 'TagFlavors',
      required: 'false',
      default: 'solid',
      values: ['solid', 'pastel', 'outline'],
    },
    {
      name: 'shape',
      type: 'TagShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved', 'full'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Tag content',
    },
  ],
}
