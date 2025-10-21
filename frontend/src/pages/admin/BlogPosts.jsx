import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { adminGetBlogPosts, adminCreateBlogPost, adminUpdateBlogPost, adminDeleteBlogPost } from '../../services/api';
import { toast } from 'sonner';

const BlogPosts = () => {
  const { data: posts, loading, refetch } = useApi(adminGetBlogPosts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    author_name: '',
    author_role: '',
    author_avatar: '',
    category: '',
    featured: false,
    published: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await adminUpdateBlogPost(editingPost.id, formData);
        toast.success('Blog post updated successfully');
      } else {
        await adminCreateBlogPost(formData);
        toast.success('Blog post created successfully');
      }
      setDialogOpen(false);
      resetForm();
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save blog post');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await adminDeleteBlogPost(id);
        toast.success('Blog post deleted successfully');
        refetch();
      } catch (error) {
        toast.error('Failed to delete blog post');
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author_name: post.author_name,
      author_role: post.author_role,
      author_avatar: post.author_avatar,
      category: post.category,
      featured: post.featured,
      published: post.published
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      image: '',
      author_name: '',
      author_role: '',
      author_avatar: '',
      category: '',
      featured: false,
      published: true
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700" onClick={resetForm}>
                <Plus size={20} className="mr-2" />
                Add Blog Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Slug</label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Content (HTML)</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Featured Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Author Name</label>
                    <Input
                      value={formData.author_name}
                      onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Author Role</label>
                    <Input
                      value={formData.author_role}
                      onChange={(e) => setFormData({ ...formData, author_role: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Author Avatar URL</label>
                  <Input
                    value={formData.author_avatar}
                    onChange={(e) => setFormData({ ...formData, author_avatar: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="featured" className="text-sm font-medium">
                      Featured Post
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="published" className="text-sm font-medium">
                      Published
                    </label>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    {editingPost ? 'Update' : 'Create'} Post
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading blog posts...</div>
        ) : (
          <div className="grid gap-6">
            {posts && posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {post.title}
                        {post.featured && (
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                        {!post.published && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            Draft
                          </span>
                        )}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        {post.category} • Slug: {post.slug}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-32 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <img
                          src={post.author_avatar}
                          alt={post.author_name}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>{post.author_name} • {post.author_role}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default BlogPosts;