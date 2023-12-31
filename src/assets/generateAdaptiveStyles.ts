type AdaptiveProps = {
  property: string;
  startSize: number;
  minSize: number;
  widthFrom?: number;
  widthTo?: number;
  keepSize?: number;
};

export const rem = (px: number): string => {
  return `${px / 16}rem`;
};

export const em = (px: number, current = 16): string => {
  return `${px / current}em`;
};

export const generateAdaptiveStyles = ({
                                         property,
                                         startSize = 16,
                                         minSize,
                                         widthFrom = 1170,
                                         widthTo = 360,
                                         keepSize = 0,
                                       }: AdaptiveProps): string => {
  if (widthFrom === 1170 && widthTo === 0) {
    widthFrom = 1440;
  }

  const widthFromMedia: string = em(widthFrom);
  const widthToMedia: string = em(widthTo);

  const slope: number = (startSize - minSize) / (widthFrom - widthTo);
  const yIntersection: number = -widthTo * slope + minSize;
  const flyValue: string = `${rem(yIntersection)} + ${slope * 100}vw`;

  const propertyValue: string = `clamp(${rem(minSize)}, ${flyValue}, ${rem(startSize)})`;

  let styles = '';

  if (widthFrom === 1140 || widthFrom === 1440 || keepSize === 1 || keepSize === 2) {
    styles += `@media screen and (min-width: ${widthFromMedia}) {
      ${property}: ${rem(startSize)};
    }`;
  }

  styles += `@media screen and (min-width: ${widthToMedia}) and (max-width: ${widthFromMedia}) {
    ${property}: ${propertyValue};
  }`;

  if (widthTo === 360 || keepSize === 1 || keepSize === 3) {
    styles += `@media screen and (max-width: ${widthToMedia}) {
      ${property}: ${rem(minSize)};
    }`;
  }

  return styles;
};
