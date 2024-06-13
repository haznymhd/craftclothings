import React from "react";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Recent showAll={false} />
      <Featured />
      <Team />
    </>
  );
}

export default Home;
