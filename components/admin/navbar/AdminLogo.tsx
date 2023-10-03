import Link from "next/link";
import React from "react";
import HeaderLogo from "@/public/headerLogo.png";
import Image from "next/image";

export default function AdminLogo() {
  return (
    <Link
      href="/admin/dashboard"
      className="flex justify-center items-center font-medium text-gray-700 dark:text-gray-200 text-lg sm:text-xl md:text-2xl  cursor-default"
    >
      <Image
        src={HeaderLogo}
        height={100}
        width={100}
        alt="Logo"
        className="w-10 sm:w-14 mr-2"
      />
      Admin
    </Link>
  );
}
