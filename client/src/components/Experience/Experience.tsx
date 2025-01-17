import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start first-letter">
          <div className="w-full lg:w-1/4 text-center lg:text-center mb-4 lg:mb-0">
            <h2 className="text-2xl font-light pb-4">Experience</h2>
          </div>

          <div className="w-full lg:w-3/4 relative lg:pl-8">
            <ExperienceCard
              first
              title="Founding AI Engineer"
              company="Capri AI"
              location="Georgia, US (Remote)"
              dateRange="November 2023 - Present"
              description={[
                "Designed and implemented a scalable Retrieval-Augmented Generation (RAG) pipeline leveraging OpenAI, Claude, and Groq AI models.",
                "Demonstrated proficiency in building and managing RESTful APIs using Node.js, TypeScript, Python, and FastAPI.",
                "Led integrations with CRM tools (e.g., GoHighLevel, HubSpot) and datasources (e.g., Google Calendar, Slack), automating 90% of manual tasks.",
                "Resolved over 95% of user issues within 24 hours, maintaining a 98% user satisfaction rate.",
              ]}
              logoUrl="https://media.licdn.com/dms/image/v2/D560BAQFMN0-M7Dmm6w/company-logo_200_200/company-logo_200_200/0/1683815009573?e=1743033600&v=beta&t=fcYY8-hVjyGvoMOTRDokMkk3PxqMcxtxtBo3IcfvACw"
              websiteUrl="https://capriai.us/"
            />

            <ExperienceCard
              last
              title="Backend Developer"
              company="Little SaaS"
              location="Delaware, US (Remote)"
              dateRange="November 2022 - November 2023"
              description={[
                "Designed and deployed RESTful APIs using Node.js, ExpressJS, and TypeScript, boosting system performance by 35%.",
                "Built a multi-node search microservice, increasing search speed by 50% and accuracy by 45%.",
                "Engineered a multi-SMTP email microservice for enhanced email deliverability, reducing bounce rates by 30%.",
                "Developed a scalable Content Management Service with support for complex relational models.",
              ]}
              logoUrl="https://media.licdn.com/dms/image/v2/C4D0BAQECk_tfGJjVDg/company-logo_200_200/company-logo_200_200/0/1630488944780/littlesaas_logo?e=1743033600&v=beta&t=MObACSRAIRjzWKNQ1NfL3Ec-uxB8dZXMc3CIN5CpmQQ"
              websiteUrl="https://littlesaas.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
