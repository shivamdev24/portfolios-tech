// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// interface Project {
//   title: string;
//   description: string | string[];
//   technologies: string[];
//   liveUrl?: string;
//   repoUrl?: string;
//   _id: string;
// }

// interface Portfolio {
//   _id: string;
//   userId: string;
//   projects: Project[]; // Array of Project objects
//   title: string;
//   bio: string;
//   contact: {
//     email: string;
//     phone?: string;
//     address?: string;
//   };
//   skills: string[];
// }

// const PortfolioPage: React.FC = () => {
//   const { username } = useParams();
//   const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!username) return; // If no username, skip the API call

//     const fetchPortfolio = async () => {
//       try {
//         const response = await fetch(`/api/portfolio?username=${username}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch portfolio");
//         }
//         const data = await response.json();
//         if (data.success) {
//           setPortfolio(data.data); // Assuming API returns { success: true, data: portfolio }
//         } else {
//           setError(data.message || "An error occurred");
//         }
//       } catch (err) {
//         setError("An error occurred");
//         console.error(err); // Log the error for debugging
//       }
//     };

//     fetchPortfolio();
//   }, [username]);

//   if (!portfolio && !error) {
//     return <div>Loading...</div>; // Show loading state while fetching data
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show error if fetching fails
//   }

//   if (!portfolio) {
//     return <div>No portfolio found for user: {username}</div>; // Portfolio not found
//   }

//   return (
//     <div>
//       <h1>Portfolio of {username}</h1>
//       <p>{portfolio.bio}</p>
//       <h2>Contact Information:</h2>
//       <p>Email: {portfolio.contact.email}</p>
//       <p>Phone: {portfolio.contact.phone || "Not provided"}</p>
//       <h2>Skills:</h2>
//       <ul>
//         {portfolio.skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>

//       <h2>Projects:</h2>
//       <ul>
//         {portfolio.projects.map((project) => (
//           <li key={project._id}>
//             <h3>{project.title}</h3>
//             <p>{Array.isArray(project.description) ? project.description.join(", ") : project.description}</p>
//             <p>Technologies: {project.technologies.join(", ")}</p>
//             {project.liveUrl && (
//               <p>
//                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   Live Project
//                 </a>
//               </p>
//             )}
//             {project.repoUrl && (
//               <p>
//                 <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
//                   GitHub Repo
//                 </a>
//               </p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PortfolioPage;
                                      


import Image from "next/image"
import {
  BriefcaseBusiness, FileUser, Folder, FolderGit2, House, LogIn, PencilLine, Wrench, Mail, Twitter,
Linkedin,
Facebook,
Instagram } from "lucide-react";
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

     
      <section className="relative flex h-full">
        {/* Sticky ProfileCard */}
        <div className="relative hidden lg:block flex-shrink-0 pt-10">
          <div className="sticky top-10">
          <div className='bg-orange-500 h-auto lg:h-auto w-full lg:w-[334px] rounded-3xl p-10 flex-col flex '>
          <Image src={""} className='shadow-md shadow-orange-500 h-[36vh] object-cover w-full rounded-lg' alt={'image '}>
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
          </div>
        </div>
        {/* Content Section */}
        <div className="flex-1  p-4 space-y-4 lg:pt-10">
          <div>
            {/* hero section  */}
            <div className="relative  lg:hidden">
              <div className="sticky top-10">
                 <div className='bg-orange-500 h-auto lg:h-auto w-full lg:w-[334px] rounded-3xl p-10 flex-col flex '>
                  <Image src={""} className='shadow-md shadow-orange-500 h-[36vh] object-cover w-full rounded-lg' alt={'image '}>
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
              </div>
            </div>
            {/* section-1  */}
            <div className="px-5 mt-10 lg:mt-0">
              <h1 className="text-6xl flex flex-col lg:text-[8rem] lg:leading-[120px] font-extrabold text-center"><span>Softwar</span> <span className="text-gray-600">Engineer</span></h1>

              <p className="mt-10 text-gray-400 text-base lg:text-xl max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque itaque excepturi suscipit iure quidem est qui exercitationem cumque adipisci!</p>

              {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-16">
                <div>
                  <p className="flex flex-col gap-3 w-32"><span className="text-6xl font-extrabold">+12</span> <span className="uppercase text-gray-400">years of experience</span> </p>
                </div>
                <div>
                  <p className="flex flex-col gap-3 w-32"><span className="text-6xl font-extrabold">+49</span> <span className="uppercase text-gray-400">PROJECTS

                    COMPLETED</span> </p>
                </div>
                <div>
                  <p className="flex flex-col gap-3 w-32"><span className="text-6xl font-extrabold">+20</span> <span className="uppercase text-gray-400">WORLDWIDE

                    CLIENTS

                  </span> </p>
                </div>


              </div> */}
            </div>


            {/* section-2  */}
            <div className="px-5 mt-20">
              <h1 className="text-6xl flex flex-col lg:text-[8rem] lg:leading-[120px] font-extrabold text-center"><span>Recent</span> <span className="text-gray-600">Projects</span></h1>


              <div className="mt-10 flex flex-col gap-4">
                <div className="flex lg:justify-between p-5 border lg:border-none  hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                  <div className="flex w-full flex-col lg:flex-row items-center gap-3">
                    <div className="h-64 aspect-square md:h-32 w-full md:w-32 bg-orange-500 rounded group-hover:-rotate-12 duration-500 flex justify-center items-center">
                      <FolderGit2 className="w-20 h-20" />
                    </div>
                    <div className="flex w-full justify-between mt-4"> 
                      <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Project name</h1>
                        <p className="text-base text-gray-400">Description about project.</p>
                      </div>
                      <div className="p-4 transform duration-300 group-hover:translate-x-3 lg:hidden lg:mt-0 group-hover:-translate-y-2">
                        i
                      </div>
                      </div>
                   
                  </div>
                  <div className="p-4 hidden lg:block transform duration-300 group-hover:translate-x-3 mt-40 lg:mt-0 group-hover:-translate-y-2">
                    i
                  </div>
                </div>

                <div className="flex lg:justify-between p-5 border lg:border-none  hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                  <div className="flex w-full flex-col lg:flex-row items-center gap-3">
                    <div className="h-64 aspect-square md:h-32 w-full md:w-32 bg-orange-500 rounded group-hover:-rotate-12 duration-500 flex justify-center items-center">
                      <FolderGit2 className="w-20 h-20" /></div>
                    <div className="flex w-full justify-between mt-4">
                      <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Project name</h1>
                        <p className="text-base text-gray-400">Description about project.</p>
                      </div>
                      <div className="p-4 transform duration-300 group-hover:translate-x-3 lg:hidden lg:mt-0 group-hover:-translate-y-2">
                        i
                      </div>
                    </div>

                  </div>
                  <div className="p-4 hidden lg:block transform duration-300 group-hover:translate-x-3 mt-40 lg:mt-0 group-hover:-translate-y-2">
                    i
                  </div>
                </div><div className="flex lg:justify-between p-5 border lg:border-none  hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                  <div className="flex w-full flex-col lg:flex-row items-center gap-3">
                    <div className="h-64 aspect-square md:h-32 w-full md:w-32 bg-orange-500 rounded group-hover:-rotate-12 duration-500 flex justify-center items-center">
                      <FolderGit2 className="w-20 h-20" /></div>
                    <div className="flex w-full justify-between mt-4">
                      <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Project name</h1>
                        <p className="text-base text-gray-400">Description about project.</p>
                      </div>
                      <div className="p-4 transform duration-300 group-hover:translate-x-3 lg:hidden lg:mt-0 group-hover:-translate-y-2">
                        i
                      </div>
                    </div>

                  </div>
                  <div className="p-4 hidden lg:block transform duration-300 group-hover:translate-x-3 mt-40 lg:mt-0 group-hover:-translate-y-2">
                    i
                  </div>
                </div>
                




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





            {/* section-4 */}
            <div className="px-5 mt-20">
              <h1 className="text-6xl lg:text-[8rem]  lg:leading-[120px] font-extrabold text-center"><span>PREMIUM</span> <span className="text-gray-600">TOOLS</span></h1>


              <div className="mt-10 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="hover:shadow-lg hover:shadow-orange-500 flex gap-3 items-center p-4 duration-500 rounded-lg">
                    <div className="w-20 rounded-xl h-20 bg-white"></div>
                    <div>
                      <h3 className="text-3xl font-bold">Tool Name</h3>
                      <p className="ml-2">Tool Description</p>
                    </div>
                  </div>
                  <div className="hover:shadow-lg hover:shadow-orange-500 flex gap-3 items-center p-4 duration-500 rounded-lg">
                    <div className="w-20 rounded-xl h-20 bg-white"></div>
                    <div>
                      <h3 className="text-3xl font-bold">Tool Name</h3>
                      <p className="ml-2">Tool Description</p>
                    </div>
                  </div>
                  <div className="hover:shadow-lg hover:shadow-orange-500 flex gap-3 items-center p-4 duration-500 rounded-lg">
                    <div className="w-20 rounded-xl h-20 bg-white"></div>
                    <div>
                      <h3 className="text-3xl font-bold">Tool Name</h3>
                      <p className="ml-2">Tool Description</p>
                    </div>
                  </div>
                  <div className="hover:shadow-lg hover:shadow-orange-500 flex gap-3 items-center p-4 duration-500 rounded-lg">
                    <div className="w-20 rounded-xl h-20 bg-white"></div>
                    <div>
                      <h3 className="text-3xl font-bold">Tool Name</h3>
                      <p className="ml-2">Tool Description</p>
                    </div>
                  </div>


                </div>

              </div>



            </div>




            {/* section-4 */}
            <div className="px-5 mt-20">
              <h1 className="text-6xl lg:text-[8rem]  lg:leading-[120px] font-extrabold text-center"><span>Read My</span> <span className="text-gray-600">BLOGS</span></h1>


              <div className="mt-10 flex flex-col gap-4">
                <div className="flex justify-between p-5 hover:shadow-lg hover:shadow-orange-500 duration-500 rounded-2xl w-full group">
                  <div className="flex items-center gap-3">
                     <div className="flex flex-col gap-4 max-w-md"> <h1 className="text-4xl font-bold">Starting and Growing a Career in Web Design</h1>
                      <p className="text-base text-gray-400 ">As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. </p>
                      <p className="text-base text-gray-400">jan 8, 2020 - present</p>
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
                     <div className="flex flex-col gap-4 max-w-md"> <h1 className="text-4xl font-bold">Starting and Growing a Career in Web Design</h1>
                      <p className="text-base text-gray-400 ">As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. </p>
                      <p className="text-base text-gray-400">jan 8, 2020 - present</p>
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
                    <div className="flex flex-col gap-4 max-w-md"> <h1 className="text-4xl font-bold">Starting and Growing a Career in Web Design</h1>
                      <p className="text-base text-gray-400 ">As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. </p>
                      <p className="text-base text-gray-400">jan 8, 2020 - present</p>
                    </div>
                  </div>
                  <div className="p-4 transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-2">
                    i
                  </div>
                </div>




              </div>



            </div>


            {/* section-5 */}
            <div className="px-5 mt-20">
              <h1 className="text-6xl lg:text-[8rem]  lg:leading-[120px] font-extrabold text-center"><span>Want To</span> <span className="text-gray-600">Hire Me</span></h1>


              <div className="mt-10 flex flex-col gap-4">
                <div className="flex justify-center p-5  duration-500 rounded-2xl w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-4 max-w-md"> <h1 className="text-3xl lg:text-6xl font-bold">DM me direct on X</h1>
                      <div className="text-lg lg:text-2xl text-gray-400 w-full ">
                        <ul className="flex  w-full gap-4">
                          <li className="p-3 w-full  hover:shadow-lg hover:shadow-orange-500 duration-500 text-gray-400 rounded-lg text-center flex justify-center items-center"> <Twitter /></li>

                          <li className="p-3 w-full  hover:shadow-lg hover:shadow-orange-500 duration-500 text-gray-400 rounded-lg text-center flex justify-center items-center"> <Linkedin/></li>

                          <li className="p-3 w-full  hover:shadow-lg hover:shadow-orange-500 duration-500 text-gray-400 rounded-lg text-center flex justify-center items-center"> <Facebook /></li>
                          <li className="p-3 w-full  hover:shadow-lg hover:shadow-orange-500 duration-500 text-gray-400 rounded-lg text-center flex justify-center items-center"> <Instagram/></li>
                          <li className="p-3 w-full  hover:shadow-lg hover:shadow-orange-500 duration-500 text-gray-400 rounded-lg text-center flex justify-center items-center"> <Mail /></li>

                        </ul> </div>
                        

                    </div>
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