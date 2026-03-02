import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { categories } from "@/data/categories";

const baseUrl = "https://menmind.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/kryzys",
    "/odbudowa",
    "/ojcostwo",
    "/wzrost",
    "/dla-partnerow",
    "/kontakt",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/kategoria/${cat.slug}`,
    lastModified: new Date(),
  }));

  const cityPages = categories.flatMap((cat) =>
    cities.map((city) => ({
      url: `${baseUrl}/kategoria/${cat.slug}/${city.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...staticPages, ...categoryPages, ...cityPages];
}