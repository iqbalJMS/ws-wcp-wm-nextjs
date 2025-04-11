'use client';
import { useEffect } from 'react';

export default function ScrollToTopSlug() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
