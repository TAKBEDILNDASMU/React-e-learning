import Card from "../../components/ui/Card";

const HomeMurid = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
      <h1 className="text-3xl font-bold text-black capitalize">
        Selamat Datang, Spongebob
      </h1>
      <h2 className="text-xl font-bold text-black capitalize mt-5">
        List tugas yang ada di kelas anda
      </h2>
      <hr className="border-b" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          title="Bahasa Jepang"
          desc="Buat video perkenalan full dengan bahasa jepang"
          buttonLabel="Kerjakan"
          to="/murid/tugas/1"
          isCardMurid={true}
        />
        <Card
          title="Kimia"
          desc="Uraikan zat-zat yang terkandung dalam meth"
          buttonLabel="Kerjakan"
          to="/murid/tugas/1"
          isCardMurid={true}
        />
        <Card
          title="Matematika"
          desc="Kerjakan 100 soal integral deadline besok pagi"
          buttonLabel="Kerjakan"
          to="/murid/tugas/1"
          isCardMurid={true}
        />
      </div>
    </section>
  );
};

export default HomeMurid;
