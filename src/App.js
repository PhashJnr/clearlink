import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PartnerShips from "./components/Partnerships";
import Advantage from "./components/Advantage";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnerShips />
        <Advantage />
        <Testimonials />
        <FAQs />
        <Plans />
      </main>
      <Footer />
    </>
  );
}

export default App;
