"use client";

import { useState } from "react";

interface UploadFormProps {
  onFileUploaded: () => void;
}

export default function UploadForm({ onFileUploaded }: UploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    if (
      !file.name.endsWith(".fasta") &&
      !file.name.endsWith(".fa") &&
      !file.name.endsWith(".seq") &&
      !file.name.endsWith(".txt")
    ) {
      alert("Please upload a FASTA file (.fasta, .fa, .seq, or .txt)");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        onFileUploaded();
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 rounded-lg border-2 border-dashed border-border bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-foreground">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-text-muted">FASTA file (MAX. 10MB)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".fasta,.fa,.seq,.txt"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={!file || uploading}
        className="w-full bg-primary hover:bg-primary-hover text-foreground font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload FASTA File"}
      </button>
    </form>
  );
}
