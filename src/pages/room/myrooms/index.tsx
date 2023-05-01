import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import MainLogo from "../../../components/logo"

const MyRooms = () => {
  const [username, setUsername] = useState("")

  if (username == "") {
    setUsername("Smitty Webermanjensen")
  }

  return (
    <>
      <Link to="/">
        <MainLogo />
      </Link>
      {username}
      <Outlet />
    </>
  )
}

export default MyRooms
