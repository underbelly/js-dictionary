import React from "react";

const MainEntryLayout = ({ children, frontMatter }) => {
  const subject = [...frontMatter.subject];
  const illuminated = frontMatter.subject.split("").shift();
  const unilluminated = frontMatter.subject.split("").splice(0, 1);
  console.log(frontMatter.subject);
  console.log(unilluminated);
  console.log(illuminated);
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {children}
    </div>
  );
};

export default MainEntryLayout;
