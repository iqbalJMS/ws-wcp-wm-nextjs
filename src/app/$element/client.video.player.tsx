'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface VideoPlayerVariant1Props {
  videoId: string;
  title: string;
  backgroundImage: string;
}

const VideoPlayerVariant1: React.FC<VideoPlayerVariant1Props> = ({
  videoId,
  title,
  backgroundImage,
}) => {
  return (
    <div className="relative flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover opacity-30" />

      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative flex justify-center py-6 w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
      >
        <iframe
          className="w-full max-w-[41.25rem] h-64 sm:h-96"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

interface CompanyProfileProps {
  videoUrl?: string;
  title: string;
  description: string;
  linkUrl: string;
}

const VideoPlayerVariant2: React.FC<CompanyProfileProps> = ({
  videoUrl,
  title,
  description,
  linkUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-12 px-6">
      <div>
        {!isPlaying ? (
          <div className="relative w-full h-full bg-black">
            <Image
              src={`https://img.youtube.com/vi/${videoUrl}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full aspect-video h-64 sm:h-96"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-6.292-3.707A1 1 0 007 8.392v7.216a1 1 0 001.46.891l6.292-3.707a1 1 0 000-1.784z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full aspect-video h-64 sm:h-96"
            src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <a href={linkUrl} className="text-blue-600 hover:underline">
          Lihat &gt;
        </a>
      </div>
    </div>
  );
};

export { VideoPlayerVariant2, VideoPlayerVariant1 };
