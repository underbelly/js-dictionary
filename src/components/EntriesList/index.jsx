import React from "react";
import Link from "next/link";

import { StyledContainer, StyledContent } from './styles';

import { frontMatter as entries } from "../../../pages/entries/**/*.mdx";

const EntriesList = () => {

  const alphabetize = () => {
    const alphabetizedEntries = entries
      .map((frontMatter) => frontMatter.subject.toLowerCase())
      .sort();

    const availableLetters = alphabetizedEntries.reduce((acc, curr) => {
      const firstLetter = curr.split("").shift();
      if (acc && !acc.includes(firstLetter)) {
        acc.push(firstLetter);
      }
      return acc;
    }, []);

    const sortedEntries = availableLetters.map((l) => {
      return entries.reduce(
        (acc, curr) => {
          if (curr.subject.split("").shift().toLowerCase() === l) {
            acc[l].push({ subject: curr.subject, path: curr.__resourcePath });
          }
          return acc;
        },
        { [l]: [] }
      );
    });

    return { availableLetters, alphabetizedEntries, sortedEntries };
  };
  return (
    <ul>
      {alphabetize().sortedEntries.map((i) => {
        const letter = Object.keys(i);
        const letterEntries = Object.values(i)[0];
        return (
          <StyledContainer>
          <details>
            <summary>{letter}</summary>
            {letterEntries.map((e) => {
              const slug = e.path.replace(".mdx", "");
              return (
                <StyledContent data-icon="😎">
                  <Link href={slug}>
                    <a>{e.subject}</a>
                  </Link>
                </StyledContent>
              );
            })}
          </details>
          </StyledContainer>
        );
      })}
    </ul>
  );
};

export default EntriesList;
