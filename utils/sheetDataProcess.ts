export const SheetdataProcess = async (data: any) => {
  console.log("sheetdataProcess", data);
  const keys = data[0];
  const values = [data[1], data[2], data[3]];
  keys.map((key: string, index: number) => {
    console.log(key, ":", values);
  });
  values.map((value: string, index: number) => {
    console.log(index, ":", value);
  });
};
