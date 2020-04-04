import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {IdProvider, useId, useGetId} from '../.'

const CheckBox = ({
	value,
	onChange,
}: {
	value: boolean
	onChange(value: boolean): void
}) => {
	const id = useId()
	const handleChange = React.useCallback((ev) => onChange(ev.target.checked), [
		onChange,
	])
	return (
		<>
			<input id={id} type="checkbox" onChange={handleChange} />
			<label htmlFor={id}>Click me</label>
		</>
	)
}
const Radio = ({
	value,
	onChange,
}: {
	value: number
	onChange(value: number): void
}) => {
	const getId = useGetId()
	const name = getId()
	const handleChange = React.useCallback((ev) => onChange(+ev.target.value), [
		onChange,
	])
	const makeOption = (num) => {
		const id = getId()
		return (
			<div>
				<input
					id={id}
					name={name}
					type="radio"
					value={num}
					checked={num === value}
					onChange={handleChange}
				/>
				<label htmlFor={id}>Click me {num}</label>
			</div>
		)
	}
	return (
		<div>
			{makeOption(1)}
			{makeOption(2)}
			{makeOption(3)}
		</div>
	)
}

const App = () => {
	const [checked, handleChecked] = React.useState(false)
	const [num, handleNum] = React.useState(0)
	return (
		<>
			<CheckBox value={checked} onChange={handleChecked} />
			<Radio value={num} onChange={handleNum} />
		</>
	)
}

const WrappedApp = () => (
	<IdProvider>
		<App />
	</IdProvider>
)

ReactDOM.render(<WrappedApp />, document.getElementById('root'))
