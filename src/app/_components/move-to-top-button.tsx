'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function MoveToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header-div');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      if (window.scrollY > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <Button
        onClick={moveToTop}
        className="fixed bottom-8 right-5 h-12 w-12 rounded-full p-2"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    )
  );
}
