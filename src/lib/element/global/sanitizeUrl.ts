import DOMPurify from 'dompurify';

const sanitizeUrl = (url: string) => {
  // Check if the URL starts with http or https
  const isValidUrl = /^(http|https):\/\//i.test(url);
  return isValidUrl ? DOMPurify.sanitize(url) : '#'; // Return a safe fallback if invalid
};

export default sanitizeUrl;
