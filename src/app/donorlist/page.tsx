import { Information, columns } from "./molecules/columns";
import { DataTable } from "./molecules/data-table";

async function getData(): Promise<Information[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      donorid: 12345,
      lastname: "Termulo",
      firstname: "Erica Rose",
      bloodgroup: "O",
      bloodacquisitiondate: new Date(2024, 2, 20),
    },
    {
      id: "2",
      donorid: 12346,
      lastname: "Bergola",
      firstname: "Khryx Rhoien",
      bloodgroup: "B",
      bloodacquisitiondate: new Date(2023, 10, 3),
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
