import Contact from "./pages/ContactUs";
import FindUs from "./pages/FindUs";
import Landing from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import "./util/css/reusable.css";

function App() {
  return (
    <>
      <Landing />
      <TeamPage />
      <Contact />
      <FindUs />
    </>
  );
}

export default App;
