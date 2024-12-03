import jwt from 'jsonwebtoken';



// Generate expiry date for reset token
export const generateResetTokenExpiry = () => {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + 10); // Set the expiry time to 10 minutes from now
  return expiryDate;
};


interface GRT {
  userId: string;
  email?: string; // Add other fields as needed
  name?: string;
}

// Generate Reset Token
export const generateResetToken = (userId: string, email?: string, name?: string) => {
  // Generates a JWT with an expiration time (e.g., 10 minutes)
  return jwt.sign({ userId, email, name }, process.env.TOKEN_SECRET as string, {
    expiresIn: '10m', // Set the expiration time of the token
  });
};

const SECRET_KEY = process.env.TOKEN_SECRET!; // Ensure you have your secret key set in environment variables

// Verify Reset Token
export function verifyResetToken(token: string): GRT | null {
  try {
    const decoded = jwt.verify(token, SECRET_KEY) as GRT; // Decode the token
    return decoded; // Return the decoded payload
  } catch (error) {
    console.error(error); // Log the error properly
    return null; // Return null if verification fails
  }
  }