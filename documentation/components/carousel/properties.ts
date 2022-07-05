export const userProps = {
  props: [
    {
      name: 'slidesToShow',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'slides',
      type: 'CarouselSlideItem',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
  ],
  slots: [],
}

export const userItemProps = {
  props: [
    {
      name: 'avatar',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'badge',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'name',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'role',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'RouteLocationRaw',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'skills',
      type: 'CarouselSlideSkill',
      required: 'false',
      default: '() => [ ]',
      values: ['array'],
    },
  ],
  slots: [],
}

export const iconProps = {
  props: [
    {
      name: 'slidesToShow',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'slides',
      type: 'CarouselSlideItem',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
  ],
  slots: [],
}

export const iconItemProps = {
  props: [
    {
      name: 'icon',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'RouteLocationRaw',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}
