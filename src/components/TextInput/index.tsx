import { FunctionComponent } from 'react'
import { KeyboardTypeOptions } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Typography } from '../Typography'
import { FlexContainer } from '../Container'

interface InputProps {
	label?: string
	value: string
	keyboardType: KeyboardTypeOptions
	width?: string
	textAlign?: 'center' | 'left' | 'right' | undefined
}

const Input = styled.TextInput<InputProps>`
	background-color: white;
	border-radius: 5;
	padding: 10px;
	font-size: 19;
	${({ textAlign = 'left' }) =>
		textAlign &&
		css`
			text-align: ${textAlign};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};
`

const TextInput: FunctionComponent<InputProps> = ({
	value,
	label,
	keyboardType,
	width,
	textAlign,
}: InputProps) => {
	if (label)
		return (
			<FlexContainer>
				<Typography fontSize={18}>{label}</Typography>
				<Input value={value} keyboardType={keyboardType} width={width} textAlign={textAlign} />
			</FlexContainer>
		)

	return <Input value={value} keyboardType={keyboardType} width={width} textAlign={textAlign} />
}

export default TextInput
