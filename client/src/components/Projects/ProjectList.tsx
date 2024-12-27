import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          {/* AskLink Project */}
          <ProjectItem
            title="AskLink"
            description="AI-Powered URL Content Analysis Tool"
            websiteUrl="https://ask-link.vercel.app"
            githubUrl="https://github.com/sobebarali/AskLink"
            listItems={[
              "Provides AI-driven answers to questions about any URL's content using LangChain and OpenAI.",
              "Built using Node.js, TypeScript, TRPC, and Tailwind, with a Next.js frontend.",
              "Simplifies information retrieval with a user-friendly web interface.",
            ]}
          />

          {/* BloodcoreAI Project */}
          <ProjectItem
            title="BloodcoreAI"
            description="AI-Driven Blood Report Analyzer"
            githubUrl="https://github.com/sobebarali/Bloodcore-AI"
            listItems={[
              "Analyzed blood test reports and provided personalized health insights.",
              "Used CrewAI, Python, FastAPI, Supabase, and Mailtrap for secure results sharing.",
              "Integrated health articles for better user understanding.",
            ]}
          />

          {/* TasteBuddyAI Project */}
          <ProjectItem
            title="TasteBuddyAI"
            description="AI-Powered Reddit Restaurant Recommender"
            githubUrl="https://github.com/sobebarali/ollama-langchain-agent"
            listItems={[
              "Developed a Reddit-based system to recommend restaurants based on user queries.",
              "Leveraged LangChain, FastAPI, Ollama, and Reddit API for intelligent responses.",
              "Filtered recommendations using upvotes and structured response formats.",
            ]}
          />

          {/* BlueCanary Project */}
          <ProjectItem
            title="BlueCanary"
            description="Advanced Deployment Strategy"
            githubUrl="https://github.com/sobebarali/learn-terraform/tree/main/learn-terraform-advanced-deployments"
            listItems={[
              "Implemented blue-green and canary deployment strategies using AWS ALB, VPC, and EC2.",
              "Enhanced reliability and reduced downtime with Terraform.",
              "Streamlined infrastructure management for operational efficiency.",
            ]}
          />

          {/* CloudPyDeploy Project */}
          <ProjectItem
            title="CloudPyDeploy"
            description="Python App Deployment Automation"
            githubUrl="https://github.com/sobebarali/CloudPyDeploy"
            listItems={[
              "Built an automated deployment solution for Python web applications.",
              "Used Node.js, TypeScript, and AWS CDK for infrastructure setup.",
              "Simplified CI/CD pipelines, EC2 provisioning, and IAM role configuration.",
            ]}
          />

          {/* Recollect Project */}
          <ProjectItem
            title="Recollect"
            description="Personalized Recommendation Management System"
            githubUrl="https://github.com/sobebarali/RecoCollect"
            listItems={[
              "Built a recommendation management system using Node.js, TypeScript, and PostgreSQL.",
              "Enabled users to create, manage, and view personalized collections.",
              "Implemented test-driven development (TDD) for reliable functionality.",
            ]}
          />

          {/* RateSync Project */}
          <ProjectItem
            title="RateSync"
            description="Dynamic Rate Limiter with Concurrency Control"
            githubUrl="https://github.com/sobebarali/advance-rate-limitter"
            listItems={[
              "Implemented rate limiting and concurrency control for Express.js apps.",
              "Used Redis, DynamoDB, and express-rate-limit for dynamic configuration.",
              "Developed with TypeScript and TDD to ensure performance and scalability.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
