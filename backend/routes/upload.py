from fastapi import APIRouter, UploadFile, File, HTTPException, Request
from typing import List
import os
import uuid
from pathlib import Path

router = APIRouter()

# Create uploads directory if it doesn't exist
UPLOAD_DIR = Path("/app/backend/uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@router.post("/upload")
async def upload_files(request: Request, files: List[UploadFile] = File(...)):
    """
    Upload multiple files and return their full URLs
    """
    uploaded_urls = []
    
    # Get the base URL from environment or request
    base_url = os.getenv("BACKEND_BASE_URL")
    if not base_url:
        # Fallback: construct from request
        base_url = str(request.base_url).rstrip('/')
    
    try:
        for file in files:
            # Generate unique filename
            file_extension = os.path.splitext(file.filename)[1]
            unique_filename = f"{uuid.uuid4()}{file_extension}"
            file_path = UPLOAD_DIR / unique_filename
            
            # Save file
            contents = await file.read()
            with open(file_path, "wb") as f:
                f.write(contents)
            
            # Return full URL
            file_url = f"{base_url}/uploads/{unique_filename}"
            uploaded_urls.append(file_url)
        
        return {"urls": uploaded_urls, "message": f"Successfully uploaded {len(files)} file(s)"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")
