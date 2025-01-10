import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import {
  MdBatchPrediction,
  MdDesignServices,
  MdModelTraining,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";

const HomeSectionThree = () => {
  return (
    <div
      className="w-[100vw] bg-fireflyDarkBG flex flex-col items-center"
      id="features"
    >
      <div
        className="container py-[100px] md:py-[130px] items-center px-7 md:px-0"
        id="features"
      >
        <div className="grid grid-cols-1 md:grid-cols-9 gap-20 md:gap-20">
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start justify-center gap-5">
            <div className="w-full mx-auto flex flex-col items-center lg:items-start gap-6 mb-1">
              <p className="rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
                Our Features
              </p>
              <h1 className=" text-[30px] md:text-[36px] leading-[1.3em] text-white">
                Traits of Firefly AI Agent
              </h1>
              <p className="text-[#ACACAC] text-md text-start">
                Our AI agent is built on advanced machine learning principles,
                employing deep learning networks, reinforcement learning, and
                natural language processing (NLP) for maximum efficiency and
                accuracy. Key traits of the AI agent include:
              </p>
            </div>
            <img
              src="/assets/images/robot-1.webp"
              alt=""
              className="dancingSlide rounded-[0px]"
            />
          </div>
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-12 md:gap-10 text-titusLightText">
            <div className="flex flex-col gap-10 lg:gap-6">
              <div className="feature-card">
                <div className="h-max rounded-full p-3 bg-fireflyYellow text-black text-3xl">
                  <MdBatchPrediction />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Predictive Modeling
                  </span>
                  <span className="text-sm font-light">
                    Utilizing regression models and time series forecasting, the
                    AI agent predicts future market trends with high accuracy,
                    analyzing both historical and real-time data from various
                    asset classes.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max rounded-full p-3 bg-fireflyYellow text-black text-3xl">
                  <MdModelTraining />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Dynamic Risk Profiling
                  </span>
                  <span className="text-sm font-light">
                    The agent dynamically assesses user portfolios and adapts
                    its strategies in real time using Bayesian optimization
                    techniques, ensuring risk is balanced according to market
                    conditions and individual preferences.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max rounded-full p-3 bg-fireflyYellow text-black text-3xl">
                  <FaLanguage />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Natural Language Understanding (NLU)
                  </span>
                  <span className="text-sm font-light">
                    By integrating NLP models like GPT and BERT, our AI can
                    parse financial news, earnings reports, and social
                    sentiment, converting unstructured data into actionable
                    insights.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max rounded-full p-3 bg-fireflyYellow text-black text-3xl">
                  <GiTrade />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Automated Trading
                  </span>
                  <span className="text-sm font-light">
                    The agent incorporates algorithmic trading capabilities
                    using reinforcement learning, executing trades based on
                    real-time data to maximize potential returns while
                    minimizing manual intervention.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max rounded-full p-3 bg-fireflyYellow text-black text-3xl">
                  <BiAnalyse />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Sentiment Analysis
                  </span>
                  <span className="text-sm font-light">
                    Our system captures and analyzes market sentiment by
                    processing millions of data points from social media, news
                    outlets, and blogs, making informed decisions based on
                    collective market behavior.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
