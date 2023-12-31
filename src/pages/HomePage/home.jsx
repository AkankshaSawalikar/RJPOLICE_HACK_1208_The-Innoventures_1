import React from "react";
import Navbarv from "components/navbar";
import Carouselv from "components/caurosel";
import Trendingevents from "components/events";
import NewsletterSignup from "components/email";
import Footer from "components/footer";


const HomePagePage = () => {
  return (
  <div>
    {<Navbarv /> }
      {<Carouselv />}
      {<Trendingevents />}
   
      {<NewsletterSignup />}
      {<Footer/>}
    </div>


  );
};

export default HomePagePage;
