




"use client";

import {  useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the types for the portfolio data
interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description?: string | string[];
}

interface Project {
  title: string;
  description: string | string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface Blog {
  title: string;
  description: string | string[];
  liveUrl?: string;
}

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  extra?: string;
}

interface FormData {
  userId: string;
  name: string;
  bio: string;
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  socialLinks: SocialLinks;
  jobtitle: string;
  summery: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  blog: Blog[];
}

const PortfolioUpload = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    name: "",
    bio: "",
    contact: {
      email: "",
      phone: "",
      address: "",
    },
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
      extra: "",
    },
    jobtitle: "",
    summery: "",
    skills: [""],
    experiences: [
      {
        company: "",
        position: "",
        startDate: new Date(),
        endDate: undefined,
        description: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        technologies: [""],
        liveUrl: "",
        repoUrl: "",
      },
    ],
    blog: [
      {
        title: "",
        description: "",
        liveUrl: "",
      },
    ],
  });



 


  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    path: string
  ) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = updatedFormData;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = e.target.value;
      } else {
        current = current[key];
      }
    });

    setFormData(updatedFormData);
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    key: string,
    type: "skills" | "experiences" | "projects" | "blog"
  ) => {
    const updatedArray = [...formData[type]];
  
    if (type === "skills") {
      const updatedSkill = e.target.value.trim();
      if (updatedSkill) {
        updatedArray[index] = updatedSkill; // Update skill only if it's not empty
      }
    } else {
      const item = updatedArray[index] as Experience | Project | Blog;
  
      if (key === "technologies") {
        item[key as keyof typeof item] = e.target.value
          .split(",")
          .map((tech) => tech.trim());
      } else {
        item[key as keyof typeof item] = e.target.value;
      }
    }
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: updatedArray,
    }));
  };
  




  const addField = (type: "skills" | "experiences" | "projects" | "blog") => {
    const emptyItem =
      type === "skills"
        ? ""
        : type === "experiences"
        ? {
            company: "",
            position: "",
            startDate: new Date(),
            endDate: undefined,
            description: "",
          }
        : type === "projects"
        ? {
            title: "",
            description: "",
            technologies: [""],
            liveUrl: "",
            repoUrl: "",
          }
        : {
            title: "",
            description: "",
            liveUrl: "",
          };

    setFormData({ ...formData, [type]: [...formData[type], emptyItem] });
  };

  const removeField = (index: number, type: "skills" | "experiences" | "projects" | "blog") => {
    const updatedArray = formData[type].filter((_, i) => i !== index);
    setFormData({ ...formData, [type]: updatedArray });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); 
    try {
      const response = await fetch("/api/user/portfolio", {
        method:  "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Portfolio saved successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error details:", errorData);
        alert("Failed to save portfolio: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error saving portfolio:", error);
    }
  };
 



  const formatDate = (date: string | Date | undefined): string => {
    if (!date) return "";
    
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
          <CardDescription>Fill your details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              value={formData.name}
              onChange={(e) => handleChange(e, "name")}
              placeholder="Your Name"
              required
            />
            <Textarea
              value={formData.bio}
              onChange={(e) => handleChange(e, "bio")}
              placeholder="Your Bio"
              required
            />
            <Input
              value={formData.contact?.email}
              onChange={(e) => handleChange(e, "contact.email")}
              placeholder="Email"
              required
            />
            <Input
              value={formData.contact?.phone}
              onChange={(e) => handleChange(e, "contact.phone")}
              placeholder="Phone"
            />
            <Input
              value={formData.contact?.address}
              onChange={(e) => handleChange(e, "contact.address")}
              placeholder="Address"
            />
            <Input
              value={formData.jobtitle}
              onChange={(e) => handleChange(e, "jobtitle")}
              placeholder="Job Title"
              required
            />
            <Textarea
              value={formData.summery}
              onChange={(e) => handleChange(e, "summery")}
              placeholder="Summary"
              required
            />
            {/* Social Links Section */}
            <div className="flex flex-col gap-2">
              <h3>Social Links</h3>
              {Object.keys(formData.socialLinks).map((key, index) => (
                <Input
                  key={index}
                  value={formData.socialLinks[key as keyof SocialLinks] || ""}
                  onChange={(e) => handleChange(e, `socialLinks.${key}`)}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              ))}
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-2">
              <h3>Skills</h3>
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={skill}
                    onChange={(e) => handleArrayChange(e, index, "", "skills")}
                    placeholder="Skill"
                  />
                  <Button type="button" className="text-red-500 max-w-20" onClick={() => removeField(index, "skills")}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
              <Button type="button" className="bg-blue-500 text-white max-w-20" onClick={() => addField("skills")}>
                Add Skill
              </Button>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col gap-2">
              <h3>Experiences</h3>
              {formData.experiences.map((exp, index) => (
                <div key={index} className="flex gap-2 flex-col">
                  <Input
                    value={exp.company}
                    onChange={(e) => handleArrayChange(e, index, "company", "experiences")}
                    placeholder="Company"
                  />
                  <Input
                    value={exp.position}
                    onChange={(e) => handleArrayChange(e, index, "position", "experiences")}
                    placeholder="Position"
                  />
                  <Input
                  type="date"
        value={formatDate(exp.startDate)}
                    onChange={(e) =>
                      handleArrayChange(e, index, "startDate", "experiences")
                    }
                    placeholder="Start Date"
                  />
                 <Input
                 type="date" value={formatDate(exp.endDate)}
  onChange={(e) =>
    handleArrayChange(e, index, "endDate", "experiences")
  }
/>

                  <Textarea
                    value={exp.description}
                    onChange={(e) => handleArrayChange(e, index, "description", "experiences")}
                    placeholder="Description"
                  />
                  <Button type="button" className="text-red-500 max-w-20" onClick={() => removeField(index, "experiences")}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
              <Button type="button" className="bg-blue-500 text-white max-w-40" onClick={() => addField("experiences")}>
                Add Experience
              </Button>
            </div>

            {/* Project Section */}
            <div className="flex flex-col gap-2">
              <h3>Projects</h3>
              {formData.projects.map((proj, index) => (
                <div key={index} className="flex gap-2 flex-col">
                  <Input
                    value={proj.title}
                    onChange={(e) => handleArrayChange(e, index, "title", "projects")}
                    placeholder="Project Title"
                  />
                  <Textarea
                    value={proj.description}
                    onChange={(e) => handleArrayChange(e, index, "description", "projects")}
                    placeholder="Project Description"
                  />
                  <Input
                    value={proj.liveUrl || ""}
                    onChange={(e) => handleArrayChange(e, index, "liveUrl", "projects")}
                    placeholder="Live URL"
                  />
                  <Input
                    value={proj.repoUrl || ""}
                    onChange={(e) => handleArrayChange(e, index, "repoUrl", "projects")}
                    placeholder="Repository URL"
                  />
                  <Button type="button" className="text-red-500 max-w-20" onClick={() => removeField(index, "projects")}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
              <Button type="button" className="bg-blue-500 text-white max-w-40" onClick={() => addField("projects")}>
                Add Project
              </Button>
            </div>

            {/* Blog Section */}
            <div className="flex flex-col gap-2">
              <h3>Blog</h3>
              {formData.blog.map((b, index) => (
                <div key={index} className="flex gap-2 flex-col">
                  <Input
                    value={b.title}
                    onChange={(e) => handleArrayChange(e, index, "title", "blog")}
                    placeholder="Blog Title"
                  />
                  <Textarea
                    value={b.description}
                    onChange={(e) => handleArrayChange(e, index, "description", "blog")}
                    placeholder="Blog Description"
                  />
                  <Input
                    value={b.liveUrl || ""}
                    onChange={(e) => handleArrayChange(e, index, "liveUrl", "blog")}
                    placeholder="Blog URL"
                  />
                  <Button type="button" className="text-red-500 max-w-20" onClick={() => removeField(index, "blog")}>
                    <Trash2 />
                  </Button>
                </div>
              ))}
              <Button type="button" className="bg-blue-500 text-white max-w-40" onClick={() => addField("blog")}>
                Add Blog
              </Button>
            </div>

            {/* Submit Button */}
           <div className="flex flex-col lg:flex-row justify-between w-full">
           <Button className="bg-green-500 text-white max-w-40" type="submit">Save Portfolio</Button>
           <Link className="bg-blue-500 text-white max-w-40 rounded-lg" href="/user/portfolio/update-portfolio">
           <Button>Update Here</Button></Link>
           </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioUpload;
