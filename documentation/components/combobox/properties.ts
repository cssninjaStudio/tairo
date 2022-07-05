export const properties = {
  props: [
    {
      name: 'modelValue',
      type: 'any',
      required: 'false',
      default: 'undefined',
      values: ['any'],
    },
    {
      name: 'items',
      type: 'ComboboxItem[ ]',
      required: 'true',
      default: '() => [ ]',
      values: ['Array'],
    },
    {
      name: 'shape',
      type: 'ComboboxShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved', 'full'],
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
    {
      name: 'loading',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'disabled',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}
