import React from "react";

import { Box, LogoBox, LogoSpan } from "./styles";

const HomeHero = () => {
  return (
    <Box>
      <div>
        <LogoBox>
          <span>The</span> <LogoSpan>JS</LogoSpan>{" "}
          <span style={{ alignSelf: "flex-end" }}>Dictionary</span>
        </LogoBox>
      </div>
    </Box>
  );
};

export default HomeHero;
