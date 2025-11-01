from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import (
    SiteSettings, Service, Project, Material, PropertyType,
    Differentiator, Testimonial, BlogPost, ContactSubmission, ContactSubmissionCreate
)
from motor.motor_asyncio import AsyncIOMotorDatabase
from email_service import send_contact_notification

router = APIRouter()

# This will be injected in server.py
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

@router.get("/site-settings", response_model=SiteSettings)
async def get_site_settings():
    settings = await db.site_settings.find_one()
    if not settings:
        raise HTTPException(status_code=404, detail="Site settings not found")
    return SiteSettings(**settings)

@router.get("/services", response_model=List[Service])
async def get_services():
    services = await db.services.find().sort("order", 1).to_list(100)
    return [Service(**service) for service in services]

@router.get("/services/{slug}", response_model=Service)
async def get_service_by_slug(slug: str):
    service = await db.services.find_one({"slug": slug})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return Service(**service)

@router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    query = {"category": category} if category else {}
    projects = await db.projects.find(query).sort("created_at", -1).to_list(100)
    return [Project(**project) for project in projects]

@router.get("/materials", response_model=List[Material])
async def get_materials():
    materials = await db.materials.find().sort("order", 1).to_list(100)
    return [Material(**material) for material in materials]

@router.get("/property-types", response_model=List[PropertyType])
async def get_property_types():
    types = await db.property_types.find().sort("order", 1).to_list(100)
    return [PropertyType(**pt) for pt in types]

@router.get("/differentiators", response_model=List[Differentiator])
async def get_differentiators():
    diffs = await db.differentiators.find().sort("order", 1).to_list(100)
    return [Differentiator(**diff) for diff in diffs]

@router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    testimonials = await db.testimonials.find().sort([("featured", -1), ("created_at", -1)]).to_list(100)
    return [Testimonial(**test) for test in testimonials]

@router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts(category: Optional[str] = None):
    query = {"published": True}
    if category:
        query["category"] = category
    posts = await db.blog_posts.find(query).sort([("featured", -1), ("created_at", -1)]).to_list(100)
    return [BlogPost(**post) for post in posts]

@router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog_post_by_slug(slug: str):
    post = await db.blog_posts.find_one({"slug": slug, "published": True})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return BlogPost(**post)

@router.post("/contact", response_model=ContactSubmission)
async def submit_contact(contact: ContactSubmissionCreate):
    contact_obj = ContactSubmission(**contact.dict())
    
    # Save to database
    await db.contact_submissions.insert_one(contact_obj.dict())
    
    # Send email notification (non-blocking - if it fails, still return success)
    try:
        await send_contact_notification(
            name=contact.name,
            email=contact.email,
            phone=contact.phone,
            subject=contact.subject,
            message=contact.message,
            address=contact.address,
            city=contact.city
        )
    except Exception as e:
        print(f"Email notification failed but submission saved: {str(e)}")
    
    return contact_obj