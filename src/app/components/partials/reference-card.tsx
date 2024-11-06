'use client'
import { UserCircleIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ResumeReference } from "../interfaces/resume";

const ReferenceCard = (person: ResumeReference) => {
    return (
        <div className="mx-8 my-4 bg-neutral-100 p-8 rounded-lg max-w-lg w-80">
            <div className="flex items-center gap-x-6">
                <UserCircleIcon className="w-16 h-16 inline-block align-text-bottom font-light" />
                <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.fullName}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.position}</p>
                </div>
            </div>
            <div className="flex items-center gap-x-6 mt-4">
                <div>
                    <p className="text-sm font-semibold leading-6 text-gray-600">
                        <EnvelopeIcon className="w-4 h-4 inline-block align-text-bottom font-light mr-2" />
                        {person.email}</p>
                    <p className="text-sm font-semibold leading-6 text-gray-600">
                        <PhoneIcon className="w-4 h-4 inline-block align-text-bottom font-light mr-2" />
                        {person.phoneNumber}</p>
                </div>
            </div>
        </div>
    )
}


export default ReferenceCard;