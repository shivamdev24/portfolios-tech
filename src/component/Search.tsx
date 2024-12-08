"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const NormalSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setError(""); // Clear error on input change
  };

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
  
      if (response.ok) {
        // Construct the URL with query parameters
        const queryParams = new URLSearchParams({
          query: searchQuery,
          results: JSON.stringify(result.data || []),
        }).toString();
  
        // Redirect to the search results page
        router.push(`/user?${queryParams}`);
      } else {
        setError(result.message || "Search failed. Please try again.");
      }
    } catch (error) {
      setError("Error during search. Please try again.");
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="flex items-center border rounded w-full">
          <Input
            type="text"
            name="query"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChange}
            className="rounded-none border-none bg-white flex-grow"
            aria-label="Search input"
          />
          <Button type="submit" className="bg-white rounded-none" disabled={loading}>
            {loading ? <span className="loader" /> : <Search />}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </form>
  );
};