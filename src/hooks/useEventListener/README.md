# useEventListener

useEventListener

If we find ourselves adding a lot of event listeners via useEffect, it might be a good idea to abstract it to a custom hook.


## Install
```
yarn add @nekogd/react-utility-hooks
```
or 
```
npm i @nekogd/react-utility-hooks
```
## Examples

```

import { useEventListener } from '@nekogd/react-utility-hooks';

  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener('mousemove', handler);
```

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

### Property

| Property  | Description            | type     | default |
| --------- | ---------------------- | -------- | ------- |
| eventName | Event name             | string   | -       |
| handler   | Handle function        | Function | -       |
| options   | More options(optional) | Options  | -       |

### Options

| Property | Description                                                                                                                                                                                                                                     | type                                                                   | default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| target   | DOM element or Ref Object                                                                                                                                                                                                                       | (() => HTMLElement) \| HTMLElement \| React.MutableRefObject \| Window | -       |
| capture  | Optional, a Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.                                                                    | boolean                                                                | -       |
| once     | Optional, A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.                                                                           | boolean                                                                | -       |
| passive  | Optional, A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. | boolean                                                                |
