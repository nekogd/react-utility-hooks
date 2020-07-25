# React Utility Hooks

Modular utility hooks that we often use grouped in one package.\
Written in TypeScript, documented, tested and maintained.\
Disclaimer: at least React 16 is needed (the one with hooks ;) )

## useWhyRerender

Happy debugging!\
The hook to inspect why the component has rerendered (we've all been (or will be) there).\
If we have changes in component props, we will have them logged into js console.\
This helps us a lot in debugging

@param name {string} - component name (used in console.log only)\
@param props {any} - component props

### Example usage

```
import { useWhyRerender } from '@nekogd/react-utility-hooks'

 const ExampleComponent = React.memo(props => {
   const { count, style } = props;
   useWhyRerender('example component name', props);

   return <div style={style}>{count}</div>
 })
```

## useEventListener

If we find ourselves adding eventListeners with useEffect a lot, it might be a good idea to abstract that to a custom hook.

### Example usage

```
import { useEventListener } from '@nekogd/react-utility-hooks';

  // Initial state to track down mouse position
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Make sure the reference don't change
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener('mousemove', handler);
```

### Api

## API

```ts
function useEventListener(
  eventName: string,
  handler: Function,
  options?: { target: Target; capture?: boolean; once?: boolean; passive?: boolean },
): void;

type Target =
  | (() => HTMLElement)
  | HTMLElement
  | React.MutableRefObject<HTMLElement>
  | Window;
```

## useHover

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

## useDocumentTitle

Easily change document title without React Helmet ;)

@param title {string} - new document title

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

## useCounter

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
