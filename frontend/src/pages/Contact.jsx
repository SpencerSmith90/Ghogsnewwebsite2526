import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useApi } from '../hooks/useApi';
import { getSiteSettings } from '../services/api';

const Contact = () => {
  const { data: siteSettings, loading: settingsLoading } = useApi(getSiteSettings);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    subject: '',
    message: '',
    estimate_type: 'Virtual Estimate',
    photo_urls: []
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) return [];

    setUploading(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.urls || [];
    } catch (error) {
      toast.error('Failed to upload photos');
      return [];
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Upload photos first
      let photoUrls = [];
      if (selectedFiles.length > 0) {
        photoUrls = await uploadFiles();
      }

      const { submitContact } = await import('../services/api');
      await submitContact({
        ...formData,
        photo_urls: photoUrls
      });
      
      toast.success('Thank you! We\'ll contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        subject: '',
        message: '',
        estimate_type: 'Virtual Estimate',
        photo_urls: []
      });
      setSelectedFiles([]);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📸 Upload Photos → Get Quote in Hours
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Estimate
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-4">
            Fast virtual estimates or schedule an in-person visit. Either way, you'll get transparent pricing and expert advice.
          </p>
          <a href="tel:1-888-907-3777" className="text-2xl md:text-3xl font-bold text-orange-400 hover:text-orange-300">
            📞 1-888-907-3777
          </a>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Winnipeg"
                    />
                  </div>
                  <div>
                    <label htmlFor="estimate_type" className="block text-sm font-medium mb-2">
                      Estimate Type *
                    </label>
                    <select
                      id="estimate_type"
                      name="estimate_type"
                      value={formData.estimate_type}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Virtual Estimate">Virtual Estimate (Fast - Upload Photos)</option>
                      <option value="In-Person">In-Person Estimate</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Virtual estimates typically provided within hours
                    </p>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Foundation Repair Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Description *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your foundation concerns..."
                    />
                  </div>
                  <div>
                    <label htmlFor="photos" className="block text-sm font-medium mb-2">
                      Upload Photos (Optional)
                    </label>
                    <Input
                      id="photos"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload photos of the issue (max 5 files, 10MB each)
                    </p>
                    {selectedFiles.length > 0 && (
                      <div className="mt-2 text-sm text-gray-600">
                        {selectedFiles.length} file(s) selected
                      </div>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={uploading}
                  >
                    {uploading ? 'Uploading photos...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {settingsLoading || !siteSettings ? (
                    <div className="text-center py-8 text-gray-500">Loading...</div>
                  ) : (
                    <>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <a href={`tel:${siteSettings.phone}`} className="text-gray-600 hover:text-orange-600">
                            {siteSettings.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a href={`mailto:${siteSettings.email}`} className="text-gray-600 hover:text-orange-600">
                            {siteSettings.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Main Headquarters</h3>
                          <p className="text-gray-600">415 Fort William Road</p>
                          <p className="text-gray-600">Thunder Bay, Ontario</p>
                          <p className="text-gray-600">P7B 2Z5</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Service Area</h3>
                          <p className="text-gray-600">{siteSettings.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Office Hours</h3>
                          <p className="text-gray-600">Monday to Friday: 9am to 5pm</p>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Simple Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial contact to completed repair, here's what to expect
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Reach Out',
                description: 'Call, email, or fill out our form to get started'
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'We provide a virtual or on-site evaluation'
              },
              {
                step: '3',
                title: 'Proposal',
                description: 'Receive a detailed repair plan and fixed price'
              },
              {
                step: '4',
                title: 'Repair',
                description: 'Our team executes the plan cleanly and on time'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;