"use client";

import Banner from "../components/Banner";
import Milestones from "../components/Milestones";
import TrustedMarquee from "../components/TrustedMarquee";
import OurServices from "../components/OurServices";
import OurProjects from "../components/OurProjects";
import TrustedBy from "../components/TrustedBy";
import StepCards from "../components/StepCards";
import WhiteLabelService from "../components/WhiteLabelService";
import TechStackTabs from "../components/TechStackTabs";
import TestimonialSection from "../components/TestimonialSection";
import IndustryExpertises from "../components/IndustryExpertises";
import StrategySection from "../components/StrategySection";
import BlogList from "../components/BlogList";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <main>

      <div className="h-auto">
        <Banner></Banner>
        <Milestones />
        <TrustedMarquee />
        <OurServices />
        <OurProjects />
        <TrustedBy />
        <StepCards />
        <WhiteLabelService />
        <TechStackTabs />
        <TestimonialSection />
        <IndustryExpertises />
        <StrategySection />
        <FAQSection />
        <BlogList />
        <CTASection />
        {/* <Milestones></Milestones>
        <TrustedMarquee></TrustedMarquee>
        <OurServices></OurServices>
        <OurProjects></OurProjects>
        <TrustedBy></TrustedBy>
        <StepCards></StepCards>
        <WhiteLabelService></WhiteLabelService>
        <TechStackTabs></TechStackTabs>
        <TestimonialSection></TestimonialSection>
        <IndustryExpertises></IndustryExpertises>
        <StrategySection></StrategySection>
        <BlogList></BlogList>
        <OurProjects></OurProjects>
        <TrustedBy></TrustedBy>
        <StepsWithDetails></StepsWithDetails>
        <WhiteLabelService></WhiteLabelService>
        <TechStackTabs></TechStackTabs>
        <TestimonialSection></TestimonialSection>
        <IndustryExpertises></IndustryExpertises>  */}
        {/* <KickstartSection></KickstartSection> */}
        {/* <StrategySection></StrategySection>
        <BlogList></BlogList> */}


        {/* <Footer></Footer> */}
      </div>
      {/* <ScrollToTopButton /> */}

    </main>
  );
}
