"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import actions here.
const DemoAction = __importStar(require("./actions/DemoAction"));
function createDialogflowApp(request, response) {
    const dialogflowApp = new DialogflowApp({ request, response });
    const actions = [
        // Add actions here.
        DemoAction
    ];
    const actionMap = new Map();
    actions.forEach(action => actionMap.set(action.name, action.handler));
    dialogflowApp.handleRequest(actionMap);
}
exports.createDialogflowApp = createDialogflowApp;
