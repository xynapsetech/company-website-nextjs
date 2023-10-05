import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardNavigateButton from "./DashboardNavigateButton";
import { getInternData } from "./InternshipTable";

type CardProps = React.ComponentProps<typeof Card>;

export async function InternshipCard({ className, ...props }: CardProps) {
  const internUser = await getInternData();
  return (
    <Card className={cn("w-[380px] m-2 ", className)} {...props}>
      <CardHeader>
        <CardTitle>Registered Interns</CardTitle>
        <CardDescription>
          List of people registered for internship.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="bg-gray-300/50 dark:bg-gray-900/50 p-1 px-2 rounded w-fit">
          Total Registered: {internUser.length}
        </p>
      </CardContent>
      <CardFooter>
        <DashboardNavigateButton routeUrl="dashboard/internship" />
      </CardFooter>
    </Card>
  );
}
