import React, {useState} from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
    return (
      <>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {searchQuery.length > 0 ? "" : (<Hero />)}
        <IconGrid searchQuery={searchQuery}/>
        {searchQuery.length > 0 ? "" : (<WhyChooseUs />)}
        {searchQuery.length > 0 ? "" : (<Testimonials />)}
        {searchQuery.length > 0 ? "" : (<Faq />)}
        {searchQuery.length > 0 ? "" : (<Footer />)}
        <NewsLetters />
      </>
    )
}

export default App;
