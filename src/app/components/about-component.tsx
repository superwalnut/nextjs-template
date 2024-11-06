'use client'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Resume } from './interfaces/resume'
import Link from 'next/link'
  
  export default function AboutComponent(resume:Resume) {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="AboutMe">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Me</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              {resume.summary}
            </p>
          </div>
          
          <div className="mx-auto mt-10 max-w-7xl lg:mx-0 lg:max-w-none text-center mt-10 pt-10">
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-4 px-10 inline-flex items-center text-3xl rounded-full" href={{
                pathname: resume.resumeFileUrl,
              }} target='_blank'>
                Download CV
                <ArrowDownTrayIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  