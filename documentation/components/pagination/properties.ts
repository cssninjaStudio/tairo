export const properties = {
  props: [
    {
      name: 'itemPerPage',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'totalItems',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'currentPage',
      type: 'number',
      required: 'false',
      default: '1',
      values: ['number'],
    },
    {
      name: 'maxLinksDisplayed',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['number'],
    },
    {
      name: 'noRouter',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'routerQueryKey',
      type: 'string',
      required: 'false',
      default: 'page',
      values: ['string'],
    },
    {
      name: 'shape',
      type: 'PaginationShapes',
      required: 'false',
      default: 'rounded',
      values: ['straight', 'rounded', 'curved'],
    },
  ],
  slots: [
    {
      name: '#before-pagination',
      properties: ['null'],
      description: 'Insert element before pagination',
    },
    {
      name: '#after-pagination',
      properties: ['null'],
      description: 'Insert element after pagination',
    },
    {
      name: '#before-navigation',
      properties: ['null'],
      description: 'Insert element before navigation',
    },
    {
      name: '#after-navigation',
      properties: ['null'],
      description: 'Insert element after navigation',
    },
  ],
}
