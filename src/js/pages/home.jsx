import React from "react";
import BodyHome from "../comps/bodyhome";
import Header from "../comps/header";
import Features from "../comps/features";
import Pricing from "../comps/pricing";

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
