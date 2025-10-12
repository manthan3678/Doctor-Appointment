import React from "react";
import Slider from "../components/slider/Slider";
import Facility from "../components/static/facility/Facility";
import ShortIntro from "../components/static/ShortIntro/ShortIntro";
const Home = () => {
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* Facility Section */}
      <Facility />
      {/* Short Intro Section */}
      <ShortIntro/>
    </>
  );
};

export default Home;
