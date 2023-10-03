import AdminFooter from "@/components/admin/footer/AdminFooter";
import AdminNavbar from "@/components/admin/navbar/AdminNavbar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminNavbar />
      {children}
      <AdminFooter/>
    </div>
  );
}
