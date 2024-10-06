import React from 'react';

export default function CardVariant14() {
  const LIST_TABLE_CONTENT = [
    {
      no: 1,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
    {
      no: 2,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
    {
      no: 3,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
    {
      no: 4,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
    {
      no: 5,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
    {
      no: 6,
      city: 'Aceh',
      airport: 'Sultan Iskandar Muda',
      lounge: 'Gayo Lounge',
    },
  ];
  return (
    <main className="flex justify-center">
      <table className="w-full md:w-9/12 lg:w-8/12 table-auto">
        <thead className="bg-[#A28F52]">
          <tr className="text-white text-sm h-10">
            <th className="border w-1 text-start pl-2 font-medium">No</th>
            <th className="border w-28 text-start pl-2 font-medium">Kota</th>
            <th className="border w-36 text-start pl-2 font-medium">Bandara</th>
            <th className="border w-24 text-start pl-2 font-medium">Lounge</th>
          </tr>
        </thead>
        <tbody>
          {LIST_TABLE_CONTENT.map((item, index) => (
            <tr key={index} className="space-y-2 font-light text-sm ">
              <td className="flex items-center text-start pl-3 border border-[#E7E7ED] h-14">
                {item.no}
              </td>
              <td className="border border-[#E7E7ED] pl-3">{item.city}</td>
              <td className="border border-[#E7E7ED] p-2 text-sm">
                {item.airport}
              </td>
              <td className="border border-[#E7E7ED] px-2">{item.lounge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
