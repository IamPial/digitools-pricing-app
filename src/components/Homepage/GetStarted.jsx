import React from "react";
import userImg from "../../assets/user.png";
import rocketImg from "../../assets/rocket.png";
import packageImg from "../../assets/package.png";
import GetStartedCard from "../ui/GetStartedCard";

const GetStarted = () => {
  return (
    <div>
      <div className="container mx-auto space-y-10 pt-16 pb-25">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Get Started in 3 Steps
          </h2>
          <p className="text-[16px] text-slate-500 leading-5">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-4">
          <GetStartedCard
            title={"Create Account"}
            description={
              "Sign up for free in seconds. No credit card required to get started."
            }
            cardImg={userImg}
            value={"01"}
          />
          <GetStartedCard
            title={"Choose Products"}
            description={
              "Browse our catalog and select the tools that fit your needs."
            }
            cardImg={packageImg}
            value={"02"}
          />
          <GetStartedCard
            title={"Start Creating"}
            description={
              "Download and start using your premium tools immediately."
            }
            cardImg={rocketImg}
            value={"03"}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
