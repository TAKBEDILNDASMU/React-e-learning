import Card from "../../components/ui/Card";

const HomeGuru = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h1 className="text-3xl font-bold text-black capitalize">
        Selamat Datang, Patrick
      </h1>
      <h2 className="text-xl font-bold text-black capitalize mt-5">
        List tugas yang anda upload
      </h2>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Card
          title="Bahasa Jepang"
          desc="Buatlah percakapan sehari-hari dengan menggunakan kanji"
          buttonLabel="Lihat Selengkapnya"
        />
        <Card
          title="Kimia"
          desc="Jawablah pertanyaan yang telah tersedia"
          buttonLabel="Lihat Selengkapnya"
        />
        <Card
          title="Bahasa Jepang"
          desc="Buatlah video perkenalan dengan bahasa Jepang"
          buttonLabel="Lihat Selengkapnya"
        />
      </div>
    </section>
  );
};

export default HomeGuru;
