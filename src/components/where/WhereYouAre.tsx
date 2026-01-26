import Link from "next/link";

export default function WhereYouAre() {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/broken" className="p-4 rounded-xl bg-zinc-800">
        Rozbity / wkurzony
      </Link>
    </div>
  );
}