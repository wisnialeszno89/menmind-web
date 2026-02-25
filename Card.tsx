import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-borderSoft bg-navy p-8 transition hover:bg-navySoft",
        className
      )}
    >
      {children}
    </div>
  );
}