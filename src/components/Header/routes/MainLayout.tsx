import { Outlet } from "react-router-dom"
import Header from "../Header"

const MainLayout = () => {
  return (
    <>
      <Header>{<p>I am a children</p>}</Header>
      <Outlet />
    </>
  )
}

export default MainLayout
