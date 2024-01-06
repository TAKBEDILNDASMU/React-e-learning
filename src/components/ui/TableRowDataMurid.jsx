import { Link } from "react-router-dom";

function TableRowDataMurid({ name, nisn }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link to="/contacts/1">
          <div className="flex items-center cursor-pointer">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>

            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {name}
              </div>
            </div>
          </div>
        </Link>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{nisn}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
        <form>
          <fieldset id="group1" className="flex gap-8">
            <div className="flex gap-2">
              <label htmlFor="hadir">Hadir</label>
              <input type="radio" value="value1" id="hadir" name="group1" />
            </div>
            <div className="flex gap-2">
              <label htmlFor="tidakHadir">Tidak Hadir</label>
              <input
                type="radio"
                checked
                value="value2"
                id="tidakHadir"
                name="group1"
              />
            </div>
          </fieldset>
        </form>
      </td>
    </tr>
  );
}

export default TableRowDataMurid;
