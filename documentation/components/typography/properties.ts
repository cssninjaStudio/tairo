export const headingProperties = {
  props: [
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'xl',
      values: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    {
      name: 'as',
      type: 'string',
      required: 'false',
      default: 'h3',
      values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    {
      name: 'weight',
      type: 'string',
      required: 'false',
      default: 'semibold',
      values: ['light', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    {
      name: 'lead',
      type: 'string',
      required: 'false',
      default: 'normal',
      values: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
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

export const paragraphProperties = {
  props: [
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'md',
      values: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    {
      name: 'as',
      type: 'string',
      required: 'false',
      default: 'p',
      values: ['string'],
    },
    {
      name: 'weight',
      type: 'string',
      required: 'false',
      default: 'normal',
      values: ['light', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    {
      name: 'lead',
      type: 'string',
      required: 'false',
      default: 'normal',
      values: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Paragraph content',
    },
  ],
}

export const textProperties = {
  props: [
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'md',
      values: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    {
      name: 'weight',
      type: 'string',
      required: 'false',
      default: 'normal',
      values: ['light', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    {
      name: 'lead',
      type: 'string',
      required: 'false',
      default: 'normal',
      values: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Text content',
    },
  ],
}
