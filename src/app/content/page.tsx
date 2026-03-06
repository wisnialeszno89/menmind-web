import Link from "next/link";
import { articles } from "@/content/articles";

export default function ArticlesPage() {

  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-12">
          Artykuły
        </h1>

        <div className="space-y-6">

          {articles.map((article) => (

            <Link
              key={article.slug}
              href={article.slug}
              className="card block"
            >

              <h2 className="text-xl font-semibold mb-2">
                {article.title}
              </h2>

              <p className="text-gray-600">
                {article.intro}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );
}