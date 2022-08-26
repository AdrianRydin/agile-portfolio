import Contact from "./components/contact-us";
import FindUs from "./components/find-us";
import Landing from "./components/landing-page";
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
