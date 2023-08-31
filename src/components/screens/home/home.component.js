 import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'

import styles from './home.module.scss'
import template from './home.template.html'
 import { CardInfo } from '@/components/screens/home/card-info/card-info.component'
 import { Actions } from '@/components/screens/home/actions/actions.component'
 import { Contacts } from '@/components/screens/home/contacts/contacts.component'
 import { Transactions } from '@/components/screens/home/transactions/transactions.component'
 import { Statistics } from '@/components/screens/home/statistics/statistics.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [CardInfo, Actions, Contacts, Transactions, Statistics], styles)

		return element
	}
}
