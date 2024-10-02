import { useState, useEffect, useRef, isValidElement } from 'react';
import Link from 'next/link';
import ButtonSecondary from './button.secondary';

type T_TableHeader<T> = {
  title: string;
  field: string;
  width?: string;
  callback?: (_item: T) => string | JSX.Element;
};

type T_TableProps<T> = {
  headers: T_TableHeader<T>[];
  list: T[];
  hover?: boolean;
  drag?: boolean;
  routeName?: string;
  uniqueField?: string;
  height?: number;
  classRow?: (_item: T) => string | undefined;
  onChange?: (_updatedList: { unique: string; position: number }[]) => void;
  itemsPerPage?: number;
};

export default function Table<T>({
  headers,
  list: initialList,
  hover = false,
  routeName,
  uniqueField,
  height,
  classRow,
  itemsPerPage = 5,
}: T_TableProps<T>) {
  const [list, setList] = useState(initialList);
  const [currentPage, setCurrentPage] = useState(1);
  const bodyRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  useEffect(() => {
    setList(initialList);
  }, [initialList]);

  const getValue = (header: T_TableHeader<T>, listItem: T) => {
    // Check if callback is provided and it returns an element or value
    const value =
      typeof header.callback === 'function'
        ? header.callback(listItem)
        : (listItem as any)[header.field];

    // If the value is a JSX element, return it directly
    if (isValidElement(value)) {
      return value;
    }

    // Otherwise, return it as a string and use it as inner HTML
    return <span dangerouslySetInnerHTML={{ __html: value }} />;
  };

  useEffect(() => {
    const activeRow = bodyRef.current?.getElementsByClassName('active-row');
    if (activeRow?.length) {
      const activeRowTop = activeRow[0]?.getBoundingClientRect().top || 0;
      const bodyTop = bodyRef.current?.getBoundingClientRect().top || 0;
      if (bodyRef.current)
        bodyRef.current.scrollTop = activeRowTop - (bodyTop + 200);
    }
  }, [list]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const currentData = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className={`mb-4 ${height ? 'pr-10' : ''}`}>
        <div className="flex items-center border-b-2 border-blue-01">
          {headers.map((headerItem, index) => (
            <div
              key={index}
              className={`px-4 pb-2 items-center justify-center ${headerItem.width ? `${headerItem.width} flex-none` : 'flex-1'}`}
            >
              <div className=" text-blue-01 uppercase font-medium">
                {headerItem.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={bodyRef}
        className={`${height ? `max-h-${height} overflow-y-auto overflow-x-hidden pr-5` : ''}`}
      >
        {currentData.map((element, index) => (
          <div
            key={index}
            className={`mb-5 ${hover ? 'group cursor-pointer' : ''} ${classRow ? classRow(element) : ''}`}
          >
            {routeName && uniqueField ? (
              <Link
                href={{
                  pathname: routeName,
                  query: { [uniqueField]: (element as any)[uniqueField] },
                }}
              >
                <div className="flex items-center  border-b border-black border-opacity-30">
                  {headers.map((headerItem, headerIndex) => (
                    <div
                      key={headerIndex}
                      className={`px-4 pb-2 items-center justify-center  ${headerItem.width ? `${headerItem.width} flex-none` : 'flex-1'}`}
                    >
                      <div className="h-full flex items-start w-full ">
                        <div className="">{getValue(headerItem, element)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ) : (
              <div className="flex items-center  border-b border-black border-opacity-30">
                {headers.map((headerItem, headerIndex) => (
                  <div
                    key={headerIndex}
                    className={`px-4 pb-2 items-center justify-center  ${headerItem.width ? `${headerItem.width} flex-none` : 'flex-1'}`}
                  >
                    <div className="h-full flex items-start w-full ">
                      <div className="">{getValue(headerItem, element)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <div className="bg-white p-10 text-center">
          {/* <img src="/images/illustration/not-found.png" alt="Not Found" className="w-300 h-200 object-cover inline-block mb-10" /> */}
          <div className="font-medium text-lg">No data available.</div>
        </div>
      )}

      {/* Pagination Controls */}
      {list.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-5">
          <ButtonSecondary
            color="blue-01"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className="text-2xl px-[1rem]"
          >
            <div className="text-xl font-light">{'<'}</div>
          </ButtonSecondary>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <ButtonSecondary
            color="blue-01"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="text-2xl px-[1rem]"
          >
            <div className="text-xl font-light">{'>'}</div>
          </ButtonSecondary>
        </div>
      )}
    </div>
  );
}
