import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionFour = () => {
  return (
    <div className="h-full w-full text-white" id="design">
      <div className="container px-8 md:px-14 lg:px-0 py-40 md:py-28">
        <div className="w-full md:w-[70%] lg:w-[60%] mx-auto flex flex-col items-center gap-6 mb-16">
          <p className="rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
            Implementation
          </p>
          <h1 className=" text-[30px] md:text-[36px] leading-[1.3em]">
            Design Implementation
          </h1>
          <p className="text-[#ACACAC] text-md text-center">
            Firefly AI-powered investment platform is architected to ensure
            scalability, security, and high availability. The underlying
            technology stack leverages state-of-the-art machine learning
            frameworks such as TensorFlow and PyTorch for model training and
            inference, alongside cloud infrastructure for processing real-time
            data streams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 px-6 md:px-0">
          <div className="gradient-box1">
            <img
              src="/assets/images/data-pipeline.png"
              alt=""
              className="w-[80px]"
            />
            <p className="text-lg font-bold text-center">Data Pipeline</p>
            <p className="text-[#ACACAC] text-sm text-center">
              We utilize a high-throughput, low-latency data pipeline, streaming
              financial data, news, and social signals from various sources.
              This is processed in real time by our AI models using distributed
              computing and serverless architecture.
            </p>
          </div>
          <div className="gradient-box1">
            <img
              src="/assets/images/data-model.png"
              alt=""
              className="w-[80px]"
            />
            <p className="text-lg font-bold text-center">
              Model Training & Optimization
            </p>
            <p className="text-[#ACACAC] text-sm text-center">
              Models are continuously retrained using supervised and
              unsupervised learning techniques, ensuring the agent adapts to
              evolving market conditions. We employ techniques such as LSTM
              (Long Short-Term Memory) networks for sequence prediction and
              reinforcement learning to optimize decision-making in uncertain
              environments.
            </p>
          </div>
          <div className="gradient-box1">
            <img
              src="/assets/images/user-interface.png"
              alt=""
              className="w-[80px]"
            />
            <p className="text-lg font-bold text-center">User Interface</p>
            <p className="text-[#ACACAC] text-sm text-center">
              The front-end design is built on React.js for seamless user
              experience, offering intuitive dashboards and real-time updates on
              portfolio performance. For automated trading, our back-end
              services are integrated with APIs from major exchanges and
              brokers, ensuring fast execution of trades.
            </p>
          </div>
          <div className="gradient-box1">
            <img
              src="/assets/images/security.png"
              alt=""
              className="w-[80px]"
            />
            <p className="text-lg font-bold text-center">Security</p>
            <p className="text-[#ACACAC] text-sm text-center">
              The platform employs end-to-end encryption and multi-factor
              authentication to protect user data and financial information,
              ensuring regulatory compliance and trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
