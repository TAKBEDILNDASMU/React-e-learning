import Card from "../../components/ui/Card";

function ListMatkul() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h2 className="text-xl font-bold text-black capitalize mt-5">
        Silahkan memilih Mata Kuliah untuk absen mandiri
      </h2>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Card title="Bahasa Jepang" buttonLabel="Absen" />
        <Card title="Kimia" buttonLabel="Absen" />
        <Card title="Matematika" buttonLabel="Absen" />
      </div>
    </section>
  );
}

export default ListMatkul;
