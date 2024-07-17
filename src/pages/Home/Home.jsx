import React from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Featured from "components/Home/Featured/Featured";
import IntroducingPaymentGateway from "components/Home/IntroducingPaymentGateway/IntroducingPaymentGateway";
import ValuableFeatures from "components/Home/ValuableFeatures/ValuableFeatures";
import SupportedCoins from "components/Home/SupportedCoins/SupportedCoins";
import GetStarted from "components/Home/GetStarted/GetStarted";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <IntroducingPaymentGateway />
      <ValuableFeatures />
      <SupportedCoins />
      <GetStarted />
    </>
  );
};

export default Home;
