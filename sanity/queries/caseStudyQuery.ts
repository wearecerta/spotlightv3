export const CASE_STUDIES = `
*[_type == "caseStudy"]{
  _id,
  heroVideo,
  slug,
    service[]->{
    title,
  },
  title,
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
