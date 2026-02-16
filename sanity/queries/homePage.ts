export const homePageQuery = `
  *[_type == "homePage"][0]{
    heroVideo,
  }
`;


export const AGENCIES_QUERY = `
*[_type == "agencies" ]{
  _id,
  agencyName,
  websiteLink,
  agencyLogo{
    asset->{
      _id,
      url
    }
  },
}
`

export const AWARDS_QUERY = `
*[_type == "awards"]
| order(_createdAt asc)[0..5]
{_id,
  organization,
  award,
  image{
    asset->{
      _id,
      url
    }
  },
}
`





export const CLIENTS_QUERY = `
*[_type == "client" && viewOnHomePage == true]{
  _id,
  clientName,
  logo{
    asset->{
      _id,
      url
    }
  }
}
`




export const INDUSTRIES_WITH_CLIENTS_QUERY = `
*[_type == "industries"]{
  _id,
  industryName,
  "clients": *[
    _type == "client" &&
    references(^._id) 
  ]{
    _id,
    clientName,
    logo{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}
`;
