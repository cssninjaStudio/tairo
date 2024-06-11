export class TaskResult<T> {
  count: number
  next: string | null
  previous: string | null
  results: Array<T>
  task: any
  total_pages: number
}
