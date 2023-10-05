import { adminLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function AdminNavItem() {
  return (
    <div className="text-center hidden lg:block">
      {adminLinks.map((link) => (
        <Link
          href={`${link.hash}`}
          key={link.hash}
          className="text-md mx-3 px-1 text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-50"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
