import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200",
        {
          "bg-accent text-white hover:bg-accentSoft":
            variant === "primary",
          "bg-navy border border-borderSoft text-textPrimary hover:bg-navySoft":
            variant === "secondary",
          "bg-transparent text-textMuted hover:text-textPrimary":
            variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}