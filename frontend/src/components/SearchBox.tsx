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
      <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
        <input
          className="flex-1 bg-transparent border-b-2 border-border focus:border-accent px-4 py-2 text-foreground placeholder-text-muted outline-none transition-colors"
          type="text"
          placeholder="Enter DNA/RNA sequence"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-primary hover:bg-primary-hover text-foreground px-6 py-2 rounded-md transition-colors disabled:opacity-50"
          type="submit"
          disabled={!query || searching}
        >
          {searching ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
