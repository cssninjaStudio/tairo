export const properties = {
  props: [
    {
      name: 'type',
      type: 'MessageTypes',
      required: 'false',
      default: 'success',
      values: ['success', 'info', 'warning', 'danger'],
    },
    {
      name: 'shapes',
      type: 'MessageShapes',
      required: 'false',
      default: 'rounded',
      values: ['straith', 'rounded', 'curved', 'full'],
    },
    {
      name: 'message',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'icon',
      type: 'boolean | string',
      required: 'false',
      default: 'false',
      values: ['boolean', 'string'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Message content',
    },
    {
      name: '#close-button',
      properties: ['null'],
      description: 'Close button content',
    },
  ],
}
