import React from 'react'
import {IonButton, IonIcon} from '@ionic/react'
import {
	checkmarkOutline,
	arrowForwardOutline,
	closeOutline,
} from 'ionicons/icons'
import Select from '../../components/Select/Select'

const DesignSystem: React.FC = () => {
	return (
		<div className="DesignSystem">
			<div>
				<h1>Buttons</h1>
				<hr />
				<IonButton color="secondary" size="large">
					<IonIcon slot="end" icon={arrowForwardOutline} />
					Mua hàng
				</IonButton>
				<IonButton color="secondary">
					<IonIcon slot="end" icon={checkmarkOutline} />
					Đặt hàng
				</IonButton>
				<IonButton color="secondary" size="small">
					<IonIcon slot="end" icon={checkmarkOutline} />
					Chọn tất cả
				</IonButton>
				<IonButton color="success" size="small">
					<IonIcon slot="end" icon={checkmarkOutline} />
					Check-in
				</IonButton>
				<IonButton color="danger" size="small">
					<IonIcon slot="end" icon={closeOutline} />
					Huỷ
				</IonButton>
			</div>
			<div>
				<h1>Typography</h1>
				<hr />
				<h2>Section heading</h2>
				<h1>Price and Quantitative data: đ50.000</h1>
				<h3>Caption information</h3>
				<p>Body information</p>
				<small>Body small text</small>
			</div>
			<div>
				<h1>Select</h1>
				<hr />
				<Select type="outline" />
			</div>
		</div>
	)
}

export default DesignSystem
