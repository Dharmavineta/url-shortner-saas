"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Ring } from "@uiball/loaders";
import { FcGoogle } from "react-icons/fc";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PasswordInput } from "../PasswordInput";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const registerFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be more than 6 characters long" }),
});

export type loginFormtype = z.infer<typeof registerFormSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<loginFormtype>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const session = useSession();

  const googleLogin = async () => {
    signIn("google", { callbackUrl: "/" });
  };

  const onLogin = async (values: loginFormtype) => {
    setIsLoading(true);
    signIn("credentials", { ...values, redirect: false })
      .then((res) => {
        if (res?.ok) {
          router.push("/");
          toast.success("Login Success");
        } else if (res?.error) {
          toast.error("Login fail, please try again");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="w-full flex items-center justify-center">
      <Card className=" max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-lg flex items-center ">
            <Image
              className="mr-2"
              src={"/logo.svg"}
              alt=""
              height={25}
              width={25}
            />
            Login
          </CardTitle>{" "}
          <CardDescription className="text-muted-foreground ">
            Choose your preferred Login method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="">
            <Button
              onClick={googleLogin}
              className="w-full"
              variant={"outline"}
            >
              <FcGoogle className="w-4 h-4 mr-2" />
              Google
            </Button>
          </div>
          <div className="relative mt-3 mb-3">
            <div className="absolute inset-0 flex items-center ">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs text-muted-foreground uppercase">
              <span className="bg-background px-2">Or Continue with</span>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onLogin)}
              className="flex flex-col gap-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Email" {...field} />
                    </FormControl>
                    <FormDescription>
                      We never share emails with anybody
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} placeholder="xxxxxxxxxx" />
                    </FormControl>
                    <FormDescription>
                      Password must be more than 6 characters long
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant={"secondary"}
                className=" mt-1 w-full bg-sky-500 text-white hover:bg-sky-600"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? <Ring color="white" size={25} /> : <>Login</>}
              </Button>
            </form>
            <div className="flex justify-end mt-5 text-md text-muted-foreground">
              <Link href={"/register"} className="hover:underline">
                Not registered yet?{" "}
                <span className="text-red-500 ">Register </span>{" "}
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
