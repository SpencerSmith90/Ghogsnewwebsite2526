import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

const VideoReelsCarousel = ({ reels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});
  const videoRefs = useRef({});

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = (reelId) => {
    const video = videoRefs.current[reelId];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying({ ...isPlaying, [reelId]: true });
      } else {
        video.pause();
        setIsPlaying({ ...isPlaying, [reelId]: false });
      }
    }
  };

  // Auto-pause when not visible
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && parseInt(id) !== currentIndex) {
        video.pause();
        setIsPlaying((prev) => ({ ...prev, [id]: false }));
      }
    });
  }, [currentIndex]);

  if (!reels || reels.length === 0) return null;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reels.map((reel, index) => (
            <div key={reel.id} className="min-w-full px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Video Player */}
                <div className="relative aspect-[9/16] md:aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={reel.video_url}
                    poster={reel.thumbnail_url}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted
                  />
                  
                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <Button
                      size="lg"
                      onClick={() => togglePlay(index)}
                      className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16 p-0"
                    >
                      {isPlaying[index] ? (
                        <Pause size={32} fill="currentColor" />
                      ) : (
                        <Play size={32} fill="currentColor" className="ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  {reel.duration && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {Math.floor(reel.duration / 60)}:{(reel.duration % 60).toString().padStart(2, '0')}
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {reel.title}
                  </h3>
                  {reel.description && (
                    <p className="text-gray-600 text-lg mb-6">
                      {reel.description}
                    </p>
                  )}
                  <Button
                    onClick={() => togglePlay(index)}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    {isPlaying[index] ? 'Pause Video' : 'Watch Now'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {reels.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {reels.length > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-orange-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoReelsCarousel;