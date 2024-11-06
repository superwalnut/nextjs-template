'use client'

import { Resume } from "./interfaces/resume";
import AwardCard from "./partials/award-card";

export default function AwardComponent(resume:Resume) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0 text-center">
                <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Awards</h2>
            </div>
  
            <div className="flex flex-wrap justify-center mt-10">
              {resume.awards.map((item, index) => 
                <div key={"award"+index}>
                  <AwardCard {...item} />
                </div>
              )}
            </div>
        </div>
      </div>
    )
  }
  