import { PropsWithChildren } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { FlexContainerProps } from '../Container'

// const Gradient = styled(LinearGradient).attrs({
// 	colors: ['#00fffa', '#9800ff'],
// 	start: { x: 0, y: 0 },
// 	end: { x: 1, y: 1 },
// 	elevation: 40,
// 	shadowColor: '#9800ff',
// })<FlexContainerProps>``

export function GradientContainer({ children }: PropsWithChildren) {
	return (
		<LinearGradient
			// colors={[theme.palette.primary.main, 'black', 'black']}
			colors={['#00fffa', 'white']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}>
			{children}
		</LinearGradient>
	)
}
