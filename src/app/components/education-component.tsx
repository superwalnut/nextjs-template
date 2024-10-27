'use client'

import { Education } from "./interfaces/education";
import EducationCard from "./partials/education-card"

const products = [{
  fromDate: '2003',
  toDate: '2006',
  title: 'Bachelor of Information Technology',
  major:'System Development & Network Technology',
  school: 'Monash University',
}] as Education[];


export default function EducationComponent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">Educations</h2>
          </div>

          <div className="flex flex-wrap justify-center mt-10">
            {products.map((res, index) => 
              <div key={index}>
                <EducationCard {...products[index]} />
              </div>
            )}
          </div>
      </div>
    </div>
  )
}
