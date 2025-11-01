import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from models_video import VideoReel
import os

async def add_second_video():
    # Connect to MongoDB
    mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    db_name = os.getenv("DB_NAME", "test_database")
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    # Create video reel object
    video_reel = VideoReel(
        title="Prepping for Piers!",
        description="Here our crew is prepping the underside of a footing for the installation of a push pier.",
        video_url="https://customer-assets.emergentagent.com/job_waterproof-blog/artifacts/9meauus5_IMG_8667.mov",
        thumbnail_url=None,
        duration=None,
        featured=False,
        order=2
    )
    
    # Insert into database
    result = await db.video_reels.insert_one(video_reel.dict())
    
    print(f"✅ Second video added successfully with ID: {result.inserted_id}")
    print(f"📹 Title: {video_reel.title}")
    print(f"📝 Description: {video_reel.description}")
    print(f"🔗 Video URL: {video_reel.video_url}")
    
    # Count total videos
    count = await db.video_reels.count_documents({})
    print(f"\n📊 Total videos in carousel: {count}")
    
    # Close connection
    client.close()

if __name__ == "__main__":
    asyncio.run(add_second_video())
