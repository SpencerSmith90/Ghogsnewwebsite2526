from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import timedelta, datetime
from models import (
    AdminLogin, AdminToken, AdminUser,
    Service, ServiceCreate, ServiceUpdate,
    Project, ProjectCreate, ProjectUpdate,
    BlogPost, BlogPostCreate, BlogPostUpdate,
    Testimonial, TestimonialCreate, TestimonialUpdate,
    ContactSubmission, ContactSubmissionUpdate,
    SiteSettings, SiteSettingsUpdate
)
from auth import verify_password, create_access_token, verify_token, get_password_hash
from motor.motor_asyncio import AsyncIOMotorDatabase

router = APIRouter()

# This will be injected in server.py
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

@router.post("/login", response_model=AdminToken)
async def admin_login(login: AdminLogin):
    user = await db.admin_users.find_one({"username": login.username})
    if not user or not verify_password(login.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(
        data={"sub": user["username"]},
        expires_delta=timedelta(hours=24)
    )
    return AdminToken(access_token=access_token)

@router.get("/dashboard-stats")
async def get_dashboard_stats(username: str = Depends(verify_token)):
    services_count = await db.services.count_documents({})
    projects_count = await db.projects.count_documents({})
    blog_count = await db.blog_posts.count_documents({})
    contacts_count = await db.contact_submissions.count_documents({"status": "new"})
    
    return {
        "services": services_count,
        "projects": projects_count,
        "blog_posts": blog_count,
        "new_contacts": contacts_count
    }

# Services endpoints
@router.get("/services", response_model=List[Service])
async def admin_get_services(username: str = Depends(verify_token)):
    services = await db.services.find().sort("order", 1).to_list(100)
    return [Service(**service) for service in services]

@router.post("/services", response_model=Service)
async def admin_create_service(service: ServiceCreate, username: str = Depends(verify_token)):
    service_obj = Service(**service.dict())
    await db.services.insert_one(service_obj.dict())
    return service_obj

@router.put("/services/{service_id}", response_model=Service)
async def admin_update_service(service_id: str, service: ServiceUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in service.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    result = await db.services.find_one_and_update(
        {"id": service_id},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Service not found")
    return Service(**result)

@router.delete("/services/{service_id}")
async def admin_delete_service(service_id: str, username: str = Depends(verify_token)):
    result = await db.services.delete_one({"id": service_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Service not found")
    return {"message": "Service deleted successfully"}

# Projects endpoints
@router.get("/projects", response_model=List[Project])
async def admin_get_projects(username: str = Depends(verify_token)):
    projects = await db.projects.find().sort("created_at", -1).to_list(100)
    return [Project(**project) for project in projects]

@router.post("/projects", response_model=Project)
async def admin_create_project(project: ProjectCreate, username: str = Depends(verify_token)):
    project_obj = Project(**project.dict())
    await db.projects.insert_one(project_obj.dict())
    return project_obj

@router.put("/projects/{project_id}", response_model=Project)
async def admin_update_project(project_id: str, project: ProjectUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in project.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    result = await db.projects.find_one_and_update(
        {"id": project_id},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**result)

@router.delete("/projects/{project_id}")
async def admin_delete_project(project_id: str, username: str = Depends(verify_token)):
    result = await db.projects.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": "Project deleted successfully"}

# Blog endpoints
@router.get("/blog", response_model=List[BlogPost])
async def admin_get_blog_posts(username: str = Depends(verify_token)):
    posts = await db.blog_posts.find().sort("created_at", -1).to_list(100)
    return [BlogPost(**post) for post in posts]

@router.post("/blog", response_model=BlogPost)
async def admin_create_blog_post(post: BlogPostCreate, username: str = Depends(verify_token)):
    post_obj = BlogPost(**post.dict())
    await db.blog_posts.insert_one(post_obj.dict())
    return post_obj

@router.put("/blog/{post_id}", response_model=BlogPost)
async def admin_update_blog_post(post_id: str, post: BlogPostUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in post.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    result = await db.blog_posts.find_one_and_update(
        {"id": post_id},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return BlogPost(**result)

@router.delete("/blog/{post_id}")
async def admin_delete_blog_post(post_id: str, username: str = Depends(verify_token)):
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}

# Testimonials endpoints
@router.get("/testimonials", response_model=List[Testimonial])
async def admin_get_testimonials(username: str = Depends(verify_token)):
    testimonials = await db.testimonials.find().sort("created_at", -1).to_list(100)
    return [Testimonial(**test) for test in testimonials]

@router.post("/testimonials", response_model=Testimonial)
async def admin_create_testimonial(testimonial: TestimonialCreate, username: str = Depends(verify_token)):
    testimonial_obj = Testimonial(**testimonial.dict())
    await db.testimonials.insert_one(testimonial_obj.dict())
    return testimonial_obj

@router.put("/testimonials/{testimonial_id}", response_model=Testimonial)
async def admin_update_testimonial(testimonial_id: str, testimonial: TestimonialUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in testimonial.dict().items() if v is not None}
    
    result = await db.testimonials.find_one_and_update(
        {"id": testimonial_id},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return Testimonial(**result)

@router.delete("/testimonials/{testimonial_id}")
async def admin_delete_testimonial(testimonial_id: str, username: str = Depends(verify_token)):
    result = await db.testimonials.delete_one({"id": testimonial_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return {"message": "Testimonial deleted successfully"}

# Contact submissions endpoints
@router.get("/contacts", response_model=List[ContactSubmission])
async def admin_get_contacts(username: str = Depends(verify_token)):
    contacts = await db.contact_submissions.find().sort("created_at", -1).to_list(100)
    return [ContactSubmission(**contact) for contact in contacts]

@router.put("/contacts/{contact_id}", response_model=ContactSubmission)
async def admin_update_contact(contact_id: str, contact: ContactSubmissionUpdate, username: str = Depends(verify_token)):
    result = await db.contact_submissions.find_one_and_update(
        {"id": contact_id},
        {"$set": {"status": contact.status}},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Contact submission not found")
    return ContactSubmission(**result)

# Site settings endpoints
@router.get("/site-settings", response_model=SiteSettings)
async def admin_get_site_settings(username: str = Depends(verify_token)):
    settings = await db.site_settings.find_one()
    if not settings:
        raise HTTPException(status_code=404, detail="Site settings not found")
    return SiteSettings(**settings)

@router.put("/site-settings", response_model=SiteSettings)
async def admin_update_site_settings(settings: SiteSettingsUpdate, username: str = Depends(verify_token)):
    update_data = {k: v for k, v in settings.dict().items() if v is not None}
    
    result = await db.site_settings.find_one_and_update(
        {},
        {"$set": update_data},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Site settings not found")
    return SiteSettings(**result)