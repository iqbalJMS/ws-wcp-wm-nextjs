'use client';

import { easeInOut, motion, useAnimationControls } from 'framer-motion';
import { useState, useRef, useLayoutEffect, type MouseEvent } from 'react';

import Draggable from '@/lib/element/global/draggable';
import debounce from '@/lib/functions/global/debounce';
import {
  T_ButtonTabProps,
  T_TabProps,
} from '@/app/aether/$element/types/promo';
import Link from 'next/link';
import { CE_Buttons } from './client.navigation';

export default function CE_Tab(props: T_TabProps) {
  const {
    options,
    className,
    attributeName,
    attributeTargetId,
    tabViewController,
    contents,
  } = props;
  const { active: activeAttr } = attributeName;
  const dragControls = useAnimationControls();
  const active = useRef<HTMLButtonElement>(null);
  const [current, setCurrent] = useState(0);
  const timeout = useRef<NodeJS.Timeout>();
  const isDragging = useRef(false);

  function _dragIntercept(e: string) {
    switch (e) {
      case 'start':
        isDragging.current = true;
        break;
      case 'end':
        timeout.current = setTimeout(() => {
          isDragging.current = false;
        }, 500);
        break;
    }
  }

  function _onClick(e: MouseEvent<HTMLButtonElement>, n: number) {
    if (isDragging.current) return;
    const target = e.target as HTMLButtonElement;
    const targetAttribute = document.querySelector(
      attributeTargetId
    ) as HTMLElement;
    targetAttribute.dataset[activeAttr] = n.toString();

    setCurrent(n);
    _snapToActive(target);
  }

  function _snapToActive(target: HTMLButtonElement) {
    requestAnimationFrame(() => {
      const container = document.getElementById(
        'tab-draggable-container'
      ) as HTMLDivElement;
      const { offsetWidth: wDragger } = document.getElementById(
        'tab-draggable-dragger'
      ) as HTMLDivElement;
      const { paddingLeft: pLContainer, width: wContainer } =
        getComputedStyle(container);
      const { left: lContainer } = container.getBoundingClientRect();
      const { left: lTarget, width: wTarget } = target.getBoundingClientRect();
      const { offsetLeft: oLTarget } = target;
      const leftBoundary = lContainer + parseFloat(pLContainer);
      const rightBoundary = lContainer + parseFloat(wContainer);
      const draggerRange =
        parseFloat(wContainer) - parseFloat(pLContainer) * 2 - wDragger;

      if (lTarget < leftBoundary) {
        dragControls.start({
          x: oLTarget * -1,
          transition: { duration: 0.3, ease: easeInOut },
        });
      } else if (rightBoundary < lTarget + wTarget) {
        const dest = oLTarget * -1;

        dragControls.start({
          x: dest < draggerRange ? draggerRange : dest,
          transition: { duration: 0.3, ease: easeInOut },
        });
      }
    });
  }

  useLayoutEffect(() => {
    const debouncedOnResize = debounce(_onResize, 100);

    function _onResize() {
      const target = active.current as HTMLButtonElement;

      _snapToActive(target);
    }

    window.addEventListener('resize', debouncedOnResize);

    return () => {
      window.removeEventListener('resize', debouncedOnResize);
      clearTimeout(timeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Draggable
        name="tab"
        className={{
          container: ['w-max max-w-full mb-7', className].join(' '),
          wrapper: 'h-full',
          dragger: 'flex h-full',
        }}
        draggerProps={{
          onDragEnd: () => _dragIntercept('end'),
          onDragStart: () => _dragIntercept('start'),
          animate: dragControls,
        }}
      >
        {options?.map((option, idx) => (
          <Button
            key={option?.title.toString()}
            activeRef={active}
            isActive={idx === current}
            onClick={(e) => _onClick(e, idx)}
          >
            {option.title}
          </Button>
        ))}
      </Draggable>
      <div className=" text-sm text-gray-600 mb-[0.875rem] 1025-only:text-center">
        {options?.[current]?.informationText}
      </div>
      <Link
        href={options?.[current]?.showMore?.url}
        className={[
          'uppercase flex items-center mb-7 w-max text-blue-700 font-medium',
          'hoverable:hover:underline 1025-only:mx-auto',
        ].join(' ')}
      >
        {options?.[current]?.showMore?.title} {'>'}
      </Link>

      {Number(contents[current]) > 3 && (
        <CE_Buttons
          tabViewController={tabViewController}
          attributeTargetId="section"
          className="1025-only:hidden"
          attributeName={{ range: 'range' }}
        />
      )}
    </>
  );
}

function Button(props: T_ButtonTabProps) {
  const { isActive = false, children, activeRef, ...rest } = props;

  function _setRef(e: HTMLButtonElement) {
    if (!isActive) return;

    activeRef.current = e;
  }

  return (
    <>
      <button
        {...rest}
        ref={_setRef}
        data-active={isActive}
        className={[
          'uppercase text-xs py-[0.625rem] px-5 border-b border-gray-400 text-gray-600',
          'flex-shrink-0 relative mb-3',
          'hoverable:hover:text-blue-700 hoverable:hover:font-medium hoverable:hover:border-blue-700',
          'data-[active=true]:text-blue-700 data-[active=true]:font-medium',
        ].join(' ')}
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="tab-underline"
            className={[
              'absolute left-0 right-0 -bottom-[0.125rem] h-1 bg-blue-700',
              'after:content-[""] after:absolute after:left-1/2 -after:bottom-1',
              'after:-translate-x-1/2 after:border-l-transparent after:border-r-transparent',
              'after:border-t-blue-700 after:border-l-[0.625rem] after:border-r-[0.625rem] after:border-t-[0.625rem]',
            ].join(' ')}
          />
        )}
      </button>
    </>
  );
}
