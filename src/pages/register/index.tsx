const Register = () => {
  return <>
    <form>
      <div className="h-screen flex flex-col h-screen justify-center">
        <span>
          <div className="mb-6 flex items-center justify-center">
            <label for="email" className="font-medium text-gray-900">
              Email Address
            </label>
            <input 
              type="email"
              id="email" 
              className="rounded-lg p-2 ml-2" 
              placeholder="user@email.com"
              required 
            />
          </div>
        </span>
        <span>
          <div className="mb-6 flex items-center justify-center">
            <label for="password" className="font-medium text-gray-900">
              Your password
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="min. of 8 characters"
              className="rounded-lg p-2 ml-2" 
              required 
            />
          </div>
        </span>
        <span>
          <div className="mb-6 flex items-center justify-center">
            <label for="repeat-password" className="font-medium text-gray-900">
              Repeat password
            </label>
            <input 
              type="password" 
              id="repeat-password" 
              className="rounded-lg p-2 ml-2" 
              required 
            />
          </div>
        </span>
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