import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import RegistrationForm from "./components/RegistrationForm";
import Services from "./components/Services";
import EventInfo from "./components/EventInfo";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#444444] font-sans selection:bg-red-100 selection:text-red-600">
      <Header />
      <Banner />
      <Hero />
      <RegistrationForm />
      <Services />
      <EventInfo />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
