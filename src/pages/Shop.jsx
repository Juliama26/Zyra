import React from "react";
import Hero from "../components/organisms/Hero";
import Header from "../components/organisms/Header";
import Popular from "../components/organisms/Popular";
import Offers from "../components/organisms/Offers";
import NewColection from "../components/organisms/NewColection";
import NewsLetter from "../components/organisms/NewsLetter";
import RouteLanding from "../components/templates/RouteLanding";

export default function Shop() {
  return (
    <RouteLanding>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewColection></NewColection>
      <NewsLetter></NewsLetter>
    </RouteLanding>
  );
}
