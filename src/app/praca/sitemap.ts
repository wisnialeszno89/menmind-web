import { jobs } from "@/data/jobs"

export default function sitemap() {

  const base = "https://menmind.app"

  const jobUrls = jobs.map(job => ({
    url: `${base}/praca/${job.id}`,
    lastModified: new Date()
  }))

  return [
    {
      url: `${base}/praca`,
      lastModified: new Date()
    },
    ...jobUrls
  ]
}