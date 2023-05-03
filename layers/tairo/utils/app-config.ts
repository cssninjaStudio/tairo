const nativeComponent = ['img', 'div']
export function resolveComponentOrNative(component: string) {
  if (nativeComponent.includes(component)) return component

  return resolveComponent(component)
}
