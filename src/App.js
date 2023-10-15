import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/nav/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <ContactUs />
    </div>
  );
}

export default App;
