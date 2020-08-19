import React from 'react'
import {IonItem, IonSelect, IonSelectOption, IonIcon} from '@ionic/react'
import {chevronDownOutline} from 'ionicons/icons'
interface Props {
	type?: string
}

const Select: React.FC<Props> = ({type}) => {
	const customPopoverOptions = {
		showBackdrop: false,
	}
	const style = type === 'outline' ? 'Select-Outline' : null
	return (
		<IonItem lines="full" className={`CustomSelect ${style}`}>
			<IonSelect
				value="yellow"
				okText="Okay"
				interface="popover"
				cancelText="Dismiss"
				interfaceOptions={customPopoverOptions}
			>
				<IonSelectOption value="brown">Brown</IonSelectOption>
				<IonSelectOption value="blonde">Blonde</IonSelectOption>
				<IonSelectOption value="black">Black</IonSelectOption>
				<IonSelectOption value="red">Red</IonSelectOption>
			</IonSelect>
			<IonIcon slot="end" icon={chevronDownOutline} />
		</IonItem>
	)
}

export default Select
