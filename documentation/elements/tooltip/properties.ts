export const properties = {
  props: [
    {
      name: 'data-tooltip',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'flow',
      type: 'string',
      required: 'false',
      default: 'top',
      values: ['top', 'left', 'right', 'down'],
    },
  ],
  slots: [],
}
