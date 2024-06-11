// server/api/task.ts

import { defineEventHandler, getQuery } from 'h3'
import Api from '~/utils/api'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = parseInt((query.page as string) || '1', 10)

  try {
    const response = await Api.getTasks(page)
    return {
      data: response.data,
      length: response.data.length,

    }
  }
  catch (error: any) {
    console.error('Error fetching data:', error)
    return {
      data: null,
      error: error.message,
    }
  }
})
