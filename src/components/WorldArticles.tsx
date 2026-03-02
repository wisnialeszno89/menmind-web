import Link from "next/link";

type Article = {
  title: string;
  excerpt: string;
  slug: string;
};

export default function WorldArticles({
  world,
  articles,
}: {
  world: string;
  articles: Article[];
}) {
  return (
    <section className="mt-24 max-w-4xl">
      <h2 className="text-xl font-semibold mb-8">
        Teksty pogłębiające
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${world}/${article.slug}`}
            className="border rounded-xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold mb-3">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}