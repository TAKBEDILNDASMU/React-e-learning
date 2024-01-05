import { Link } from "react-router-dom"

const ListMuridAbsen = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-3xl font-medium">Absen Murid</h3>

      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    NISN
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
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
                            Spongebob Squarepants
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">1234567899</div>
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
                            Squidward Tentacles
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <form>
                      <fieldset id="group2" className="flex gap-8">
                        <div className="flex gap-2">
                          <label htmlFor="hadir1">Hadir</label>
                          <input type="radio" value="value2" id="hadir1" name="group2" />
                        </div>
                        <div className="flex gap-2">
                          <label htmlFor="tidakHadir1">Tidak Hadir</label>
                          <input
                            type="radio"
                            checked
                            value="value2"
                            id="tidakHadir1"
                            name="group2"
                          />
                        </div>
                      </fieldset>
                    </form>
                  </td>
                </tr>
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <form>
                      <fieldset id="group3" className="flex gap-8">
                        <div className="flex gap-2">
                          <label htmlFor="hadir">Hadir</label>
                          <input type="radio" value="value1" id="hadir" name="group3" />
                        </div>
                        <div className="flex gap-2">
                          <label htmlFor="tidakHadir">Tidak Hadir</label>
                          <input
                            type="radio"
                            checked
                            value="value2"
                            id="tidakHadir"
                            name="group3"
                          />
                        </div>
                      </fieldset>
                    </form>
                  </td>
                </tr>
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
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
                            John Doe
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    1234567891
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListMuridAbsen
