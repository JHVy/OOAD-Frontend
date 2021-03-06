import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import errorReducer from "./errorReducer";

import authReducer from "./authReducer";
import historyReducer from "./historyReducer";
import roleReducer from "./roleReducer";

import memberReducer from "./memberReducer";
import productReducer from "./productReducer";
import invoiceReducer from "./invoiceReducer";
import payslipReducer from "./payslipReducer";
import materialReducer from "./materialReducer";
import notificationReducer from "./notificationReducer";
import supplierReducer from "./supplierReducer";
import storageReportReducer from "./storageReportReducer";
import invoicedetReducer from "./invoicedetReducer";
import userReducer from "./userReducer";
import materialReceiptNoteDetReducer from "./materialReceiptNoteDetReducer"
import materialReceiptNoteReducer from "./materialReceiptNoteReducer";
import parameterReducer from "./parameterReducer";

export default combineReducers({
  category: categoryReducer,
  error: errorReducer,
  auth: authReducer,
  history: historyReducer,
  role: roleReducer,
  member: memberReducer,
  product: productReducer,
  invoice: invoiceReducer,
  invoicedet: invoicedetReducer,
  payslip: payslipReducer,
  material: materialReducer,
  showNoti: notificationReducer,
  supplier: supplierReducer,
  storagereport: storageReportReducer,
  user: userReducer,
  materialReceiptNote: materialReceiptNoteReducer,
  materialReceiptNoteDet: materialReceiptNoteDetReducer,
  parameter: parameterReducer,
});
