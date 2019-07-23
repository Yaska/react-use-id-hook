# react-use-id-hook

This is a tiny hook to create consisent id strings while rendering React, both when doing SSR and normally.

This is useful for creating unique `id` attributes for DOM elements.

## API

### `<IdProvider [prefix="id-"] />`

This provider provides the id state. Your app needs to be wrapped with it.

### `useId()`

This hook returns a unique id that remains consistent on re-render

### `useGetId()`

This hook returns a function that returns unique ids. To use it, the same rule applies as for hooks:

> always call it in the same order, without control flow

## Example

Also see the `example/` folder.

```js
const CheckBox = ({value, onChange}) => {
	const id = useId()

	return (
		<>
			<input
				id={id}
				type="checkbox"
				checked={value}
				onChange={ev => onChange(ev.target.checked)}
			/>
			<label htmlFor={id}>Click me</label>
		</>
	)
}
```
