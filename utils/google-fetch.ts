import { sheetdataProcess } from "./sheetDataProcess";

export const GoogleFech = async () => {
  const apiKey = "AIzaSyC3XlF1XE9mvdAoFaLFLwPx21o0oBVjxNk";
  const spreadsheetId = "1-SfhBtptRhMh1rdxPmEenNXaHbqdhkk28Zw1nbcEOUk";
  const range = "A1:Z100";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data.values);
    sheetdataProcess(data.values);
    return data.values;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return null;
  }
};
