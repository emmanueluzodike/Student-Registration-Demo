import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-gray-200">
      <tr>
        <th className="font-medium uppercase tracking-wider px-4 py-2">
          Class
        </th>
        <th className="text-right font-medium uppercase tracking-wider px-4 py-2">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
