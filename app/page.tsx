import Image from "next/image";
import Hero from "../components/sections/Hero";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries/homePage";

export default async function Home() {
  const data = await client.fetch(homePageQuery)
  return (
    <div>
      <Hero videoAsset={data?.heroVideo} title={data?.heroTitle} subtitle={data?.heroSubtitle}/>
    </div>
  );
}
