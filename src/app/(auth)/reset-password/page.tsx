

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"


import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";

export default function SignUpPage() {
  const [user, setUser] = useState({
    
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


 

  const onReset = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setErrorMessage(""); // Reset the error message

    try {
      const response = await fetch("/api/auth/reset-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json(); // Parse the JSON response
      console.log("Password reset link has been sent to your email'", data);
      
    
    
    
    } catch (error) {
      console.log("Reset failed", error);
      setErrorMessage( "Error sending reset email"); // Display server-side validation errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex mx-auto flex-col justify-center items-center  h-screen relative px-5">
        <div className="absolute top-32 left-32">
          {loading ? (
            <p className="flex mx-auto h-screen w-full justify-center items-center text-6xl">
              <HashLoader
                color="#000"
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="relative  ">
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Card className="w-full  bg-white">
          <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
        Get Your Reset Password Link
        </CardDescription>
      </CardHeader>
           <CardContent>
           <form onSubmit={onReset} className="flex flex-col gap-3">
             
           <div>
              <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Button
                  className="w-full bg-black text-white hover:bg-gray-600 duration-500"
                  type="submit"
                >
                  Reset Password
                </Button>
              </div>
            </form>
           </CardContent>
            <Separator />
            <CardFooter className="mt-4 flex gap-3">
              <p>Already have an account? </p>
              <Link
                className="text-blue-500 hover:text-gray-900 duration-500"
                href="/login"
              >
                Login here.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}