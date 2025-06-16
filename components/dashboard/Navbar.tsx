"use client";
import Link from "next/link";

import { DASHBOARD_NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const pathname = usePathname();

  return (
    <>
      {DASHBOARD_NAV_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={`${
            pathname === item.href
              ? "text-primary font-bold"
              : "text-foreground hover:text-secondary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
