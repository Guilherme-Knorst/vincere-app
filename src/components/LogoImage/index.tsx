import { widthDP } from '../../utils'
import styled from 'styled-components/native'
import logo from '../../../logo.png'

export interface LogoImage {
	width?: string
}

export const LogoImage = styled.Image.attrs({
	source: logo,
	resizeMode: 'contain',
})<LogoImage>`
	width: ${({ width }) => width ?? widthDP('50%')};
	height: ${({ width }) => width ?? widthDP('50%')};
`
