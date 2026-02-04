const { client } = require('./lib/sanity')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://spotlightplc.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const today = new Date().toISOString().split("T")[0]

    // Fetch dynamic pages from Sanity
    const blogs = await client.fetch(`*[_type == "blog"]{ "slug": slug.current }`)
    const services = await client.fetch(`*[_type == "services"]{ "slug": slug.current }`)
    const works = await client.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`)

    const blogUrls = blogs.map(b => ({
      loc: `/blog/${b.slug}`,
      lastmod: today
    }))

    const serviceUrls = services.map(s => ({
      loc: `/services/${s.slug}`,
      lastmod: today
    }))

    const workUrls = works.map(w => ({
      loc: `/works/${w.slug}`,
      lastmod: today
    }))

    return [...blogUrls, ...serviceUrls, ...workUrls]
  }
}
