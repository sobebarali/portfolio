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
                iconSrc: "/langchain_logo.jpeg",
                iconAlt: "LangChain Logo",
                name: "LangChain",
              },
              {
                iconSrc:
                  "/openai_logo.jpeg",
                iconAlt: "OpenAI Logo",
                name: "OpenAI",
              },
              {
                iconSrc: "/anthropicresearch_logo.jpeg",
                iconAlt: "Claude Logo",
                name: "Claude",
              },
              {
                iconSrc: "/groq_logo.jpeg",
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
                iconSrc: "/hypercube_systems_logo.jpeg",
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
