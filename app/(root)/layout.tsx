import React, { FC } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { getAuthSession } from "@/lib/next-auth-options";
import { redirect } from "next/navigation";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = async ({ children }) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <div className=" py-16 px-5 lg:px-14 mx-auto min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
