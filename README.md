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

 This will log changed prop for us into the js console and will be a huge help with debugging. 
 