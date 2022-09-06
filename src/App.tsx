import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/ContactUs";
import FindUs from "./pages/FindUs";
import Footer from "./pages/Footer";
import Landing from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import "./util/css/reusable.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Landing />
      <TeamPage />
      <Contact />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
