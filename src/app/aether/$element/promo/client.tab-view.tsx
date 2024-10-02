'use client';

import {
  easeInOut,
  useAnimationControls,
  AnimatePresence,
} from 'framer-motion';
import {
  useState,
  useRef,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

import useMediaQuery from '@/lib/hook/useMediaQuery';
import debounce from '@/lib/functions/global/debounce';
import useMutationObserver from '@/lib/hook/useMutationObserver';
import Draggable from '@/lib/element/global/draggable';
import SE_Card from './client.card';
import useIntersectionObserver from '@/lib/hook/useIntersectionObserver';
import {
  T_ImperativeProps,
  T_TabViewProps,
} from '@/app/aether/$element/types/promo';

export const CE_TabViewForwardRef = forwardRef<
  T_ImperativeProps,
  T_TabViewProps
>(TabView);

export default CE_TabViewForwardRef;

function TabView(props: T_TabViewProps, ref: any) {
  const { contents, className, attributeTargetId, attributeName } = props;
  const { active, range, activeRange, rangeLength } = attributeName;
  const [rootMargin, setRootMargin] = useState<string>('0% 0% 0% 0%');
  const [activeSet, setActiveSet] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);
  const dragger = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout>();
  const dragControls = useAnimationControls();
  const { match: isDesktop } = useMediaQuery({
    query: 'screen and (min-width: 1025px)',
  });

  function _setVisibilty(e: IntersectionObserverEntry) {
    const target = e.target as HTMLElement;

    if (e.isIntersecting) {
      target.classList.add('intersecting');
      target.dataset.ratio = e.intersectionRatio.toString();
    } else {
      target.classList.remove('intersecting');
      target.removeAttribute('data-ratio');
    }
  }
  function _snapToActive(
    idx: number | null | '+1' | '-1' = null,
    offset: number = 8
  ) {
    requestAnimationFrame(() => {
      const target = document.getElementById(attributeTargetId) as HTMLElement;
      const container = document.getElementById(
        'tab-view-draggable-container'
      ) as HTMLDivElement;
      const { offsetWidth: wDragger } = document.getElementById(
        'tab-view-draggable-dragger'
      ) as HTMLDivElement;
      const draggerEl = dragger.current as HTMLDivElement;
      const intersectingChildren = draggerEl.querySelectorAll('.intersecting');
      const { paddingRight: pRContainer, paddingLeft: pLContainer } =
        getComputedStyle(container);
      const { width: wContainer } = container.getBoundingClientRect();
      let calculatedEl = Array.from(intersectingChildren).reduce(
        (acc, cur) => {
          const el = cur as HTMLElement;
          const ratio = parseFloat(el.dataset.ratio || '0');
          const idx = parseInt(el.dataset.index || '0');
          const offsetLeft = el.offsetLeft;

          return ratio > acc.ratio ? { ratio, el, idx, offsetLeft } : acc;
        },
        { ratio: 0, el: intersectingChildren[0], idx: 0, offsetLeft: 0 }
      );

      if (idx !== null) {
        const { idx: cElIdx } = calculatedEl;
        const selectIdx = (
          idx === '+1' ? cElIdx + 1 : idx === '-1' ? cElIdx - 1 : idx
        ) as number;
        const children = draggerEl.children;
        const selectEl = children[selectIdx] as HTMLElement;
        const fRatio = parseFloat(selectEl.dataset.ratio || '0');
        const fOffsetLeft = selectEl.offsetLeft;

        calculatedEl = {
          el: selectEl,
          idx: selectIdx,
          ratio: fRatio,
          offsetLeft: fOffsetLeft,
        };
      }

      const { offsetLeft, idx: cElIdx } = calculatedEl;
      const draggerRange = isDesktop
        ? wContainer - parseFloat(pRContainer) - wDragger
        : wContainer -
          parseFloat(pRContainer) -
          parseFloat(pLContainer) -
          wDragger;
      const dest = (offsetLeft - offset) * -1;
      let x = 0;

      if (cElIdx === 0) {
        x = 0;
      } else {
        x = dest < draggerRange ? draggerRange : dest;
      }

      dragControls.start({ x, transition: { duration: 0.3, ease: easeInOut } });

      if (dest === 0 || cElIdx === 0) {
        target.dataset[range] = 'next';
        // @ts-ignore
      } else if (x === draggerRange || cElIdx === contents[activeSet].length) {
        target.dataset[range] = 'prev';
      } else {
        target.dataset[range] = 'both';
      }

      target.dataset[activeRange] = `${cElIdx}`;
    });
  }
  function _registerHandler() {
    return {
      snapTo: _snapToActive,
    };
  }
  function _setActiveSet(mutation: MutationRecord) {
    requestAnimationFrame(() => {
      const { dataset } = mutation.target as HTMLDivElement;
      const target = document.getElementById(attributeTargetId) as HTMLElement;
      const setId = parseInt(dataset[active] || '0');

      setActiveSet(setId);
      target.dataset[rangeLength] = `${contents[setId].length}`;
      timeout.current = setTimeout(() => _snapToActive(0), 100);
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, _registerHandler, [isDesktop]);
  useLayoutEffect(() => {
    const debouncedOnResize = debounce(_onResize, 100);

    function _setRootMargin() {
      requestAnimationFrame(() => {
        const containerEl = container.current as HTMLDivElement;
        const draggerEl = dragger.current as HTMLDivElement;
        const children = draggerEl.children;
        const { width, paddingRight, paddingLeft } =
          getComputedStyle(containerEl);
        const childrenWidthAvg =
          Array.from(children).reduce((acc, cur) => acc + cur.clientWidth, 0) /
          children.length;

        if (isDesktop) {
          setRootMargin(`0% -${parseFloat(width) - childrenWidthAvg}px 0% 0%`);
        } else {
          setRootMargin(
            `0% -${parseFloat(paddingRight) + 20}px 0% -${
              parseFloat(paddingLeft) + 20
            }px`
          );
        }
      });
    }
    function _onResize() {
      _setRootMargin();
      _snapToActive();
    }

    window.addEventListener('resize', debouncedOnResize);
    _setRootMargin();

    return () => {
      window.removeEventListener('resize', debouncedOnResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  useLayoutEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  useIntersectionObserver({
    selector: '.tab-view-card',
    listener: _setVisibilty,
    multiElement: true,
    options: {
      rootMargin,
      root: container.current,
      threshold: Array.from({ length: 11 }, (_, i) =>
        parseFloat((i * 0.1).toFixed(2))
      ),
    },
    deps: [rootMargin, activeSet],
  });

  useMutationObserver({
    selector: `#${attributeTargetId}`,
    listener: _setActiveSet,
    options: {
      attributeFilter: [`data-${active}`],
    },
  });

  return (
    <Draggable
      name="tab-view"
      className={{
        container: [
          'w-max wrapper-space max-w-full px-[calc((max(60vw,15.125rem)+1.25rem)/3.5)]',
          '1025:px-[calc((100vw-var(--wrapper-space))/2)] 1025:pl-0',
          className,
        ].join(' '),
        wrapper: 'h-full',
        dragger: 'flex h-full gap-[calc(1.25rem-(0.5rem*2))]',
      }}
      refs={{ container, dragger }}
      draggerProps={{
        animate: dragControls,
        onDragEnd: () => _snapToActive(),
      }}
    >
      <AnimatePresence initial={false}>
        {contents[activeSet].map((content, idx) => (
          <SE_Card
            idx={idx}
            content={content}
            key={`${activeSet}-${content?.toString()}-${idx}`}
            className="flex-shrink-0 w-[17rem] min-w-[275px] tab-view-card"
          />
        ))}
      </AnimatePresence>
    </Draggable>
  );
}
