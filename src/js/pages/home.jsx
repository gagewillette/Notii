import React from "react";
import BodyHome from "../comps/home/bodyhome";
import Header from "../comps/home/header";
import Features from "../comps/home/features";
import Pricing from "../comps/home/pricing";

export default function Home() {
  return (
    <>
      {/* this is all static shit, none of this changes nor is part of the app */}

      <Header />
      <BodyHome />

      <Features />

      <Pricing />
    </>
  );
}
