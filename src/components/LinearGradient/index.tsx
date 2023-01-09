import React, { PropsWithChildren, ReactNode } from 'react'
import { pixelToDP, widthDP, heightDP } from '../../utils'
import styled, { css, useTheme } from 'styled-components/native'
import Touchable from '../Touchable'
import LinearGradient from 'react-native-linear-gradient'
import { DefaultScreenContainer } from '../DefaultScreenContainer'

export function GradientContainer({ children }: PropsWithChildren) {
	const theme = useTheme()
	return (
		// <DefaultScreenContainer>
		<LinearGradient
			colors={[theme.palette.primary.main, 'black', 'black']}
			start={{ x: 1, y: 0 }}
			locations={[0, 0.5, 1]}
			// end={{ x: 0, y: 1 }}>
		>
			<DefaultScreenContainer>{children}</DefaultScreenContainer>
		</LinearGradient>
		// </DefaultScreenContainer>
	)
}
