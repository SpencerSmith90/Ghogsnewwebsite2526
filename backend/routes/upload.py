from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
import os
import uuid
import boto3
from botocore.exceptions import ClientError

router = APIRouter()

# Initialize R2 client
def get_r2_client():
    """Initialize and return Cloudflare R2 client"""
    return boto3.client(
        's3',
        endpoint_url=os.getenv("R2_ENDPOINT_URL"),
        aws_access_key_id=os.getenv("R2_ACCESS_KEY_ID"),
        aws_secret_access_key=os.getenv("R2_SECRET_ACCESS_KEY"),
        region_name='auto'
    )

@router.post("/upload")
async def upload_files(files: List[UploadFile] = File(...)):
    """
    Upload multiple files to Cloudflare R2 and return their public URLs
    """
    uploaded_urls = []
    
    # Get R2 configuration
    bucket_name = os.getenv("R2_BUCKET_NAME", "groundhogs-uploads")
    r2_public_url = os.getenv("R2_PUBLIC_URL")
    
    # If no public URL is set, we'll need to construct it from the endpoint
    if not r2_public_url:
        endpoint = os.getenv("R2_ENDPOINT_URL", "")
        account_id = endpoint.split("//")[1].split(".")[0] if "//" in endpoint else ""
        r2_public_url = f"https://pub-{account_id}.r2.dev/{bucket_name}"
    
    try:
        s3_client = get_r2_client()
        
        for file in files:
            # Generate unique filename
            file_extension = os.path.splitext(file.filename)[1]
            unique_filename = f"{uuid.uuid4()}{file_extension}"
            
            # Read file contents
            contents = await file.read()
            
            # Upload to R2
            s3_client.put_object(
                Bucket=bucket_name,
                Key=unique_filename,
                Body=contents,
                ContentType=file.content_type or 'application/octet-stream'
            )
            
            # Return public URL
            file_url = f"{r2_public_url}/{unique_filename}"
            uploaded_urls.append(file_url)
            
            print(f"✅ Uploaded {file.filename} to R2 as {unique_filename}")
        
        return {"urls": uploaded_urls, "message": f"Successfully uploaded {len(files)} file(s)"}
    
    except ClientError as e:
        print(f"❌ R2 upload error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"R2 upload failed: {str(e)}")
    except Exception as e:
        print(f"❌ Upload error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")
