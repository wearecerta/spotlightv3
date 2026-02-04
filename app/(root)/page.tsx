import Hero from "../../components/sections/Hero";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/queries/homePage";
import Welcome from "@/components/sections/Welcome";
import "../globals.css";
import Ourworks from "@/components/sections/Ourworks";
import OurServices from "@/components/sections/OurServices";
import Awards from "@/components/sections/Awards";
import Industries from "@/components/sections/Industries";
import OurClients from "@/components/sections/OurClients";
import OurAgency from "@/components/sections/OurAgency";
import { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.spotlightplc.com/",
  },
};

export default async function Home() {
  return (

    <div>
      <Hero 
      // videoAsset={data?.heroVideo}
      />
      <Welcome />
      <Ourworks />
      <OurServices />
      <Awards />
      <Industries/>
      <OurClients/>
      <OurAgency/>
    </div>
  );
}
