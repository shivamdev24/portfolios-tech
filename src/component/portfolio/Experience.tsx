import { ArrowUpRight } from 'lucide-react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Project = ({companyName, position, startDate,endDate, description}: any ) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
                <div className="flex lg:justify-between p-5 border lg:border-none  hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                  <div className="flex w-full flex-col lg:flex-row items-center gap-3">
                   
                    <div className="flex w-full justify-between mt-4"> 
                      <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">{companyName}</h1>
                        <p className="text-lg text-gray-400">{position}</p>
                       <div className="flex gap-2">
                       <p className="text-base text-gray-400">{startDate}</p>
                       <p className="text-base text-gray-400">{endDate}</p>
                       </div>
                        <p className="text-base text-gray-400">{description}</p>
                        
                      </div>
                      <div className="p-4 transform duration-300 group-hover:translate-x-3 lg:hidden lg:mt-0 group-hover:-translate-y-2">
                      <ArrowUpRight />
                      </div>
                      </div>
                   
                  </div>
                  <div className="p-4 hidden lg:block transform duration-300 group-hover:translate-x-3 mt-40 lg:mt-0 group-hover:-translate-y-2">
                  <ArrowUpRight />
                  </div>
                </div>

                             </div>
  )
}

export default Project
