
import * as React from "react"
import {cn} from "@/lib/utils"
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileCard = ({profileImg, name, bio,fb,x,linkedin,insta,mail, className}: any) => {
  return (
    <div className={cn('bg-orange-500 h-auto lg:h-auto w-full lg:w-[334px] rounded-3xl p-10 flex-col flex ', className)}>
    <Image src={profileImg} className='shadow-md shadow-orange-500 h-[36vh] object-cover w-full rounded-lg' alt={'image '}>
  </Image>

    <div className='mt-4 flex-flex-col w-full h-full  justify-center items-center text-center px-5'>
      {/* name not more then 10 letter */}
      <h1 className='text-[36px] font-bold '>{name}</h1> 
      <h2 className='text-[18px] text-gray-700 mt-6'>
            {bio}
      </h2>

      <div className='flex gap-2 mt-6 justify-center'>{fb ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={fb}><Facebook /></a> : ""}
            {x ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={x}><Twitter /></a> : ""}
            {linkedin ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={linkedin}><Linkedin /></a> : ""}
            {insta ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={insta}><Instagram /></a> : ""}
            {mail ? 
            <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href={`mailto:${mail}`}> <Mail /></a> : ""}
      
      </div>

  </div>
</div>
  )
}

export default ProfileCard
