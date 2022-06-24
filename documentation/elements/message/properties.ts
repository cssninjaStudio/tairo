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
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'icon',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}
