"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const trpc = useTRPC();

  const {data} = useQuery(trpc.hello.queryOptions({text: "world"}))

  return <div className="font-bold">
    {JSON.stringify(data)}
  </div>;
};

export default Page;
