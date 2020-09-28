import Head from "next/head";
import styles from "../styles/Home.module.css";
// import {entries} from '../src/utils/getAllEntries';

import { frontMatter as entries } from "./entries/**/*.mdx";

// import {frontmatter} from './entries/*';

export default function Home() {
  const alphabetize = () => {
    const test = entries
      .map((frontMatter) => frontMatter.subject.toLowerCase())
      .sort();
    // get the Alphabet
    const availableLetters = test.reduce((acc, curr) => {
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
            acc[l].push(curr.subject);
          }
          return acc;
        },
        { [l]: [] }
      );
    });

    return { availableLetters, test, sortedEntries };
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {entries.map((fm) => (
            <div key={Math.random() * 100}>{fm.title}</div>
          ))}

          {alphabetize().sortedEntries.map((i) => {
            const letter = Object.keys(i);
            const letterEntries = Object.values(i)[0];
            return (
              <div>
                <h2>{letter}</h2>
                {letterEntries.map((e) => (
                  <h4>{e}</h4>
                ))}
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
