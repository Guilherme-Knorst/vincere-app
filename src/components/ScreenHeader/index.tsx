import { Button } from '../Button'
import { FlexContainer } from '../Container'
import { showModal } from '@whitespectre/rn-modal-presenter'
import { Options } from '../../pages/Options'

export const ScreenHeader = () => {
	const showOptions = () => showModal(Options, null)

	return (
		<FlexContainer flexDirection='row' justifyContent='flex-end' alignItems='center' padding={10}>
			<Button color='primary' size='small' onPress={showOptions}>
				icone
			</Button>
		</FlexContainer>
	)
}
