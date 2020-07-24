/**
 * Utility hook to inspect why the component rerenders (we've all been (or will be)there))
 * example usage
 * const ExampleComponent = memo(props => {
 * const { count, style } = props;
 * useWhyRerender('example component name', props);
 * return <div style={style}>{count}</div>
 * })
 */

import { useEffect, useRef } from 'react'

export const useWhyRerender = (name: string, props: any): void => {
  /**
   * Mutable ref object to store props so that we can compare props on each hook run
   */
  const previousProps = useRef<any>()

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      // Use this object to keep track of changed props
      /**
       * object to track the changes in props
       */
      const objectWithChanges = {}
      // Iterate through keys generated from props
      if (allKeys && allKeys.length > 0) {
        for (let i = 0, len = allKeys.length; i < len; i++) {
          const key = allKeys[i]
          // If there is a difference we store a change in our object
          if (previousProps.current[key] !== props[key]) {
            objectWithChanges[key] = {
              from: previousProps.current[key],
              to: props[key],
            }
          }
        }
      }

      // If objectWithChanges is not empty, we log to the console
      if (Object.keys(objectWithChanges).length) {
        console.log('WHY RERENDER:', name, objectWithChanges)
      }
    }

    // update previousProps with current props for next hook call
    previousProps.current = props
  })
}
