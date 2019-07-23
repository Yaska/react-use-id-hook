import React, {
	FunctionComponent,
	createContext,
	useContext,
	useRef,
} from 'react'
import PropTypes from 'prop-types'

const Id = createContext<() => string>(() => {
	throw new TypeError('Please wrap your application with IdProvider')
})

type IdState = {
	id: number
	get(): string
}
const useIdGetter = (prefix = 'id') => {
	const ref = useRef<IdState>()
	if (!ref.current) {
		const me = {id: 0, get: () => `${prefix}-${me.id++}`}
		ref.current = me
	}
	return ref.current.get
}

export const IdProvider: FunctionComponent = ({children}) => {
	const get = useIdGetter()
	return <Id.Provider value={get}>{children}</Id.Provider>
}
IdProvider.propTypes = {children: PropTypes.node.isRequired}

export const useId = () => {
	const getter = useContext(Id)
	const ref = useRef<string>()
	if (!ref.current) ref.current = getter()
	return ref.current
}

export const useGetId = () => {
	const getter = useContext(Id)
	const base = useRef<string>()
	if (!base.current) base.current = getter()
	return useIdGetter(base.current)
}
