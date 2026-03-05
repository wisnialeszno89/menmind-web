import { ReactNode } from "react";

type Props = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function WorldPage({ title, intro, children }: Props) {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* header */}

        <header className="mb-10">

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
            {title}
          </h1>

          <div className="h-px w-14 bg-blue-600 mb-6" />

          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            {intro}
          </p>

        </header>

        {/* content */}

        <div className="space-y-10">

          {children}

        </div>

      </div>

    </main>
  );
}