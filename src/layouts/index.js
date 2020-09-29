import React from "react";

const MainEntryLayout = ({ children, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <p>Test</p>
      {children}
    </div>
  );
};

export default MainEntryLayout;
