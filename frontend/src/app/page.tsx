"use client";

import { useState } from "react";
import UploadForm from "../components/UploadForm";
import SearchBox from "../components/SearchBox";
import ResultsTable from "../components/ResultsTable";

export default function Home() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          FASTA Sequence Search
        </h1>
        <div className="max-w-[95%] mx-auto space-y-8">
          <UploadForm onFileUploaded={() => setFileUploaded(true)} />
          {fileUploaded && <SearchBox onSearchResults={setSearchResults} />}
          {searchResults.length > 0 && <ResultsTable results={searchResults} />}
        </div>
      </main>
    </div>
  );
}
