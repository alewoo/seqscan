"use client";

import { useState } from "react";
import UploadForm from "../components/UploadForm";
import SearchBox from "../components/SearchBox";
import ResultsTable from "../components/ResultsTable";

export default function Home() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          FASTA Sequence Search
        </h1>

        <UploadForm onFileUploaded={() => setFileUploaded(true)} />

        {fileUploaded && <SearchBox onSearchResults={setSearchResults} />}

        {searchResults.length > 0 && <ResultsTable results={searchResults} />}
      </main>
    </div>
  );
}
