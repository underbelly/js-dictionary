import React from "react";

import HomeHero from "../components/HomeHero";
import EntriesList from "../components/EntriesList";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <EntriesList />
      </div>
    </main>
  );
};

export default HomePage;
