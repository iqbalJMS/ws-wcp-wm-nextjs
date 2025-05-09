'use client';
import { useEffect, useState } from 'react';
import { PlusIcon } from '@/lib/element/global/icons/plus-icon';
import { MinusIcon } from '@/lib/element/global/icons/minus-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: React.ReactNode;
  isOpen?: boolean;
};

export default function CE_AcordionReksaDana({
  renderContent,
  isOpen,
  renderTitle,
}: T_AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  useEffect(() => {
    if (isOpen) setAccordionOpen(true);
  }, [isOpen]);

  return (
    <section className="flex flex-col items-center mb-4">
      <div
        className={`shadow-lg rounded-[40px] py-4 w-full px-5 md:w-9/12 xl:w-5/12 bg-privatecolor relative z-10`}
      >
        <div>
          <div>
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className={`${styles.buttonContainer}`}
            >
              <div className="w-full text-white text-start">
                {parseHTMLToReact((renderTitle as any) ?? '')}
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
        className={`${styles.renderContent} ${accordionOpen ? 'grid-rows-[1fr] opacity-100 pt-16 pb-6 py-4 w-full px-5 md:w-9/12 xl:w-5/12' : 'grid-rows-[0fr] opacity-0 py-4 w-full px-5 md:w-9/12 xl:w-5/12'}`}
      >
        <div
          className="overflow-hidden accordion-content parsehtml"
          dangerouslySetInnerHTML={{ __html: (renderContent as any) ?? '' }}
        />
      </div>
    </section>
  );
}

const styles = {
  buttonContainer: 'flex items-center w-full',
  renderContent:
    'grid overflow-hidden transition-all duration-500 ease-in-out rounded-b-[40px] bg-[#EEEE] -mt-10 py-6 px-16',
};
