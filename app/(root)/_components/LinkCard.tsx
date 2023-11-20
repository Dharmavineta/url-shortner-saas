"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Lock } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InputField } from "./InputField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const urlFormSchema = z.object({
  longUrl: z.string().min(3, { message: "Please enter a valid link" }),
  customDomain: z.string().optional(),
});

export type urlFormType = z.infer<typeof urlFormSchema>;
const LinkCard = () => {
  const form = useForm<urlFormType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      longUrl: "",
      customDomain: "",
    },
  });

  const handleURL = (values: urlFormType) => {
    console.log(values);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Card className="max-w-3xl w-full p-2">
        <CardHeader>
          <CardTitle className="flex items-center px-5">
            <Link className="w-4 h-4 mr-2" /> Shorten your URL
          </CardTitle>
          <CardDescription className="px-5">
            Enter your link here to get your shortened link
          </CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleURL)}
                className="space-y-5 mt-5"
              >
                <FormField
                  control={form.control}
                  name="longUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Long URL</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="http://your-url.com" />
                      </FormControl>
                      <FormDescription>
                        Chill we don&apos;t collect sensitive information
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Domain Name</FormLabel>

                      <InputField />
                      <FormDescription>Enter your domain name</FormDescription>
                    </FormItem>
                  )}
                />
                <Button className="w-full">Shorten Link</Button>
              </form>
            </Form>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LinkCard;
