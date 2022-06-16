export function onceImageErrored(event: Event, size: string) {
  const target = event.target as HTMLImageElement
  target.src = `https://via.placeholder.com/${size}`
}
