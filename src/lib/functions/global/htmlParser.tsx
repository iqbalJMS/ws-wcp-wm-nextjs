import DOMPurify from 'isomorphic-dompurify';

export const BASE_URL =
  process.env.SELF_BASE_URL || process.env.NEXT_PUBLIC_SELF_BASE_URL || '';

const bodyRender = (body: string) =>
  body.replaceAll(
    '/sites/default/files/',
    `${BASE_URL}/api/file/?path=/sites/default/files/`
  );

export function parseHTMLToReact(
  htmlString: string,
  className = '',
  hasBaseUrl = false
): React.ReactNode {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          !hasBaseUrl ? htmlString : bodyRender(htmlString)
        ),
      }}
    />
  );
}
