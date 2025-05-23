export default function debounce<
  F extends (..._args: Parameters<F>) => ReturnType<F>,
>(func: F, waitFor: number = 100): (..._args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
