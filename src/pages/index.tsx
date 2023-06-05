import { Main } from "@/layouts/globals/Main";
import Head from "next/head";
import { NextPage } from "next";
import { AppConfig } from "@/utils/AppConfig";

import Image from "next/image";

interface indexProps {
  title: string;
  canonical: string;
}

const index: NextPage<indexProps> = () => {
  return (
    <Main
      title={`${AppConfig.title} | Rumah`}
      canonical={`${AppConfig.url}/` + "index"}
    >
      <h1 className="text-6xl font-bold">
        Next.js TypeScript Tailwind Starter
      </h1>
    </Main>
  );
};

export default index;
