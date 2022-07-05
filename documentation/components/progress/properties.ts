export const barProperties = {
  props: [
    {
      name: 'value',
      type: 'number',
      required: 'false',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'color',
      type: 'ProgressColors',
      required: 'false',
      default: 'false',
      values: ['primary', 'success', 'info', 'warning', 'danger'],
    },
    {
      name: 'size',
      type: 'ProgressSizes',
      required: 'false',
      default: 'false',
      values: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      name: 'shape',
      type: 'ProgressShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved', 'full'],
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const circleProperties = {
  props: [
    {
      name: 'value',
      type: 'number',
      required: 'false',
      default: '50',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'number',
      required: 'false',
      default: '60',
      values: ['number'],
    },
    {
      name: 'thickness',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['number'],
    },
  ],
  slots: [],
}
