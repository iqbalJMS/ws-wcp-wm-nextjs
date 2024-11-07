// import React from 'react';
// function ChildComponent1({ title }: { title: string | number }) {
//   return <div>{title}</div>;
// }

// function ChildComponent2({ title }: { title: string | number }) {
//   return <div>{title}</div>;
// }

// function RenderComponent({
//   componentId,
//   title,
// }: {
//   componentId: string;
//   title: string | number;
// }) {
//   switch (componentId) {
//     case 'component-1':
//       return <ChildComponent1 title={title} />;
//     case 'component-2':
//       return <ChildComponent2 title={title} />;
//   }
// }

// export default function ParentComponent() {
//   const title = 123;
//   return (
//     <div>
//       <RenderComponent componentId={'component-1'} title={title} />
//     </div>
//   );
// }
