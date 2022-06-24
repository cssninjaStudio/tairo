export const thinProperties = {
  props: [
    {
      name: 'id',
      type: 'string',
      required: 'true',
      default: '',
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
      name: 'label',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'sublabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'colors',
      type: 'ThinSwitchBlockColor',
      required: 'false',
      default: 'text',
      values: ['primary', 'success', 'info', 'warning', 'danger'],
    },
  ],
  slots: [],
}

export const ballProperties = {
  props: [
    {
      name: 'id',
      type: 'string',
      required: 'true',
      default: '',
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
      name: 'label',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'sublabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'colors',
      type: 'BallSwitchColor',
      required: 'false',
      default: 'text',
      values: ['primary', 'success', 'info', 'warning', 'danger'],
    },
  ],
  slots: [],
}
