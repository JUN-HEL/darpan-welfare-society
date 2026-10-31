import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Crumb {
  name: string;
  path: string;
}

interface PageIntroProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  aside?: ReactNode;
  breadcrumbs: Crumb[];
  className?: string;
}

export function PageIntro({
  index,
  eyebrow,
  title,
  intro,
  aside,
  breadcrumbs,
  className,
}: PageIntroProps) {
  return (
    <section className={cn("page-intro", className)}>
      <div className="shell">
        <div className="page-intro__rail">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.path}>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">{crumb.name}</span>
                </li>
              ))}
            </ol>
          </nav>
          <span className="page-intro__index" aria-hidden="true">
            {index}
          </span>
        </div>

        <div className="page-intro__grid">
          <div className="page-intro__heading">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-xl">{title}</h1>
          </div>

          <div className="page-intro__aside">
            <p className="lead">{intro}</p>
            {aside}
          </div>
        </div>
      </div>
    </section>
  );
}
