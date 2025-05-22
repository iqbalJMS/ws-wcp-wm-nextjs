const sanitizeUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    const allowedProtocols = ['http:', 'https:'];

    if (allowedProtocols.includes(parsed.protocol)) {
      return parsed.toString(); // Safe
    }
  } catch (err) {
    return '#';
    // Invalid URL
  }

  return '#'; // Safe fallback
};

export default sanitizeUrl;
