"use client";

import dynamic from 'next/dynamic';
import Banner from "../components/Banner";

// Lazy load below-fold components with loading states
const TrustedMarquee = dynamic(() => import("../components/TrustedMarquee"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const OurServices = dynamic(() => import("../components/OurServices"));
const Milestones = dynamic(() => import("../components/Milestones"));
const OurProjects = dynamic(() => import("../components/OurProjects"));
const TrustedBy = dynamic(() => import("../components/TrustedBy"));
const StepCards = dynamic(() => import("../components/StepCards"));
const WhiteLabelService = dynamic(() => import("../components/WhiteLabelService"));
const TechStackTabs = dynamic(() => import("../components/TechStackTabs"));
const TestimonialSection = dynamic(() => import("../components/TestimonialSection"));
const IndustryExpertises = dynamic(() => import("../components/IndustryExpertises"));
const StrategySection = dynamic(() => import("../components/StrategySection"));
const ValuesSection = dynamic(() => import("../components/ValuesSection"));
const FAQSection = dynamic(() => import("../components/FAQSection"));
const BlogList = dynamic(() => import("../components/BlogList"));
const CTASection = dynamic(() => import("../components/CTASection"));

export default function Home() {
  return (
    <main>

      <div className="h-auto">
        <Banner />
        <TrustedMarquee />
        <OurServices />
        <Milestones />
        <OurProjects />
        <TrustedBy />
        <StepCards />
        <WhiteLabelService />
        <TechStackTabs />
        <TestimonialSection />
        <IndustryExpertises />
        <StrategySection />
        <ValuesSection />
        <FAQSection />
        <BlogList />
        <CTASection />
      </div>
    </main>
  );
}
