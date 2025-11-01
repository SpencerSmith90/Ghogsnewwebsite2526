import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os

async def cleanup_videos():
    # Connect to MongoDB
    mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    db_name = os.getenv("DB_NAME", "test_database")
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    # Delete all videos that are NOT the Groundhogs foundation video
    result = await db.video_reels.delete_many({
        "video_url": {"$ne": "https://customer-assets.emergentagent.com/job_waterproof-blog/artifacts/jdwn50pb_IMG_9289.mov"}
    })
    
    print(f"✅ Deleted {result.deleted_count} old sample videos")
    
    # Count remaining videos
    count = await db.video_reels.count_documents({})
    print(f"📹 Remaining videos in database: {count}")
    
    # Show the remaining video
    video = await db.video_reels.find_one({})
    if video:
        print(f"\n✅ Your video:")
        print(f"   Title: {video['title']}")
        print(f"   Description: {video['description']}")
        print(f"   URL: {video['video_url']}")
    
    # Close connection
    client.close()

if __name__ == "__main__":
    asyncio.run(cleanup_videos())
