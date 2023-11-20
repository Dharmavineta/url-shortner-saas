"use client";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/next-auth-options";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserButton = () => {
  const session = useSession();
  return (
    <div>
      {session.data?.user ? (
        <Button onClick={() => signOut()} size={"sm"} variant={"outline"}>
          Logout
        </Button>
      ) : (
        <Link href={"/register"}>Register</Link>
      )}
    </div>
  );
};

export default UserButton;
