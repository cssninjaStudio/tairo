export const properties = {
  props: [
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'AvatarGroupSizes',
      required: 'false',
      default: 'sm',
      values: ['xs', 'sm', 'md', 'lg'],
    },
    {
      name: 'avatars',
      type: '(AvatarProps | string)[ ]',
      required: 'true',
      default: '() => [ ]',
      values: ['array'],
    },
  ],
  slots: [
    {
      name: '#default',
      properties: ['null'],
      description: 'Component content',
    },
  ],
}
