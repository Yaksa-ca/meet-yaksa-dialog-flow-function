import { DialogflowApp } from 'actions-on-google'

export const name = 'FunFactTeamMember'
export function handler(app: DialogflowApp) {
	const speechText = 'calling from amazon'
    app.add('Hello Greg2' + speechText)
}