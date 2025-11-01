import os
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional

async def send_contact_notification(
    name: str,
    email: str,
    phone: str,
    subject: str,
    message: str,
    address: Optional[str] = None,
    city: Optional[str] = None
):
    """
    Send email notification when a contact form is submitted
    """
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    notification_email = os.getenv("NOTIFICATION_EMAIL")
    
    if not all([smtp_user, smtp_password, notification_email]):
        print("⚠️ Email configuration incomplete. Skipping email notification.")
        return False
    
    try:
        # Create the email message
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Contact Form Submission - {name}"
        msg["From"] = smtp_user
        msg["To"] = notification_email
        
        # Create HTML email body
        html_body = f"""
        <html>
          <head>
            <style>
              body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
              .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
              .header {{ background-color: #ea580c; color: white; padding: 20px; text-align: center; }}
              .content {{ background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }}
              .field {{ margin-bottom: 15px; }}
              .label {{ font-weight: bold; color: #555; }}
              .value {{ margin-top: 5px; }}
              .footer {{ margin-top: 20px; padding: 10px; text-align: center; font-size: 12px; color: #777; }}
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🔔 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">{name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:{email}">{email}</a></div>
                </div>
                
                {f'<div class="field"><div class="label">Phone:</div><div class="value"><a href="tel:{phone}">{phone}</a></div></div>' if phone else ''}
                
                {f'<div class="field"><div class="label">Service Interest:</div><div class="value">{service}</div></div>' if service else ''}
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">{message.replace(chr(10), '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                This notification was sent from your Groundhogs website contact form.<br>
                You can view all submissions in your admin dashboard.
              </div>
            </div>
          </body>
        </html>
        """
        
        # Create plain text version as fallback
        text_body = f"""
New Contact Form Submission

Name: {name}
Email: {email}
{f'Phone: {phone}' if phone else ''}
{f'Service Interest: {service}' if service else ''}

Message:
{message}

---
This notification was sent from your Groundhogs website contact form.
You can view all submissions in your admin dashboard.
        """
        
        # Attach both HTML and plain text versions
        part_text = MIMEText(text_body, "plain")
        part_html = MIMEText(html_body, "html")
        msg.attach(part_text)
        msg.attach(part_html)
        
        # Send the email
        await aiosmtplib.send(
            msg,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_password,
            start_tls=True,
        )
        
        print(f"✅ Email notification sent successfully to {notification_email}")
        return True
        
    except Exception as e:
        print(f"❌ Failed to send email notification: {str(e)}")
        return False
