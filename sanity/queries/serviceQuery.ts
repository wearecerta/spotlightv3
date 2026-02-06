const SERVICE_QUERY = `*[_type == "services" && slug.current == "digital-marketing-ethiopia"][0]{
  _id,
  title,
  description,

  slug,

   heroTitle,
  heroImage{
    alt,
    asset->{
      _id,
      url
    }
  },

  images[]{
    alt,
    asset->{
      _id,
      url
    }
  },

  introductionSection{
    title,
    description,
    images[]{
      alt,
      asset->{
        _id,
        url
      }
    }
  },

  serviceDetail{
    coreServiceSection{
      title,
      description,
      services[]{
        title,
        description
      }
    },

    industriesSection{
      title,
      industries[]{
        industry
      }
    },

    whyChooseUsSectionOne{
      title,
      description,
      services[]{
        title,
        description,
        icon{
          asset->{
            _id,
            url
          }
        }
      }
    },

    whyChooseUsSectionTwo{
      title,
      description,
      features[]{
        title,
        description
      }
    },

    frequentlyAskedQuestions{
      items[]{
        question,
        answer
      }
    },

    cta{
      title,
      slogan,
      ctaText
    }
  },

  subServices,

  onPageSeo{
    pageTitle,
    metaDescription,
    targetKeyWords
  },

  _createdAt,
  _updatedAt
}`;


export const SERVICES_QUERY = `
*[
  _type == "services" &&
  !(slug.current in [
    "seo-services-in-addis-ababa",
    "social-media-services-in-ethiopia"
  ])
]{
  _id,
  title,
  description,
  slug,
  images[]{
    alt,
    asset->{
      _id,
      url
    }
  },
  subServices[]{
    title,
    slug
  }
}
`


export const SERVICE_BY_SLUG_QUERY = `
*[_type == "services" && slug.current == $slug][0]{
  _id,
  title,
  description,
  slug,

  subServices[]{
    title,
    slug
  },

  serviceDetail{
    heroTitle,
    heroImage{
      alt,
      asset->{
        _id,
        url
      }
    },

    introductionSection{
      title,
      description,
      images[]{
        alt,
        asset->{
          _id,
          url
        }
      }
    },

    coreServiceSection{
      title,
      description,
      services[]{
        title,
        description
      }
    },

    industriesSection{
      title,
      description,
      subTitle,
      subDescription,
      industries[]{
        industry,
        industryDescription
      }
    },

    whyChooseUsSectionOne{
      title,
      description,
      services[]{
        title,
        description,
        icon{
          asset->{
            _id,
            url
          }
        }
      }
    },

    whyChooseUsSectionTwo{
      title,
      description,
      subTitle,
      subDescription,
      features[]{
        title,
        description
      }
    },

    cta{
      title,
      slogan,
      ctaText
    },

    additionalInformation{
      blocks[]{
        title,
        paragraphs[]
      }
    },

    frequentlyAskedQuestions{
      items[]{
        question,
        answer
      }
    }
  }
}
`



export const SERVICE_SEO_QUERY = `
*[_type == "services" && slug.current == $slug][0]{
  serviceDetail {
    onPageSeo {
      pageTitle,
      metaDescription,
      targetKeyWords
    }
  }
}
`;
