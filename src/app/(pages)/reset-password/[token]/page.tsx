"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <div>
      <h1>Reset Your Password</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        {/* Token input is now displayed but disabled */}
        <input
          type="text"
          placeholder="Token"
          value={token} // Token is now always a string or an empty string
          disabled
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;