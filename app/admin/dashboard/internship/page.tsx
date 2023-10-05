import { InternshipTable } from "@/components/admin/dashboard/InternshipTable";

export default async function page() {
  return (
    <div className=" flex justify-center items-center mt-28 mb-10">
      <InternshipTable />
    </div>
  );
}
