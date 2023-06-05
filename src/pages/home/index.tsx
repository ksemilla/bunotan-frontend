import { Link } from "react-router-dom"
import { HomeButton } from "../../components"
import MainLogo from "../../components/MainLogo"
import LoginForm from "../login/components/LoginForm"

const Home = () => {
  return (
    <div className="bg-slate-400 min-h-screen flex flex-col">
      <Link to="/">
        <MainLogo />
      </Link>
      <div className="space-y-5 flex-1 flex flex-col justify-center items-center">
        <LoginForm />
        <Link to="/signup">
          <HomeButton>Create new account</HomeButton>
        </Link>
      </div>
    </div>
  )
}

export default Home
