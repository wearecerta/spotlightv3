export const LEADERSHIP_TEAM_QUERY = `
*[_type == "teams" && title == "Leadership Team"][0]{
  _id,
  title,
  teamMembers[]{
    name,
    position,
    mainImage{
      alt,
      asset->{
        _id,
        url
      }
    },
    secondaryImage{
      alt,
      asset->{
        _id,
        url
      }
    }
  }
}
`;

export const TEAMS_QUERY = `
*[_type == "teams" && title != "Leadership Team"]
| order(_createdAt asc) {
  _id,
  title,
  titleSvg{
    asset->{
      _id,
      url
    }
  },
  teamsGroupImage{
    alt,
    asset->{
      _id,
      url
    }
  },
  teamMembers[]{
    name,
    position,
    mainImage{
      alt,
      asset->{
        _id,
        url
      }
    },
    secondaryImage{
      alt,
      asset->{
        _id,
        url
      }
    }
  }
}
`;
