import { Link } from "react-router-dom"
import { Button } from "../../components"
import MainLogo from "../../components/MainLogo"

const Home = () => {
  return (
    <div className="bg-slate-400 min-h-screen flex flex-col">
      <Link to="/">
        <MainLogo />
      </Link>
      <div className="space-y-5 flex-1 flex flex-col justify-center items-center">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
