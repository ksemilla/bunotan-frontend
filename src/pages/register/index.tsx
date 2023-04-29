import { useState } from "react"
import RegisterSpan from "./components/RegisterSpan"
import MainLogo from "../../components/logo"
import { Link } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const checkPassword = () => password == repeatPassword

  return (
    <>
      <Link to="/">
        <MainLogo />
      </Link>
      <form>
        <div className="h-screen flex flex-col justify-center">
          <RegisterSpan
            htmlFor="email"
            text="Email Address"
            type="email"
            id="email"
            placeholder="user@email.com"
            inputValue={username}
            setInputValue={setUsername}
          />
          <RegisterSpan
            htmlFor="password"
            text="Your password"
            type="password"
            id="password"
            placeholder="min. of 8 characters"
            inputValue={password}
            setInputValue={setPassword}
          />
          <RegisterSpan
            htmlFor="repeat-password"
            text="Repeat password"
            type="password"
            id="repeat-password"
            inputValue={repeatPassword}
            setInputValue={setRepeatPassword}
            onKeyUp={checkPassword}
          />
          <div className="flex items-start mb-6 justify-center">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium">
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <div className="flex mb-6 justify-center">
            <button
              type="submit"
              className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
              font-medium 
              rounded-lg 
              text-sm 
              px-5 
              py-2.5 
              text-center
            "
            >
              Register new account
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register
