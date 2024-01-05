import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Root from "./pages/Root"
import HomeGuru from "./pages/home/HomeGuru"
import AddTugas from "./pages/tugas/AddTugas"
import EditTugasPage from "./pages/tugas/EditTugasPage"
import EditTugas from "./pages/tugas/EditTugas"
import ListKelas from "./pages/kelas/ListKelas"
import ListMuridAbsen from "./pages/kelas/ListMuridAbsen"
import ProfileGuru from "./pages/profile/ProfileGuru"

const App = () => {
  return (
    <Routes>
      <Route path="/guru" element={<Root />}>
        <Route path="" element={<HomeGuru />} />
        <Route path="tugas/add" element={<AddTugas />} />
        <Route path="tugas/edit" element={<EditTugasPage />} />
        <Route path="tugas/edit/:tugasId" element={<EditTugas />} />
        <Route path="kelas" element={<ListKelas />} />
        <Route path="kelas/absen" element={<ListMuridAbsen />} />
        <Route path="profile" element={<ProfileGuru />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
