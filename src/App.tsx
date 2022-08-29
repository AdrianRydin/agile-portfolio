import Contact from "./components/ContactUs";
import FindUs from "./components/FindUs";
import Landing from "./components/LandingPage";
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
