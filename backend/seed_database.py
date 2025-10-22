#!/usr/bin/env python3
"""
Seed database with initial data for Groundhogs website
"""
import asyncio
import os
import sys
from pathlib import Path
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Add backend to path
sys.path.insert(0, str(Path(__file__).parent))

from seed_data import (
    site_settings, services, materials, projects,
    property_types, differentiators, testimonials, blog_posts
)
from auth import get_password_hash

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def seed_database():
    # Connect to MongoDB
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    print("🗑️  Clearing existing data...")
    await db.site_settings.delete_many({})
    await db.services.delete_many({})
    await db.materials.delete_many({})
    await db.projects.delete_many({})
    await db.property_types.delete_many({})
    await db.differentiators.delete_many({})
    await db.testimonials.delete_many({})
    await db.blog_posts.delete_many({})
    await db.admin_users.delete_many({})
    
    # Insert site settings
    print("⚙️  Inserting site settings...")
    await db.site_settings.insert_one(site_settings)
    
    # Insert services
    print("🔧 Inserting services...")
    await db.services.insert_many(services)
    
    # Insert materials
    print("🧱 Inserting materials...")
    await db.materials.insert_many(materials)
    
    # Insert projects
    print("📁 Inserting projects...")
    await db.projects.insert_many(projects)
    
    # Insert property types
    print("🏠 Inserting property types...")
    await db.property_types.insert_many(property_types)
    
    # Insert differentiators
    print("⭐ Inserting differentiators...")
    await db.differentiators.insert_many(differentiators)
    
    # Insert testimonials
    print("💬 Inserting testimonials...")
    await db.testimonials.insert_many(testimonials)
    
    # Insert blog posts
    print("📝 Inserting blog posts...")
    await db.blog_posts.insert_many(blog_posts)
    
    # Insert video reels
    print("🎬 Inserting video reels...")
    await db.video_reels.insert_many(video_reels)
    
    # Create default admin user (username: admin, password: admin123)
    print("👤 Creating default admin user...")
    admin_user = {
        "username": "admin",
        "email": "admin@groundhogs.ca",
        "password_hash": get_password_hash("admin123")
    }
    await db.admin_users.insert_one(admin_user)
    
    print("✅ Database seeding completed successfully!")
    print("\n📌 Default Admin Credentials:")
    print("   Username: admin")
    print("   Password: admin123")
    print("   ⚠️  Please change the password after first login!\n")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
