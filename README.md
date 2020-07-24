# @nekogd/react-utility-hooks

Small package exposing utility hooks that we use very often

# useWhyRerender

```
import { useWhyRerender } from '@nekogd/react-utility-hooks'
```

Example usage

```
 const ExampleComponent = React.memo(props => {
   const { count, style } = props;
   useWhyRerender('example component name', props);
   return <div style={style}>{count}</div>
 })
 ```

 This will log changed props for us into the js console and will be a huge help with debugging. 

 # useHover

```
  import { useHover } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    const [hoverRef, isHovered] = useHover();
    return (
       <div ref={hoverRef}> {isHovered ? 'I am hovered': 'Not hovered'}</div>
    )
  }
```
# useCounter

Just a classic example to give understanding of the flow.

```
  import { useCounter } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    const count = useCounter();
    return (
       <p>{count}</p>
    )
  }
```
 