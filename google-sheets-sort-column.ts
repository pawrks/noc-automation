// This script takes a column from a given spreadsheet and automatically Z-to-A sorts it.
// If you want to change the sheet or column, read instructions in the comments.
// In TypeScript/JavaScript, comments are text you see after //, like this whole line.
// Comments are grayed out and do not execute code, they are for notes to explain code.

const onOpen = () => {
  const sheetName = "Package Log"; // Replace with the sheet you want to sort.
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheets()[0];

  if (sheet) {
    const range = sheet.getRange(
      2,
      1,
      sheet.getLastRow() - 1,
      sheet.getLastColumn()
    );
    range.sort({ column: 1, ascending: false }); // Replace column with the column you want to sort.
  } else {
    Logger.log(`Sheet ${sheetName} not found :( try again.)`);
  }
};
