import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { adminLinks } from "@/lib/data";
import Link from "next/link";
import AdminLogout from "./AdminLogout";
import { ModeToggle } from "@/components/mode-toggle";
import { useSession } from "next-auth/react";

export default function AdminHamIcon() {
  const { data: session } = useSession();
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          className="block h-7 w-7 dark:stroke-white dark:bg-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <ul className="list-none text-gray-900 dark:text-gray-100 mx-0 text-base bg-gray-100 dark:bg-gray-900 py-1 rounded">
            {adminLinks.map((link) => (
              <li
                className="py-4 px-5 hover:bg-zinc-200 dark:hover:bg-gray-800 border-b border-zinc-300 dark:border-gray-800 transition-all font-medium"
                key={link.hash}
              >
                <Link href={`/${link.hash}`}>{link.name}</Link>
              </li>
            ))}
            <div className="text-center py-2">
              <AdminLogout />
            </div>
          </ul>
        </div>
        <div className="w-full flex justify-between items-center mt-10">
          <p className="bg-gray-200/50 dark:bg-gray-900/50 p-2 rounded">{session?.user?.email}</p>
          <ModeToggle />
        </div>
        <SheetFooter>
          <div className="absolute left-10 right-10 bottom-8 text-gray-700">
            <p className="text-center">Xynapse Technologies Admin</p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
