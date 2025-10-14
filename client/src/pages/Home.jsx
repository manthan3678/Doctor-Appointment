import React from "react";
import Slider from "../components/slider/Slider";
import Facility from "../components/static/facility/Facility";
import ShortIntro from "../components/static/ShortIntro/ShortIntro";
import WhyChoose from "../components/static/WhyChoose/WhyChoose";
import ContactMessage from "../components/static/ContactMessage/ContactMessage";
const Home = () => {
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* Facility Section */}
      <Facility />
      {/* Short Intro Section */}
      <ShortIntro />
      {/* WHy Choose */}
      <WhyChoose />
      {/* Contact */}
      <ContactMessage />
    </>
  );
};

export default Home;
