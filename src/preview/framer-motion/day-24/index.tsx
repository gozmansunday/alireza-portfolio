"use client";

import React from "react";
import EachElement from "./each-element";

export default function Day24() {
  return (
    <div className="flex w-80 flex-col gap-2 rounded-3xl bg-[#EAEAEA] p-2">
      <EachElement />
      <EachElement />
    </div>
  );
}
