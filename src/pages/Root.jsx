import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const Root = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(true)

  const handleToggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility)
  }

  const closeSidebar = () => {
    setSidebarVisibility(true)
  }

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar
        sidebarVisibility={sidebarVisibility}
        setSidebarVisibility={setSidebarVisibility}
        onClose={closeSidebar}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header handleToggleSidebar={handleToggleSidebar} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Root
