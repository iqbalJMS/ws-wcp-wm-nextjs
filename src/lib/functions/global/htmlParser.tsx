import React from "react";

export function parseHTMLToReact(htmlString: string): React.ReactNode {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
