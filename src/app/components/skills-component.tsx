'use client'
import { Resume } from './interfaces/resume';
import { StarIcon } from '@heroicons/react/24/solid'

export default function SkillsComponent(resume:Resume) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0 text-center">
                <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">My Skills</h2>
                <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
                I have a solid foundation in programming languages, web development, database management, and software design. My expertise includes front-end and back-end development, cloud services, DevOps practices, and proficiency in technologies like JavaScript, Python, React, Node.js, and Docker.                 
                </p>
            </div>
            <div className="mt-10 text-center">
            {resume.skills.map((item, index) => (
                <span key={"skill" + index} className="text-lg inline-flex items-center rounded-md bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-5 mb-5">
                  <StarIcon aria-hidden="true" className="text-yellow-400 h-4 w-4 inline-block mr-2 font-bold align-text-bottom" />
                  {item}
                </span>
            ))}
            </div>            
        </div>
      </div>
    )
  }
  