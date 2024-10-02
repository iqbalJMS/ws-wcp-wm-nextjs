import { useIsomorphicLayoutEffect } from "framer-motion";

export type IntersectionObserverParams = {
  selector: string;
  options?: Partial<IntersectionObserverInit>;
  listener: (
    _value: IntersectionObserverEntry,
    _index: number,
    _array: IntersectionObserverEntry[],
  ) => void;
  deps?: any[];
  multiElement?: boolean;
  callback?: (_nodes: NodeListOf<Element>) => void;
};

export default function useIntersectionObserver(
  params: IntersectionObserverParams,
) {
  const { selector, options, listener, deps, multiElement, callback } = params;

  useIsomorphicLayoutEffect(() => {
    const node = document.querySelectorAll(selector);

    callback?.(node);

    if (node.length === 0) return;
    const observer = new IntersectionObserver((intersections) => {
      intersections.forEach(listener);
    }, options);

    if (multiElement) {
      node.forEach((item) => observer.observe(item));
    } else {
      observer.observe(node[0]);
    }

    return () => {
      observer.disconnect();
    };
  }, [...(deps || [])]);
}
