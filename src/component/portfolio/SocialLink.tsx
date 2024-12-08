import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialLink = ({x, linkedin,fb,insta,mail}: any) => {
  return (
    <div className="text-lg lg:text-2xl text-gray-400 w-full ">
                        <ul className="flex  w-full gap-4">
                       {fb ? <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={fb}><Facebook /></a> : ""}
            {x ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={x}><Twitter /></a> : ""}
            {linkedin ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={linkedin}><Linkedin /></a> : ""}
            {insta ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={insta}><Instagram /></a> : ""}
      
            {mail ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={`mailto:${mail}`}> <Mail /></a> : ""}
      
                         

                        </ul> </div>
  )
}

export default SocialLink
