import { client } from '@/sanity/lib/client'

const baseUrl = 'https://spotlightplc.com'

export default async function sitemap() {
  const today = new Date()

  // Static pages
  const staticRoutes = [
    { url: baseUrl, lastModified: today },
    { url: `${baseUrl}/about`, lastModified: today },
    { url: `${baseUrl}/services`, lastModified: today },
    { url: `${baseUrl}/works`, lastModified: today },
    { url: `${baseUrl}/culture`, lastModified: today },
    { url: `${baseUrl}/blog`, lastModified: today },
  ]

  // Dynamic pages
  const blogs = await client.fetch(`*[_type=="blog"]{ "slug": slug.current, _updatedAt }`)
  const services = await client.fetch(`*[_type=="services"]{ "slug": slug.current, _updatedAt }`)
  const works = await client.fetch(`*[_type=="caseStudy"]{ "slug": slug.current, _updatedAt }`)

  const blogRoutes = blogs.map(b => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b._updatedAt),
  }))

  const serviceRoutes = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(s._updatedAt),
  }))

  const workRoutes = works.map(w => ({
    url: `${baseUrl}/works/${w.slug}`,
    lastModified: new Date(w._updatedAt),
  }))

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...workRoutes]
}
