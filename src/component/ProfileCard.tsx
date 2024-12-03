import Image from 'next/image'
import React from 'react'
import ImagePerson from "@/assets/testperson.jpg"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'



const ProfileCard = () => {
  return (
    <div className='bg-orange-500 h-auto lg:h-auto w-full lg:w-[334px] rounded-3xl p-10 flex-col flex '>
          <Image src={ImagePerson} className='shadow-md shadow-orange-500 h-[36vh] object-cover w-full rounded-lg' alt={'image '}>
        </Image>

          <div className='mt-4 flex-flex-col w-full h-full  justify-center items-center text-center px-5'>
            {/* name not more then 10 letter */}
            <h1 className='text-[36px] font-bold '>Shivam</h1> 
            <h2 className='text-[18px] text-gray-700 mt-6'>
                  A Software Engineer who has developed countless innovative solutions.
            </h2>

            <div className='flex gap-2 mt-6 justify-center'>
                  <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href=""><Facebook /></a>
                  <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href=""><Twitter /></a>
                  <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href=""><Linkedin /></a>
                  <a className='bg-orange-500  w-8 h-8 text-center p-1 text-white rounded-lg hover:bg-orange-700 duration-500' href=""><Instagram /></a>
            </div>

        </div>
    </div>
  )
}

export default ProfileCard