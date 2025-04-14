import { conversations } from './index'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    return
  }

  return conversations.find(conversation => conversation.id === Number(id))
})
