'use client'
import { ResumeAward } from "../interfaces/resume"
import { BuildingLibraryIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const AwardCard = (award: ResumeAward) => {
    return (
        <div className="p-4 max-w-md w-64">
        <div className="flex rounded-lg h-full bg-sky-100 p-6 flex-col shadow-lg">
            <div className="text-right mb-3">
                <CalendarDaysIcon className="w-6 h-6 inline-block align-text-bottom mr-2" />
                <span className="text-gray-600">{award.year}</span>
            </div>
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <BuildingLibraryIcon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-medium">{award.title}</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <div className="mt-3">
                    <span className="text-gray-600"> {award.description}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AwardCard;