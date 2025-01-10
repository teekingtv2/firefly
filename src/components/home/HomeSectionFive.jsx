import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";

const HomeSectionFive = () => {
  const [tokens, setTokens] = useState("popular");
  return (
    <div
      className="w-[100vw] bg-fireflyDarkBG flex flex-col items-center mt-56 lg:mt-40"
      id="utility"
    >
      <div className="container pt-[110px] md:pt-[390px] pb-40 md:pb-[180px] items-center px-7 md:px-0">
        <div
          className="max-w-[95%] md:max-w-[100%] mx-auto flex flex-col p-7 lg:p-10 mt-[-300px] md:mt-[-500px] rounded-xl bg-fireflyDarkBG z-40"
          // style={{ boxShadow: "4px 4px 8px #f7a50057" }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div className="flex flex-col gap-2">
              <span className="text-[17px] md:text-[30px] text-start text-white">
                Utility
              </span>
              <span className="">
                Firefly AI serves as a versatile financial tool that caters to
                the needs of both retail and institutional investors. The key
                utilities include:
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  1
                </p>
                <p className="text-[18px] lg:text-[18px] md:font-medium text-white">
                  Portfolio Optimization
                </p>
                {/* <AiOutlineArrowRight /> */}
              </div>
              <p>
                Using modern portfolio theory (MPT) and AI-driven risk
                assessment, the platform recommends asset allocations that
                maximize returns while maintaining a desired risk level.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  2
                </p>
                <p className="text-[18px] lg:text-[18px] md:font-medium text-white">
                  Market Forecasting
                </p>
              </div>
              <p className="">
                Predictive models analyze trends across digital assets, stocks,
                bonds, ETFs, cryptocurrencies, and other asset classes,
                providing users with real-time alerts and suggestions.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  3
                </p>
                <p className="text-[18px] lg:text-[18px] md:font-medium text-white">
                  Automated Rebalancing
                </p>
              </div>
              <p>
                Our AI continuously monitors portfolios and rebalances them
                based on market shifts, ensuring that users' investments remain
                aligned with their long-term goals.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  4
                </p>
                <p className="text-[18px] lg:text-[18px] md:font-medium text-white">
                  Tax Efficiency
                </p>
              </div>
              <p>
                The AI agent optimizes portfolios for tax minimization,
                implementing strategies like tax-loss harvesting to help
                investors retain more of their gains.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  5
                </p>
                <p className="text-[18px] lg:text-[18px] md:font-medium text-white">
                  Real-Time Trading
                </p>
              </div>
              <p>
                Through integration with trading platforms, the AI can
                automatically execute buy/sell orders based on user preferences
                and real-time market conditions, offering high-frequency trading
                capabilities for advanced users.
              </p>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-28 md:gap-20 mt-24"
          id="roadmap"
        >
          <div className="col-span-1 flex flex-col gap-8 md:gap-10">
            <h1 className=" text-white text-[30px] md:text-[40px] ">
              Roadmap Summary
            </h1>
            <p className="md:w-[80%] text-white">
              We are in the advanced stages of building Firefly AI, carefully
              integrating cutting-edge AI, machine learning, and financial data
              to provide a sophisticated investment advisory platform. Our team
              is diligently working on refining the algorithms, optimizing
              real-time data processing, and ensuring a seamless user experience
              across all devices.
            </p>
            {/* <Link to="/register" className="flex">
              <div className="btnn1 py-3 px-8 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Get Started</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link> */}
          </div>
          <div className="col-span-1 w-full flex flex-col gap-7">
            <img
              src="/assets/images/robot-2.webp"
              alt=""
              className="border-[2px] border-fireflyYellow rounded-md dancingSlide"
              style={{ boxShadow: "4px 3px 10px #f7a600" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;
