import React from "react";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AdminLogout() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <Button onClick={() => signOut()} className="font-semibold">
          Logout
        </Button>
      ) : null}
    </>
  );
}
