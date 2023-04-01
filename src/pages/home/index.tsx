import { Link } from "react-router-dom";


const Home = () => {
  return <>
    <div className="bg-slate-400 h-window">
      <div className="p-2 bg-slate-500 inline-block">
        <h1 className="text-4xl">BUNOTAN</h1>
      </div>
      <div className="space-y-5 flex flex-col h-screen justify-center items-center">
        <Link to="/register">
          <button className="py-2 px-6 bg-blue-500 inline-block text-3xl">
            Register
          </button>
        </Link>
        <Link to="/login">
          <div className="py-2 px-6 bg-blue-500 inline-block text-3xl">
            Log In
          </div>
        </Link>
      </div>
    </div>
  </>
};

export default Home;