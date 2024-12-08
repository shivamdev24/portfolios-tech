'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null); // State to store user data
  const [error, setError] = useState<string | null>(null); // Error state for file validation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (error) {
        setError("Error fetching user data.");
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="error">{error}</div>; // Show error if fetching fails
  }

  if (!user) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="max-w-6xl mx-auto px-10">
      <Card className='bg-white'>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your Details</CardDescription>
        </CardHeader>
        <CardContent>
          <form encType="multipart/form-data" className="flex flex-col gap-3">
            <div className="flex gap-2 items-end">
              {user.image_url ? (
                <Avatar className="w-32 h-32 border rounded-lg overflow-hidden">
                  <AvatarImage
                    src={user.image_url}
                    alt={user.name || "User Avatar"}
                    className="object-cover w-32 h-32"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className="w-40 h-40 border rounded-lg flex justify-center items-center">
                  <AvatarFallback>No Profile</AvatarFallback>
                </Avatar>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label>Name:*</Label>
                <Input
                  type="text"
                  value={user.name || ""}
                  disabled
                />
              </div>

              <div>
                <Label>Username:*</Label>
                <Input
                  type="text"
                  value={user.username || ""}
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label>Phone Number:*</Label>
                <Input
                  type="text"
                  value={user.phoneNumber || ""}
                  disabled
                />
              </div>

              <div>
                <Label>Address:</Label>
                <Input
                  type="text"
                  value={user.address || ""}
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label>Years of Experience:*</Label>
                <Input
                  type="number"
                  value={user.yearexperience || ""}
                  disabled
                  required
                />
              </div>

              <div>
                <Label>Portfolio Link:</Label>
                <Input
                  type="text"
                  value={user.portfolioLink || ""}
                  disabled
                />
              </div>
            </div>

            <div className='p-2'>
              <Label className='text-lg'>Preference</Label>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
                <div>
                  <Label>Industry:*</Label>
                  <Input
                    type="text"
                    value={user.preferences?.industry || ""}
                    disabled
                    required
                  />
                </div>

                <div>
                  <Label>Location:*</Label>
                  <Input
                    type="text"
                    value={user.preferences?.location || ""}
                    disabled
                    required
                  />
                </div>

                <div>
                  <Label>Experience Level:</Label>
                  <RadioGroup
                    value={user.preferences?.experienceLevel || ""}
                    disabled
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
                    value={user.preferences?.jobType || ""}
                    disabled
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

                <div>
                  <Label>Skills:</Label>
                  <Input
                    type="text"
                    value={user.preferences?.skills || ""}
                    disabled
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>LinkedIn:</Label>
              <Input
                type="url"
                value={user.socialLinks?.linkedin || ""}
                disabled
              />
            </div>

            <div>
              <Label>GitHub:</Label>
              <Input
                type="url"
                value={user.socialLinks?.github || ""}
                disabled
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label>Availability Status:</Label>
                <RadioGroup
                  value={user.availabilityStatus || ""}
                  disabled
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
                  value={user.industries || ""}
                  disabled
                />
              </div>
            </div>

            <Button className="bg-green-500 text-white max-w-40" type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
