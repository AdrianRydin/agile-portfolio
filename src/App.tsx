import { ToastContainer } from "react-toastify";
import Contact from "./pages/ContactUs";
import FindUs from "./pages/FindUs";
import Landing from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import "./util/css/reusable.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageSent from "./pages/MessageSent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <div>
      <Landing />
      <TeamPage />
      <Contact />
      <FindUs />
        </div>}></Route>
        <Route path="/sent" element={<MessageSent />}></Route>
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
