import {MetadataRoute} from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://body-on-count.kacper.wasik.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ]
}
