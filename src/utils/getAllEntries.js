function importAll(r) {
    return r.keys().map((fileName) => ({
      link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
      module: r(fileName)
    }));

  }
  
  export const entries = importAll(
    require.context("../../pages/entries/", true, /\.mdx$/)
  );