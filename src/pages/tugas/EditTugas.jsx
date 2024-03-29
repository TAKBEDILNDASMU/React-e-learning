const EditTugas = () => {
  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
        <h1 className="text-xl font-bold text-black capitalize">Edit Tugas</h1>
        <form>
          <div className="grid gap-6 mt-4">
            <div>
              <label className="text-black" htmlFor="username">
                Judul Tugas
              </label>
              <input
                value="Bahasa Jepang"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black" htmlFor="deskripsi">
                Deskripsi singkat
              </label>
              <input
                value="Buat video perkenalan full dengan bahasa jepang"
                id="deskripsi"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black " htmlFor="startDate">
                  Tanggal Mulai
                </label>
                <input
                  value="2024-01-25"
                  id="startDate"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 -blue-500 focus:outline-none focus:ring text-gray-700"
                />
              </div>
              <div>
                <label className="text-black " htmlFor="endDate">
                  Tanggal Berakhir
                </label>
                <input
                  value="2024-01-30"
                  id="endDate"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 -blue-500 focus:outline-none focus:ring text-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload File </span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 text-black">atau drag dan drop</p>
                  </div>
                  <p className="text-xs text-black">PNG, JPG kurang dari 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 htmlForm bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Upload
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default EditTugas
