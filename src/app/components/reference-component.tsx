'use client'
import ReferenceCard from "./partials/reference-card"
import { Resume } from "./interfaces/resume";

export default function ReferenceComponent(resume:Resume) {
    return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">References</h2>
          </div>

          <div className="flex flex-wrap justify-center mt-10">
              {resume.references.map((person, index) => (
                <ReferenceCard key={"ref" + index} {...person} />
              ))}
          </div>
      </div>
    </div>
    )
  }
  