"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define platforms to identify which icon is clicked
const socialMediaPlatforms = [
  { src: "/Icons/facebook.svg", platform: "facebook" },
  { src: "/Icons/linkedin.svg", platform: "linkedin" },
  { src: "/Icons/instagram.svg", platform: "instagram" },
  { src: "/Icons/twitter.svg", platform: "twitter" },
];

interface SocialShareProps {
  title: string;
  excerpt?: string;
}

const BlogSocialMediaShare = ({ title, excerpt }: SocialShareProps) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Set the current URL on client side
    setCurrentUrl(window.location.href);
  }, []);

  const handleSocialShare = (platform: string) => {
    const shareText = title;
    const shareUrl = currentUrl;

    const shareConfigs: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}${excerpt ? `&hashtags=${encodeURIComponent(excerpt.split(" ").slice(0, 3).join(","))}` : ""}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      instagram: "#",
    };

    if (platform === "instagram") {
      navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      alert("Link copied to clipboard! You can paste it in Instagram.");
      return;
    }

    if (shareConfigs[platform]) {
      window.open(shareConfigs[platform], "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div
      style={{
        gap: "var(--space-lg, 32px)",
        flex: "0 0 auto",
        minWidth: "80px",
      }}
      className="flex flex-col items-center md:self-start md:sticky md:top-6"
    >
      {/* Share Button - now copies link */}
      <button
        onClick={handleCopyLink}
        style={{
          padding: "var(--space-xxs) var(--space-sm)",
          border: "1px solid #0C0C0E",
          borderRadius: "50px",
          fontFamily: "var(--font-secondary, 'Outfit')",
          fontSize: "var(--body-medium-size, 16px)",
          fontWeight: "400",
          color: "#0C0C0E",
          cursor: "pointer",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Share
      </button>
      
      {/* Social Icons */}
      <div
        style={{
          gap: "var(--space-xs)",
          alignItems: "center",
        }}
        className="flex md:flex-col flex-row"
      >
        {socialMediaPlatforms.map((icon, index) => (
          <button
            key={index}
            onClick={() => handleSocialShare(icon.platform)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <Image
              src={icon.src}
              alt={`Share on ${icon.platform}`}
              width={32}
              height={32}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSocialMediaShare;