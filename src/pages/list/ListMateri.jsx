import TableRowDataMateri from "../../components/ui/TableRowDataMateri";

const ListMateri = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-2xl font-medium">Materi Kimia</h3>
      <div className="flex flex-col mt-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody className="bg-white">
                <TableRowDataMateri name="Teori Atom" />
                <TableRowDataMateri name="Struktur Atom" />
                <TableRowDataMateri name="Bilangan Kuantum" />
                <TableRowDataMateri name="Plankton Sheldon" />
                <TableRowDataMateri name="Konfigurasi Elektron" />
                <TableRowDataMateri name="Elektron Valensi" />
                <TableRowDataMateri name="Sistem Periodik Unsur" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-gray-700 text-2xl font-medium mt-4">
        Materi Bahasa Jepang
      </h3>
      <div className="flex flex-col mt-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody className="bg-white">
                <TableRowDataMateri name="Hiragana Katakana" />
                <TableRowDataMateri name="Percakapan Dasar" />
                <TableRowDataMateri name="Kanji Dasar" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-gray-700 text-2xl font-medium mt-4">
        Materi Matematika
      </h3>
      <div className="flex flex-col mt-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <tbody className="bg-white">
                <TableRowDataMateri name="Persamaan Linear" />
                <TableRowDataMateri name="Persamaan Garis Lurus" />
                <TableRowDataMateri name="Persamaan Kuadrat" />
                <TableRowDataMateri name="Fungsi Kuadrat" />
                <TableRowDataMateri name="Logaritma" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMateri;
