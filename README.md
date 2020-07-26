# React Utility Hooks

Modular utility hooks that we often use grouped in one package.\
Written in TypeScript, documented, tested and maintained.\
Disclaimer: at least React 16 is needed (the one with hooks ;) )

## useWhyRerender

Happy debugging!\
The hook to inspect why the component has rerendered (we've all been (or will be) there).\
If we have changes in component props, we will have them logged into js console.\
This helps us a lot in debugging

### Example usage

```
import { useWhyRerender } from '@nekogd/react-utility-hooks'

 const ExampleComponent = React.memo(props => {
   const { count, style } = props;
   useWhyRerender('example component name', props);

   return <div style={style}>{count}</div>
 })
```

### API

```ts
type IUseWhyRerender = {
  [key: string]: any;
};

function useWhyRerender(componentName: string, props: IUseWhyRerender): void;
```

## useEventListener

If we find ourselves adding eventListeners with useEffect a lot, it might be a good idea to abstract that to a custom hook.

### Example usage

```
import { useEventListener } from '@nekogd/react-utility-hooks';

  const ExampleComponent = () => {
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

    return (
      <>
        <h2>client mouse coords</h2>
        <table>
          <tbody>
            <tr>
              <td>clientX</td>
              <td>{coords.x}</td>
            </tr>
            <tr>
              <td>clientY</td>
              <td>{coords.y}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

```

### Api

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

## useClickAway

A hook that manages click outside of target elements.
We've all been there.

### Example usage

```
  import { useClickAway } from from "@neko/react-utility-hooks";

  const ExampleComponent = () => {
    const [counter, setCounter] = useState(0);
    const ref = useRef();
    useClickAway(() => {
      setCounter((s) => s + 1);
    }, ref);

    return (
      <>
        <div>
          Click anywhere outside the span to increse the counter
          <span ref={ref}>
            <button type="button">This does not increase the counter</button>
          </span>
          <p>counter: {counter}</p>
        </div>
      </>
    );
  }

```

### API

```ts
function useClickAway(
  onClickAway: (event: MouseEvent | TouchEvent) => void,
  target: (() => HTMLElement) | HTMLElement | React.MutableRefObject,
);
```

### Params

| Property    | Description               | Type                                                         | Default |
| ----------- | ------------------------- | ------------------------------------------------------------ | ------- |
| onClickAway | Trigger Function          | (event) => void                                              | -       |
| target      | DOM element or Ref Object | (() => HTMLElement) \| HTMLElement \| React.MutableRefObject | -       |

## useHover

Easily inspect if component is hovered.

```
@return hoverRef {any} - a ref that we need to attach\
@return isHovered {boolean} - whether or not element is hovered
```

### Example usage

```
  import { useHover } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    const [hoverRef, isHovered] = useHover();

    return (
       <div ref={hoverRef}> {isHovered ? 'I am hovered': 'Not hovered'}</div>
    )
  }
```

### API

```ts

function useHover(<T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean,
])

```

## useDocumentTitle

Easily change document title without React Helmet ;)

### Example usage

```
  import { useDocumentTitle } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    useDocumentTitle(`my new Document Title`);

    return (
       <> Content of my component </>
    )
  }
```

### API

```ts
function useDocumentTitle(title: string): void;
```

## useSlug

Generate slug from input string

### Example usage

```
  import { useSlug } from '@nekogd/react-utility-hooks'

  const ExampleComponent = () => {
    const slug = useSlug('Some string');

    return (
       <> The slug is {slug} </>
    )
  }
```

### API

```ts
function useSlug(inputString: string): string;
```

## useCounter

Just a classic example to give understanding of the flow of this package i.e. types and tests.\

```
@param initialValue {number?}
```

### Example usage

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

### API

```ts
type IUseCounter = {
  count: number;
  increment: () => void;
  reset: () => void;
  decrement: () => void;
};

function useCounter(initialValue: number = 0): IUseCounter;
```
