import papa, { ParseResult } from "papaparse";
export async function fetchCSV(_data: string): Promise<any> {
  const CSVdata = await fetch(`./Data/${_data}.csv`).then((response) =>
    response.text()
  );
  const ParseCSV = papa.parse(CSVdata, {
    header: true,
    download: false,
    delimiter: ",",
    complete: (result: ParseResult<any>) => {
      console.log(result.data);
      return result.data;
    },
  });
  const { data } = ParseCSV;
  return data;
}
