function UploadTugas() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h1 className="text-xl font-bold text-black capitalize">Upload Tugas</h1>
      <form>
        <div className="grid gap-6 mt-4">
          <div>
            <label className="text-black" htmlFor="username">
              Nama
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-black" htmlFor="deskripsi">
              Kelas
            </label>
            <select
              id="countries"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option selected>Pilih Kelas</option>
              <option value="US">IPA 1</option>
              <option value="CA">IPA 2</option>
              <option value="FR">IPA 3</option>
              <option value="DE">IPS 1</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-black"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
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
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload File </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
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
  );
}

export default UploadTugas;
