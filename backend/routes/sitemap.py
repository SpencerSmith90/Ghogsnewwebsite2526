from fastapi import APIRouter, Response
from motor.motor_asyncio import AsyncIOMotorDatabase
from datetime import datetime
from typing import List, Dict

router = APIRouter()

# Database will be injected
db: AsyncIOMotorDatabase = None

def set_db(database: AsyncIOMotorDatabase):
    global db
    db = database

# Static pages configuration
STATIC_PAGES = [
    # Main pages
    {"loc": "/", "priority": "1.0", "changefreq": "weekly"},
    {"loc": "/about", "priority": "0.8", "changefreq": "monthly"},
    {"loc": "/why-groundhogs", "priority": "0.9", "changefreq": "monthly"},
    {"loc": "/contact", "priority": "0.9", "changefreq": "monthly"},
    {"loc": "/service-areas", "priority": "0.8", "changefreq": "monthly"},
    {"loc": "/blog", "priority": "0.7", "changefreq": "weekly"},
    {"loc": "/testimonials", "priority": "0.6", "changefreq": "monthly"},
    {"loc": "/warranty", "priority": "0.6", "changefreq": "monthly"},
    {"loc": "/our-systems", "priority": "0.6", "changefreq": "monthly"},
    {"loc": "/resources", "priority": "0.6", "changefreq": "monthly"},
    {"loc": "/careers", "priority": "0.5", "changefreq": "monthly"},
    
    # City pages (HIGH PRIORITY for SEO)
    {"loc": "/thunder-bay-foundation-repair", "priority": "0.9", "changefreq": "weekly"},
    {"loc": "/winnipeg-foundation-repair", "priority": "0.9", "changefreq": "weekly"},
    {"loc": "/sudbury-foundation-repair", "priority": "0.9", "changefreq": "weekly"},
    
    # Service pages
    {"loc": "/services/exterior-waterproofing", "priority": "0.8", "changefreq": "monthly"},
    {"loc": "/services/foundation-repair-replacement", "priority": "0.8", "changefreq": "monthly"},
    {"loc": "/services/push-pier-systems", "priority": "0.7", "changefreq": "monthly"},
    {"loc": "/services/concentric-pier-systems", "priority": "0.7", "changefreq": "monthly"},
    {"loc": "/services/interior-waterproofing", "priority": "0.7", "changefreq": "monthly"},
    {"loc": "/services/steel-post-beam-systems", "priority": "0.7", "changefreq": "monthly"},
    {"loc": "/services/everbrace-wall-restoration", "priority": "0.7", "changefreq": "monthly"},
    
    # Blog posts (as static pages for now)
    {"loc": "/blog/interior-waterproofing-systems", "priority": "0.7", "changefreq": "monthly"},
    {"loc": "/blog/advanced-exterior-waterproofing-thunder-bay", "priority": "0.7", "changefreq": "monthly"},
]

def generate_sitemap_xml(pages: List[Dict], blog_posts: List[Dict]) -> str:
    """Generate sitemap XML from pages and blog posts"""
    
    today = datetime.now().strftime("%Y-%m-%d")
    base_url = "https://groundhogs.ca"
    
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    # Add static pages
    for page in pages:
        xml += '  <url>\n'
        xml += f'    <loc>{base_url}{page["loc"]}</loc>\n'
        xml += f'    <lastmod>{today}</lastmod>\n'
        xml += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        xml += f'    <priority>{page["priority"]}</priority>\n'
        xml += '  </url>\n'
    
    # Add blog posts dynamically
    for post in blog_posts:
        xml += '  <url>\n'
        xml += f'    <loc>{base_url}/blog/{post["slug"]}</loc>\n'
        
        # Use post's created_at date if available
        if "created_at" in post and post["created_at"]:
            try:
                post_date = post["created_at"].strftime("%Y-%m-%d")
            except:
                post_date = today
        else:
            post_date = today
        
        xml += f'    <lastmod>{post_date}</lastmod>\n'
        xml += f'    <changefreq>monthly</changefreq>\n'
        xml += f'    <priority>0.6</priority>\n'
        xml += '  </url>\n'
    
    xml += '</urlset>'
    
    return xml

@router.get("/sitemap.xml")
async def get_sitemap():
    """
    Dynamically generate sitemap.xml with all static pages and blog posts
    """
    try:
        # Get all blog posts from database (including those without status field)
        blog_posts = []
        if db is not None:
            cursor = db.blog_posts.find({})
            blog_posts = await cursor.to_list(length=None)
        
        # Generate sitemap XML
        sitemap_xml = generate_sitemap_xml(STATIC_PAGES, blog_posts)
        
        return Response(content=sitemap_xml, media_type="application/xml")
        
    except Exception as e:
        # Fallback to static pages only if database fails
        print(f"Error generating sitemap: {str(e)}")
        sitemap_xml = generate_sitemap_xml(STATIC_PAGES, [])
        return Response(content=sitemap_xml, media_type="application/xml")
