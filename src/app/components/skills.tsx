const skills = [
  { "id": 1, "name": "JavaScript" },
  { "id": 2, "name": "Python" },
  { "id": 3, "name": "Java" },
  { "id": 4, "name": "SQL" },
  { "id": 5, "name": "HTML" },
  { "id": 6, "name": "CSS" },
  { "id": 7, "name": "React" },
  { "id": 8, "name": "Node.js" },
  { "id": 9, "name": "Angular" },
  { "id": 10, "name": "C#" },
  { "id": 11, "name": "PHP" },
  { "id": 12, "name": "Ruby" },
  { "id": 13, "name": "TypeScript" },
  { "id": 14, "name": "Swift" },
  { "id": 15, "name": "Kotlin" },
  { "id": 16, "name": "AWS" },
  { "id": 17, "name": "Docker" },
  { "id": 18, "name": "Git" },
  { "id": 19, "name": "Linux" },
  { "id": 20, "name": "Machine Learning" }
]
  
  export default function Skills() {
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
            {skills.map((item) => (
                <span key={item.id} className="text-xl inline-flex items-center rounded-md bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-5 mb-5">
                  {item.name}
                </span>
            ))}
            </div>            
        </div>
      </div>
    )
  }
  