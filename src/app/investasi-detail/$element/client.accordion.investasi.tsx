'use client';
import { useEffect, useState } from 'react';
import { PlusIcon } from '@/lib/element/global/icons/plus-icon';
import { MinusIcon } from '@/lib/element/global/icons/minus-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_AccordionProps = {
  renderContent: string;
  renderTitle: React.ReactNode;
  isOpen?: boolean;
};

export default function CE_AccordionInvestasi({
  renderContent,
  isOpen,
  renderTitle,
}: T_AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setAccordionOpen(true);
  }, [isOpen]);

  return (
    <section className="flex flex-col mb-4">
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`shadow-lg rounded-[40px] px-6 py-4 cursor-pointer bg-[#080087] relative z-10`}
      >
        <div>
          <div>
            <button className={`${styles.buttonContainer}`}>
              <div className="w-full text-white text-start">
                {renderTitle ?? ''}
              </div>

              {accordionOpen ? (
                <MinusIcon
                  className="stroke-white-02 fill-white"
                  width={28}
                  height={28}
                  strokeWidth="2"
                />
              ) : (
                <PlusIcon
                  className="stroke-white-02 fill-white"
                  width={28}
                  height={28}
                  strokeWidth="2"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.renderContent} ${accordionOpen ? 'grid-rows-[1fr] opacity-100 pt-16 pb-6 w-full' : 'grid-rows-[0fr] opacity-0'}`}
      >
        {parseHTMLToReact(
          renderContent,
          'overflow-hidden accordion-content parsehtml w-full',
          true
        )}
      </div>
    </section>
  );
}

const styles = {
  buttonContainer: 'flex items-center w-full',
  renderContent:
    'grid overflow-hidden transition-all duration-500 ease-in-out rounded-b-[40px] bg-[#EEEE] -mt-10 py-6 px-0 lg:px-5',
};
