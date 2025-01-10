import React from "react";
import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import HomeSectionTwo from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeSectionFive from "../../components/home/HomeSectionFive";

const HomePage = () => {
  return (
    <>
      <Head pageTitle={`Welcome to ${import.meta.env.VITE_APPNAME}`} />
      <div className="bg-black">
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
      </div>
    </>
  );
};

export default HomePage;
