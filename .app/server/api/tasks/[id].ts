// server/api/task/[id].ts

import { defineEventHandler, getQuery } from 'h3'
import Api from '~/utils/api'
import { type TaskResult } from '~/types/api/taskResult'
import { type Company } from '~/types/company'

export default defineEventHandler(async (event): Promise<TaskResult<Company>> => {
  const taskId = parseInt(event.context.params.id, 10)
  const query = getQuery(event)
  const body = {}

  const force_apply_first_view = query.force_apply_first_view === 'true'

  try {
    const response = await Api.getTaskResults(taskId, body, force_apply_first_view)
    return response.data
  }
  catch (error: any) {
    console.error('Error fetching task results:', error)
    return {
      data: null,
      error: error.message,
    }
  }
})
