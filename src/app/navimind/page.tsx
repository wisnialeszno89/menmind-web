import { redirect } from "next/navigation";

export default function NavimindPage({
  searchParams,
}: {
  searchParams?: { state?: string };
}) {

  const state = searchParams?.state ?? "start";

  const url =
    `https://navimind.app?state=${encodeURIComponent(state)}`;

  redirect(url);

}