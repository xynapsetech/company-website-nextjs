import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/admin/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin/dashboard");
  return (
    <div className="flex justify-center items-center mt-28 mb-10">
      <LoginForm />
    </div>
  );
}
