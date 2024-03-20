// components/CompanyList.tsx
import { companies } from "@/app/lib/data";

export function CompanyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
          <p className="text-gray-600">
            Locations: {company.location.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};