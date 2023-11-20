import LoginForm from "@/components/forms/LoginForm";
import { getAuthSession } from "@/lib/next-auth-options";
import React from "react";

const Login = async () => {
  const session = await getAuthSession();
  const userId = session?.user.id;
  console.log(userId);
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
};

export default Login;
