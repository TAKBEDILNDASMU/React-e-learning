import Card from "../../components/ui/Card";

const ListKelas = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h2 className="text-xl font-bold text-black capitalize mt-5">
        Silahkan memilih kelas untuk mengabsen siswa
      </h2>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Card title="IPA 1" buttonLabel="Pilih Kelas" to="/guru/kelas/absen" />
        <Card title="IPA 2" buttonLabel="Pilih Kelas" to="/guru/kelas/absen" />
        <Card title="IPA 3" buttonLabel="Pilih Kelas" to="/guru/kelas/absen" />
      </div>
    </section>
  );
};

export default ListKelas;
