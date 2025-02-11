# FASTA Sequence Search - Project Requirements Document (PRD)

## Project Information

- **Project Name**: FASTA Sequence Search
- **Repository Name**: seqsearch
- **Organization**: Dyno Therapeutics
- **Project Type**: Coding Challenge

## 1. Overview

### 1.1 Purpose

This project aims to develop a web-based tool that enables users to:

- Upload a FASTA file
- Search for exact or substring matches within the sequences
- Display results in a structured table

This project serves as a coding challenge for Dyno Therapeutics, evaluating software engineering skills across backend and frontend development.

## 2. Scope

### 2.1 Features

The application includes the following core features:

- File Upload: Users can upload a FASTA file
- Sequence Search: Users input a DNA/RNA sequence to find exact or substring matches
- Results Table: Display matching sequences with ID, description, and sequence
- Tech Stack Implementation:
  - Frontend: Next.js (React)
  - Backend: FastAPI (Python)
  - Data Handling: Biopython (FASTA parsing)
  - Hosting: Vercel (Frontend), Render/Heroku (Backend)

## 3. Functional Requirements

### 3.1 User Actions

| User Action        | System Response                              |
| ------------------ | -------------------------------------------- |
| Upload FASTA file  | Store the file and parse its sequences       |
| Enter search query | Check sequences for matches                  |
| Click "Search"     | Return matching sequences in a table         |
| View results       | See sequence ID, description, and full match |

### 3.2 API Endpoints

| Method | Endpoint | Description                                               |
| ------ | -------- | --------------------------------------------------------- |
| GET    | /        | Health check for backend                                  |
| POST   | /upload/ | Uploads a FASTA file                                      |
| POST   | /search/ | Searches for a sequence in the latest uploaded FASTA file |

## 4. Non-Functional Requirements

### 4.1 Performance and Scalability

- Performance: Searches should return results within <1 sec for small datasets
- Scalability: Should handle FASTA files up to ~10MB

### 4.2 Security and Reliability

- Security: Restrict uploads to .fasta files only
- Reliability: Should not crash with malformed input

## 5. Tech Stack

### 5.1 Components and Technologies

| Component          | Technology       |
| ------------------ | ---------------- |
| Frontend           | Next.js (React)  |
| Backend            | FastAPI (Python) |
| FASTA Processing   | Biopython        |
| Styling            | Tailwind CSS     |
| API Calls          | Axios            |
| Hosting (Frontend) | Vercel           |
| Hosting (Backend)  | Render/Heroku    |

## 6. Deliverables

### 6.1 Required Files

#### Backend (/backend/)

- main.py (FastAPI server)
- fasta_parser.py (FASTA search logic)
- requirements.txt

#### Frontend (/frontend/)

- pages/index.js (Next.js UI)
- components/UploadForm.js (File upload UI)
- components/SearchBox.js (Search input UI)
- styles/global.css

#### Documentation

- README.md (Setup instructions)

## 7. Project Timeline

### 7.1 Milestones

| Phase      | Task                                      | Deadline |
| ---------- | ----------------------------------------- | -------- |
| Backend    | FastAPI server with upload & search       | Day 1    |
| Frontend   | Build Next.js UI & API integration        | Day 2    |
| Testing    | Validate uploads & search accuracy        | Day 3    |
| Deployment | Host frontend (Vercel) & backend (Render) | Day 4    |
