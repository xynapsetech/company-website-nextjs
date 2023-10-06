import InternDetails from "@/components/admin/dashboard/InternDetails";
import { InternUserTypes } from "@/components/admin/dashboard/InternshipTable";
import axios from "axios";
import React from "react";

async function getData(id: any): Promise<InternUserTypes[]> {
  const resp = await axios.get(`http://localhost:3000/api/internUser/${id}`);
  if (!resp.status) {
    throw new Error("Failed to fetch data");
  }
  const data: InternUserTypes[] = await resp.data.data;
  return data;
}

export default async function page({ params }: { params: any }) {
  let InternData: any = await getData(params.id);

  return (
    <>
      <div className="mt-28">
        <InternDetails internDetails={InternData} />
      </div>
    </>
  );
}
