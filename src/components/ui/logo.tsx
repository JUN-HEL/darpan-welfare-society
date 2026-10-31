import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  symbolOnly?: boolean;
}

export function Logo({ className, symbolOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("brand", className)}
      aria-label="Darpan Welfare Society — home"
    >
      <svg
        className="brand__symbol"
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 36V20.5C8 12.492 14.268 6 22 6s14 6.492 14 14.5V36"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path
          d="M14.5 36V21.25C14.5 16.694 17.858 13 22 13s7.5 3.694 7.5 8.25V36"
          stroke="currentColor"
          strokeWidth=".85"
          opacity=".55"
        />
        <path d="M22 6v8" stroke="currentColor" strokeWidth=".85" opacity=".55" />
        <circle cx="22" cy="27" r="2.35" fill="#C8754D" />
        <path d="M8 40h28" stroke="currentColor" strokeWidth=".85" opacity=".35" />
      </svg>
      {!symbolOnly && (
        <span className="brand__wordmark">
          <span className="brand__name">Darpan</span>
          <span className="brand__descriptor">Welfare Society</span>
        </span>
      )}
    </Link>
  );
}
