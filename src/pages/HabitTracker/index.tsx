import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { Typography } from '../../components/Typography'
import defaultBackground from '../../../back1.jpg'

export const HabitTracker = () => {
	const navigation = useNavigation()

	return (
		<FlexContainer source={defaultBackground} height='83%' flexJustifyContent='center'>
			<FlexContainer
				height='73%'
				alignSelf='center'
				flexDirection='row'
				flexWrap='wrap'
				flexAlignContent='space-between'
				flexJustifyContent='space-around'></FlexContainer>
		</FlexContainer>
	)
}
