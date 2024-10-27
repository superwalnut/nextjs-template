import ReferenceCard from "./partials/reference-card"
import { Reference } from "./interfaces/reference";

const people = [
    {
      firstName: 'Leslie',
      lastName: 'McMillan',
      role: 'Co-Founder / CEO',
      phone: '555-555-5555',
    },
    {
      firstName: 'Sam',
      lastName: 'Altman',
      role: 'Co-Founder / CEO',
      phone: '555-555-4444',
    },
  ] as Reference[];
  
  export default function ReferenceComponent() {
    return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">References</h2>
          </div>

          <div className="flex flex-wrap justify-center mt-10">
              {people.map((person) => (
                <ReferenceCard key={person.firstName + person.lastName} {...person} />
              ))}
          </div>
      </div>
    </div>
    )
  }
  