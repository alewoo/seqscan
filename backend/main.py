# implement fast api server
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from fasta_parser import FastaParser

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# initialize FastaParser
parser = FastaParser()

class SearchQuery(BaseModel):
    sequence: str
    exact_match: bool = True

@app.get("/")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

@app.post("/upload/")
async def upload_file(file: UploadFile):
    """Upload and parse FASTA file"""
    if not file.filename.endswith(('.fasta', '.fa', '.txt')):
        raise HTTPException(status_code=400, detail="Only FASTA files are allowed")
    
    content = await file.read()
    try:
        fasta_content = content.decode('utf-8')
        success = parser.parse_fasta(fasta_content)
        if not success:
            raise HTTPException(status_code=400, detail="Invalid FASTA file")
        return {"message": "File uploaded and parsed successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/search/")
async def search_sequence(query: SearchQuery) -> List[Dict]:
    """Search for a sequence in the uploaded FASTA file"""
    if not parser.current_sequences:
        raise HTTPException(status_code=400, detail="No FASTA file has been uploaded")
    
    results = parser.search_sequence(query.sequence, query.exact_match)
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)