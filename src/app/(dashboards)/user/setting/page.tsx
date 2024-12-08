'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Upload } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';

const ImageUploadForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Error state for file validation
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [yearexperience, setYearexperience] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [jobType, setJobType] = useState('');
  const [skills, setSkills] = useState<string[]>([]); // Assuming skills should be an array of strings
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');
  const [industries, setIndustries] = useState('');

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Check if the file exceeds 2MB
      if (file.size > MAX_FILE_SIZE) {
        setError("The image file is too large. Please upload a file smaller than 2MB.");
        return; // Prevent setting the file if it's too large
      }

      // If the file size is valid, set the image file and preview URL
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl); // Set image preview URL

      setError(null); // Reset the error message if the file is valid
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) formData.append('image', image);
    formData.append('name', name);
    formData.append('username', username);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('yearexperience', yearexperience);

    formData.append('preferences.industry', industry);
    formData.append('preferences.location', location);
    formData.append('preferences.experienceLevel', experienceLevel);
    formData.append('preferences.jobType', jobType);
    skills.forEach(skill => {
        formData.append('preferences.skills[]', skill); // Use 'preferences.skills[]' to indicate an array
      });

    formData.append('socialLinks.linkedin', linkedin);
    formData.append('socialLinks.github', github);

    formData.append('availabilityStatus', availabilityStatus);


    formData.append('industries', industries);

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const data = await response.json();
      alert('User updated successfully');
      console.log(data);
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-10">
        <Card className='bg-white '>
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
          <CardDescription>Fill your details</CardDescription>
          
          {error && <CardDescription className="text-red-500">{error}</CardDescription>}
        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-3">
        <div className="flex gap-2 items-end">
              {imagePreview ? (
                <Avatar className="w-32 h-32 border rounded-lg overflow-hidden">
                  <AvatarImage
                    src={imagePreview}
                    alt={name || "User Avatar"}
                    className="object-cover w-32 h-32"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className="w-40 h-40 border rounded-lg flex justify-center items-center">
                  <AvatarFallback >No Profile</AvatarFallback>
                </Avatar>
              )}

              <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center justify-center w-10 h-10 rounded bg-gray-950 hover:bg-gray-600 duration-500"
              >
                <Upload className="w-6 h-6 rounded text-white" />
              </label>

              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Label>Name:*</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label>Username:*</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
          required
        />
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Label>Phone Number:*</Label>
        <Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <div>
        <Label>Address:</Label>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Label>Years of Experience:*</Label>
        <Input
          type="number"
          value={yearexperience}
          onChange={(e) => setYearexperience(e.target.value)}
          required
        />
      </div>

      {/* <div>
        <Label>Portfolio Link:</Label>
        <Input
          type="url"
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
        />
      </div> */}

      </div>
      <div className=' p-2'>
        <Label className='text-lg'>Preference</Label>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>

      <div>
        <Label>Industry:*</Label>
        <Input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
      </div>

      <div>
        <Label>Location:*</Label>
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      
      <div>
        <Label>Experience Level:</Label>
              <RadioGroup 
                value={experienceLevel} 
                onValueChange={(value) => setExperienceLevel(value)}
                className='flex flex-col lg:flex-row gap-4 mt-2'
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Fresher" id="Fresher" />
                  <Label htmlFor="Fresher">Fresher</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mid-Levels" id="Mid-Level" />
                  <Label htmlFor="Mid-Level">Mid-Level</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Senior" id="Senior" />
                  <Label htmlFor="Senior">Senior</Label>
                </div>
              </RadioGroup>
            </div>
      <div>
        <Label>Job Type:</Label>
              <RadioGroup 
                value={jobType} 
                onValueChange={(value) => setJobType(value)}
                className='flex flex-col lg:flex-row gap-4 mt-2'
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Full-Time" id="Full-Time" />
                  <Label htmlFor="Full-Time">Full-Time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Part-Time" id="Part-Time" />
                  <Label htmlFor="Part-Time">Part-Time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Remote" id="Remote" />
                  <Label htmlFor="Remote">Remote</Label>
                </div>
              </RadioGroup>
            </div>

    

      {/* <div>
        <Label>Skills:</Label>
        <Input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div> */}

      <div>
  <Label>Skills:</Label>
  <Input
    type="text"
    value={skills.join(', ')}  // Join the array to display as a string in the input field
    onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))}  // Split by comma and remove leading/trailing spaces
    required
  />
</div>

      </div>
      </div>

      <div>
        <Label>LinkedIn:</Label>
        <Input
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          
        />
      </div>

      <div>
        <Label>GitHub:</Label>
        <Input
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>

      

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div>
              <Label>Availability Status:</Label>
              <RadioGroup 
                value={availabilityStatus} 
                onValueChange={(value) => setAvailabilityStatus(value)}
                className='flex flex-col lg:flex-row gap-4 mt-2'
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Actively Looking" id="ActivelyLooking" />
                  <Label htmlFor="ActivelyLooking">Actively Looking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Open to Opportunities" id="Opportunities" />
                  <Label htmlFor="Opportunities">Open to Opportunities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Not Looking" id="not-available" />
                  <Label htmlFor="not-available">Not Looking</Label>
                </div>
              </RadioGroup>
            </div>

    
      <div>
        <Label>Industries:</Label>
        <Input
          type="text"
          value={industries}
          onChange={(e) => setIndustries(e.target.value)}
          required
        />
      </div>
    </div>

      {/* <div>
        <Label>Profile Image:</Label>
        <Input type="file" onChange={handleImageChange} />
      </div> */}

      <Button className="bg-green-500 text-white max-w-40" type="submit">Submit</Button>
    </form>
        </CardContent>

    </Card>
    </div>
  );
};

export default ImageUploadForm;


