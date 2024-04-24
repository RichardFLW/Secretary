import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Services from "./components/Services";
import Quote from "./components/Quote";
import ContactFAQ from "./components/ContactFAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Discover />
        <Services />
        <Quote />
        <ContactFAQ />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
