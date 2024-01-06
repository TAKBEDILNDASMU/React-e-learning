import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Root from "./pages/Root";
import HomeGuru from "./pages/home/HomeGuru";
import AddTugas from "./pages/tugas/AddTugas";
import EditTugasPage from "./pages/tugas/EditTugasPage";
import EditTugas from "./pages/tugas/EditTugas";
import ListKelas from "./pages/list/ListKelas";
import ListMuridAbsen from "./pages/list/ListMuridAbsen";
import ProfileGuru from "./pages/profile/ProfileGuru";
import HomeMurid from "./pages/home/HomeMurid";
import ListMatkul from "./pages/list/ListMatkul";
import UploadTugas from "./pages/tugas/UploadTugas";
import ProfileMurid from "./pages/profile/ProfileMurid";
import ListMateri from "./pages/list/ListMateri";

const App = () => {
  return (
    <Routes>
      <Route path="/guru" element={<Root name="Patrick Star" role="Guru" />}>
        <Route path="" element={<HomeGuru />} />
        <Route path="tugas/add" element={<AddTugas />} />
        <Route path="tugas/edit" element={<EditTugasPage />} />
        <Route path="tugas/edit/:tugasId" element={<EditTugas />} />
        <Route path="kelas" element={<ListKelas />} />
        <Route path="kelas/absen" element={<ListMuridAbsen />} />
        <Route path="profile" element={<ProfileGuru />} />
      </Route>
      <Route
        path="/murid"
        element={<Root name="Spongebob Squarepants" role="Murid" />}
      >
        <Route path="" element={<HomeMurid />} />
        <Route path="absen" element={<ListMatkul />} />
        <Route path="tugas/:id" element={<UploadTugas />} />
        <Route path="profile" element={<ProfileMurid />} />
        <Route path="materi" element={<ListMateri />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
