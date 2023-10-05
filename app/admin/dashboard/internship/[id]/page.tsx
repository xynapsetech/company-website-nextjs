import InternDetails from "@/components/admin/dashboard/InternDetails";
import { InternUserTypes } from "@/components/admin/dashboard/InternshipTable";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

async function getData(id): Promise<InternUserTypes[]> {
  const resp = await axios.get(`http://localhost:3000/api/internUser/${id}`);
  if (!resp.status) {
    throw new Error("Failed to fetch data");
  }
  const data: InternUserTypes[] = await resp.data.data;
  return data;
}

export default async function page({ params }) {
  let InternData = await getData(params.id);

  return (
    <>
      <div className="mt-28">
        <InternDetails internDetails={InternData} />
      </div>
    </>
  );
}
