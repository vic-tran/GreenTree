import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <html className="scroll-smooth">
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </html>
  );
}

export default App;
