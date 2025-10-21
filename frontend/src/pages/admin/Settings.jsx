import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { useApi } from '../../hooks/useApi';
import { adminGetSiteSettings, adminUpdateSiteSettings } from '../../services/api';
import { toast } from 'sonner';

const Settings = () => {
  const { data: settings, loading, refetch } = useApi(adminGetSiteSettings);
  const [formData, setFormData] = useState({
    company_name: '',
    tagline: '',
    description: '',
    phone: '',
    email: '',
    address: '',
    logo: ''
  });

  useEffect(() => {
    if (settings) {
      setFormData({
        company_name: settings.company_name || '',
        tagline: settings.tagline || '',
        description: settings.description || '',
        phone: settings.phone || '',
        email: settings.email || '',
        address: settings.address || '',
        logo: settings.logo || ''
      });
    }
  }, [settings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminUpdateSiteSettings(formData);
      toast.success('Settings updated successfully');
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to update settings');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Loading settings...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Site Settings</h2>
          <p className="text-gray-600 mt-1">Manage your website's general settings</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <Input
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tagline</label>
                <Input
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address / Service Area</label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Logo URL</label>
                <Input
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  required
                />
                {formData.logo && (
                  <div className="mt-3">
                    <img
                      src={formData.logo}
                      alt="Logo preview"
                      className="h-12"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                  Save Settings
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Settings;