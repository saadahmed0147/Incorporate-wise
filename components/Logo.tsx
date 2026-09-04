import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`logo${light ? " logo-light" : ""}`} href="/usa-company-registration" aria-label="Incorporate Wise home">
      <span>incorporate</span><strong>wise</strong><i aria-hidden="true" />
    </Link>
  );
}
