import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Mail, Phone, Calendar } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { adminGetContacts, adminUpdateContactStatus } from '../../services/api';
import { toast } from 'sonner';

const Contacts = () => {
  const { data: contacts, loading, refetch } = useApi(adminGetContacts);

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      await adminUpdateContactStatus(contactId, newStatus);
      toast.success('Status updated successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Contact Submissions</h2>
          <div className="text-sm text-gray-600">
            {contacts?.length || 0} total submissions
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading contacts...</div>
        ) : (
          <div className="grid gap-6">
            {contacts && contacts.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-gray-500">
                  No contact submissions yet
                </CardContent>
              </Card>
            ) : (
              contacts && contacts.map((contact) => (
                <Card key={contact.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-3">
                          {contact.name}
                          <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(contact.status)}`}>
                            {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                          </span>
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href={`mailto:${contact.email}`} className="hover:text-orange-600">
                              {contact.email}
                            </a>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-2">
                              <Phone size={16} />
                              <a href={`tel:${contact.phone}`} className="hover:text-orange-600">
                                {contact.phone}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(contact.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Select
                          value={contact.status}
                          onValueChange={(value) => handleStatusChange(contact.id, value)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Subject:</h4>
                        <p className="text-gray-700">{contact.subject}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Message:</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Contacts;