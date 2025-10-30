from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid

def generate_id():
    return str(uuid.uuid4())

# Site Settings
class SiteSettings(BaseModel):
    id: str = Field(default_factory=generate_id)
    company_name: str
    tagline: str
    description: str
    phone: str
    email: str
    address: str
    logo: str

class SiteSettingsUpdate(BaseModel):
    company_name: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    logo: Optional[str] = None

# Services
class Service(BaseModel):
    id: str = Field(default_factory=generate_id)
    title: str
    slug: str
    description: str
    image: str
    featured: bool = False
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ServiceCreate(BaseModel):
    title: str
    slug: str
    description: str
    image: str
    featured: bool = False
    order: int = 0

class ServiceUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    featured: Optional[bool] = None
    order: Optional[int] = None

# Projects
class Project(BaseModel):
    id: str = Field(default_factory=generate_id)
    title: str
    description: str
    image: str
    category: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    image: str
    category: str

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None

# Materials
class Material(BaseModel):
    id: str = Field(default_factory=generate_id)
    name: str
    description: Optional[str] = None
    image: str
    order: int = 0

class MaterialCreate(BaseModel):
    name: str
    description: Optional[str] = None
    image: str
    order: int = 0

class MaterialUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    order: Optional[int] = None

# Property Types
class PropertyType(BaseModel):
    id: str = Field(default_factory=generate_id)
    type: str
    description: str
    image: str
    order: int = 0

class PropertyTypeCreate(BaseModel):
    type: str
    description: str
    image: str
    order: int = 0

class PropertyTypeUpdate(BaseModel):
    type: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    order: Optional[int] = None

# Differentiators
class Differentiator(BaseModel):
    id: str = Field(default_factory=generate_id)
    title: str
    description: str
    icon: str
    order: int = 0

class DifferentiatorCreate(BaseModel):
    title: str
    description: str
    icon: str
    order: int = 0

class DifferentiatorUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None
    order: Optional[int] = None

# Testimonials
class Testimonial(BaseModel):
    id: str = Field(default_factory=generate_id)
    name: str
    location: str
    text: str
    avatar: str
    rating: int = 5
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

class TestimonialCreate(BaseModel):
    name: str
    location: str
    text: str
    avatar: str
    rating: int = 5
    featured: bool = False

class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    text: Optional[str] = None
    avatar: Optional[str] = None
    rating: Optional[int] = None
    featured: Optional[bool] = None

# Blog Posts
class BlogPost(BaseModel):
    id: str = Field(default_factory=generate_id)
    title: str
    slug: str
    excerpt: str
    content: str
    image: str
    author_name: str
    author_role: str
    author_avatar: str
    category: str
    featured: bool = False
    published: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    image: str
    author_name: str
    author_role: str
    author_avatar: str
    category: str
    featured: bool = False
    published: bool = True

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    image: Optional[str] = None
    author_name: Optional[str] = None
    author_role: Optional[str] = None
    author_avatar: Optional[str] = None
    category: Optional[str] = None
    featured: Optional[bool] = None
    published: Optional[bool] = None

# Contact Submissions
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=generate_id)
    name: str
    email: str
    phone: str
    address: Optional[str] = None
    city: Optional[str] = None
    subject: str
    message: str
    photo_urls: List[str] = []
    status: str = "new"  # new, contacted, resolved
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    phone: str
    address: Optional[str] = None
    city: Optional[str] = None
    subject: str
    message: str
    photo_urls: List[str] = []

class ContactSubmissionUpdate(BaseModel):
    status: str

# Admin Users
class AdminUser(BaseModel):
    id: str = Field(default_factory=generate_id)
    username: str
    email: str
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AdminLogin(BaseModel):
    username: str
    password: str

class AdminToken(BaseModel):
    access_token: str
    token_type: str = "bearer"