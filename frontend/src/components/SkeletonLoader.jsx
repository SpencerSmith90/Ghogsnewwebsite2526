import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ServiceCardSkeleton = () => (
  <div className="space-y-4">
    <Skeleton height={200} />
    <Skeleton height={24} width="80%" />
    <Skeleton count={3} />
  </div>
);

export const ProjectCardSkeleton = () => (
  <div className="space-y-4">
    <Skeleton height={250} />
    <Skeleton height={20} width="60%" />
    <Skeleton count={2} />
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <Skeleton circle width={48} height={48} />
      <div className="flex-1">
        <Skeleton width="40%" />
        <Skeleton width="30%" />
      </div>
    </div>
    <Skeleton count={3} />
  </div>
);

export const StatCardSkeleton = () => (
  <div className="space-y-3">
    <Skeleton height={60} />
    <Skeleton height={24} />
  </div>
);