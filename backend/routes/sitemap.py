from fastapi import APIRouter, Response

router = APIRouter()

SITEMAP_XML = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://groundhogs.ca/</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>https://groundhogs.ca/about</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/contact</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/service-areas</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/blog</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/testimonials</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/warranty</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/our-systems</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/resources</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/careers</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <!-- City Pages (HIGH PRIORITY) -->
  <url>
    <loc>https://groundhogs.ca/thunder-bay-foundation-repair</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/winnipeg-foundation-repair</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/sudbury-foundation-repair</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Service Pages -->
  <url>
    <loc>https://groundhogs.ca/services/exterior-waterproofing</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/foundation-repair-replacement</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/push-pier-systems</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/concentric-pier-systems</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/interior-waterproofing</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/steel-post-beam-systems</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://groundhogs.ca/services/everbrace-wall-restoration</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Blog Posts -->
  <url>
    <loc>https://groundhogs.ca/blog/advanced-exterior-waterproofing-thunder-bay</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
</urlset>"""

@router.get("/sitemap.xml")
async def get_sitemap():
    """Serve sitemap.xml with proper XML content type"""
    return Response(content=SITEMAP_XML, media_type="application/xml")
