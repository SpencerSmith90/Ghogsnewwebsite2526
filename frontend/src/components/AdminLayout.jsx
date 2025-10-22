import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Wrench, FolderKanban, FileText, MessageSquare, Mail, Settings, Video, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Wrench, label: 'Services', path: '/admin/services' },
    { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
    { icon: Video, label: 'Video Reels', path: '/admin/videos' },
    { icon: FileText, label: 'Blog Posts', path: '/admin/blog' },
    { icon: MessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
    { icon: Mail, label: 'Contacts', path: '/admin/contacts' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <img
            src="https://groundhogs.ca/wp-content/themes/groundhogs/img/logo-footer.svg"
            alt="Groundhogs"
            className="h-10 brightness-0 invert"
          />
          <p className="text-sm text-gray-400 mt-2">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {menuItems.find((item) => item.path === location.pathname)?.label || 'Admin'}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {localStorage.getItem('admin_username') || 'Admin'}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;