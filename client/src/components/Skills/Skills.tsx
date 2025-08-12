import React from "react";
import SkillGroup from "./SkillGroup";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <div className="container mx-auto py-4">
        <div className="text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <SkillGroup
            title="Languages"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                iconAlt: "Typescript Logo",
                name: "Typescript",
              },
               {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                iconAlt: "JavaScript Logo",
                name: "JavaScript",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                iconAlt: "Python Logo",
                name: "Python",
              },
            ]}
          />
          <SkillGroup
            title="AI"
            skills={[
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D560BAQGHpVAp9i7n5Q/company-logo_200_200/B56ZcyzK7qHgAI-/0/1748903964692/langchain_logo?e=1758153600&v=beta&t=Zksoq0lsv5qfBXjwb0PdMKQv08UkoGxhtqOC-WSQ-6w",
                iconAlt: "LangChain Logo",
                name: "LangChain",
              },
              {
                iconSrc:
                  "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
                iconAlt: "Hugging Face Logo",
                name: "Hugging Face",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D560BAQFbVTDw-oWXmw/company-logo_200_200/company-logo_200_200/0/1681327675102?e=1758153600&v=beta&t=AjJVw4wfY7R5X1fQA-ztYMFcr9CkazlFUthpctVxdOY",
                iconAlt: "LlamaIndex Logo",
                name: "LlamaIndex",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D560BAQHpzXbqSyR74A/company-logo_200_200/B56ZT8EYB8HsAI-/0/1739395793272/openai_logo?e=1758153600&v=beta&t=EMLI41jFHCVTK8N-DUn8HQukuwD0M3TWl0tRwuyONVw",
                iconAlt: "OpenAI Logo",
                name: "OpenAI",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D4E0BAQFMhKgeR7EYAg/company-logo_200_200/company-logo_200_200/0/1719256413073/anthropicresearch_logo?e=1758153600&v=beta&t=scyyS78OTdgCwCnp4Q0dp4-6Ktu75-qSLcCtmNBlZHI",
                iconAlt: "Claude Logo",
                name: "Claude",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/C560BAQH-yCK5i0E6jA/company-logo_200_200/company-logo_200_200/0/1654720696784/groq_logo?e=1758153600&v=beta&t=73Pk-JzL7x5CKLCGS-xInOquj_Rp4ptX0ECrfhcMwAs",
                iconAlt: "Groq Logo",
                name: "Groq",
              },
            ]}
          />
          <SkillGroup
            title="Databases"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg",
                iconAlt: "DynamoDB Logo",
                name: "DynamoDB",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                iconAlt: "MongoDB Logo",
                name: "MongoDB",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
                iconAlt: "SQL Database Logo",
                name: "SQL",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                iconAlt: "PostgreSQL Logo",
                name: "Postgres",
              },

              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
                iconAlt: "Redis Logo",
                name: "Redis",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/C4E0BAQHYjma_4kJHhw/company-logo_200_200/company-logo_200_200/0/1630629175187/hypercube_systems_logo?e=1758153600&v=beta&t=5cuDHIHS_zaaCHQcSakDHcsylfOBvlwl2TXduBBxZMs",
                iconAlt: "Pinecone Logo",
                name: "Pinecone",
              },
            ]}
          />
          <SkillGroup
            title="DevOps"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                iconAlt: "Docker Logo",
                name: "Docker",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                iconAlt: "Git Logo",
                name: "Git",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                iconAlt: "Github Action Logo",
                name: "Github Actions",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg",
                iconAlt: "Circle CI Logo",
                name: "Circle CI",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                iconAlt: "Linux Logo",
                name: "Linux",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                iconAlt: "AWS Logo",
                name: "AWS",
              },
            ]}
          />
          <SkillGroup
            title="Development"
            skills={[
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                iconAlt: "NodeJS Logo",
                name: "Node.js",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                iconAlt: "Express Logo",
                name: "Express.js",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
                iconAlt: "Nest Logo",
                name: "Nest.js",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
                iconAlt: "FastAPI Logo",
                name: "FastAPI",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                iconAlt: "React Logo",
                name: "React",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                iconAlt: "Next.js Logo",
                name: "Next.js",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
