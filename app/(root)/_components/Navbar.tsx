"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import {
  GanttChartSquare,
  LayoutDashboard,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Ring } from "@uiball/loaders";
import dynamic from "next/dynamic";

const UserButtonComp = dynamic(() => import("./UserButton"), { ssr: false });

const Navbar = () => {
  const session = useSession();
  const scroll = UseScroll();
  const router = useRouter();
  return (
    <div
      className={cn(
        " h-16 px-8 lg:px-14 mx-auto items-center flex w-full justify-between z-10 border-b bg-white fixed",
        scroll ? "border-b" : "border-none"
      )}
    >
      <div>
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-sky-700"
        >
          <Image src={"logo.svg"} alt="/" width={30} height={30} />
          <h1 className="bg-gradient-to-bl from-indigo-500 via-purple-500 text-xl to-blue-500 bg-clip-text text-transparent">
            MiniUrl
          </h1>
        </Link>
      </div>
      <div className=" items-center gap-x-4 hidden lg:flex">
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/plans"}>Plans</Link>
        <Suspense fallback={<Ring color="white" size={25} />}>
          {/* {session.data?.user ? (
            <Button onClick={() => signOut()} size={"sm"} variant={"outline"}>
              Logout
            </Button>
          ) : (
            <Link href={"/register"}>Register</Link>
          )} */}
          <UserButtonComp />
        </Suspense>
      </div>
      <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src={session?.data?.user?.image || ""} alt="" />
              <AvatarFallback>
                {session?.data?.user.name?.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative right-10 w-52">
            <DropdownMenuLabel className="text-sm">
              User Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex flex-col gap-y-2">
              <DropdownMenuItem className="items-center ">
                <User className="w-4 h-4 mr-1" />
                <Link href={"/"}>Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="items-center ">
                <LayoutDashboard className="w-4 h-4 mr-1" />
                <Link href={"/"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="items-center ">
                <GanttChartSquare className="w-4 h-4 mr-1" />
                <Link href={"/plans"}>Subscriptions</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="items-center ">
                {session.data?.user ? (
                  <>
                    <LogOut className="w-4 h-4 mr-1" />
                    <button onClick={() => signOut()} role="button">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-1" />
                    <button onClick={() => router.push("/login")} role="button">
                      Login
                    </button>
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
