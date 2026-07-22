import React, { useCallback, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import { IMessage } from './Models'

export function renderComponentOrElement<TProps extends Record<string, any>>(
  component: React.ComponentType<TProps> | React.ReactElement | ((props: TProps) => React.ReactNode) | null | undefined,
  props: TProps
): React.ReactNode {
  if (!component)
    return null

  if (React.isValidElement(component))
    // If it's already a React element, clone it with props
    return React.cloneElement(component, props as any)

  if (typeof component === 'function') {
    // Check if it's a class component (has prototype.isReactComponent)
    // Class components must use React.createElement
    const isClassComponent = component.prototype && component.prototype.isReactComponent

    if (isClassComponent)
      return React.createElement(component as React.ComponentType<TProps>, props as any)

    // For function components and render functions, call directly
    // Using createElement with inline arrow functions causes unmount/remount
    // when function reference changes, this matches v2.x behavior
    return (component as (props: TProps) => React.ReactNode)(props)
  }

  // Check for React.memo or React.forwardRef wrapped components
  // These have $$typeof property and should be rendered with createElement
  if (typeof component === 'object' && component !== null && '$$typeof' in component)
    return React.createElement(component as React.ComponentType<TProps>, props as any)

  // If it's neither, return it as-is
  return component
}

export function isSameDay (
  currentMessage: IMessage,
  diffMessage: IMessage | null | undefined
) {
  if (!diffMessage || !diffMessage.createdAt)
    return false

  const currentCreatedAt = dayjs(currentMessage.createdAt)
  const diffCreatedAt = dayjs(diffMessage.createdAt)

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid())
    return false

  return currentCreatedAt.isSame(diffCreatedAt, 'day')
}

export function isSameUser (
  currentMessage: IMessage,
  diffMessage: IMessage | null | undefined
) {
  return !!(
    diffMessage &&
    diffMessage.user &&
    currentMessage.user &&
    diffMessage.user._id === currentMessage.user._id
  )
}

function processCallbackArguments (args: unknown[]): unknown[] {
  const [e, ...rest] = args
  const { nativeEvent } = (e as { nativeEvent?: unknown }) || {}
  let params: unknown[] = []
  if (e) {
    if (nativeEvent)
      params.push({ nativeEvent })
    else
      params.push(e)
    if (rest)
      params = params.concat(rest)
  }

  return params
}

export function useCallbackDebounced<T extends (...args: any[]) => any>(callbackFunc: T, deps: React.DependencyList = [], time: number): (...args: Parameters<T>) => void {
    throw new Error("STUB");
}

export function useCallbackThrottled<T extends (...args: any[]) => any>(callbackFunc: T, deps: React.DependencyList = [], time: number): (...args: Parameters<T>) => void {
  const lastExecution = useRef<number>(0)
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(undefined)

  // we use function instead of arrow to access arguments object
  const savedFunc = useCallback((...args: Parameters<T>) => {
      throw new Error("STUB");
  }, [callbackFunc, time, ...deps])

  useEffect(() => {
      throw new Error("STUB");
  }, [])

  return savedFunc
}
