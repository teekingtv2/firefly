import { FaArrowCircleRight } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HomeSectionOne = () => {
  return (
    <div className="h-full w-[100vw] bg-black pt-24" id="home">
      <div className="w-[95%] lg:w-[88%] ms-auto bg-fireflyDarkGrey rounded-l-[60px]">
        <div className="container px-8 md:px-14 lg:px-0 py-20 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-10">
          <div className="col-span-1 flex flex-col">
            <h1 className=" text-[30px] lg:text-[42px] leading-[1.1em] mb-6 text-white">
              The next-generation investment platform powered by AI
            </h1>
            <p className="text-titusLightText text-md mb-5">
              Welcome to{" "}
              <span className="font-bold text-white text-lg">Firefly AI</span>,
              the next-generation investment platform powered by cutting-edge AI
              and ML. Our AI-driven advisory system provides personalized,
              data-driven investment insights tailored to your financial goals,
              risk tolerance, and market preferences.
            </p>
            <p className="text-titusLightText text-sm mb-12">
              Harnessing advanced predictive analytics and real-time data, we
              empower users to optimize their portfolios, automate trades, and
              maximize returns while mitigating risks. Whether you're an
              experienced investor or a novice, our AI is your intelligent
              partner for navigating today's fast-paced financial markets.
            </p>
            {/* <div className="flex gap-10 mb-14">
              <div className="flex flex-col gap-1">
                <p className="font-bold">100+</p>
                <span className="text-[#ACACAC] text-sm">Issues Resolved</span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">$1,500,000+</p>
                <span className="text-[#ACACAC] text-sm">Assets Refunded</span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">100+</p>
                <span className="text-[#ACACAC] text-sm">Happy Clients</span>
              </div>
            </div> */}
            <AnchorLink
              href="#about"
              className="w-max btnn1 px-6 py-3 text-sm font-bold flex justify-center items-center"
            >
              <span className="mr-2">Learn More</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </AnchorLink>
          </div>
          <div className="con-span-1">
            <img
              src="/assets/images/home-1.gif"
              alt=""
              className="border-[2px] border-fireflyYellow rounded-md dancingSlide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
