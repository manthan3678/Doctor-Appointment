import React from "react";
import "./WhyChoose.css";
import image1 from "../../../assets/Gemini_Generated_Image_whychoose.png";
import image2 from "../../../assets/Gemini_Generated_Image_whychoose2.png";
import image3 from "../../../assets/Gemini_Generated_Image_whychoose3.png";

const WhyChoose = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Why Choose Us?</h2>
      <div className="row why-container">
        <div className="col-md-3">
          <img src={image1} alt="image1" width={"150px"} />
          <h3>Personalize Excellence</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, error. Corporis, accusantium doloribus nihil repellendus
            debitis eveniet, a delectus architecto consequatur veritatis
            provident officiis soluta aut!
          </p>
        </div>
        <div className="col-md-3">
          <img src={image2} alt="image1" width={"150px"} />
          <h3> Trusted Care </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, error. Corporis, accusantium doloribus nihil repellendus
            debitis eveniet, a delectus architecto consequatur veritatis
            provident officiis soluta aut!
          </p>
        </div>
        <div className="col-md-3">
          <img src={image3} alt="image1" width={"150px"} />
          <h3>Empowring Wellness Journey</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, error. Corporis, accusantium doloribus nihil repellendus
            debitis eveniet, a delectus architecto consequatur veritatis
            provident officiis soluta aut!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
