

// "use client"


// import { useEffect, useState } from "react";
// import ProfileCard from "@/component/portfolio/ProfileCard";
// import Hero from "@/component/portfolio/Hero";
// import Project from "@/component/portfolio/Project";
// import Experience from "@/component/portfolio/Experience";
// import Skills from "@/component/portfolio/Skills";
// import Blog from "@/component/portfolio/Blog";
// import SocialLink from "@/component/portfolio/SocialLink";

// export default function Home() {
//   const [portfolioData, setPortfolioData] = useState(null);

//   useEffect(() => {
//     const fetchPortfolioData = async () => {
//       try {
//         const response = await fetch("/api/portfolio");
//         const result = await response.json();
//         console.log(result)
//         if (result.success) {
//           setPortfolioData(result.data);
//         } else {
//           console.error("Failed to fetch portfolio data");
//         }
//       } catch (error) {
//         console.error("Error fetching portfolio data:", error);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   if (!portfolioData) {
//     return <div>Loading...</div>;
//   }

 

//   return (
//     <div className="max-w-5xl border-black h-full mx-auto">
//       <section className="relative flex h-full">
//         <div className="relative hidden lg:block flex-shrink-0 pt-10">
//           <div className="sticky top-10">
//             <ProfileCard
//               profileImg={portfolioData.image_url}
//               name={portfolioData.name}
//               bio={portfolioData.bio}
//               fb={portfolioData.socialLinks?.facebook}
//               x={portfolioData?.twitter}
//               linkedin={portfolioData?.linkedin}
//               insta={portfolioData?.instagram}
//               mail={contact?.email}
//             />
//           </div>
//         </div>
//         <div className="flex-1 p-4 space-y-4 lg:pt-10">
//           <section>
//             <Hero
//               jobTitle={jobtitle}
//               jobDescription={summery}
//               experience={experiences.length}
//               projects={projects.length}
//             />
//           </section>
//           <div className="px-5 mt-20">
//             <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">
//               <span>Recent</span>{" "}
//               <span className="text-gray-600">Projects</span>
//             </h1>
//             {projects.map((project) => (
//               <Project
//                 key={project._id}
//                 projectName={project.title}
//                 description={project.description}
//                 live={project.liveUrl}
//                 github={project.repoUrl}
//               />
//             ))}
//           </div>
//           <div className="px-5 mt-20">
//             <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">
//               <span>Working</span>{" "}
//               <span className="text-gray-600">Experience</span>
//             </h1>
//             {experiences.map((exp) => (
//               <Experience
//                 key={exp._id}
//                 companyName={exp.company}
//                 position={exp.position}
//                 startDate={new Date(exp.startDate).toDateString()}
//                 endDate={exp.endDate ? new Date(exp.endDate).toDateString() : "Present"}
//                 description={exp.description}
//               />
//             ))}
//           </div>
//           <div className="px-5 mt-20">
//             <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">
//               <span>Skills</span>{" "}
//             </h1>
//             {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg shadow-md"
//         >
//           {skill}
//         </div>
//       ))}
//           </div>
//           <div className="px-5 mt-20">
//             <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">
//               <span>Read My</span>{" "}
//               <span className="text-gray-600">BLOGS</span>
//             </h1>
//             {blog.map((article) => (
//               <Blog
//                 key={article._id}
//                 title={article.title}
//                 description={article.description}
//                 url={article.liveUrl}
//               />
//             ))}
//           </div>
//           <div className="px-5 mt-20">
//             <h1 className="text-6xl lg:text-[8rem] lg:leading-[120px] font-extrabold text-center">
//               <span>Want To</span>{" "}
//               <span className="text-gray-600">Hire Me</span>
//             </h1>
//             <div className="mt-10 flex flex-col gap-4">
//               <div className="flex justify-center p-5 duration-500 rounded-2xl w-full">
//                 <div className="flex items-center gap-3">
//                   <div className="flex flex-col gap-4 max-w-md">
//                     <h1 className="text-3xl lg:text-6xl font-bold">
//                       DM me direct on X
//                     </h1>
//                     <SocialLink
//                       fb={portfolioData.facebook}
//                       x={portfolioData.twitter}
//                       linkedin={portfolioData.linkedin}
//                       insta={portfolioData.instagram}
//                       mail={contact.email}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="text-center w-full h-72 flex items-center justify-center text-white">
//         <p>All copyright &copy; are reserved. Portfolio.tech</p>
//       </section>
//     </div>
//   );
// }




import React from 'react'

const page = () => {
  return (
    <div>
      update soon
    </div>
  )
}

export default page
