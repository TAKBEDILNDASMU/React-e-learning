import Card from "../../components/ui/Card"

const EditTugasPage = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h1 className="text-3xl font-bold text-black capitalize mb-4">Edit Tugas</h1>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          title="Bahasa Jepang"
          desc="Buatlah percakapan sehari-hari dengan menggunakan kanji"
          isEdit={true}
        />
        <Card title="Kimia" desc="Jawablah pertanyaan yang telah tersedia" isEdit={true} />
        <Card
          title="Bahasa Jepang"
          desc="Buatlah video perkenalan dengan bahasa Jepang"
          isEdit={true}
        />
      </div>
    </section>
  )
}

export default EditTugasPage
