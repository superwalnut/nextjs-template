import { Reference } from "../interfaces/reference"
import { UserCircleIcon } from "@heroicons/react/24/outline";

const ReferenceCard = (person: Reference) => {
    return (
        <div className="mr-16 bg-neutral-100 p-8 rounded-lg">
            <div className="flex items-center gap-x-6">
            <UserCircleIcon className="w-16 h-16 inline-block align-text-bottom font-light" />
            <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.firstName} {person.lastName}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
            </div>
            </div>
        </div>
    )
}


export default ReferenceCard;