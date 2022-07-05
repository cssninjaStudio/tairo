export const properties = {
  props: [
    {
      name: 'id',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'modelValue',
      type: 'any',
      required: 'true',
      default: 'undefined',
      values: ['any'],
    },
    {
      name: 'value',
      type: 'any',
      required: 'true',
      default: 'undefined',
      values: ['any'],
    },
    {
      name: 'name',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'label',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'hideLabel',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}
