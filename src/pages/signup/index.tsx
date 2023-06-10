import { useState } from "react"
import HomeFormSpan from "../home/components/HomeFormSpan"
import { Link } from "react-router-dom"
import MainLogo from "../../components/MainLogo"
import HomeButton from "../../components/elements/HomeButton"
import SignupForm from "./components/SignupForm"

const Signup = () => {
  return (
    <>
      <Link to="/">
        <MainLogo />
      </Link>
      <SignupForm />
      <Link to="/login">
        <HomeButton>Login your account</HomeButton>
      </Link>
    </>
  )
}

export default Signup
