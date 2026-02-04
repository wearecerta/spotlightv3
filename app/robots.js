import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://spotlightplc.com';
  const content = `User-agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
