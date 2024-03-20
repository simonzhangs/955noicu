import Image from "next/image";
import { CompanyList } from "./ui/companylist";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-semibold mb-4">Company List</h1>
      <CompanyList />
    </div>
  );
}
