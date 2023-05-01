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
      <span className="flex">
        <Link to="/">
          <MainLogo />
        </Link>
        <div className="p-5 font-Nunito text-2xl flex items-center">
          Username: {username}
        </div>
      </span>
      <Outlet />
    </>
  )
}

export default MyRooms
