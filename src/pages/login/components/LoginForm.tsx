import { useState } from "react"
import { Link } from "react-router-dom"
import HomeFormSpan from "../../home/components/HomeFormSpan"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <form>
        <div className="flex flex-col justify-center">
          <HomeFormSpan
            htmlFor="email"
            text="Email Address"
            type="email"
            id="email"
            placeholder="Registered Email Address"
            inputValue={username}
            setInputValue={setUsername}
          />
          <HomeFormSpan
            htmlFor="password"
            text="Password"
            type="password"
            id="password"
            placeholder="********"
            inputValue={password}
            setInputValue={setPassword}
          />
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
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
