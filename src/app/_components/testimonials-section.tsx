'use client';

import { useEffect, useState } from 'react';

// NOTE: To load script not until the element is in view, otherwise would make the page load slower
// Improve first contentful paint by lazy loading the widget
function LazyLoadWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const target = document.querySelector(
      '.elfsight-app-bedbdd71-7b59-4c33-9768-e0ca85eb5478',
    );
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const script = document.createElement('script');
      script.src = 'https://apps.elfsight.com/p/platform.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [isLoaded]);

  return (
    <div className="elfsight-app-bedbdd71-7b59-4c33-9768-e0ca85eb5478 trip-advisor"></div>
  );
}

function TestimonialsSection() {
  return (
    <div className="xl:px-common-horizontal my-10 flex flex-col items-center gap-4 px-6 py-10 lg:px-16">
      <div className="mb-6 text-center">
        <h1 className="text-lg font-semibold tracking-tight text-primary lg:text-[32px]">
          {'SECTIONS.TESTIMONIALS'}
        </h1>
        <p className="text-sm text-muted-foreground lg:text-lg">
          {'SECTIONS.TESTIMONIALS_DESCRIPTION'}
        </p>
      </div>
      <div className="flex max-w-[900px] items-center">
        <LazyLoadWidget />
      </div>
    </div>
  );
}

export { TestimonialsSection };
