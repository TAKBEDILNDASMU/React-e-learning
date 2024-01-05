const HomeMurid = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h1 className="text-3xl font-bold text-black capitalize">Selamat Datang, Spongebob</h1>
      <h2 className="text-xl font-bold text-black capitalize mt-5">
        List tugas yang ada di kelas anda
      </h2>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              src="https://bebas.umpo.ac.id/pluginfile.php/698481/course/overviewfiles/analisa%20dan%20desain%20sisatem.png"
              alt=""
            />
          </a>
          <div className="mb-3 p-3">
            <h5 className="text-indigo-500 font-semibold">Bahasa Jepang</h5>
            <p className="font-normal text-gray-700 ">
              Buat video perkenalan full dengan bahasa jepang
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
              Lihat selengkapnya
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              src="https://bebas.umpo.ac.id/pluginfile.php/698481/course/overviewfiles/analisa%20dan%20desain%20sisatem.png"
              alt=""
            />
          </a>
          <div className="mb-3 p-3">
            <h5 className="text-indigo-500 font-semibold">Kimia</h5>
            <p className="font-normal text-gray-700 ">Uraikan zat-zat yang terkandung dalam meth</p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
              Lihat selengkapnya
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              src="https://bebas.umpo.ac.id/pluginfile.php/698481/course/overviewfiles/analisa%20dan%20desain%20sisatem.png"
              alt=""
            />
          </a>
          <div className="mb-3 p-3">
            <h5 className="text-indigo-500 font-semibold">Matematika</h5>
            <p className="font-normal text-gray-700 ">
              Kerjakan 100 soal integral deadline besok pagi
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
              Lihat selengkapnya
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeMurid
