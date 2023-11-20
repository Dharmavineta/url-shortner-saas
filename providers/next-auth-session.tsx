"use client";
import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const UserSession: FC<props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default UserSession;
