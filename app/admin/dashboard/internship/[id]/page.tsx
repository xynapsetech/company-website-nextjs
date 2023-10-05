import { getInternData } from "@/components/admin/dashboard/InternshipTable";
import React from "react";

export default async function page() {
  const internUser = await getInternData();
  return <div className="mt-28">asaf</div>;
}
