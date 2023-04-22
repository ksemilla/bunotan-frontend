import { useState } from "react"
import { RegisterInput, RegisterLabel, RegisterSpan } from "../../components"

const Register = () => {
  const [username, setUsername] = useState<string>("hello")
  
  return <>
    <form>
      <div className="h-screen flex flex-col h-screen justify-center">
        <RegisterSpan>
          <RegisterLabel for="email">
            Email Address
          </RegisterLabel>
          <RegisterInput 
            type="email" 
            id="email" 
            placeholder="user@email.com" 
            username={username} 
            setusername={setUsername} 
          />
        </RegisterSpan>
        <RegisterSpan>
          <RegisterLabel for="password">
            Your password
          </RegisterLabel>
          <RegisterInput type="password" id="password" placeholder="min. of 8 characters" />
        </RegisterSpan>
        <RegisterSpan>
          <RegisterLabel for="repeat-password">
            Repeat password
          </RegisterLabel>
          <RegisterInput type="password" id="repeat-password" />
        </RegisterSpan>
        <div className="flex items-start mb-6 justify-center">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4" required />
          </div>
          <label for="terms" className="ml-2 text-sm font-medium">
            I agree with the <a href="#" className="text-blue-600 hover:underline">
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
            ">
              Register new account
          </button>
        </div>
      </div>
    </form>


  </>
}

export default Register