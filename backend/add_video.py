import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from models_video import VideoReel
import os

async def add_video():
    # Connect to MongoDB
    mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    db_name = os.getenv("DB_NAME", "test_database")
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    # Create video reel object
    video_reel = VideoReel(
        title="Foundation Replacement at its finest.",
        description="Watch our expert crew remove an entire foundation and basement with precision",
        video_url="https://customer-assets.emergentagent.com/job_waterproof-blog/artifacts/jdwn50pb_IMG_9289.mov",
        thumbnail_url=None,
        duration=None,
        featured=True,
        order=1
    )
    
    # Insert into database
    result = await db.video_reels.insert_one(video_reel.dict())
    
    print(f"✅ Video added successfully with ID: {result.inserted_id}")
    print(f"📹 Title: {video_reel.title}")
    print(f"📝 Description: {video_reel.description}")
    print(f"🔗 Video URL: {video_reel.video_url}")
    
    # Close connection
    client.close()

if __name__ == "__main__":
    asyncio.run(add_video())
