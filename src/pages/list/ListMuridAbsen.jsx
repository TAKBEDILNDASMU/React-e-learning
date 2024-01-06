import TableRowData from "../../components/ui/TableRowDataMurid";
import Button from "../../components/ui/Button";

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
                <TableRowData name="Spongebob Squarepants" nisn="21321312" />
                <TableRowData name="Squidward Tentacles" nisn="21321312" />
                <TableRowData name="Sandy Cheeks" nisn="21321312" />
                <TableRowData name="Plankton Sheldon" nisn="21321312" />
                <TableRowData name="Larry the lobster" nisn="21321312" />
                <TableRowData name="Mrs. Puff" nisn="21321312" />
                <TableRowData name="Mr. Krab" nisn="21321312" />
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex justify-end">
            <Button label="Simpan" isInfo={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMuridAbsen;
