import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Skills = ({skills}: any )=> {
  return (
    <div className="mt-10 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="hover:shadow-lg hover:shadow-orange-500 flex gap-3 items-center p-4 duration-500 rounded-lg">
                    
                    <div>
                      <h3 className="text-3xl font-bold">{skills}</h3>
                    </div>
                  </div>
                


                </div>

              </div>
  )
}

export default Skills
