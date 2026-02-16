export const CASE_STUDIES = `
*[_type == "caseStudy"]
| order(coalesce(order, 999) asc)
{
  _id,
  title,
  slug,
  heroVideo,
  heroImage{
    alt,
    asset->{
      _id,
      url
    }
  },
  service[]->{
    title
  },
  client->{
    clientName
  }
}
`;



export const CASE_STUDIES_DETAIL = `
*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  campaign,
  overview,
  heroVideo,
  heroImage{
   alt,
    asset->{
      _id,
      url
    }
  },
  duration,

  service[]->{
    title
  },

  client->{
    clientName,
    industry->{
      industryName
    }
  },

  gallery[]{
    alt,
    asset->{
      _id,
      url
    }
  },

  impacts,
  impactsImage{
    asset->{
      _id,
      url
    }
  },

  keyHighlights,

  projectAchievements[]{
    label,
    value
  }
}
`;
