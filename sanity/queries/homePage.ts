export const homePageQuery = `
  *[_type == "homePage"][0]{
    heroVideo,
  }
`;


export const AGENCIES_QUERY = `
*[_type == "agencies" ]{
  _id,
  agencyName,
  agencyLogo{
    asset->{
      _id,
      url
    }
  },
}
`