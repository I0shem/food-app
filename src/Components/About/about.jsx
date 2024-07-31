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
        Welcome to KFC - the world-famous food store that brings you
        finger-lickin' good chicken and a whole lot more! We take pride in
        serving you delicious, high-quality food that satisfies your cravings
        and leaves you wanting more.
      </p>
      <p className={s.regularText}>
        At KFC, we believe in the power of great-tasting food. Our secret blend
        of 11 herbs and spices makes our Original Recipe chicken a true culinary
        masterpiece. Every bite is a tantalizing combination of crispy,
        flavorful coating and tender, juicy meat. From our signature chicken
        buckets to our iconic Zinger burgers and popcorn chicken, we offer a
        variety of options to suit every palate.
      </p>
      <p className={s.regularText}>
        But it's not just about the chicken at KFC. We also serve a range of
        delectable sides that perfectly complement our main dishes. Indulge in
        our creamy mashed potatoes, tangy coleslaw, and golden-brown, flaky
        biscuits. And don't forget about our mouthwatering desserts, including
        our famous chocolate chip cookies and classic apple pie.
      </p>
      <p className={s.regularText}>
        With a legacy spanning over several decades, KFC has become a global
        food phenomenon. Our commitment to quality, taste, and customer
        satisfaction has made us a household name in over 145 countries. Whether
        you're grabbing a quick meal on the go or enjoying a family feast, we
        strive to create an unforgettable dining experience for you.
      </p>
      <p className={s.regularText}>
        Beyond our delicious food, KFC is also dedicated to giving back to the
        community. Through our various initiatives, we support local charities,
        provide educational opportunities, and promote sustainable practices. We
        believe in making a positive impact, one chicken wing at a time.
      </p>
      <p className={s.regularText}>
        So come on in and experience the irresistible flavors of KFC. Our
        friendly staff is ready to serve you with a smile, ensuring that your
        dining experience is nothing short of exceptional. Whether you're
        enjoying a meal in our cozy restaurant or opting for convenient takeout,
        we guarantee that every visit to KFC will leave you craving more.
      </p>
      <p className={s.regularText}>
        Indulge in the legendary taste of KFC and let us take you on a
        mouthwatering journey that will leave you wanting to come back for
        seconds. It's time to satisfy your hunger with the world's best fried
        chicken at KFC.
      </p>
    </div>
  );
};

export default About;
