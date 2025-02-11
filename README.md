# seqscan

A web-based tool for searching and analyzing DNA/RNA sequences in FASTA format files.

## Features

- Upload and parse FASTA files (.fasta, .fa, .seq, .txt)
- Search for exact or substring matches within sequences
- View results in an interactive table format
- Modern, responsive web interface
- File size limit of 10MB
- Real-time search results

## Tech Stack

- **Frontend**:

  - Next.js with TypeScript
  - React
  - Tailwind CSS
  - Axios for API calls

- **Backend**:
  - FastAPI (Python)
  - Biopython for FASTA parsing
  - CORS support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python 3.8 or higher
- npm or yarn
- pip (Python package manager)

### Installation

1. Clone the repository:

bash
git clone https://github.com/yourusername/seqscan.git
cd seqscan
:
bash
cd frontend
npm install
:
bash
cd ../backend
python -m venv venv
source venv/bin/activate # On Windows use: venv\Scripts\activate
pip install -r requirements.txt

### Running the Application

1. Start the backend server:
   bash
   cd backend
   uvicorn main:app --reload

2. In a new terminal, start the frontend development server:
   bash
   cd frontend
   npm run dev

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## API Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | /        | Health check      |
| POST   | /upload/ | Upload FASTA file |
| POST   | /search/ | Search sequences  |

## Usage

1. Open the application in your web browser
2. Upload a FASTA file using the drag-and-drop interface
3. Once uploaded, use the search box to find specific sequences
4. View matching results in the table below

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
