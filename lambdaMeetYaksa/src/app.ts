import { Request, Response } from 'express'
import { DialogflowApp } from 'actions-on-google'

// Import actions here.
import * as DemoAction from './actions/DemoAction'

export function createDialogflowApp(request: Request, response: Response) {

   const dialogflowApp = new DialogflowApp({request, response})
   interface Action {
       name: string,
       handler: (app: DialogflowApp) => void
   }
   const actions: Action[] = [
       // Add actions here.
       DemoAction
   ]

   const actionMap = new Map()
   actions.forEach(action => actionMap.set(action.name, action.handler))
   dialogflowApp.handleRequest(actionMap)
}