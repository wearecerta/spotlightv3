import Image from "next/image";
import Hero from "../components/sections/Hero";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries/homePage";
import Welcome from "@/components/sections/Welcome";
import "./globals.css";
import Ourworks from "@/components/sections/Ourworks";
import OurServices from "@/components/sections/OurServices";

export default async function Home() {
  const data = await client.fetch(homePageQuery)
  return (
    <div>
      <Hero videoAsset={data?.heroVideo} title={data?.heroTitle} subtitle={data?.heroSubtitle}/>
      <Welcome />
      <Ourworks />
      <OurServices />
    </div>
  );
}
