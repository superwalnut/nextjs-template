'use client'
import { ResumeEducation } from "../interfaces/resume"
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const EducationCard = (education: ResumeEducation) => {
    return (
        <div className="card w-full lg:max-w-full ">
            <div className="w-full lg:max-w-full lg:flex rounded-xl shadow-lg">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
                    style={{ backgroundImage: "url('/static/book-computer.jpg')" }} 
                    title="Educations">
                </div>
                <div className="w-full border border-t-1 border-l-0 border-r-1 border-b-0 border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal">
                    <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center mb-6">
                        <CalendarDaysIcon className="w-6 h-6 inline-block align-text-bottom mr-2" />
                        <span className="text-gray-600">{education.startYear} to {education.endYear}</span>
                        </p>
                    <div className="text-gray-900 font-bold text-xl mb-4">{education.issuingOrganization}</div>
                        <p className="text-gray-700 text-base min-h-16">{education.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EducationCard;