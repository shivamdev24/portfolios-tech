/* eslint-disable @typescript-eslint/no-explicit-any */
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Separator } from "@/components/ui/separator"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



// export default function LoginForm() {
//   return (
//    <div className="flex justify-center items-center h-screen">
//      <Card className="mx-auto max-w-sm">
      // <CardHeader>
      //   <CardTitle className="text-2xl">Signup</CardTitle>
      //   <CardDescription>
      //     Enter your Details below to Signup your account
      //   </CardDescription>
      // </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Name</Label>
//             <Input
//               id="name"
//               type="name"
//               placeholder="Name"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//             />
//           </div>
//           <RadioGroup defaultValue="User" className="flex gap-2">
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="User" id="User" />
//     <Label htmlFor="User">User</Label>
//   </div>
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="Company" id="Company" />
//     <Label htmlFor="Company">Company</Label>
//   </div>
// </RadioGroup>


//           <div className="grid gap-2">
//             <div className="flex items-center">
//               <Label htmlFor="password">Password</Label>
//               <Link href="#" className="ml-auto inline-block text-sm underline">
//                 Forgot your password?
//               </Link>
//             </div>
//             <Input id="password" type="password" required />
//           </div>
//           <Button type="submit" className="w-full">
//             Login
//           </Button>
          
//         </div>
//         <Separator className=" bg-gray-600 my-8" />

//         <div className="mt-4 text-center text-sm">
//          Already have an account?{" "}
//           <Link href="Login" className="underline">
//             Login
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//    </div>
//   )
// }




"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
    role: "user",
    name: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user.name.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setErrorMessage(""); // Reset the error message

    try {
      const response = await fetch("/api/auth/signup/user", {
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
      console.log("Signup Success", data);
    
      router.push(`/signup/verify?email=${user.email}`);
      
    
    
    } catch (error: any) {
      console.log("Signup failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred"); // Display server-side validation errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex mx-auto flex-col justify-center items-center  h-screen relative px-5">
        <div className="absolute -top-32 left-32">
          {loading ? (
            <p className="flex mx-auto h-screen w-full justify-center items-center text-6xl">
              <HashLoader
                color="#000"
                loading={loading}
                size={80}
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
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your Details below to Signup your account
        </CardDescription>
      </CardHeader>
           <CardContent>
           <form onSubmit={onSignup} className="flex flex-col gap-3">
              <div>
              <Label htmlFor="email">Name</Label>
                <Input
                  type="text"
                  id="username"
                  value={user.name}
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                  }
                  placeholder="Name"
                  required
                />
              </div>
             
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
              <div className="flex items-center py-1">
              <Label htmlFor="password">Password</Label>
              <Link href="/reset-password" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
                <Input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  autoComplete="current-password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </div>
              <div>

</div>
              <div>
                <Button
                  className="w-full bg-black text-white hover:bg-gray-600 duration-500"
                  type="submit"
                  disabled={buttonDisabled}
                >
                  {buttonDisabled ? "No Signup" : "Signup"}
                </Button>
              </div>
            </form>
           </CardContent>
            <Separator />
            <CardFooter className="mt-4 flex gap-3">
              <p>Already have an account? </p>
              <Link
                className="text-blue-500 hover:text-gray-900 duration-500 "
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