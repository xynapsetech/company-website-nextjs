import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

export interface InternUserTypes {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  mobilenum: string;
  resumeUrl: string;
  address: string;
  linkedinUrl: string;
  collegeName: string;
  majorName: string;
  cgpa: string;
  gradDate: string;
  skills: string;
  interestArea: string;
  projectDetails: string;
  internDuration: string;
  hearSource: string;
}

export async function getInternData(): Promise<InternUserTypes[]> {
  const resp = await axios.get(
    "https://api.xynapsetechnologies.com/api/intern/",
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
  if (!resp.status) {
    throw new Error("Failed to fetch data");
  }
  const data: InternUserTypes[] = await resp.data;
  return data;
}

type CardProps = React.ComponentProps<typeof Card>;
export async function InternshipTable({ className, ...props }: CardProps) {
  const internUser = await getInternData();

  return (
    <Card className={cn("w-full md:w-4/5", className)} {...props}>
      <CardHeader>
        <CardTitle>Registered Interns</CardTitle>
        <CardDescription>
          List of people registered for internship.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {internUser ? (
          <Table>
            <TableCaption>
              A list of users registered for internship.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>SI No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Resume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {internUser.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">
                    {data.firstname} {data.lastname}
                  </TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.mobilenum}</TableCell>
                  <TableCell>
                    <Link
                      href={data.resumeUrl}
                      className="text-blue-400 underline hover:text-blue-700"
                      target="_blank"
                    >
                      View resume
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`internship/${data._id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center p-5">No users found!</p>
        )}
      </CardContent>
    </Card>
  );
}
