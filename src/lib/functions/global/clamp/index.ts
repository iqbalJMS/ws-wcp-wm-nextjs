import { T_ClampParams } from "./type";

/**
 * Calculate the clamped value based on the min and max values and the min and max viewports.
 * Returns string of CSS clamp function.
 * Params unit is in pixels.
 */
export default function clamp(params: T_ClampParams): string {
  const {
    minValue,
    maxValue,
    minViewport,
    maxViewport,
    baseFontSize = 16,
  } = params;

  const preferredViewport =
    100 * ((maxValue - minValue) / (maxViewport - minViewport));
  const preferredRelative =
    (minViewport * maxValue - maxViewport * minValue) /
    (minViewport - maxViewport);
  const relativeRem = preferredRelative / baseFontSize;
  const minValueRem = minValue / baseFontSize;
  const maxValueRem = maxValue / baseFontSize;

  return `clamp(${minValueRem}rem, ${relativeRem}rem + ${preferredViewport}vw, ${maxValueRem}rem)`;
}
