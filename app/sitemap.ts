import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asirtushar.github.io";

  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/research/`, priority: 0.9 },
    { url: `${baseUrl}/research/point-cloud/`, priority: 0.8 },
    { url: `${baseUrl}/research/mastitis/`, priority: 0.8 },
    { url: `${baseUrl}/research/black-scholes/`, priority: 0.8 },
    { url: `${baseUrl}/teaching/`, priority: 0.7 },
    { url: `${baseUrl}/talks/`, priority: 0.7 },
    { url: `${baseUrl}/cv/`, priority: 0.7 },
  ];
}
