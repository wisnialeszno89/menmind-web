export function articleSchema({
  title,
  description,
  slug
}: {
  title: string
  description: string
  slug: string
}) {

  const url = `https://menmind.app/${slug}`

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "MenMind"
    },
    publisher: {
      "@type": "Organization",
      name: "MenMind",
      logo: {
        "@type": "ImageObject",
        url: "https://menmind.app/logo.png"
      }
    },
    mainEntityOfPage: url
  }

}