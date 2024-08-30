"use client"
import Link from "next/link";

import { dashboardNavLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const pathname = usePathname();
  return (
    <>
      {dashboardNavLinks.map((item) => (
        <Link
          href={item.url}
          key={item.label}
          className={`${
            pathname === item.url ? "text-primary font-bold" : "text-foreground hover:text-secondary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
