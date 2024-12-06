import { useEffect } from 'react';

const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    if (typeof window != undefined) return;
    document?.addEventListener('mousedown', listener);
    document?.addEventListener('touchstart', listener);
    return () => {
      if (typeof window != undefined) return;
      document?.removeEventListener('mousedown', listener);
      document?.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
