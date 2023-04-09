import { Link } from "react-router-dom";
import { Button } from "../../components";

const Home = () => {
  return (
    <div className="bg-slate-400 min-h-screen flex flex-col">
      <div>
        <h1 className="p-2 text-4xl bg-slate-500 inline-block">BUNOTAN</h1>
      </div>
      <div className="space-y-5 flex-1 flex flex-col justify-center items-center">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
