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

type CardProps = React.ComponentProps<typeof Card>;

export function InternshipCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Registered Interns</CardTitle>
        <CardDescription>
          List of people registered for internship.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="bg-gray-300/50 dark:bg-gray-900/50 p-1 px-2 rounded w-fit">
          Total Registered: 10
        </p>
      </CardContent>
      <CardFooter>
        <DashboardNavigateButton routeUrl='dashboard/internship'/>
      </CardFooter>
    </Card>
  );
}
