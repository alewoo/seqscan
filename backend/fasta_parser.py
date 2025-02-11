# implement fasta parsing & search logic
from Bio import SeqIO
from typing import List, Dict, Optional
from io import StringIO

class FastaParser:
    def __init__(self):
        self.current_sequences = []

    def parse_fasta(self, fasta_content: str) -> bool:
        """Parse FASTA content and store sequences"""
        try:
            fasta_handle = StringIO(fasta_content)
            self.current_sequences = list(SeqIO.parse(fasta_handle, "fasta"))
            return True
        except Exception as e:
            print(f"Error parsing FASTA: {str(e)}")
            return False
    
    def search_sequence(self, query: str, exact_match: bool = True) -> List[Dict]:
        """Search for a sequence in stored FASTA sequences"""
        results = []
        query = query.upper()

        for record in self.current_sequences:
            sequence = str(record.seq).upper()
            found = False
            if exact_match:
                found = query == sequence
            else:
                found = query in sequence

            if found:
                results.append({
                    "id": record.id,
                    "description": record.description,
                    "sequence": str(record.seq)
                })
                
        return results