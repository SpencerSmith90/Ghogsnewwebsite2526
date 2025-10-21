import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Wrench, FolderKanban, FileText, Mail } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { getDashboardStats } from '../../services/api';
import AdminLayout from '../../components/AdminLayout';

const Dashboard = () => {
  const { data: stats, loading } = useApi(getDashboardStats);

  const statCards = [
    {
      title: 'Services',
      value: stats?.services || 0,
      icon: Wrench,
      color: 'bg-blue-500'
    },
    {
      title: 'Projects',
      value: stats?.projects || 0,
      icon: FolderKanban,
      color: 'bg-green-500'
    },
    {
      title: 'Blog Posts',
      value: stats?.blog_posts || 0,
      icon: FileText,
      color: 'bg-purple-500'
    },
    {
      title: 'New Contacts',
      value: stats?.new_contacts || 0,
      icon: Mail,
      color: 'bg-orange-500'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </CardTitle>
                    <div className={`${stat.color} p-2 rounded-lg`}>
                      <Icon className="text-white" size={20} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Welcome to Groundhogs Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Use the sidebar navigation to manage your website content. You can edit services,
              projects, blog posts, testimonials, and more.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;