import Image from "next/image";

import Hero from "@/assets/pt.png"

import React from 'react'
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { LifeBuoy, Shapes, SlidersHorizontal, SquareChartGantt } from "lucide-react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";


const page = () => {
  return (
   <>
   <Navbar/>
      <div className="px-5 overflow-hidden">

        {/* herosection */}
        <section className="max-w-7xl  h-[100vh] mx-auto  relative">
          <Image src={Hero} width={1000} height={1000} className='shadow-md h-[75vh] hidden lg:block absolute  w-[60vw] top-40 -right-[38rem] rounded-lg' alt={'image '}>
          </Image>
          <div className=" w-full h-full lg:h-[100vh] flex justify-start items-center">
            <div className="px-5 mt-5 lg:mt-0 flex flex-col  ">
              {/* <p className="mb-5 text-teal-300 text-xs lg:text-sm text-center rounded-full border-teal-300 p-1 border w-56 max-w-lg">Welcome to Portfolio Tech</p> */}

              <h1 className="text-5xl flex flex-col lg:text-[6rem] lg:leading-[120px] font-extrabold text-black text-start"><span>Build Your</span> <span className="text-[#247bb4]"> Portfolio</span></h1>

              <p className="mt-10 text-gray-400 text-start text-base lg:text-xl max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque itaque excepturi suscipit iure quidem est qui exercitationem cumque adipisci!</p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-16 ">
                <Link className=" text-center py-2 max-w-72 px-4 rounded-lg text-lg bg-[#247bb4] text-white duration-500 font-semibold" href="">Get Started</Link>


              </div>
            </div>

          </div>

        </section>
        {/* section 2 */}

        <section id='feature' className="h-[40vh] flex items-center mt-10">
          <div className="text-black grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto gap-6">
            <div className="hover:shadow-md shadow h-auto duration-500 rounded-lg bg-white p-3 flex flex-col gap-2 justify-center  hover:shadow-[#247bb4]">
              <p><SlidersHorizontal className="bg-[#247bb4] text-white p-1 rounded w-8 h-8" />  </p>
              <h2>Customizable Portfolios</h2>
              <p>Create professional, personalized portfolios with projects, and social links to highlight your skills and achievements.</p>
            </div>
            <div className="hover:shadow-md shadow h-auto duration-500 rounded-lg bg-white p-3 flex flex-col gap-2 justify-center  hover:shadow-[#247bb4]">
              <p><Shapes className="bg-[#247bb4] text-white p-1 rounded w-8 h-8" /></p>
              <h2>Interactive Features</h2>
              <p>Users can showcase their work, skills, and experiences through dynamic project displays and integrated social links.</p>
            </div>
            <div className="hover:shadow-md shadow h-auto duration-500 rounded-lg bg-white p-3 flex flex-col gap-2 justify-center  hover:shadow-[#247bb4]">
              <p><LifeBuoy className="bg-[#247bb4] text-white p-1 rounded w-8 h-8" /></p>
              <h2>Accessible & Themable</h2>
              <p>Fully customizable components to match your unique style, ensuring inclusivity for all users.</p>
            </div>
            <div className="hover:shadow-md shadow h-auto duration-500 rounded-lg bg-white p-3 flex flex-col gap-2 justify-center  hover:shadow-[#247bb4]">
              <p ><SquareChartGantt className="bg-[#247bb4] text-white p-1 rounded w-8 h-8" /></p>
              <h2>Effortless Productivity</h2>
              <p>Built to reduce boilerplate with fully typed components, enabling users to create and manage portfolios quickly and efficiently.</p>
            </div>
          </div>
        </section>

        {/* section3 */}

        <section className="mt-10">
          <div className="max-w-7xl mx-auto text-white grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 rounded-md bg-[#265070] p-4">
              <h2 className="text-2xl font-bold mb-6">Core Components</h2>
              <p>PortfolioTech offers essential tools to easily build professional portfolios, including user authentication, customizable forms, and interactive data tables. It simplifies the process, letting you focus on showcasing your work.</p>
            </div>
            <div className="lg:col-span-4 rounded-md bg-[#265070] p-4">
              <h1 className="text-2xl font-bold mb-6">Solid Foundations</h1>
              <p>We believe in using the best existing tools, so you don’t have to reinvent the wheel. PortfolioTech is built on top of proven, reliable technologies to ensure a smooth and efficient portfolio-building experience.</p>
            </div>
            <div className="lg:col-span-4 rounded-md bg-[#265070] p-4">
              <h2 className="text-2xl font-bold mb-1">Your Name</h2>
              <h3 className="mb-5">Founder</h3>
              <p>
                <q>
                  PortfolioTech helped us set up a sleek and modern portfolio quickly. It saved us countless hours of development and allowed us to focus on what truly matters—our unique business needs.
                </q>
              </p>
            </div>
            <div className="lg:col-span-8 rounded-md bg-[#265070] p-4">
              <h2 className="text-2xl font-bold mb-6">Build Your Perfect Portfolio with Ease</h2>
              <p>Create a standout portfolio in no time, tailored to your unique needs. With customizable templates and powerful features, you can effortlessly showcase your work, skills, and achievements. Whether you&apos;re a developer, designer, or creative professional, PortfolioTech gives you the tools to present your best self to the world.</p>
              <div>
                <ul className="flex flex-wrap gap-4 mt-6">
                  <li className=" px-4 py-1 text-xs bg-teal-700 text-white  rounded-full">Intuitive design and customizable templates</li>
                  <li className=" px-4 py-1 text-xs bg-teal-700 text-white  rounded-full">Showcase projects, skills, and experiences</li>
                  <li className=" px-4 py-1 text-xs bg-teal-700 text-white  rounded-full">Seamless integration with social and professional networks</li>
                  <li className=" px-4 py-1 text-xs bg-teal-700 text-white  rounded-full">Easy to manage and update as your career evolves</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* section4 */}
        <section className="mt-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center ">
            <h1 className=" text-center text-5xl font-bold mt-20">Our Blog</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6   h-full py-20">
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              <Card className="lg:col-span-4 h-fit ">
                <CardContent className="flex flex-col gap-2 items-start justify-start p-6">
                  <CardTitle>Blog name</CardTitle>
                  <CardDescription>Date - 02/11/24</CardDescription>
                  <CardContent className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia debitis obcaecati voluptatibus rerum pariatur voluptatum vero necessitatibus ea fugit! Mollitia quod autem velit. Voluptate eius vitae modi accusantium porro.</CardContent>
                  <Link href="/" className="underline">Read More</Link>

                </CardContent>
              </Card>
              




            </div>
          </div>

        </section>

       
        {/* section5 */}
        <section className="mt-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center ">
            <h1 className=" text-center text-5xl font-bold mt-20">People Say About Us</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6   h-full py-20">
              <Card className="lg:col-span-3 h-fit ">
                <CardContent className="flex flex-col items-start justify-start p-6">
                  <CardTitle>Name</CardTitle>
                  <CardDescription>Prifile</CardDescription>
                  <p className="pt-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor!
                  </p>
                </CardContent>
              </Card>
              <Card className="lg:col-span-6 h-fit ">
                <CardContent className="flex flex-col items-start justify-start p-6">
                  <CardTitle>Name</CardTitle>
                  <CardDescription>Prifile</CardDescription>
                  <p className="pt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis esse totam officiis doloremque consequatur quas debitis quos porro odit.
                  </p>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3 h-fit ">
                <CardContent className="flex flex-col items-start justify-start p-6">
                  <CardTitle>Name</CardTitle>
                  <CardDescription>Prifile</CardDescription>
                  <p className="pt-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor!
                  </p>
                </CardContent>
              </Card>



            </div>
          </div>

        </section>





        {/* section6 */}


        <section id='faq' className="h-full mt-10">
          <div className="max-w-5xl mx-auto flex flex-col justify-center gap-10  py-20">
            <h1 className="text-center text-5xl font-bold underline">FAQ</h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>portfolio</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus rerum facere odit laudantium reprehenderit iste, repellendus excepturi amet aliquid, expedita sunt porro tempore ea. Quae et minus distinctio voluptate saepe!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>lorem</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem, sint fuga neque veritatis tenetur veniam reiciendis nobis tempore voluptate. Tempora, perspiciatis? Illum laborum magni architecto necessitatibus consequatur velit. Veniam?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

<Footer/>
      </div>
   </>
  )
}

export default page
