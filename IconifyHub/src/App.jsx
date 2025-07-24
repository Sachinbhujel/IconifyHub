import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import NewsLetters from "./NewsLetters";
import Footer from "./Footer";
import IconGrid from "./IconGrid";
import Pricing from "./Pricing";
import Illustrations from "./Illustrations";

function Home({ searchQuery }) {
  return (
    <>
      {searchQuery.length > 0 ? null : <Hero />}
      <IconGrid searchQuery={searchQuery} />
      {searchQuery.length > 0 ? null : <WhyChooseUs />}
      {searchQuery.length > 0 ? null : <Testimonials />}
      {searchQuery.length > 0 ? null : <Faq />}
      {searchQuery.length > 0 ? null : <Footer />}
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/illustrations" element={<Illustrations />} />
      </Routes>
      <NewsLetters />
    </Router>
  );
}

export default App;
