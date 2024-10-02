'use client';

import mergeRefs from 'merge-refs';
import { tv } from 'tailwind-variants';
import { useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

import type { HTMLMotionProps } from 'framer-motion';
import type { RefObject } from 'react';

export const DRAGGABLE_STYLES = tv({
  slots: {
    container: 'w-full overflow-hidden relative',
    wrapper: '',
    dragger: 'w-max cursor-grab',
  },
});

export type DraggableProps = {
  children: React.ReactNode;
  name: string;
  className?: Partial<typeof DRAGGABLE_STYLES.slots>;
  refs?: {
    container?: RefObject<HTMLDivElement>;
    wrapper?: RefObject<HTMLDivElement>;
    dragger?: RefObject<HTMLDivElement>;
  };
  draggerProps?: Partial<Omit<HTMLMotionProps<'div'>, 'children'>>;
};

export default function Draggable(props: DraggableProps) {
  const { children, className, name, draggerProps, refs } = props;
  const { onDragStart, onDragEnd, ...restDraggerProps } = draggerProps || {};
  const { container: cRef, wrapper: wRef, dragger: dRef } = refs || {};
  const scope = useRef<HTMLDivElement>(null);
  const states = useRef({
    mouseHold: false,
    mouseRelease: false,
    mouseLeave: false,
  });
  const { wrapper, dragger, container } = DRAGGABLE_STYLES();

  function _cursorGrab(e: MouseEvent) {
    const event = e.type;
    const draggable = document.getElementById(`${name}-draggable-dragger`);

    switch (event) {
      case 'mousedown':
        states.current.mouseHold = true;
        draggable?.classList.add('cursor-grabbing');
        break;
      case 'mouseup':
        states.current.mouseRelease = true;
        draggable?.classList.remove('cursor-grabbing');
        break;
      case 'mouseleave':
        states.current.mouseLeave = true;
        break;
      case 'mouseenter':
        if (!states.current.mouseRelease && states.current.mouseLeave) {
          draggable?.classList.remove('cursor-grabbing');
        }

        states.current.mouseHold = false;
        states.current.mouseRelease = false;
        states.current.mouseLeave = false;
        break;
    }
  }

  return (
    <div
      ref={cRef}
      id={`${name}-draggable-container`}
      className={container({ className: className?.container })}
    >
      <div
        ref={mergeRefs(scope, wRef)}
        className={wrapper({ className: className?.wrapper })}
      >
        <motion.div
          {...restDraggerProps}
          drag="x"
          ref={dRef}
          dragConstraints={scope}
          id={`${name}-draggable-dragger`}
          className={dragger({ className: className?.dragger })}
          onMouseDown={_cursorGrab}
          onMouseUp={_cursorGrab}
          onMouseEnter={_cursorGrab}
          onMouseLeave={_cursorGrab}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
