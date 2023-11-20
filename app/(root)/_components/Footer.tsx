import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-6 border-t py-8 lg:px-10 mx-auto flex flex-wrap justify-between gap-16 ">
      <div className="text-left">
        <Link href={"/"} className="font-bold text-2xl">
          MiniUrl
        </Link>
        <p className="text-muted-foreground mt-2">
          Shortening your url&apos;s one at a time!
        </p>
      </div>
      <div className="w-full flex flex-1 flex-wrap gap-8 justify-evenly">
        <div>
          <h1 className="font-bold ">Company</h1>
          <ul className="flex mt-2 flex-col gap-y-2">
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Careers</Link>
            </li>
            <li>
              <Link href={"/"}>Press</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Product</h1>
          <ul className="flex mt-2 flex-col gap-y-2">
            <li>
              <Link href={"/"}>Features</Link>
            </li>
            <li>
              <Link href={"/"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/"}>API Documentation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Support</h1>
          <ul className="flex mt-2 flex-col gap-y-2">
            <li>
              <Link href={"/"}>FAQ</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/"}>Status</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
