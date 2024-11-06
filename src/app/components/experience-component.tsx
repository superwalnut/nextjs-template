'use client'
import { Resume } from "./interfaces/resume";
import ExperienceCard from "./partials/experience-card"

export default function ExperienceComponent(resume: Resume) {
  return (
    <div className="bg-white py-24 sm:py-32" id="Experiences">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Experiences</h2>
              <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
                Experienced in developing and deploying software solutions, leveraging a wide range of IT skills including programming, system design, and cloud infrastructure to deliver efficient, scalable, and secure applications.
              </p>
          </div>

          {resume.experiences.map((item, index) => 
            <div key={"exp"+index}>
              <ExperienceCard {...item} />
              {index<resume.experiences.length-1 && <div className="mt-6 mb-6 w-80 max-w-5xl h-px m-auto bg-gradient-to-r from-[#1d4ed8] to-[red]"></div>}
            </div>
          )}

      </div>
    </div>
  )
}
