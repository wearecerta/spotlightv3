export const BLOG_LIST_QUERY = `
*[_type == "blog"] | order(publishedDate desc){
  _id,
  title,
  author,
  "slug": slug.current,
  excerpt,
  publishedDate,
  categories,
  mainImage{
    alt,
    asset->{
      _id,
      url
    }
  }
}
`;




export const BLOG_DETAIL_QUERY = `
*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  publishedDate,
  categories,

  mainImage{
    alt,
    asset->{
      _id,
      url
    }
  },

  body[]{
    text,
    paragraphGroup{
      contentArray
    },
    orderedList[]{
      list,
      listDescription
    },
    unorderedList[]{
      list,
      listDescription
    }
  },

 
}
`;


export const BLOG_SEO_QUERY = `
*[_type == "blog" && slug.current == $slug][0]{
  onPageSeo{
    pageTitle,
    metaDescription,
    targetKeywords
  }
}
`;
