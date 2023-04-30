import React from "react";
import s from "./about.module.css";

const About = () => {
  return (
    <div className={s.AboutContent}>
      <h1>About Our Company</h1>
      <img
        src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/KFC%20Westfield-456.jpg?itok=uuJK6bUv"
        alt=""
        className={s.KFCStoreImg}
      />
      <p className={s.regularText}>
        KFC is a food store that specializes in delicious and affordable chicken
        dishes. Whether you crave for fried chicken, grilled chicken, chicken
        nuggets, chicken salad, or chicken soup, KFC has it all. You can order
        online or visit their store and enjoy their cozy and friendly
        atmosphere. KFC is the perfect place for chicken lovers of all ages.
      </p>
    </div>
  );
};

export default About;
