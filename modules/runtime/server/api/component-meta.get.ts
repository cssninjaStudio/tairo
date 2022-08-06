import { appendHeader, createError, defineEventHandler } from 'h3'
import { pascalCase } from 'scule'
// @ts-expect-error 'component-meta:parsed' is a custom hook
import components from '#meta/virtual/meta'

export default defineEventHandler((event) => {
  // TODO: Replace via downstream config
  appendHeader(event, 'Access-Control-Allow-Origin', '*')

  const componentName = event.context.params['component?']

  if (componentName) {
    const componentPascalName = pascalCase(componentName)
    if (componentPascalName in components) {
      return components[componentPascalName]
    }

    throw createError({
      statusMessage: 'Components not found!',
      statusCode: 404,
      data: {
        description: 'Please make sure you are looking for correct component',
      },
    })
  }

  return components
})
