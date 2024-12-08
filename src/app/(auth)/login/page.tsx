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


// export default function LoginForm() {
//   return (
//    <div className="flex justify-center items-center h-screen">
//      <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Login</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//             />
//           </div>
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
//           Don&apos;t have an account?{" "}
//           <Link href="signup" className="underline">
//             Sign up
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//    </div>
//   )
// }



"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setErrorMessage(""); // Reset the error message

    try {
      // Make the login API request
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password to backend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json(); // Parse the JSON response
      router.push("/user");
      console.log("Login Success", data);
      
      
      
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Login failed", error);
      setErrorMessage(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/reset-password" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white duration-500 hover:bg-gray-600" onClick={onLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </CardContent>
        
        <div className="my-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
