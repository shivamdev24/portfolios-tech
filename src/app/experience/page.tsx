import ProfileCard from "@/components/ProfileCard";
import {
    BriefcaseBusiness, FileUser, Folder,  House, LogIn, PencilLine, Wrench
} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="max-w-5xl  border-black h-full mx-auto ">
            {/* navbar  */}
            {/* <section className="py-10 ">
        <div className="flex justify-between gap-3 p-2 bg-gray-900 max-w-sm mx-auto rounded-lg">
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/'}><House /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/experience'}><BriefcaseBusiness /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/tools'}><Wrench /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/project'}><Folder /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/blog'}><PencilLine /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/resume'}><FileUser /></Link>
          <Link className="hover:bg-black p-2 rounded duration-500 hover:text-orange-500" href={'/login'}><LogIn /></Link>
        </div>
      </section> */}
            <section className="py-10">
                <div className="flex justify-between gap-3 p-2 bg-gray-900 max-w-sm mx-auto rounded-lg">
                    {/* Home Link */}
                    <Link
                        href="/"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <House />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Home
                        </span>
                    </Link>

                    {/* Experience Link */}
                    <Link
                        href="experience"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <BriefcaseBusiness />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Experience
                        </span>
                    </Link>

                    {/* Tools Link */}
                    <Link
                        href="tools"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <Wrench />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Tools
                        </span>
                    </Link>

                    {/* Project Link */}
                    <Link
                        href="project"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <Folder />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Project
                        </span>
                    </Link>

                    {/* Blog Link */}
                    <Link
                        href="blog"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <PencilLine />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Blog
                        </span>
                    </Link>

                    {/* Resume Link */}
                    <Link
                        href="resume"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <FileUser />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Build Your Own Resume
                        </span>
                    </Link>

                    {/* Login Link */}
                    <Link
                        href="login"
                        className="relative group hover:bg-black p-2 rounded duration-500 hover:text-orange-500"
                    >
                        <LogIn />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                            Login
                        </span>
                    </Link>
                </div>
            </section>

            {/* <section className="relative flex h-screen border border-white overflow-hidden">
  <div className="sticky bottom-20 ">
          <ProfileCard />
  </div>
  <div>
      <div>
        
        </div>   
  </div>
</section> */}
            <section className="relative flex h-full">
                {/* Sticky ProfileCard */}
                <div className="relative hidden lg:block flex-shrink-0 pt-10">
                    <div className="sticky top-10">
                        <ProfileCard />
                    </div>
                </div>
                {/* Content Section */}
                <div className="flex-1  p-4 space-y-4 lg:pt-10">
                    <div>
                        {/* hero section  */}
                        <div className="relative  lg:hidden">
                            <div className="sticky top-10">
                                <ProfileCard />
                            </div>
                        </div>
                        


                        {/* section-3  */}
                        <div className="px-5 mt-20">
                            <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center"><span>Working</span> <span className="text-gray-600">Eperience</span></h1>


                            <div className="mt-10 flex flex-col gap-4">
                                <div className="flex justify-between p-5 hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                                    <div className="flex items-center gap-3">

                                        <div className="flex flex-col gap-4"> <h1 className="text-4xl font-bold">Company name</h1>
                                            <p className="text-base text-gray-400">Description about yor\ur role in company and experience.</p>
                                            <p className="text-base text-gray-400">jan 2020 - present</p>
                                        </div>
                                    </div>
                                    <div className="p-4 transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2">
                                        i
                                    </div>
                                </div>




                            </div>

                            <div className="mt-10 flex flex-col gap-4">
                                <div className="flex justify-between p-5 hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                                    <div className="flex items-center gap-3">

                                        <div className="flex flex-col gap-4"> <h1 className="text-4xl font-bold">Company name</h1>
                                            <p className="text-base text-gray-400">Description about yor\ur role in company and experience.</p>
                                            <p className="text-base text-gray-400">jan 2020 - present</p>
                                        </div>
                                    </div>
                                    <div className="p-4 transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2">
                                        i
                                    </div>
                                </div>




                            </div>



                            <div className="mt-10 flex flex-col gap-4">
                                <div className="flex justify-between p-5 hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                                    <div className="flex items-center gap-3">

                                        <div className="flex flex-col gap-4"> <h1 className="text-4xl font-bold">Company name</h1>
                                            <p className="text-base text-gray-400">Description about yor\ur role in company and experience.</p>
                                            <p className="text-base text-gray-400">jan 2020 - present</p>
                                        </div>
                                    </div>
                                    <div className="p-4 transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2">
                                        i
                                    </div>
                                </div>




                            </div>

                        </div>


                       



                    </div>


                </div>


            </section>

            <section className="text-center w-full h-72 flex items-center justify-center text-white">
                <p>All copyright &copy; are reserved. developed by <a className="text-orange-500" href="">your name</a></p>
            </section>

        </div>
    );
}
