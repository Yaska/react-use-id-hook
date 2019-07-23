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

## Installation

1. Install the `react-use-id-hook` NPM package with your favorite package manager.
2. Wrap your top-level component with `<IdProvider>`
3. In your components, use `useId()` or `useGetId()` as appropriate.

## Example

[See the full example](https://github.com/Yaska/react-use-id-hook/blob/master/example/index.tsx).

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
