import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import NewsLetters from "./NewsLetters";
import Footer from "./Footer";
import IconGrid from "./IconGrid";

function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <IconGrid />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <NewsLetters />
        <Footer />
      </>
    )
}

export default App;
