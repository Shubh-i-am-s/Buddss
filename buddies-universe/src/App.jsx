import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import About from "./components/About";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Leadership from "./components/Leadership";
import ContactForm from "./components/ContactForm";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Leadership />
      <Stats />
      <Journey />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
