"use client";
import React, { useEffect, useState } from "react";
import AdminLogo from "./AdminLogo";
import AdminInfo from "./AdminInfo";
import AdminLogout from "./AdminLogout";
import AdminHamIcon from "./AdminHamIcon";
import AdminNavItem from "./AdminNavItem";
import { ModeToggle } from "@/components/mode-toggle";

export default function AdminNavbar() {
  const [isNavShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const setShadow = () => {
      if (window.pageYOffset > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", setShadow);
    return () => {
      window.removeEventListener("scroll", setShadow);
    };
  }, []);
  return (
    <>
      <header className="w-full z-[10] transition-all fixed top-0 bg-white dark:bg-slate-950">
        <nav
          className={`h-full flex flex-row items-center justify-between px-6 lg:px-10 py-6 ${
            isNavShadow ? "shadow dark:shadow-gray-900" : null
          }`}
        >
          <AdminLogo />

          <div className="flex items-center">
            <AdminNavItem />
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="hidden lg:block">
              <ModeToggle />
            </div>
            <div className="hidden lg:block">
              <AdminInfo />
            </div>
            <div className="hidden lg:block">
              <AdminLogout />
            </div>
          </div>

          <div className="bg-white ml-4 -mr-2 flex lg:hidden">
            <AdminHamIcon />
          </div>
        </nav>
      </header>
    </>
  );
}
