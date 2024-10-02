import { useIsomorphicLayoutEffect } from "framer-motion";

export type MutationObserverParams = {
  selector: string;
  options?: Partial<MutationObserverInit>;
  listener: (
    _mutation: MutationRecord,
    _index: number,
    _array: MutationRecord[],
  ) => void;
  deps?: any[];
  callback?: (_nodes: Element) => void;
};

export default function useMutationObserver(params: MutationObserverParams) {
  const { selector, options, listener, deps, callback } = params;

  useIsomorphicLayoutEffect(() => {
    const node = document.querySelectorAll(selector)[0];

    callback?.(node);

    if (!node) return;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(listener);
    });

    observer.observe(node, options);

    return () => {
      observer.disconnect();
    };
  }, [...(deps || [])]);
}
