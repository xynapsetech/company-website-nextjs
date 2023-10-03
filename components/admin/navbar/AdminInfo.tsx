import React from "react";
import { useSession } from "next-auth/react";
import { RxAvatar } from "react-icons/rx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function AdminInfo() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <div className="text-2xl">
                  <RxAvatar />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{session?.user?.email}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null}
    </>
  );
}
