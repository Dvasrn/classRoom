export const sheetdataProcess = async (data: any) => {
  console.log("sheetdataProcess", data);
  const keys = data[0];
  const values = [data[1], data[2], data[3]];
  // keys.map((key) => {
  //   key
  // })
};

// function clearInvoice() {
//   const sheet = SpreadsheetApp.getActiveSheet();
//   const invoiceNumber = sheet.getRange("B5").clearContent();
//   const invoiceAmount = sheet.getRange("B8").clearContent();
//   const invoiceTo = sheet.getRange("E5").clearContent();
//   const invoiceFrom = sheet.getRange("E6").clearContent(); 
// }
