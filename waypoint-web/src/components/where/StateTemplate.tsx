import Link from "next/link";

export type StateAction = {
  label: string;
  href: string;
};

export type StateTemplateProps = {
  title: string;
  subtitle?: string;
  description: string;
  actions?: StateAction[];
  stateKey?: string;
};

export default function StateTemplate({
  title,
  subtitle,
  description,
  actions = [],
  stateKey,
}: StateTemplateProps) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      data-state={stateKey}
    >
      <section className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold">{title}</h1>

        {subtitle && (
          <p className="text-lg text-neutral-500">{subtitle}</p>
        )}

        <p className="text-neutral-400">{description}</p>

        {actions.length > 0 && (
          <div className="flex flex-col gap-3 pt-4">
            {actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="block rounded-md border border-neutral-700 px-4 py-2 hover:bg-neutral-800 transition"
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}