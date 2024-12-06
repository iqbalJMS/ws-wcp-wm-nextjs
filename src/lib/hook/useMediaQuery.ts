import { useState, useLayoutEffect } from 'react';

export type MediaQueryParam = {
  query: string;
  revalidate?: number;
};

export default function useMediaQuery(params: MediaQueryParam) {
  const { query, revalidate } = params;
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    if (!query) return;
    const mql = window.matchMedia(query);

    function _query(mql: MediaQueryListEvent) {
      setMatches(mql.matches);
    }

    mql.addEventListener('change', _query);
    setMatches(mql.matches);

    return () => {
      mql.removeEventListener('change', _query);
    };
  }, [query, revalidate]);

  return { match: matches };
}
