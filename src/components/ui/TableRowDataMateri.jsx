import { Link } from "react-router-dom";

function TableRowDataMateri({ name }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link to="/contacts/1">
          <div className="flex items-center cursor-pointer">
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {name}
              </div>
            </div>
          </div>
        </Link>
      </td>
    </tr>
  );
}

export default TableRowDataMateri;
