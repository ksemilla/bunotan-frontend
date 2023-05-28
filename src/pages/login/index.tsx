import { useState } from "react"
import { Link } from "react-router-dom"
import { HomeButton } from "../../components"
import MainLogo from "../../components/MainLogo"
import HomeFormSpan from "../home/components/HomeFormSpan"
import LoginForm from "./components/LoginForm"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Link to="/">
        <MainLogo />
      </Link>
      <LoginForm />
      <Link to="/signup">
        <HomeButton>Register Here</HomeButton>
      </Link>
    </>
  )
}

export default Login
