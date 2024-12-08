import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({jobTitle, jobDescription, experience, projects}: any) => {



    
  return (
    <div className="px-5 mt-10 lg:mt-0">
              <h1 className="text-6xl flex flex-col lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">{jobTitle}</h1>

              <p className="mt-10 text-gray-400 text-base lg:text-xl max-w-lg">{jobDescription}</p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-16">
               {experience ? <div>
                  <p className="flex flex-col gap-3 w-32"><span className="text-6xl font-extrabold">+{experience}</span> <span className="uppercase text-gray-400">years of experience</span> </p>
                </div> : ""}
                {projects ? <div>
                  <p className="flex flex-col gap-3 w-32"><span className="text-6xl font-extrabold">+{projects}</span> <span className="uppercase text-gray-400">PROJECTS

                    COMPLETED</span> </p>
                </div> : "" }
                
               


              </div>
            </div>
  )
}

export default Hero
