import Contact from "./pages/ContactUs";
import FindUs from "./pages/FindUs";
import Footer from "./pages/Footer";
import Landing from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import "./util/css/reusable.css";
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
      <Footer />
        </div>}></Route>
        <Route path="/sent" element={<MessageSent />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
