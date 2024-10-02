'use client';

import React from 'react';

type T_PaginationProps = {
  currentPage: number;
  totalPages: number;
  variant: 'simple' | 'complex';
  onPageChange: (_page: number) => void;
};

const PaginationButton: React.FC<{
  label: string | number;
  isDisabled: boolean;
  isActive?: boolean;
  onClick: () => void;
}> = ({ label, isDisabled, isActive, onClick }) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    className={`px-4 py-2 border border-red-600 rounded ${isDisabled ? 'cursor-not-allowed opacity-50 bg-red-600 text-gray-300' : isActive ? 'bg-white border-red-600 text-red-600' : 'bg-red-600 text-white'}`}
  >
    {label}
  </button>
);

const Pagination: React.FC<T_PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === 2 || i === totalPages - 1) {
        pages.push('...');
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex space-x-2">
      {variant === 'complex' && (
        <PaginationButton
          label="first"
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        />
      )}

      <PaginationButton
        label={variant === 'complex' ? 'previous' : '<'}
        isDisabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />

      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <PaginationButton
            key={index}
            label={page}
            isDisabled={false}
            isActive={page === currentPage}
            onClick={() => handlePageChange(page)}
          />
        ) : (
          <span key={index} className="px-4 py-2">
            ...
          </span>
        )
      )}

      <PaginationButton
        label={variant === 'complex' ? 'next' : '>'}
        isDisabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />

      {variant === 'complex' && (
        <PaginationButton
          label="last"
          isDisabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        />
      )}
    </div>
  );
};

export default Pagination;
