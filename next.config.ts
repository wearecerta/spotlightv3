import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      {
        source: '/packaging-design-in-ethiopia',
        destination: '/blog/packaging-design-in-ethiopia',
        permanent: true,
      },
    
      {
        source: '/seo-services-in-addis-ababa',
        destination: '/blog/seo-services-in-addis-ababa',
        permanent: true,
      },
      {
        source: '/risk-and-crisis-management-in-ethiopia',
        destination: '/blog/risk-and-crisis-management-in-ethiopia',
        permanent: true,
      },
      {
        source: '/print-advertising-in-ethiopia',
        destination: '/blog/print-advertising-in-ethiopia',
        permanent: true,
      },
      {
        source: '/out-of-home-advertising-in-ethiopia',
        destination: '/blog/out-of-home-advertising-in-ethiopia',
        permanent: true,
      },
      {
        source: '/graphic-design-company-in-ethiopia',
        destination: '/blog/graphic-design-company-in-ethiopia',
        permanent: true,
      },
      {
        source: '/market-research-in-ethiopia',
        destination: '/blog/market-research-in-ethiopia',
        permanent: true,
      },
      {
        source: '/experiential-marketing-ethiopia',
        destination: '/blog/experiential-marketing-ethiopia',
        permanent: true,
      },
      {
        source: '/shoppers-marketing-ethiopia',
        destination: '/blog/shoppers-marketing-ethiopia',
        permanent: true,
      },
      {
        source: '/website-development-services',
        destination: '/blog/website-development-services',
        permanent: true,
      },
      {
        source: '/promotional-marketing-ethiopia',
        destination: '/blog/promotional-marketing-ethiopia',
        permanent: true,
      },
      {
        source: '/social-media-services-in-ethiopia',
        destination: '/blog/social-media-services-in-ethiopia',
        permanent: true,
      },
      {
        source: '/brand-identity-in-ethiopia',
        destination: '/blog/brand-identity-in-ethiopia',
        permanent: true,
      },
      {
        source: '/e-commerce-website-development-in-ethiopia',
        destination: '/blog/e-commerce-website-development-in-ethiopia',
        permanent: true,
      },
      {
        source: '/radio-marketing-in-ethiopia',
        destination: '/blog/radio-marketing-in-ethiopia',
        permanent: true,
      },
      {
        source: '/television-advertising-in-ethiopia',
        destination: '/blog/television-advertising-in-ethiopia',
        permanent: true,
      },
      {
        source: '/blog-media-training-in-ethiopia',
        destination: '/blog/media-training-in-ethiopia',
        permanent: true,
      },
        {
        source: '/media-relations-ethiopia',
        destination: '/blog/media-relations-ethiopia',
        permanent: true,
      },
      {
        source: '/content-and-email-marketing-ethiopia',
        destination: '/blog/content-and-email-marketing-ethiopia',
        permanent: true,
      },
      {
        source: '/talk-shows-ethiopia',
        destination: '/blog/talk-shows-ethiopia',
        permanent: true,
      },
      {
        source: '/affiliate-marketing-in-ethiopia',
        destination: '/blog/affiliate-marketing-in-ethiopia',
        permanent: true,
      },
      {
        source: '/communications-strategy-services-in-ethiopia',
        destination: '/blog/communications-strategy-services-in-ethiopia',
        permanent: true,
      },
      {
        source: '/reputation-management-service-in-ethiopia',
        destination: '/blog/reputation-management-service-in-ethiopia',
        permanent: true,
      },
      {
        source: '/venue-sources-in-ethiopia',
        destination: '/blog/venue-sources-in-ethiopia',
        permanent: true,
      },
      {
        source: '/ux-ui-and-web-design-in-ethiopia',
        destination: '/blog/ux-ui-and-web-design-in-ethiopia',
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
