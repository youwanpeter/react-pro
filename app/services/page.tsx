import AboutSectionOne from "@/components/Features/SingleFeature";
import AboutSectionTwo from "@/components/Features/featuresData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Services Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Features />
    </>
  );
};

export default ServicePage;
