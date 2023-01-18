import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useNavigate } from "react-router-dom";


const Course = ({student}) => {
  const navigate = useNavigate();
//   const editEmployee = (e, id) => {
//     e.preventDefault();
//     navigate(`/editEmployee/${id}`);
//   };
  return (
    <tr key={student.id}>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.firstName}</div>
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.lastName}</div>
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.emailAddress}</div>
      </td>
      <td className="text-right px-4 py-2 whitespace-nowrap font-medium text-sm">
        {/* <a
          onClick={(e, id) => deleteEmployee(e, student.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a> */}
      </td>
    </tr>
  );
};

export default Course;
