# React Utility Hooks

Modular utility hooks that we often use grouped in one package.\
Written in TypeScript, documented, tested and maintained.\
Disclaimer: at least React 16 is needed (the one with hooks ;) )

# useWhyRerender

Happy debugging!\
The hook to inspect why the component has rerendered (we've all been (or will be) there).\
If we have changes in component props, we will have them logged into js console.\
This helps us a lot in debugging

@param name {string} - component name (used in console.log only)\
@param props {any} - component props

Example usage

```
import { useWhyRerender } from '@nekogd/react-utility-hooks'

 const ExampleComponent = React.memo(props => {
   const { count, style } = props;
   useWhyRerender('example component name', props);

   return <div style={style}>{count}</div>
 })
```

# useHover

Easily inspect if component is hovered.

@returns hoverRef {any} - a ref that we need to attach\
@returns isHovered {boolean} - whether or not element is hovered

Example usage

```
  import { useHover } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    const [hoverRef, isHovered] = useHover();

    return (
       <div ref={hoverRef}> {isHovered ? 'I am hovered': 'Not hovered'}</div>
    )
  }
```

# useDocumentTitle

Easily change document title without React Helmet ;)

@param title {string} - new document title\
@param retainOnUnmount {boolean} - whether or not to retain document title on umnount\

Example usage

```
  import { useHover } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    useDocumentTitle(`my new Document Title`);

    return (
       <> Content of my component </>
    )
  }
```

# useCounter

Just a classic example to give understanding of the flow of this package i.e. types and tests.\
@param initialValue {number?}

```
import { useCounter } from from "@neko/react-utility-hooks";

const ExampleComponent = () => {
  const { count, increment, reset, decrement } = useCounter();
  return (
    <>
      <button onClick={increment}>Increment counter</button>
      <button onClick={reset}>Reset counter</button>
      <button onClick={decrement}>Decrement counter</button>
      <p>{count}</p>
    </>
  );
};
```
