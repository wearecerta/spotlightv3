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
  WhyChooseUsSection1,
  WhyChooseUsSection2,
} from "./serviceDetail";
import { blog } from "./blog";
import { Team, TeamMembers } from "./teams";

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
    //this is for the service detail page sections 
    IntroductionSection,
    WhyChooseUsSection1,
    coreServicesSection,
    NicheIndustries,
    WhyChooseUsSection2,
    CtaSection,
    AdditionalInformation,
    faq,
  ],
};
