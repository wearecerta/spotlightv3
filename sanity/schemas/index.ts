import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { clients } from "./clients";
import { industries } from "./industries";
import { caseStudy } from "./caseStudy";
import { services } from "./services";
import {
  AdditionalInformation,
  coreServicesSection,
  CtaSection,
  faq,
  IntroductionSection,
  NicheIndustries,
  onPageSeo,
  WhyChooseUsSection1,
  WhyChooseUsSection2,
} from "./serviceDetail";
import { blog } from "./blog";
import { Team, TeamMembers } from "./teams";
import { agencies } from "./agencies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    clients,
    industries,
    caseStudy,
    blog,
    services,
    Team,
    TeamMembers,
    agencies,
    // this is for the service detail page sections 
    IntroductionSection,
    WhyChooseUsSection1,
    coreServicesSection,
    NicheIndustries,
    WhyChooseUsSection2,
    CtaSection,
    AdditionalInformation,
    faq,
    onPageSeo
  ],
};
