import React from 'react';

export default async function page() {
  return (
    <div className="w-full h-screen bg-black">
      <div
        style={{
          position: 'relative',
          paddingTop: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            border: 'none',
            width: '100%',
            height: '100%',
            left: 0,
            top: 130,
          }}
          src="https://online.fliphtml5.com/vgsnb/rwfb/"
        ></iframe>
      </div>
    </div>
  );
}
