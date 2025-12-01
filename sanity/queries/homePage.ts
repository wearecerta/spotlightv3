export const homePageQuery = `
  *[_type == "homePage"][0]{
    heroVideo,
    heroTitle,
    heroSubtitle
  }
`;
