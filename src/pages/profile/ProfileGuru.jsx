const ProfileGuru = () => {
  return (
    <div className="container mx-auto my-40">
      <div>
        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg"
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">Patrick Star</h1>
            <p className="text-center text-sm text-gray-400 font-medium">Guru</p>
            <p>
              <span></span>
            </p>

            <div className="w-full">
              <h3 className="font-semibold text-gray-900 text-left px-6 text-2xl mb-4">Tentang</h3>
              <table className="table-auto border-collapse w-full">
                <tbody className="w-full">
                  <tr>
                    <td className="px-6 py-2">
                      <p className="font-medium text-lg">Nama</p>
                    </td>
                    <td className="">
                      <p className="text-lg">Patrick Star</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2">
                      <p className="font-medium text-lg">Email</p>
                    </td>
                    <td className="">
                      <p className="text-lg">patrickstar@bikinibottom.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2">
                      <p className="font-medium text-lg">Guru</p>
                    </td>
                    <td className="">
                      <p className="text-lg">Bahasa Jepang, Kimia</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                    <td>
                      <hr className="h-px bg-gray-200 border-0" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2">
                      <p className="font-medium text-lg">Pendidikan</p>
                    </td>
                    <td className="">
                      <p className="text-lg">S1 Sastra Jepang, D3 Teknik Kimia</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileGuru
