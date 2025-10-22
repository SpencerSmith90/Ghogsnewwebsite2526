from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

def generate_id():
    return str(uuid.uuid4())

# Video Reels
class VideoReel(BaseModel):
    id: str = Field(default_factory=generate_id)
    title: str
    description: Optional[str] = None
    video_url: str  # URL to video file (mp4, webm, etc.)
    thumbnail_url: Optional[str] = None
    duration: Optional[int] = None  # Duration in seconds
    featured: bool = False
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class VideoReelCreate(BaseModel):
    title: str
    description: Optional[str] = None
    video_url: str
    thumbnail_url: Optional[str] = None
    duration: Optional[int] = None
    featured: bool = False
    order: int = 0

class VideoReelUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    video_url: Optional[str] = None
    thumbnail_url: Optional[str] = None
    duration: Optional[int] = None
    featured: Optional[bool] = None
    order: Optional[int] = None