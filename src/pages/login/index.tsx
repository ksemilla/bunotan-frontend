import { useState } from "react";
import RegisterSpan from "../register/components/RegisterSpan";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <div className="h-screen flex flex-col justify-center">
          <RegisterSpan
            htmlFor="email"
            text="Email Address"
            type="email"
            id="email"
            placeholder="Registered Email Address"
            inputValue={username}
            setInputValue={setUsername}
          />
          <RegisterSpan
            htmlFor="password"
            text="Password"
            type="password"
            id="password"
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
  );
};

export default Login;
