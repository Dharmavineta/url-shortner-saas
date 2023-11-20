import { getAuthSession } from "@/lib/next-auth-options";
import { redirect } from "next/navigation";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = async ({ children }) => {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default layout;
