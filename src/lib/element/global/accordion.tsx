'use client';
import { useEffect, useState } from 'react';

import { ChevronRightIcon } from './chevron-right-icon';
import { ChevronUpIcon } from './chevron-up-icon';

type T_AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: React.ReactNode;
  isOpen?: boolean;
  variant?: 'full' | 'rounded';
};

export default function Accordion({
  renderContent,
  isOpen,
  renderTitle,
  variant,
}: T_AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setAccordionOpen(true);
  }, [isOpen]);

  return (
    <section
      className={`${variant == 'rounded' ? 'shadow-lg rounded-[40px] px-4 py-4 border' : ''}`}
    >
      <div className={`${variant == 'full' ? 'border-b' : ''}`}>
        <div className={`${variant == 'full' ? 'container' : ''}`}>
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className={`${variant == 'full' || variant == 'rounded' ? 'border-none' : 'border-b'} ${styles.buttonContainer}`}
          >
            <div className="w-full">{renderTitle}</div>

            {accordionOpen ? (
              <ChevronUpIcon
                className="stroke-blue-02"
                width={36}
                height={36}
                strokeWidth="2"
              />
            ) : (
              <ChevronRightIcon
                className="stroke-blue-02"
                width={36}
                height={36}
                strokeWidth="2"
              />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${styles.renderContent} ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">{renderContent}</div>
      </div>
    </section>
  );
}

const styles = {
  buttonContainer: 'flex items-center w-full',
  renderContent:
    'grid overflow-hidden transition-all duration-500 ease-in-out  ',
};
