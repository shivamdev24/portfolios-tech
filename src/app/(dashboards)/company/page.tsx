"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface User {
  email: string;
  name: string;
  username: string;
  isVerified: boolean;
  image_url?: string;
  preferences: {
    industry: string;
    location: string;
    experienceLevel: string;
    jobType: string;
    skills: string[];
  };
  role: string;
  availabilityStatus: string[];
  socialLinks?: { [key: string]: string };
}

const SearchResultsPage = () => {
  const [userDetails, setUserDetails] = useState<User[]>([]);
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Extract query parameter directly from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");
    setQuery(queryParam || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a search query.");
      return;
    }
    setLoading(true);
    try {
      const body = { query: searchQuery };
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      setSearchResults(result.data || []);
    } catch (error) {
      setError("Error during search. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        if (response.ok) {
          console.log("Fetched user details:", data);
          if (data.success && data.data && Array.isArray(data.data)) {
            setUserDetails(data.data);
          } else {
            setError("No users found.");
          }
        } else {
          setError("Failed to fetch user details.");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="p-4">
        {/* Search Form */}
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <div className="flex items-center border rounded w-full">
                <Input
                  type="text"
                  name="query"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-none border-none bg-white flex-grow"
                  aria-label="Search input"
                />
                <Button type="submit" className="bg-white rounded-none" disabled={loading}>
                  {loading ? "Loading..." : <Search />}
                </Button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </form>
        </div>

        {/* Display Search Results */}
        <div className="mt-8">
          {searchResults.length > 0 ? (
            <>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="mt-2 text-gray-600">
                Results for: <strong>{query}</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <h2 className="text-lg font-semibold mb-2">{result.email}</h2>
                    <p className="text-gray-700 mb-4">{result.preferences.industry || "No Description"}</p>
                    {result.image_url && (
                      <Image
                        src={result.image_url}
                        alt={result.email || "Image"}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        width={500}
                        height={300}
                      />
                    )}
                    <a href="#" className="text-blue-500 underline">
                      View More
                    </a>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h2 className="text-2xl font-bold">Search</h2>
          )}
        </div>

        {/* Display User Details for Multiple Users */}
        <div className="">
          {userDetails.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold">User Details</h2>
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10">
                {userDetails.map((user, index) => (
                  <div
                    key={index}
                    className="p-4 border w-full h-fit rounded-lg shadow-sm bg-white"
                  >
                    <div>
                      {user.image_url ? (
                        <Image
                          src={user.image_url}
                          alt={user.email || "User Avatar"}
                          className="w-full h-56 object-cover rounded-lg mt-2"
                          width={1000}
                          height={1000}
                        />
                      ) : (
                        <div className="w-full h-56 object-cover rounded-lg mt-2 bg-gray-300" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <h3 className="text-lg font-semibold">
                        {user.name || "Not Updated"}
                      </h3>
                      <h5 className="text-base font-semibold">{user.email}</h5>
                      <p className="text-gray-700">
                        <strong>Availability:</strong> {user.availabilityStatus}
                      </p>
                      <p className="text-gray-700">
                        <strong>Experience Level:</strong> {user.preferences.experienceLevel}
                      </p>
                      <p className="text-gray-700">
                        <strong>Job Type:</strong> {user.preferences.jobType}
                      </p>
                      <p className="text-gray-700">
                        <strong>Portfolio:</strong> <a href={`/portfolio/${user.username}`}>{user.username}</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Verified:</strong> {user.isVerified === true ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default SearchResultsPage;
