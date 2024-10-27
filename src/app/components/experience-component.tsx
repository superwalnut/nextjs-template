'use client'

import { Experience } from "./interfaces/experience";
import ExperienceCard from "./partials/experience-card"

const products = [{
  fromDate: '2021-08-23',
  toDate: 'Present',
  role:'Senior Software Engineer',
  company: 'Woolworth Group',
  summary:
    'At WooliesX, I joined the team to work on the Auburn automated Customer Fulfillment Centre (CFC) project, focusing on integrating WooliesX systems with KNAPP\'s automation platform. My role involves managing an event-driven architecture that sources upstream data from SAP and directs it downstream to KNAPP\'s service bus. Operating within a hybrid agile-waterfall development lifecycle and scrum environment.',
  responsibilities: [
    "Led the integration of WooliesX systems with the KNAPP automation system, ensuring seamless data flow between SAP and KNAPP’s service bus.",
    "Oversaw the development of an event-driven system, handling data sourcing and routing between upstream and downstream services.",
    "Collaborated within a hybrid agile-waterfall model, adapting to project needs in a scrum-based environment.",
    "Applied Test-Driven Development (TDD) methodologies to maintain code quality and reliability throughout development cycles.",
    "Implemented Behavior-Driven Development (BDD) to ensure story acceptance criteria were met through rigorous behavior specifications.",
    "Built and maintained microservices within a C#, .NET 8, and MongoDB tech stack to ensure scalable and maintainable software architecture.",
    "Worked closely with cross-functional teams, including engineering, QA, and project management, to align project milestones and deliverables.",
    "Actively participated in retrospectives and contributed to process improvements to optimize development workflows."
  ],
  achievements:[
    "Successfully integrated WooliesX system with KNAPP automation, streamlining data flow and improving fulfillment efficiency.",
    "Led the implementation of an event-driven architecture, enhancing system responsiveness and data accuracy across platforms.",
    "Reduced development cycle time by 20% through effective use of TDD and BDD in the story acceptance process.",
    "Developed scalable microservices architecture using C#, .NET 8, and MongoDB, supporting high-demand, automated operations in the fulfillment center."
  ]
},
{
  fromDate: '2018-10-01',
  toDate: '2021-08-22',
  role:'Senior Software Engineer',
  company: 'Ladbrokes Coral Group',
  summary:
    'At WooliesX, I joined the team to work on the Auburn automated Customer Fulfillment Centre (CFC) project, focusing on integrating WooliesX systems with KNAPP\'s automation platform. My role involves managing an event-driven architecture that sources upstream data from SAP and directs it downstream to KNAPP\'s service bus. Operating within a hybrid agile-waterfall development lifecycle and scrum environment.',
  responsibilities: [
    "Led the integration of WooliesX systems with the KNAPP automation system, ensuring seamless data flow between SAP and KNAPP’s service bus.",
    "Oversaw the development of an event-driven system, handling data sourcing and routing between upstream and downstream services.",
    "Collaborated within a hybrid agile-waterfall model, adapting to project needs in a scrum-based environment.",
    "Applied Test-Driven Development (TDD) methodologies to maintain code quality and reliability throughout development cycles.",
    "Implemented Behavior-Driven Development (BDD) to ensure story acceptance criteria were met through rigorous behavior specifications.",
    "Built and maintained microservices within a C#, .NET 8, and MongoDB tech stack to ensure scalable and maintainable software architecture.",
    "Worked closely with cross-functional teams, including engineering, QA, and project management, to align project milestones and deliverables.",
    "Actively participated in retrospectives and contributed to process improvements to optimize development workflows."
  ],
  achievements:[
    "Successfully integrated WooliesX system with KNAPP automation, streamlining data flow and improving fulfillment efficiency.",
    "Led the implementation of an event-driven architecture, enhancing system responsiveness and data accuracy across platforms.",
    "Reduced development cycle time by 20% through effective use of TDD and BDD in the story acceptance process.",
    "Developed scalable microservices architecture using C#, .NET 8, and MongoDB, supporting high-demand, automated operations in the fulfillment center."
  ]
}] as Experience[];


export default function ExperienceComponent() {
  return (
    <div className="bg-white py-24 sm:py-32" id="Experiences">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Experiences</h2>
              <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
                Experienced in developing and deploying software solutions, leveraging a wide range of IT skills including programming, system design, and cloud infrastructure to deliver efficient, scalable, and secure applications.
              </p>
          </div>

          {products.map((res, index) => 
            <div key={index}>
              <ExperienceCard {...products[index]} />
              {index<products.length-1 && <div className="mt-6 mb-6 w-80 max-w-5xl h-px m-auto bg-gradient-to-r from-[#1d4ed8] to-[red]"></div>}
            </div>
          )}

      </div>
    </div>
  )
}
