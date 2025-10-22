from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import datetime
from models_video import VideoReel, VideoReelCreate, VideoReelUpdate
from auth import verify_token
from motor.motor_asyncio import AsyncIOMotorDatabase

router = APIRouter()

# This will be injected in server.py
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

# Public endpoints
@router.get("/video-reels", response_model=List[VideoReel])
async def get_video_reels():
    reels = await db.video_reels.find().sort([("featured", -1), ("order", 1)]).to_list(100)
    return [VideoReel(**reel) for reel in reels]

# Admin endpoints
@router.get("/admin/video-reels", response_model=List[VideoReel])
async def admin_get_video_reels(username: str = Depends(verify_token)):
    reels = await db.video_reels.find().sort("order", 1).to_list(100)
    return [VideoReel(**reel) for reel in reels]

@router.post("/admin/video-reels", response_model=VideoReel)
async def admin_create_video_reel(reel: VideoReelCreate, username: str = Depends(verify_token)):
    reel_obj = VideoReel(**reel.dict())
    await db.video_reels.insert_one(reel_obj.dict())
    return reel_obj

@router.put("/admin/video-reels/{reel_id}", response_model=VideoReel)
async def admin_update_video_reel(reel_id: str, reel: VideoReelUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in reel.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    result = await db.video_reels.find_one_and_update(
        {"id": reel_id},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Video reel not found")
    return VideoReel(**result)

@router.delete("/admin/video-reels/{reel_id}")
async def admin_delete_video_reel(reel_id: str, username: str = Depends(verify_token)):
    result = await db.video_reels.delete_one({"id": reel_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Video reel not found")
    return {"message": "Video reel deleted successfully"}