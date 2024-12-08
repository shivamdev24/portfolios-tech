"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Extract token from params
  const token = params.token || ''; // Ensure token is a string, fallback to empty string if undefined
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing token.');
      console.log('Invalid or missing token.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({  password }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      setLoading(false);

      if (res.ok) {
        setSuccess('Your password has been reset successfully.');
        router.push('/login'); // Redirect to login after password reset
      } else {
        const data = await res.json();
        setError(data.message || 'An error occurred.');
      }
    } catch (err) {
      setLoading(false);
      setError('Failed to reset password.');
      console.error(err);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full px-5">
      <Card className="max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">New Password</CardTitle>
        <CardDescription>
        Enter Your New Reset Password
        </CardDescription>
        <CardDescription>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
        
        </CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3"> 
        {/* Token input is now displayed but disabled */}
        <Input
          type="text"
          placeholder="Token"
          value={token} // Token is now always a string or an empty string
          disabled
          required
          className='hidden'
        />
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-600 duration-500" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </Button>
      </form>
      </CardContent>
      </Card>
      
    </div>
  );
};

export default ResetPasswordPage;