import { ToastContainer } from "react-toastify";
import Contact from "./pages/ContactUs";
import FindUs from "./pages/FindUs";
import Landing from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import "./util/css/reusable.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Landing />
      <TeamPage />
      <Contact />
      <FindUs />
    </div>
  );
}

export default App;
