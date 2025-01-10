import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdDesignServices, MdOutlineSupportAgent } from "react-icons/md";

const HomeSectionTwo = () => {
  return (
    <div
      className="w-[100vw] bg-titusDarkBG flex flex-col items-center"
      id="about"
    >
      <div className="container py-[100px] md:py-[100px] items-center px-7 md:px-0">
        <div className="w-full md:w-[70%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 mb-6">
          <div className="w-full lg:w-[70%] mx-auto flex flex-col items-center gap-6 mb-1">
            <p className="w-max rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
              {import.meta.env.VITE_APP_NAME}
            </p>
            <h1 className=" text-[30px] md:text-[36px] leading-[1.3em] text-white">
              About Us
            </h1>
            <p className=" text-[#ACACAC] text-md text-center">
              Firefly AI is committed to democratizing access to advanced
              investment strategies through the power of artificial
              intelligence.
            </p>
          </div>
          <div
            className=" w-full md:w-[100%] mx-auto rounded-xl p-5 lg:p-10 mt-2 text-sm text-white border-[1px] border-fireflyYellow"
            // style={{ boxShadow: "2px 2px 8px #00dbc2" }}
          >
            {/* {import.meta.env.VITE_APP_NAME} */}
            Our platform is built on sophisticated machine learning algorithms
            designed to analyze vast amounts of financial data, detect patterns,
            and deliver actionable insights that help users make informed
            decisions. By combining the precision of AI with a deep
            understanding of global financial markets, we enable users to
            construct diversified portfolios, execute trades, and stay ahead of
            market fluctuations. <br /> <br />
            With Firefly AI, investing is no longer about following the
            crowd—it's about leveraging cutting-edge technology to build wealth
            with confidence. Our mission is to provide investors with an
            intelligent tool that transforms complex data into simple,
            actionable recommendations, accessible to everyone, regardless of
            their investment expertise.
          </div>
        </div>
        <div className="grid gri-cols-1 lg:grid-cols-3 gap-16 md:gap-16 px-7 lg:px-0"></div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
