import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Plus, Edit, Trash2, Video } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { adminGetVideoReels, adminCreateVideoReel, adminUpdateVideoReel, adminDeleteVideoReel } from '../../services/api';
import { toast } from 'sonner';

const VideoReels = () => {
  const { data: reels, loading, refetch } = useApi(adminGetVideoReels);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingReel, setEditingReel] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video_url: '',
    thumbnail_url: '',
    duration: 0,
    featured: false,
    order: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingReel) {
        await adminUpdateVideoReel(editingReel.id, formData);
        toast.success('Video reel updated successfully');
      } else {
        await adminCreateVideoReel(formData);
        toast.success('Video reel created successfully');
      }
      setDialogOpen(false);
      resetForm();
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save video reel');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this video reel?')) {
      try {
        await adminDeleteVideoReel(id);
        toast.success('Video reel deleted successfully');
        refetch();
      } catch (error) {
        toast.error('Failed to delete video reel');
      }
    }
  };

  const handleEdit = (reel) => {
    setEditingReel(reel);
    setFormData({
      title: reel.title,
      description: reel.description || '',
      video_url: reel.video_url,
      thumbnail_url: reel.thumbnail_url || '',
      duration: reel.duration || 0,
      featured: reel.featured,
      order: reel.order
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingReel(null);
    setFormData({
      title: '',
      description: '',
      video_url: '',
      thumbnail_url: '',
      duration: 0,
      featured: false,
      order: 0
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Manage Video Reels</h2>
            <p className="text-gray-600 mt-1">Add short videos to showcase your work</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700" onClick={resetForm}>
                <Plus size={20} className="mr-2" />
                Add Video Reel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingReel ? 'Edit Video Reel' : 'Add New Video Reel'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Video URL * (mp4, webm)</label>
                  <Input
                    value={formData.video_url}
                    onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                    placeholder="https://example.com/video.mp4"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload your video to a hosting service and paste the direct URL here
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
                  <Input
                    value={formData.thumbnail_url}
                    onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration (seconds)</label>
                    <Input
                      type="number"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Order</label>
                    <Input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded"
                  />
                  <label htmlFor="featured" className="text-sm font-medium">
                    Featured Video
                  </label>
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    {editingReel ? 'Update' : 'Create'} Video Reel
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
          <div className="text-center py-12">Loading video reels...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {reels && reels.length === 0 ? (
              <Card className="col-span-2">
                <CardContent className="py-12 text-center text-gray-500">
                  <Video size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>No video reels yet. Add your first video to showcase your work!</p>
                </CardContent>
              </Card>
            ) : (
              reels && reels.map((reel) => (
                <Card key={reel.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {reel.title}
                          {reel.featured && (
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                        </CardTitle>
                        {reel.description && (
                          <p className="text-sm text-gray-500 mt-2">{reel.description}</p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(reel)}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:bg-red-50"
                          onClick={() => handleDelete(reel.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <video
                      src={reel.video_url}
                      poster={reel.thumbnail_url}
                      className="w-full rounded-lg"
                      controls
                      preload="metadata"
                    />
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <span>Duration: {reel.duration}s</span>
                      <span>Order: {reel.order}</span>
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

export default VideoReels;
