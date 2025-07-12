import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import NewsletterSignup from "./NewsLetters";

function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <NewsletterSignup />
      </>
    )
}

export default App;
