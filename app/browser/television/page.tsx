"use client";

import Header from "@/app/components/Header";
import TVMainContainer from "./TVMainContainer/TVMainContainer";
import TVSecondaryConatiner from "./TVSecondaryContainer/TVSecondaryContainer";

export default function Television() {

  return (
    <div className="">
      <Header />
      <TVMainContainer />
      <TVSecondaryConatiner />
    </div>
  );
}
