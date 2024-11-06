'use client'
import { AtSymbolIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
//import { SparklesIcon, BookmarkIcon } from "@heroicons/react/24/solid"
import React from 'react';
import { ResumeExperience } from "../interfaces/resume";
import { format } from 'date-fns';

const ExperienceCard = (exp: ResumeExperience) => {
    return (
        <div className="mx-auto px-4 pb-10 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-10 lg:pt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {exp.title} <span className="text-gray-600">
              <AtSymbolIcon className="w-6 h-6 inline-block mr-2" />
              {exp.company}</span>
          </h2>
          <h3 className="text-2xl font-normal tracking-tight text-blue-700 sm:text-2xl mt-3">
            <CalendarDaysIcon className="w-6 h-6 inline-block align-text-bottom mr-2" />
            {
              exp.startDate != null && exp.endDate != null &&
              <span>{format(exp.startDate!, 'MM/yyyy')} to {format(exp.endDate!, 'MM/yyyy')}</span>
            }
          </h3>

          { exp.description && 
            <div className="mt-6 space-y-6">
                <p className="text-base text-gray-900">{exp.description}</p>
            </div>
          }
          
          {/* {
            product.responsibilities && product.responsibilities.length > 0 && 
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900">
                <SparklesIcon className="w-5 h-5 inline-block align-text-bottom text-yellow-400 mr-2" />
                Key Responsibilities
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                  {product.responsibilities.map((highlight) => (
                    <li key={highlight} className="text-gray-600">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
          
          {
            product.achievements && product.achievements.length > 0 && 
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900">
                <BookmarkIcon className="w-5 h-5 inline-block align-text-bottom text-yellow-400 mr-2" />
                Achievements
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                  {product.achievements.map((highlight) => (
                    <li key={highlight} className="text-gray-600">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        } */}
          
        </div>
    )
}  

export default ExperienceCard;