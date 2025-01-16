'use client';

import dynamic from 'next/dynamic';

import { AboutUsSection } from './about-us-section';

const TestimonialsSection = dynamic(
  () => import('./testimonials-section').then(mod => mod.TestimonialsSection),
  { ssr: false },
);

const LatestNewsSection = dynamic(
  () => import('./latest-news-section').then(mod => mod.LatestNewsSection),
  { ssr: false },
);

function HomePageSections() {
  return (
    <>
      <AboutUsSection />
      <TestimonialsSection />
      <LatestNewsSection />
    </>
  );
}

export { HomePageSections };
