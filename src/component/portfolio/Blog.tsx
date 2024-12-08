import { ArrowUpRight } from 'lucide-react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blog = ({title,description,url}: any) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
    <div className="flex justify-between p-5 hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
      <div className="flex items-center gap-3">
         <div className="flex flex-col gap-4 max-w-md"> <h1 className="text-4xl font-bold"> {title} </h1>
          <p className="text-base text-gray-400 ">{description}</p>
          <a href={url} className="text-base text-gray-400">Read</a>
        </div>
      </div>
      <div className="p-4 transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2">
      <ArrowUpRight />
      </div>
    </div>




  </div>

  )
}

export default Blog
