'use client';

import Image from 'next/image';
import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose?: () => void;
  hasButtonClose?: boolean;
  user?: {
    username: string;
    role: string;
    list: Array<{
      title: string;
      subTitle: Array<{
        title: string;
      }>;
    }>;
  };
}

const CE_ModalProfile: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  hasButtonClose,
  user,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-[60rem] p-8 relative">
        {hasButtonClose && (
          <button
            onClick={onClose}
            className="absolute flex items-center gap-2 top-3 right-5 text-gray-500 hover:text-gray-800"
          >
            <p className="bg-yellow-500 flex items-center justify-center h-5 w-5 rounded-full text-white text-xs">
              ✕
            </p>
            Close
          </button>
        )}
        <div className="flex items-center gap-6 py-8">
          <div className="aspect-square rounded-lg w-full max-w-[22rem] shadow-lg relative">
            <Image
              fill
              alt="user-profile"
              className="rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&s"
            />
          </div>

          <div className="text-left w-full">
            {user?.username && (
              <h2 className="text-2xl font-semibold mt-4">{user?.username}</h2>
            )}
            {user?.role && (
              <p className="text-sm text-blue-900 mb-6 mt-2">{user?.role}</p>
            )}
            {user?.list.map((item) => (
              <div key={item.title} className="mb-6">
                <h3 className="text-base font-semibold mb-4 text-blue-900">
                  {item?.title}
                </h3>
                {item?.subTitle.map((sub, index) => (
                  <p key={index} className="text-gray-700 text-sm mt-3">
                    {sub?.title}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CE_ModalProfile;
