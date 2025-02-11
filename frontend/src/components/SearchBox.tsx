"use client";

import { useState } from "react";
import axios from "axios";

interface SearchBoxProps {
  onSearchResults: (results: any[]) => void;
}

export default function SearchBox({ onSearchResults }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setSearching(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/search/`,
        {
          sequence: query,
          exact_match: false,
        }
      );
      onSearchResults(response.data);
    } catch (error) {
      console.error("Search failed:", error);
      onSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter DNA/RNA sequence"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
          disabled={!query || searching}
        >
          {searching ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
