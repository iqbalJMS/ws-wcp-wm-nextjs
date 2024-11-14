'use client';

import type { MouseEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMutationObserver from '@/lib/hook/useMutationObserver';
import {
  T_ButtonProps,
  T_ButtonsIdxProps,
  T_ButtonsProps,
} from '@/app/(views)/$element/types/promo';

export function CE_Buttons(props: T_ButtonsProps) {
  const { attributeTargetId, tabViewController, attributeName, className } =
    props;
  const { range } = attributeName;
  const [state, setState] = useState<'prev' | 'next' | 'both'>('next');

  function _onClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const isDisabled =
      (target.id === 'right' && state === 'prev') ||
      (target.id === 'left' && state === 'next');

    if (isDisabled) {
      e.preventDefault();
      return;
    }

    tabViewController.current?.snapTo(target.id === 'right' ? '+1' : '-1');
  }
  function _setRange(mutation: MutationRecord) {
    requestAnimationFrame(() => {
      const { dataset } = mutation.target as HTMLDivElement;

      setState(dataset[range] as 'prev' | 'next' | 'both');
    });
  }

  useMutationObserver({
    selector: `#${attributeTargetId}`,
    listener: _setRange,
    options: {
      attributeFilter: [`data-${range}`],
    },
  });

  return (
    <div className={['flex items-center gap-5', className].join(' ')}>
      <Button id="left" disabled={state === 'next'} onClick={_onClick}>
        {'<'}
      </Button>
      <Button id="right" disabled={state === 'prev'} onClick={_onClick}>
        {'>'}
      </Button>
    </div>
  );
}

export function CE_ButtonsIdx(props: T_ButtonsIdxProps) {
  const { attributeTargetId, tabViewController, attributeName, className } =
    props;
  const { activeRange, rangeLength } = attributeName;
  const [state, setState] = useState({
    active: 0,
    length: 0,
  });

  function _onClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;

    tabViewController.current?.snapTo(parseInt(target.id));
  }
  function _setState(mutation: MutationRecord) {
    requestAnimationFrame(() => {
      const { dataset } = mutation.target as HTMLDivElement;

      setState({
        active: parseInt(dataset[activeRange] as string),
        length: parseInt(dataset[rangeLength] as string),
      });
    });
  }
  function _camelToKebabCase(str: string) {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }
  function _setInitialState(e: Element) {
    requestAnimationFrame(() => {
      const { dataset } = e as HTMLElement;

      setState({
        active: parseInt(dataset[activeRange] as string),
        length: parseInt(dataset[rangeLength] as string),
      });
    });
  }

  useMutationObserver({
    selector: `#${attributeTargetId}`,
    listener: _setState,
    callback: _setInitialState,
    options: {
      attributeFilter: [
        `data-${_camelToKebabCase(activeRange)}`,
        `data-${_camelToKebabCase(rangeLength)}`,
      ],
    },
  });

  return (
    <div className={['flex items-center gap-[0.625rem]', className].join(' ')}>
      {Array.from({ length: state.length }).map((_, idx) => (
        <button
          key={idx}
          id={`${idx}`}
          className="size-[0.9375rem] border-[0.125rem] rounded-full border-gray-400"
          onClick={_onClick}
        >
          {state.active === idx && (
            <motion.span
              layoutId="buttons-idx"
              className="size-full bg-red-700 block rounded-full pointer-events-none"
            />
          )}
        </button>
      ))}
    </div>
  );
}

function Button(props: T_ButtonProps) {
  const { children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={[
        'size-[3.75rem] grid place-content-center bg-red-700 text-white',
        'disabled:opacity-50',
      ].join(' ')}
    >
      {children}
    </button>
  );
}
