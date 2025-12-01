export function getVideoUrl(file: any): string | null {
  // Make sure we have the file asset
  const ref = file?.asset?._ref;
  if (!ref) return null;

  // Sanity file _ref format: file-<assetId>-<extension>
  // Example: file-abc1234567890mp4
  const [, id, ext] = ref.match(/^file-(.+)-(.+)$/) || [];
  if (!id || !ext) return null;

  // Construct CDN URL
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${ext}`;
}
