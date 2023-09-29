import "./index.css";
import Navbar from "./Components/NavBar/navbar";
import HeroSection from "./Components/HeroSection/hero";
import AboutMe from "./Components/AboutMe/aboutme";
import CardSec from "./Components/CardSec/servicecard";
import Portfolio from "./Components/Portfolio/portfolio";
import Experience from "./Components/Experience/experience";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <section className="Navbar">
        <Navbar />
      </section>

      <section className="HeroSection bg-regal-blue1">
        <HeroSection />
      </section>

      <section className="AboutMe">
        <AboutMe />
      </section>

      <section className="CardSec">
        <CardSec />
      </section>

      <section className="Portfolio">
        <Portfolio />
      </section>

      <section className="Experience">
        <Experience />
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
