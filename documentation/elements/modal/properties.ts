export const properties = {
  props: [
    {
      name: 'open',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'size',
      type: 'ModalSize',
      required: 'false',
      default: 'md',
      values: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    {
      name: 'shape',
      type: 'ModalShape',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
    {
      name: 'footer',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'footerAlign',
      type: 'ModalAlign',
      required: 'false',
      default: 'end',
      values: ['start', 'end', 'center', 'between'],
    },
  ],
  slots: [
    {
      name: '#header',
      properties: ['null'],
      description: 'Modal header content',
    },
    {
      name: '#body',
      properties: ['null'],
      description: 'Modal body content',
    },
    {
      name: '#footer',
      properties: ['null'],
      description: 'Modal footer content',
    },
  ],
}
