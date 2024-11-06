'use client'

import { Resume } from "./interfaces/resume";
import EducationCard from "./partials/education-card"

export default function EducationComponent(resume:Resume) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Educations</h2>
          </div>

          <div className="flex flex-wrap justify-center mt-10">
            {resume.educations.map((item, index) => 
              <div key={"edu"+index}>
                <EducationCard {...item} />
              </div>
            )}
          </div>
      </div>
    </div>
  )
}
