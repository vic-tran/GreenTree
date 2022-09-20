import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Architectural from "./pages/Architectural";
import Amenities from "./pages/Amenities";
import Support from "./pages/Support";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Events />
      <Architectural />
      <Amenities />
      <Support />
      <Contact />
    </div>
  );
}

export default App;
